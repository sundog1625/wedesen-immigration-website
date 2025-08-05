import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role key
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    // Generate embeddings for all knowledge base entries that don't have them
    const { data: entries, error: fetchError } = await supabase
      .from('knowledge_base')
      .select('id, title, content')
      .is('embedding', null);

    if (fetchError) {
      throw fetchError;
    }

    if (!entries || entries.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No entries need embedding generation' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let processedCount = 0;
    let errorCount = 0;

    for (const entry of entries) {
      try {
        // Combine title and content for embedding
        const textToEmbed = `${entry.title}\n\n${entry.content}`;

        // Generate embedding using OpenAI
        const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            input: textToEmbed,
            model: 'text-embedding-ada-002',
          }),
        });

        if (!embeddingResponse.ok) {
          throw new Error(`OpenAI API error: ${embeddingResponse.statusText}`);
        }

        const embeddingData = await embeddingResponse.json();
        const embedding = embeddingData.data[0].embedding;

        // Update the entry with the embedding
        const { error: updateError } = await supabase
          .from('knowledge_base')
          .update({ embedding })
          .eq('id', entry.id);

        if (updateError) {
          throw updateError;
        }

        processedCount++;
        console.log(`Generated embedding for entry: ${entry.title}`);

        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.error(`Error processing entry ${entry.id}:`, error);
        errorCount++;
      }
    }

    return new Response(
      JSON.stringify({
        message: 'Embedding generation completed',
        processed: processedCount,
        errors: errorCount,
        total: entries.length
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});