import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Plane, 
  GraduationCap, 
  Building, 
  Calculator, 
  ShoppingCart, 
  Globe,
  Users,
  FileText,
  Briefcase,
  Heart,
  Award,
  ArrowRight,
  Star,
  TrendingUp
} from "lucide-react";
import { useAnalytics } from "@/lib/analytics";

const Services = () => {
  const { trackEvent } = useAnalytics();

  const handleDutchAdvantageClick = (type: string) => {
    trackEvent('click', `dutch_advantage_${type}`, { from: 'services_section' });
  };

  const services = [
    {
      icon: Plane,
      title: "移民服务",
      description: "荷兰、意大利、德国移民咨询与办理",
      features: ["投资移民", "技术移民", "家庭团聚", "永居申请"],
      color: "bg-blue-50 text-blue-600",
      path: "/services/immigration"
    },
    {
      icon: GraduationCap,
      title: "留学服务",
      description: "欧洲名校申请与留学规划",
      features: ["院校申请", "签证办理", "语言培训", "住宿安排"],
      color: "bg-green-50 text-green-600",
      path: "/services/education"
    },
    {
      icon: Users,
      title: "咨询顾问",
      description: "专业移民与商务咨询服务",
      features: ["政策解读", "方案定制", "风险评估", "流程指导"],
      color: "bg-purple-50 text-purple-600",
      path: "/services/consulting"
    },
    {
      icon: Building,
      title: "公司注册",
      description: "欧洲公司设立与企业服务",
      features: ["公司注册", "银行开户", "商标注册", "许可申请"],
      color: "bg-orange-50 text-orange-600",
      path: "/services/registration"
    },
    {
      icon: Calculator,
      title: "财务税务",
      description: "专业财务管理与税务筹划",
      features: ["记账报税", "税务筹划", "财务审计", "合规咨询"],
      color: "bg-red-50 text-red-600",
      path: "/services/finance"
    },
    {
      icon: ShoppingCart,
      title: "电商服务",
      description: "跨境电商与本地化运营",
      features: ["平台入驻", "运营推广", "供应链管理", "本地化服务"],
      color: "bg-indigo-50 text-indigo-600",
      path: "/services/ecommerce"
    },
    {
      icon: Globe,
      title: "网站开发",
      description: "专业网站设计与开发服务",
      features: ["网站设计", "系统开发", "SEO优化", "维护更新"],
      color: "bg-teal-50 text-teal-600",
      path: "/services/development"
    },
    {
      icon: Briefcase,
      title: "商务代理",
      description: "全方位商务代理与支持服务",
      features: ["文件代办", "翻译认证", "商务洽谈", "项目管理"],
      color: "bg-yellow-50 text-yellow-600",
      path: "/services/business"
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

        {/* 荷兰优势重点推荐区域 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-base px-6 py-2" variant="secondary">
              🇳🇱 荷兰专题
            </Badge>
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              为什么选择
              <span className="text-primary font-normal"> 荷兰？</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              深度解析荷兰移民与留学的核心优势
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 移民优势 */}
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/10 transition-colors duration-300"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                      荷兰移民优势
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      世界顶级福利制度 · 高品质生活保障
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="text-sm font-semibold text-primary">推荐</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">#3</div>
                    <div className="text-xs text-muted-foreground">全球幸福指数</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">€293</div>
                    <div className="text-xs text-muted-foreground">月儿童津贴</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">医保覆盖</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">免费</div>
                    <div className="text-xs text-muted-foreground">义务教育</div>
                  </div>
                </div>
                <Button 
                  asChild 
                  className="w-full group/btn hover:scale-105 transition-transform"
                  onClick={() => handleDutchAdvantageClick('immigration')}
                >
                  <Link to="/why-dutch-immigration">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    深度了解移民优势
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* 留学优势 */}
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-green-200 hover:border-green-400">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent group-hover:from-green-100 transition-colors duration-300"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground group-hover:text-green-700 transition-colors">
                      荷兰留学优势
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      世界顶级教育质量 · 高含金量学历
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-green-600 fill-green-600" />
                    <span className="text-sm font-semibold text-green-600">热门</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/70 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">#4</div>
                    <div className="text-xs text-muted-foreground">全球教育质量</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">14所</div>
                    <div className="text-xs text-muted-foreground">世界前200大学</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2000+</div>
                    <div className="text-xs text-muted-foreground">英语授课项目</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-muted-foreground">毕业生就业率</div>
                  </div>
                </div>
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full group/btn hover:scale-105 transition-transform border-green-200 hover:border-green-400 hover:bg-green-50"
                  onClick={() => handleDutchAdvantageClick('education')}
                >
                  <Link to="/why-dutch-education">
                    <Award className="w-4 h-4 mr-2" />
                    深度了解留学优势
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
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
                  <Link to={service.path}>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      查看详情
                    </Button>
                  </Link>
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