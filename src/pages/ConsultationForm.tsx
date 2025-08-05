import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, MessageCircle, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { sendConsultationData, getConsultantByService, type ConsultationData } from "@/lib/consultation";

// 根据服务类型获取返回链接
const getBackLink = (serviceType: string): string => {
  const serviceRoutes: { [key: string]: string } = {
    '荷兰移民服务': '/services/immigration',
    '德国移民服务': '/services/immigration', 
    '意大利移民服务': '/services/immigration',
    '欧洲留学服务': '/services/education',
    '公司注册服务': '/services/registration',
    '财务税务服务': '/services/finance',
    '电商服务': '/services/ecommerce',
    '网站开发服务': '/services/development',
    '商务代理服务': '/services/business',
    '移民资格评估': '/', // 来自首页的免费评估
  };
  
  return serviceRoutes[serviceType] || '/';
};

// 根据服务类型获取返回文本
const getBackText = (serviceType: string): string => {
  const serviceRoutes: { [key: string]: string } = {
    '荷兰移民服务': '返回移民服务',
    '德国移民服务': '返回移民服务', 
    '意大利移民服务': '返回移民服务',
    '欧洲留学服务': '返回留学服务',
    '公司注册服务': '返回公司注册',
    '财务税务服务': '返回财务税务',
    '电商服务': '返回电商服务',
    '网站开发服务': '返回网站开发',
    '商务代理服务': '返回商务代理',
    '移民资格评估': '返回首页',
  };
  
  return serviceRoutes[serviceType] || '返回首页';
};

const ConsultationForm = () => {
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get('service') || '通用咨询';
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    wechat: '',
    service: serviceType,
    urgency: '',
    budget: '',
    background: '',
    questions: '',
    contactTime: '',
    contactMethod: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    '移民资格评估',
    '荷兰移民服务',
    '德国移民服务', 
    '意大利移民服务',
    '欧洲留学服务',
    '公司注册服务',
    '财务税务服务',
    '电商服务',
    '网站开发服务',
    '商务代理服务',
    '其他咨询'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 使用专业的咨询数据发送服务
      await sendConsultationData(formData as ConsultationData);
      
      setIsSubmitted(true);
      toast({
        title: "咨询提交成功！",
        description: "我们将在24小时内与您联系，请保持电话畅通。",
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

  if (isSubmitted) {
    const consultant = getConsultantByService(formData.service);
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-light mb-4">咨询提交成功！</h1>
              <p className="text-muted-foreground mb-8">
                感谢您的咨询，我们已收到您的信息。专业顾问将在24小时内与您联系，请保持电话畅通。
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">接下来的步骤：</h3>
                <div className="space-y-3 text-sm text-muted-foreground text-left">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-primary/20 text-primary rounded-full text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                    专业顾问审核您的咨询需求
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-primary/20 text-primary rounded-full text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                    通过您提供的联系方式与您沟通
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-primary/20 text-primary rounded-full text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                    为您制定个性化解决方案
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    返回首页
                  </Link>
                </Button>
                <Button variant="secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  咨询{consultant.name}：{consultant.phone}
                </Button>
                <Button variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  微信：{consultant.wechat}
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to={getBackLink(serviceType)}
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {getBackText(serviceType)}
            </Link>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-light mb-4">
                <span className="text-primary">专业咨询</span>申请
              </h1>
              <p className="text-lg text-muted-foreground">
                请填写详细信息，我们的专业顾问将为您量身定制解决方案
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 表单区域 */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>咨询信息</CardTitle>
                    <CardDescription>
                      请如实填写以下信息，这将帮助我们更好地为您服务
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* 基本信息 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">姓名 *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="请输入您的姓名"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">手机号 *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="请输入手机号"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">邮箱</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="请输入邮箱地址"
                          />
                        </div>
                        <div>
                          <Label htmlFor="wechat">微信号</Label>
                          <Input
                            id="wechat"
                            value={formData.wechat}
                            onChange={(e) => handleInputChange('wechat', e.target.value)}
                            placeholder="请输入微信号"
                          />
                        </div>
                      </div>

                      {/* 咨询服务 */}
                      <div>
                        <Label htmlFor="service">咨询服务 *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleInputChange('service', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="请选择咨询服务类型" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* 紧急程度和预算 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="urgency">紧急程度</Label>
                          <Select
                            value={formData.urgency}
                            onValueChange={(value) => handleInputChange('urgency', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="请选择紧急程度" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">非常紧急（1周内）</SelectItem>
                              <SelectItem value="normal">一般紧急（1个月内）</SelectItem>
                              <SelectItem value="flexible">时间灵活（3个月内）</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="budget">预算范围</Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) => handleInputChange('budget', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="请选择预算范围" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">5万元以下</SelectItem>
                              <SelectItem value="medium">5-20万元</SelectItem>
                              <SelectItem value="high">20-50万元</SelectItem>
                              <SelectItem value="premium">50万元以上</SelectItem>
                              <SelectItem value="discuss">面议</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* 个人背景 */}
                      <div>
                        <Label htmlFor="background">个人背景</Label>
                        <Textarea
                          id="background"
                          value={formData.background}
                          onChange={(e) => handleInputChange('background', e.target.value)}
                          placeholder="请简述您的教育背景、工作经历、家庭情况等（选填）"
                          rows={3}
                        />
                      </div>

                      {/* 具体问题 */}
                      <div>
                        <Label htmlFor="questions">具体咨询问题 *</Label>
                        <Textarea
                          id="questions"
                          value={formData.questions}
                          onChange={(e) => handleInputChange('questions', e.target.value)}
                          placeholder="请详细描述您的咨询问题、需求或疑虑"
                          rows={4}
                          required
                        />
                      </div>

                      {/* 联系偏好 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contactTime">方便联系时间</Label>
                          <Select
                            value={formData.contactTime}
                            onValueChange={(value) => handleInputChange('contactTime', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="请选择方便联系的时间" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">上午 (9:00-12:00)</SelectItem>
                              <SelectItem value="afternoon">下午 (14:00-18:00)</SelectItem>
                              <SelectItem value="evening">晚上 (18:00-21:00)</SelectItem>
                              <SelectItem value="anytime">任何时间</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="contactMethod">首选联系方式</Label>
                          <Select
                            value={formData.contactMethod}
                            onValueChange={(value) => handleInputChange('contactMethod', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="请选择首选联系方式" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="phone">电话</SelectItem>
                              <SelectItem value="wechat">微信</SelectItem>
                              <SelectItem value="email">邮箱</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            提交中...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            提交咨询申请
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* 侧边栏信息 */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">联系我们</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">咨询热线</p>
                        <p className="text-sm text-muted-foreground">13720010295</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">微信咨询</p>
                        <p className="text-sm text-muted-foreground">
                          移民项目：LydiaFSZ<br />
                          其他项目：s438468137
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">服务承诺</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        24小时内专业顾问联系
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        免费资格评估和方案制定
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        严格保护客户隐私信息
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                        12年专业经验，值得信赖
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationForm;