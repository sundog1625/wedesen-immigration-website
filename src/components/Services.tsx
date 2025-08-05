import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  GraduationCap, 
  Building, 
  Calculator, 
  ShoppingCart, 
  Globe,
  Users,
  FileText,
  Briefcase
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "移民服务",
      description: "荷兰、意大利、德国移民咨询与办理",
      features: ["投资移民", "技术移民", "家庭团聚", "永居申请"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "留学服务",
      description: "欧洲名校申请与留学规划",
      features: ["院校申请", "签证办理", "语言培训", "住宿安排"],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Users,
      title: "咨询顾问",
      description: "专业移民与商务咨询服务",
      features: ["政策解读", "方案定制", "风险评估", "流程指导"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Building,
      title: "公司注册",
      description: "欧洲公司设立与企业服务",
      features: ["公司注册", "银行开户", "商标注册", "许可申请"],
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Calculator,
      title: "财务税务",
      description: "专业财务管理与税务筹划",
      features: ["记账报税", "税务筹划", "财务审计", "合规咨询"],
      color: "bg-red-50 text-red-600"
    },
    {
      icon: ShoppingCart,
      title: "电商服务",
      description: "跨境电商与本地化运营",
      features: ["平台入驻", "运营推广", "供应链管理", "本地化服务"],
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: Globe,
      title: "网站开发",
      description: "专业网站设计与开发服务",
      features: ["网站设计", "系统开发", "SEO优化", "维护更新"],
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: Briefcase,
      title: "商务代理",
      description: "全方位商务代理与支持服务",
      features: ["文件代办", "翻译认证", "商务洽谈", "项目管理"],
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-md text-sm font-medium tracking-wider mb-4">
            WEDESEN · 核心服务
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            <span className="font-normal">全方位</span>
            <span className="text-primary block mt-2">商务解决方案</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            深耕欧洲市场12年，从移民规划到商务落地，为您提供一站式专业服务，
            <br className="hidden md:block" />
            让您的欧洲事业发展之路更加从容稳健
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    咨询客服
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;