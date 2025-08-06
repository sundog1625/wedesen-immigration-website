import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead, { consultationServiceSchema } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, MessageCircle, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import FormField from "@/components/ui/form-field";
import FormProgress from "@/components/ui/form-progress";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { sendConsultationData, getConsultantByService, type ConsultationData } from "@/lib/consultation";
import { validateForm, validateFieldRealtime, validationRules, getFieldHelpText } from "@/lib/form-validation";
import { useAnalytics } from "@/lib/analytics";

// 智能导航函数
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
    '移民资格评估': '/',
  };
  return serviceRoutes[serviceType] || '/';
};

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

const ConsultationFormEnhanced = () => {
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get('service') || '通用咨询';
  const { toast } = useToast();
  const { trackEvent } = useAnalytics();
  
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
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const formSteps = ['基本信息', '咨询详情', '联系偏好', '提交申请'];
  
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

  // 实时验证和数据更新
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // 实时验证
    if (validationRules[field]) {
      const error = validateFieldRealtime(value, validationRules[field]);
      setErrors(prev => ({
        ...prev,
        [field]: error || ''
      }));
    }

    // 更新当前步骤
    updateCurrentStep(field);
  };

  // 根据填写字段更新当前步骤
  const updateCurrentStep = (field: string) => {
    const fieldToStepMap: { [key: string]: number } = {
      name: 0, phone: 0, email: 0, wechat: 0,
      service: 1, urgency: 1, budget: 1, background: 1, questions: 1,
      contactTime: 2, contactMethod: 2
    };
    
    const step = fieldToStepMap[field];
    if (step !== undefined && step > currentStep) {
      setCurrentStep(step);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    trackEvent('form_submit', 'consultation_form_attempt', { 
      service: serviceType,
      form_completed: Object.values(formData).filter(v => v.trim()).length 
    });
    
    // 完整表单验证
    const formErrors = validateForm(formData, validationRules);
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setCurrentStep(3);
      trackEvent('form_submit', 'consultation_form_validation_failed', { 
        service: serviceType,
        errors: Object.keys(formErrors).length 
      });
      toast({
        title: "请检查表单信息",
        description: "请修正标红的字段后重新提交",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setCurrentStep(3);

    try {
      await sendConsultationData(formData as ConsultationData);
      setIsSubmitted(true);
      trackEvent('form_submit', 'consultation_form_success', { 
        service: serviceType,
        form_data_length: JSON.stringify(formData).length 
      });
      toast({
        title: "咨询提交成功！",
        description: "我们将在24小时内与您联系，请保持电话畅通。",
      });
    } catch (error) {
      console.error('提交失败:', error);
      trackEvent('form_submit', 'consultation_form_error', { 
        service: serviceType,
        error: error instanceof Error ? error.message : 'unknown' 
      });
      toast({
        title: "提交失败",
        description: "请稍后重试或直接联系我们的顾问。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 成功页面
  if (isSubmitted) {
    const consultant = getConsultantByService(formData.service);
    
    return (
      <div className="min-h-screen bg-background">
        <SEOHead 
          title="咨询提交成功 - WEDESEN德森国际商务"
          description="感谢您的咨询，我们将在24小时内与您联系"
        />
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
      <SEOHead 
        title={`${serviceType}咨询申请 - WEDESEN德森国际商务`}
        description="填写详细咨询信息，我们的专业顾问将为您量身定制解决方案"
        structuredData={consultationServiceSchema}
      />
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

            {/* 进度指示器 */}
            <FormProgress 
              steps={formSteps} 
              currentStep={currentStep} 
              completedSteps={[]} 
            />

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
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-primary">基本信息</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            label="姓名"
                            name="name"
                            value={formData.name}
                            onChange={(value) => handleInputChange('name', value)}
                            placeholder="请输入您的姓名"
                            required
                            error={errors.name}
                            success={!errors.name && formData.name.length > 0}
                            helpText={getFieldHelpText('name')}
                          />
                          <FormField
                            label="手机号"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(value) => handleInputChange('phone', value)}
                            placeholder="请输入手机号"
                            required
                            error={errors.phone}
                            success={!errors.phone && formData.phone.length > 0}
                            helpText={getFieldHelpText('phone')}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            label="邮箱"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(value) => handleInputChange('email', value)}
                            placeholder="请输入邮箱地址"
                            required
                            error={errors.email}
                            success={!errors.email && formData.email.length > 0}
                            helpText={getFieldHelpText('email')}
                          />
                          <FormField
                            label="微信号"
                            name="wechat"
                            value={formData.wechat}
                            onChange={(value) => handleInputChange('wechat', value)}
                            placeholder="请输入微信号"
                            error={errors.wechat}
                            success={!errors.wechat && formData.wechat.length > 0}
                            helpText={getFieldHelpText('wechat')}
                          />
                        </div>
                      </div>

                      {/* 服务选择 */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-primary">咨询服务</h3>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            咨询服务 <span className="text-red-500">*</span>
                          </label>
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
                      </div>

                      {/* 详细需求 */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-primary">详细需求</h3>
                        <FormField
                          label="具体咨询问题"
                          name="questions"
                          type="textarea"
                          value={formData.questions}
                          onChange={(value) => handleInputChange('questions', value)}
                          placeholder="请详细描述您的需求、问题或疑虑"
                          required
                          error={errors.questions}
                          success={!errors.questions && formData.questions.length >= 10}
                          helpText={getFieldHelpText('questions')}
                          rows={4}
                          maxLength={500}
                        />
                        
                        <FormField
                          label="个人背景"
                          name="background"
                          type="textarea"
                          value={formData.background}
                          onChange={(value) => handleInputChange('background', value)}
                          placeholder="请简述您的教育背景、工作经历、家庭情况等（选填）"
                          error={errors.background}
                          helpText={getFieldHelpText('background')}
                          rows={3}
                          maxLength={300}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <LoadingSpinner size="sm" text="提交中..." />
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

export default ConsultationFormEnhanced;