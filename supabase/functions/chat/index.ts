import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// 预设的知识库数据
const knowledgeBase = {
  "荷兰移民": {
    "条件": "荷兰移民主要途径包括：1) 高技能移民(Highly Skilled Migrant)，需要雇主担保和最低工资要求；2) 创业移民，需要商业计划书和资金证明；3) 投资移民，需要在荷兰进行符合要求的投资。",
    "流程": "申请流程通常包括：资格评估 → 准备材料 → 递交申请 → 等待审批 → 获得居留许可。整个过程一般需要3-6个月。",
    "费用": "申请费用根据类型不同，从500-2000欧元不等，还需考虑律师费、翻译费等额外成本。"
  },
  "德国移民": {
    "蓝卡": "德国欧盟蓝卡适用于高学历人才，要求本科以上学历，年薪达到58,400欧元（紧缺职业为45,552欧元），工作合同期至少6个月。",
    "投资移民": "德国投资移民要求投资至少25万欧元创办企业，创造就业岗位，并证明投资项目的必要性和盈利能力。",
    "流程": "蓝卡申请流程：找到德国雇主 → 签订工作合同 → 准备学历认证 → 递交签证申请 → 入境德国后申请蓝卡。"
  },
  "意大利移民": {
    "投资移民": "意大利投资移民要求：创新企业投资至少50万欧元，或成熟企业投资至少25万欧元，或慈善捐款至少20万欧元。",
    "购房移民": "意大利没有直接的购房移民政策，但可以通过购房获得长期居留签证，需要证明有足够资金维持生活。",
    "条件": "申请人需要无犯罪记录，购买健康保险，证明经济能力，意大利语基础等。"
  },
  "留学服务": {
    "荷兰留学": "荷兰拥有多所世界知名大学，学费相对较低，英语授课项目丰富。申请需要雅思/托福成绩、学历证明、动机信等。",
    "德国留学": "德国公立大学免学费，教育质量高。需要德语或英语能力证明，学历认证(APS审核)等。",
    "意大利留学": "意大利艺术、设计类专业世界领先。需要意大利语能力证明或英语授课项目的英语成绩。"
  }
};

// 根据用户问题匹配知识库内容
function searchKnowledge(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  for (const [category, content] of Object.entries(knowledgeBase)) {
    if (lowerQuery.includes(category.replace("移民", "").replace("服务", ""))) {
      for (const [subcategory, info] of Object.entries(content)) {
        if (lowerQuery.includes(subcategory) || 
            subcategory === "条件" && (lowerQuery.includes("要求") || lowerQuery.includes("条件")) ||
            subcategory === "流程" && (lowerQuery.includes("流程") || lowerQuery.includes("步骤") || lowerQuery.includes("如何")) ||
            subcategory === "费用" && (lowerQuery.includes("费用") || lowerQuery.includes("价格") || lowerQuery.includes("多少钱"))) {
          return `关于${category}${subcategory}：\n\n${info}\n\n如需了解更多详情或个性化方案，建议您直接联系我们的专业顾问进行深入咨询。`;
        }
      }
      // 如果匹配到类别但没有具体子类别，返回该类别的所有信息
      const allInfo = Object.entries(content).map(([key, value]) => `**${key}**：${value}`).join('\n\n');
      return `关于${category}的详细信息：\n\n${allInfo}\n\n如需了解更多详情或个性化方案，建议您直接联系我们的专业顾问进行深入咨询。`;
    }
  }
  
  return null;
}

// Generate embedding for user query
async function generateQueryEmbedding(query: string): Promise<number[]> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }

  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input: query,
      model: 'text-embedding-ada-002',
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data[0].embedding;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, context } = await req.json();
    
    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);
    
    let relevantContext = '';
    
    // Try to use RAG system if OpenAI API key is available
    if (OPENAI_API_KEY) {
      try {
        // Generate embedding for the user query
        const queryEmbedding = await generateQueryEmbedding(message);
        
        // Search for relevant knowledge base entries
        const { data: searchResults, error: searchError } = await supabase
          .rpc('search_knowledge', {
            query_embedding: queryEmbedding,
            match_threshold: 0.7,
            match_count: 3
          });

        if (!searchError && searchResults && searchResults.length > 0) {
          relevantContext = searchResults
            .map((result: any) => `${result.title}: ${result.content}`)
            .join('\n\n');
        }
      } catch (embeddingError) {
        console.error('Error with embedding search:', embeddingError);
      }
    }
    
    // Fallback to simple keyword matching if no relevant context found
    if (!relevantContext) {
      const knowledgeAnswer = searchKnowledge(message);
      if (knowledgeAnswer) {
        return new Response(
          JSON.stringify({ response: knowledgeAnswer }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200 
          }
        );
      }
    }

    // 如果没有API key，返回默认回复
    if (!OPENAI_API_KEY) {
      const defaultResponse = `感谢您的咨询！关于"${message}"的问题，我建议您直接联系我们的专业顾问获得详细解答。

WEDESEN（德森）核心服务：
• 荷兰、德国、意大利移民咨询
• 留学申请指导  
• 企业注册与商务服务
• 财务税务咨询
• 电商落地支持
• 网站开发服务

联系方式：
📞 热线：13720010295
💬 微信：LydiaFSZ
📧 邮箱：wedeseneu@gmail.com
🕒 工作时间：周一至周五 9:00-18:00

12年专业经验，1000+成功案例，我们的专业团队随时为您提供个性化解决方案！`;

      return new Response(
        JSON.stringify({ response: defaultResponse }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );
    }

    // 使用 OpenAI API 生成回复 with RAG context
    const systemPrompt = `你是WEDESEN(德森)国际商务的专业AI助理。你需要以专业、友好的态度帮助客户了解移民、留学、商务服务等信息。

公司背景：
- WEDESEN专注于欧洲移民服务，主营荷兰、意大利、德国移民
- 提供留学咨询、企业注册、财务税务、电商落地、网站开发等服务
- 拥有10年+专业经验，成功案例1000+

${relevantContext ? `相关信息：\n${relevantContext}\n` : ''}

回答要求：
1. 基于提供的相关信息回答问题，如果信息不足，可以适当补充但要标明
2. 保持专业和友好的语调
3. 提供准确的移民政策信息
4. 如果不确定具体政策，建议客户联系专业顾问
5. 适当推荐相关服务
6. 回答要简洁明了，重点突出

请用中文回答客户问题。`;

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
        max_tokens: 600,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || '抱歉，我暂时无法处理您的问题，请稍后再试。';

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal Server Error',
        response: '抱歉，系统暂时出现问题，请稍后再试或直接联系我们的顾问。' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});