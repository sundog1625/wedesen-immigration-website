import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { sendConsultationData, type ConsultationData } from "@/lib/consultation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    wechat: '',
    service: '',
    urgency: '',
    budget: '',
    background: '',
    questions: '',
    contactTime: '',
    contactMethod: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "热线电话",
      content: "13720010295",
      subtitle: "中文服务｜即时响应",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Mail,
      title: "邮件联系",
      content: "wedeseneu@gmail.com",
      subtitle: "专业团队｜24小时内回复",
      color: "bg-accent/20 text-accent"
    },
    {
      icon: MessageCircle,
      title: "微信咨询",
      content: "LydiaFSZ",
      subtitle: "一对一专属顾问",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: MapPin,
      title: "服务范围",
      content: "荷兰｜德国｜意大利",
      subtitle: "欧洲三国移民专家",
      color: "bg-blue-50 text-blue-600"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 基本验证
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "请填写必填信息",
        description: "姓名、电话和邮箱为必填项",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 使用现有的咨询数据发送服务
      await sendConsultationData({
        ...formData,
        questions: formData.questions || `咨询服务：${formData.service}`, // 如果没有详细需求，使用服务类型
      } as ConsultationData);

      toast({
        title: "咨询提交成功！",
        description: "我们将在24小时内与您联系，请保持电话畅通。",
      });

      // 清空表单
      setFormData({
        name: '',
        phone: '',
        email: '',
        wechat: '',
        service: '',
        urgency: '',
        budget: '',
        background: '',
        questions: '',
        contactTime: '',
        contactMethod: ''
      });
    } catch (error) {
      console.error('提交失败:', error);
      toast({
        title: "提交失败",
        description: "请稍后重试或直接联系我们的顾问。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-md text-sm font-medium tracking-wider mb-4">
            WEDESEN · 联系我们
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            <span className="font-normal">开启咨询</span>
            <span className="text-primary block mt-2">成就梦想</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            准备开始您的欧洲之旅？我们的专业团队随时为您提供个性化咨询服务，
            <br className="hidden md:block" />
            助您在移民、留学、商务发展的道路上行稳致远
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">联系方式</h3>
              
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg ${info.color} flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-foreground font-medium mb-1">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gray-600" />
                    </div>
                    <span>营业时间</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">周一至周五</span>
                    <span className="text-foreground">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">周六</span>
                    <span className="text-foreground">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">周日</span>
                    <span className="text-foreground">预约服务</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">在线咨询</CardTitle>
                <p className="text-muted-foreground">
                  请填写以下信息，我们将在24小时内与您取得联系
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        姓名 *
                      </label>
                      <Input 
                        placeholder="请输入您的姓名"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        电话 *
                      </label>
                      <Input 
                        placeholder="请输入您的联系电话"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      邮箱 *
                    </label>
                    <Input 
                      placeholder="请输入您的邮箱地址" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      咨询服务
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                    >
                      <option value="">请选择您感兴趣的服务</option>
                      <option value="荷兰移民服务">荷兰移民服务</option>
                      <option value="德国移民服务">德国移民服务</option>
                      <option value="意大利移民服务">意大利移民服务</option>
                      <option value="欧洲留学服务">欧洲留学服务</option>
                      <option value="公司注册服务">公司注册服务</option>
                      <option value="财务税务服务">财务税务服务</option>
                      <option value="电商服务">电商服务</option>
                      <option value="网站开发服务">网站开发服务</option>
                      <option value="商务代理服务">商务代理服务</option>
                      <option value="其他咨询">其他咨询</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      详细需求
                    </label>
                    <Textarea 
                      placeholder="请详细描述您的需求和问题，我们会为您提供专业的解决方案"
                      rows={4}
                      value={formData.questions}
                      onChange={(e) => handleInputChange('questions', e.target.value)}
                    />
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        提交咨询
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    我们承诺保护您的隐私信息，仅用于服务咨询目的
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;