import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User, Trash2, Lightbulb } from "lucide-react";
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
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto scroll to bottom when new messages
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // 输入建议功能
  useEffect(() => {
    if (inputValue.length > 1) {
      const matchedSuggestions: string[] = [];
      Object.entries(suggestionsByKeyword).forEach(([keyword, suggestions]) => {
        if (inputValue.toLowerCase().includes(keyword)) {
          matchedSuggestions.push(...suggestions.slice(0, 3));
        }
      });
      setSuggestions([...new Set(matchedSuggestions)].slice(0, 4));
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  // 保存聊天历史到本地存储
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('wedesen-chat-history', JSON.stringify(messages));
    }
  }, [messages]);

  // 加载聊天历史
  useEffect(() => {
    const savedHistory = localStorage.getItem('wedesen-chat-history');
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        if (parsedHistory.length > 1) {
          setMessages(parsedHistory);
        }
      } catch (error) {
        console.error('Failed to load chat history:', error);
      }
    }
  }, []);

  const quickQuestions = [
    "荷兰移民条件",
    "德国蓝卡申请", 
    "意大利投资移民",
    "留学咨询服务",
    "企业注册流程",
    "税务规划建议",
    "电商落地服务",
    "移民费用估算"
  ];

  const suggestionsByKeyword = {
    "移民": ["移民条件", "申请流程", "所需时间", "费用预算"],
    "留学": ["申请条件", "学校推荐", "专业选择", "费用明细"],
    "商务": ["企业注册", "税务规划", "财务咨询", "电商服务"],
    "荷兰": ["高技能移民", "投资移民", "创业移民", "居留卡申请"],
    "德国": ["蓝卡申请", "投资移民", "语言要求", "工作签证"],
    "意大利": ["投资移民", "购房居留", "家庭团聚", "学生签证"]
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    // 更新对话上下文（保留最近3轮对话）
    setConversationContext(prev => {
      const newContext = [...prev, inputValue];
      return newContext.slice(-6); // 保留最近3轮（用户+助手各3条）
    });
    setInputValue("");
    setSuggestions([]);
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
      
      // 更智能的后备响应，考虑上下文
      let fallbackContent = "";
      const query = inputValue.toLowerCase();
      const contextQuery = conversationContext.join(' ').toLowerCase() + ' ' + query;
      
      // 更精准的关键词匹配和上下文理解
      if (contextQuery.includes('荷兰') || query.includes('荷兰')) {
        if (query.includes('条件') || query.includes('要求')) {
          fallbackContent = "🇳🇱 荷兰移民条件详解：\n\n• **高技能移民**：本科以上学历，年薪≥56,000欧元\n• **创业移民**：投资金额≥25万欧元\n• **投资移民**：符合要求的商业投资\n• **家庭团聚**：配偶/子女签证\n\n联系专业顾问获取个性化评估：📞 13720010295";
        } else if (query.includes('流程') || query.includes('步骤')) {
          fallbackContent = "📋 荷兰移民申请流程：\n\n1️⃣ 资格评估与方案设计\n2️⃣ 准备申请材料\n3️⃣ 递交申请文件\n4️⃣ 等待审批结果\n5️⃣ 获得居留许可\n\n整个周期通常为3-6个月。微信咨询：LydiaFSZ";
        } else {
          fallbackContent = "🇳🇱 荷兰移民服务：我们提供高技能移民、投资移民、创业移民等多种方案。具体条件和申请流程请联系我们的专业顾问详细咨询。\n\n联系方式：📞 13720010295 | 💬 微信：LydiaFSZ";
        }
      } else if (contextQuery.includes('德国') || query.includes('德国')) {
        if (query.includes('蓝卡')) {
          fallbackContent = "🇩🇪 德国欧盟蓝卡申请指南：\n\n• **学历要求**：本科以上学历\n• **工资标准**：年薪≥58,400欧元（紧缺职业45,552欧元）\n• **工作合同**：至少6个月期限\n• **语言要求**：德语或英语 B1-B2水平\n\n3年后可申请永久居留权。联系顾问：📞 13720010295";
        } else {
          fallbackContent = "🇩🇪 德国移民服务：我们提供欧盟蓝卡、投资移民等专业服务。德国移民政策相对友好，具体申请条件请联系顾问获得个性化方案。\n\n联系方式：📞 13720010295 | 💬 微信：LydiaFSZ";
        }
      } else if (contextQuery.includes('意大利') || query.includes('意大利')) {
        fallbackContent = "🇮🇹 意大利移民服务：我们提供投资移民、居留签证等服务。意大利生活环境优美，具体要求和费用请联系专业顾问详细了解。\n\n联系方式：📞 13720010295 | 💬 微信：LydiaFSZ";
      } else if (query.includes('留学')) {
        fallbackContent = "🎓 欧洲留学服务：\n\n• **荷兰留学**：英语授课项目丰富，学费相对较低\n• **德国留学**：公立大学免学费，教育质量高\n• **意大利留学**：艺术、设计专业世界领先\n\n提供专业选择、院校申请、签证办理一条龙服务。微信：LydiaFSZ";
      } else if (query.includes('企业') || query.includes('注册')) {
        fallbackContent = "🏢 企业注册服务：\n\n• 荷兰、德国、意大利公司注册\n• 账户开设与银行服务\n• 税务策划与申报\n• 商标注册与知识产权\n\n专业团队提供一对一服务。联系顾问：📞 13720010295";
      } else if (query.includes('费用') || query.includes('价格') || query.includes('多少钱')) {
        fallbackContent = "💰 关于服务费用：\n\n我们会根据您的具体情况制定个性化方案。不同国家和项目的费用差异较大，包括：\n\n• 政府费用\n• 律师费用\n• 翻译认证费\n• 咨询服务费\n\n请联系专业顾问获得详细报价：📞 13720010295";
      } else if (query.includes('电商')) {
        fallbackContent = "🛍️ 欧洲电商落地服务：\n\n• 平台选择与注册\n• 产品上架与优化\n• 海外仓储与物流\n• VAT税务申报\n• 品牌推广与营销\n\n帮助中国商家在欧洲站稳脚跟。联系：📞 13720010295";
      } else if (query.includes('网站') || query.includes('开发')) {
        fallbackContent = "💻 网站开发服务：\n\n• 企业官网设计开发\n• 电商平台搭建\n• 多语言网站制作\n• SEO优化与推广\n• 网站维护与更新\n\n符合欧美用户体验的现代化设计。微信：LydiaFSZ";
      } else {
        fallbackContent = "🌟 感谢咨询WEDESEN！我们专注欧洲服务12年，累计3000+成功案例。\n\n🌍 **核心服务**：\n• 🇳🇱 荷兰移民：高技能、投资、创业移民\n• 🇩🇪 德国移民：欧盟蓝卡、企业家签证\n• 🇮🇹 意大利移民：投资移民、居留签证\n• 🎓 留学服务：欧洲名校申请指导\n• 🏢 商务服务：企业注册、财务税务\n• 🛍️ 电商落地服务\n• 💻 网站开发服务\n\n📞 **联系方式**：13720010295\n💬 **微信**：LydiaFSZ\n🕒 **工作时间**：周一至周五 9:00-18:00";
      }
      
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fallbackContent + "\n\n如需详细咨询和个性化方案，请联系专业顾问。",
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, fallbackMessage]);
      // 更新对话上下文
      setConversationContext(prev => {
        const newContext = [...prev, fallbackMessage.content];
        return newContext.slice(-6);
      });
    } finally {
      setIsLoading(false);
    }
  };

  // 清除聊天历史
  const clearChatHistory = () => {
    const initialMessage = {
      id: "1",
      content: "您好！我是WEDESEN的智能助理。我可以帮您了解移民政策、留学信息、商务服务等。请问有什么可以帮助您的？",
      role: "assistant",
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
    setConversationContext([]);
    localStorage.removeItem('wedesen-chat-history');
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
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
                <p className="text-xs text-white/80">
                  {isLoading ? "正在思考..." : "在线中"} 
                  {messages.length > 1 && (
                    <span className="ml-1">(已对话{Math.floor((messages.length - 1) / 2)}轮)</span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={clearChatHistory}
                className="text-white hover:bg-white/20"
                title="清除聊天历史"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
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

          {/* 输入建议 */}
          {suggestions.length > 0 && (
            <div className="px-4 py-2 border-t bg-muted/30">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">建议问题</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs px-2 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

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
              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="输入您的问题..."
                  disabled={isLoading}
                  className="pr-12"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
                {inputValue.length > 0 && (
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                    {inputValue.length}/500
                  </div>
                )}
              </div>
              <Button 
                type="submit" 
                disabled={isLoading || !inputValue.trim() || inputValue.length > 500}
                title="发送 (Enter)"
              >
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