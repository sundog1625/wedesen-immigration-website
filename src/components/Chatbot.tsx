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
          // 确保timestamp是Date对象
          const fixedHistory = parsedHistory.map((message: any) => ({
            ...message,
            timestamp: new Date(message.timestamp)
          }));
          setMessages(fixedHistory);
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
        if (query.includes('蓝卡') || query.includes('欧盟蓝卡')) {
          fallbackContent = "🇳🇱 荷兰欧盟蓝卡（门槛最低）：\n\n✅ **申请条件**：\n• 大专以上学历（3年全日制）\n• 年薪€58,670以上\n• 无雇主资质要求\n• 无严格居住要求\n\n🎯 **优势**：\n• 一次获得4年居留许可\n• 5年可转永居和入籍\n• 享受与欧盟公民同等福利\n\n📞 咨询顾问：13720010295";
        } else if (query.includes('优才') || query.includes('优才计划')) {
          fallbackContent = "🇳🇱 荷兰优才计划（最快移民）：\n\n✅ **申请条件**：\n• 无语言、学历、资产要求\n• 年龄18-55周岁\n• 无犯罪记录即可\n\n⚡ **优势**：\n• 3-6个月快速获批\n• 一人申请全家移民\n• 享受30%工资税减免\n• 零首付购房购车\n\n💬 微信咨询：LydiaFSZ";
        } else if (query.includes('条件') || query.includes('要求')) {
          fallbackContent = "🇳🇱 荷兰移民条件对比：\n\n💙 **欧盟蓝卡**（门槛低）：\n• 大专学历，年薪€58,670\n• 无雇主资质要求\n\n⚡ **优才计划**（无门槛）：\n• 无语言学历要求\n• 3-6个月获批\n\n🏆 **高技能移民**：\n• 本科学历，年薪€56,000\n\n📞 专业评估：13720010295";
        } else if (query.includes('流程') || query.includes('步骤') || query.includes('怎么办')) {
          fallbackContent = "📋 荷兰移民申请流程：\n\n1️⃣ 免费资格评估\n2️⃣ 选择最适合的移民方案\n3️⃣ 准备申请材料\n4️⃣ 递交移民申请\n5️⃣ 获得居留许可\n\n⏰ 时间周期：\n• 优才计划：3-6个月\n• 欧盟蓝卡：3-6个月\n• 高技能移民：3-6个月\n\n💬 微信咨询：LydiaFSZ";
        } else {
          fallbackContent = "🇳🇱 荷兰移民服务（3种方案）：\n\n💙 **欧盟蓝卡**：大专学历即可，门槛最低\n⚡ **优才计划**：无任何要求，最快获批\n🏆 **高技能移民**：传统方案，稳定可靠\n\n🎯 荷兰优势：30%税收减免、零首付购房、全球医疗保险\n\n📞 13720010295 | 💬 LydiaFSZ";
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
        if (query.includes('条件') || query.includes('要求')) {
          fallbackContent = "🎓 欧洲留学申请条件：\n\n🇳🇱 **荷兰留学**：\n• 雅思6.5+或托福80+\n• GPA 3.0以上\n• 学费相对较低\n\n🇩🇪 **德国留学**：\n• APS审核 + 德语TestDaF 4级\n• 公立大学免学费\n\n🇮🇹 **意大利留学**：\n• 意大利语B1+ 或英语雅思6.0+\n• 艺术设计专业世界领先\n\n💬 微信：LydiaFSZ";
        } else {
          fallbackContent = "🎓 欧洲留学服务：\n\n• **荷兰留学**：英语授课丰富，学费低\n• **德国留学**：公立大学免费，质量高\n• **意大利留学**：艺术设计世界领先\n\n🎯 服务包括：院校申请、签证办理、语言培训、住宿安排\n\n💬 微信咨询：LydiaFSZ";
        }
      } else if (query.includes('公司') || query.includes('注册') || query.includes('企业')) {
        fallbackContent = "🏢 欧洲公司注册服务：\n\n🇳🇱 **荷兰**：€1起注册，税收优惠\n🇩🇪 **德国**：€25,000起，欧洲中心\n🇮🇹 **意大利**：€1起注册，手续简化\n\n📋 **服务包括**：\n• 公司注册 + 银行开户\n• 税务登记 + 商标注册\n• 许可申请 + 后续维护\n\n📞 一对一服务：13720010295";
      } else if (query.includes('费用') || query.includes('价格') || query.includes('多少钱') || query.includes('报价')) {
        fallbackContent = "💰 服务费用说明：\n\n❗ **重要提醒**：我们不在聊天中提供具体报价\n\n💡 **费用因素**：\n• 不同国家政策不同\n• 个人条件影响方案\n• 服务内容决定价格\n• 政府费用 + 服务费用\n\n🎯 **获取报价方式**：\n• 免费咨询评估\n• 量身定制方案\n• 透明费用明细\n\n📞 专业顾问：13720010295";
      } else if (query.includes('电商') || query.includes('bol')) {
        fallbackContent = "🛍️ 欧洲电商服务：\n\n📦 **bol.com荷兰**：\n• 专业选品 + 代发货\n• 荷兰最大电商平台\n\n🏪 **亚马逊欧洲**：\n• 多站点运营\n• 广告推广优化\n\n🌐 **独立站建设**：\n• 品牌官网搭建\n• SEO推广营销\n\n📋 **全程服务**：选品→运营→发货→客服\n\n📞 电商专家：13720010295";
      } else if (query.includes('网站') || query.includes('开发')) {
        fallbackContent = "💻 网站开发服务：\n\n🎨 **设计开发**：\n• 企业官网 + 电商平台\n• 符合欧美用户习惯\n• 响应式设计\n\n🌍 **技术特色**：\n• React/Vue前端技术\n• 多语言国际化\n• SEO优化内置\n\n⚡ **开发周期**：\n• 企业官网：6-12周\n• 电商平台：8-16周\n\n💬 技术咨询：LydiaFSZ";
      } else if (query.includes('展会') || query.includes('搭建')) {
        fallbackContent = "🏢 展会搭建服务：\n\n🎨 **专业服务**：\n• 展位设计 + 现场搭建\n• 汉诺威工业展、法兰克福展\n• 展会期间现场管理\n\n✨ **成功案例**：\n• 300平米展位获最佳设计奖\n• 客户签约订单超500万欧元\n\n⏰ **服务周期**：展会前4-6周开始\n💰 **服务费用**：€3,000起\n\n📞 展会专家：13720010295";
      } else if (query.includes('地陪') || query.includes('翻译') || query.includes('陪同')) {
        fallbackContent = "🗺️ 地陪翻译服务：\n\n👥 **专业团队**：\n• 欧洲主要城市地陪网络\n• 多语言专业翻译\n• 商务接待 + 城市向导\n\n🎯 **服务内容**：\n• 全程陪同翻译\n• 商务洽谈支持\n• 突发情况处理\n\n⏰ **预约时间**：提前1-2周\n💰 **服务费用**：€300/天起\n\n💬 微信预约：LydiaFSZ";
      } else if (query.includes('财务') || query.includes('税务') || query.includes('记账') || query.includes('VAT')) {
        fallbackContent = "💼 财务税务服务：\n\n📊 **记账报税**：\n• 月度财务处理\n• 季度税务申报\n• 年度财务审计\n\n🏦 **税务筹划**：\n• 合理降低税负15-30%\n• 跨国税务结构设计\n• VAT注册申报退税\n\n💰 **服务费用**：\n• 记账报税：€300/月起\n• VAT申报：€150/期起\n\n📞 财务专家：13720010295";
      } else if (query.includes('咨询') || query.includes('顾问') || query.includes('评估')) {
        fallbackContent = "👥 专业咨询顾问：\n\n🎯 **咨询服务**：\n• 免费移民资格评估\n• 个性化方案定制\n• 政策解读分析\n• 风险评估指导\n\n💼 **商务咨询**：\n• 投资项目评估\n• 市场分析调研\n• 法律合规咨询\n• 项目管理服务\n\n⏰ **响应时间**：24小时内回复\n🆓 **初步咨询**：完全免费\n\n📞 专业顾问：13720010295";
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
                      {message.timestamp instanceof Date 
                        ? message.timestamp.toLocaleTimeString("zh-CN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : new Date(message.timestamp).toLocaleTimeString("zh-CN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                      }
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