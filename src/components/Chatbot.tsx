import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "您好！我是WEDESEN的智能助理。我可以帮您了解移民政策、留学信息、商务服务等。请问有什么可以帮助您的？",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto scroll to bottom when new messages
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const quickQuestions = [
    "荷兰移民条件",
    "德国蓝卡申请",
    "意大利投资移民",
    "留学咨询服务",
  ];

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Call Supabase Edge Function for AI response
      const { data, error } = await supabase.functions.invoke("chat", {
        body: {
          message: inputValue,
          context: "immigration_consultant",
        },
      });

      if (error) throw error;

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "抱歉，我暂时无法回答您的问题。请稍后再试或直接联系我们的顾问。",
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      
      // Intelligent fallback based on user input
      let fallbackContent = "";
      const query = inputValue.toLowerCase();
      
      if (query.includes('荷兰')) {
        fallbackContent = "荷兰移民服务：我们提供高技能移民、投资移民、创业移民等多种方案。具体条件和申请流程请联系我们的专业顾问详细咨询。\n\n联系方式：📞 13720010295 | 💬 微信：LydiaFSZ";
      } else if (query.includes('德国')) {
        fallbackContent = "德国移民服务：我们提供欧盟蓝卡、投资移民等专业服务。德国移民政策相对友好，具体申请条件请联系顾问获得个性化方案。\n\n联系方式：📞 13720010295 | 💬 微信：LydiaFSZ";
      } else if (query.includes('意大利')) {
        fallbackContent = "意大利移民服务：我们提供投资移民、居留签证等服务。意大利生活环境优美，具体要求和费用请联系专业顾问详细了解。\n\n联系方式：📞 13720010295 | 💬 微信：LydiaFSZ";
      } else if (query.includes('费用') || query.includes('价格') || query.includes('多少钱')) {
        fallbackContent = "关于服务费用，我们会根据您的具体情况制定个性化方案。不同国家和项目的费用差异较大，请联系我们的专业顾问获得详细报价和咨询。\n\n联系方式：📞 13720010295 | 💬 微信：LydiaFSZ";
      } else {
        fallbackContent = "感谢咨询WEDESEN！我们专注欧洲移民服务12年，累计3000+成功案例。\n\n🌍 主营服务：\n• 荷兰移民：高技能移民、投资移民\n• 德国移民：欧盟蓝卡、企业家签证\n• 意大利移民：投资移民、居留签证\n• 留学服务：欧洲名校申请指导\n• 商务服务：企业注册、财务税务\n\n📞 联系方式：13720010295\n💬 微信：LydiaFSZ\n🕒 工作时间：周一至周五 9:00-18:00";
      }
      
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fallbackContent + "\n\n如需详细咨询和个性化方案，请联系专业顾问。",
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary-glow shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[600px] flex flex-col shadow-2xl z-50 border-border/50 backdrop-blur-sm bg-background/95">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-primary-glow text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">WEDESEN智能助理</h3>
                <p className="text-xs text-white/80">在线中</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea 
            className="flex-1 p-4 space-y-4" 
            ref={scrollAreaRef}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user"
                        ? "bg-primary text-white"
                        : "bg-muted"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.role === "user"
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.role === "user"
                          ? "text-white/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString("zh-CN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Bot className="h-4 w-4 animate-pulse" />
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>

          {/* Quick Questions */}
          <div className="px-4 py-2 border-t">
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs px-3 py-1 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex space-x-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="输入您的问题..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !inputValue.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;