import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, Shield, GraduationCap, Plane, Home, Users, 
  Euro, Globe, Briefcase, Baby, Hospital, TreePine,
  Award, Clock, CheckCircle, ArrowRight, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAnalytics } from "@/lib/analytics";

const WhyDutchImmigration = () => {
  const { trackEvent } = useAnalytics();

  const handleConsultationClick = () => {
    trackEvent('click', 'dutch_immigration_consultation', { page: 'why-dutch-immigration' });
  };

  const benefits = [
    {
      icon: <Euro className="w-8 h-8 text-primary" />,
      title: "世界顶级社会福利",
      description: "完善的社会保障体系，从出生到养老全覆盖",
      details: [
        "失业救济金高达70%工资",
        "全民医疗保险制度",
        "儿童津贴每月最高€293",
        "住房补贴最高€372/月",
        "养老金替代率70%+"
      ]
    },
    {
      icon: <Hospital className="w-8 h-8 text-primary" />,
      title: "优质医疗保健",
      description: "世界领先的医疗体系，人均寿命欧洲前三",
      details: [
        "全民医保覆盖率100%",
        "家庭医生制度完善",
        "专科医疗技术先进",
        "药品价格政府管控",
        "预防医学体系完整"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "免费优质教育",
      description: "从幼儿园到大学免费教育，教育质量全球领先",
      details: [
        "义务教育完全免费",
        "大学学费仅€2,314/年",
        "教育质量全球排名前10",
        "多语言教学环境",
        "国际化程度极高"
      ]
    },
    {
      icon: <Baby className="w-8 h-8 text-primary" />,
      title: "完善的家庭支持",
      description: "从怀孕到育儿的全方位支持政策",
      details: [
        "产假16周全薪",
        "育儿假可共享70%薪资",
        "免费产检和分娩",
        "儿童疫苗完全免费",
        "托儿所政府补贴"
      ]
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "住房保障制度",
      description: "政府提供多种住房支持，确保居者有其屋",
      details: [
        "社会住房比例40%+",
        "首次购房者优惠政策",
        "租金管制保护租客",
        "住房补贴覆盖面广",
        "房屋质量标准严格"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "优越的工作环境",
      description: "平衡工作与生活，员工权益保护完善",
      details: [
        "平均工作时间29小时/周",
        "年假最少20天起步",
        "弹性工作制普及",
        "同工同酬法律保护",
        "职场歧视零容忍"
      ]
    }
  ];

  const livingAdvantages = [
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "国际化程度高",
      description: "95%荷兰人讲英语，多元文化融合"
    },
    {
      icon: <TreePine className="w-6 h-6 text-primary" />,
      title: "环境质量优越",
      description: "空气质量欧洲前列，绿化覆盖率高"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "社会安全稳定",
      description: "犯罪率极低，社会治安良好"
    },
    {
      icon: <Plane className="w-6 h-6 text-primary" />,
      title: "地理位置优越",
      description: "欧洲门户，3小时内到达欧洲主要城市"
    }
  ];

  const migrationPaths = [
    {
      title: "高技能移民",
      subtitle: "Highly Skilled Migrant",
      description: "适合技术人才和管理人员",
      requirements: ["年薪€40,000+", "大学学历", "雇主担保"],
      duration: "3-6个月",
      success: "98%",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "投资移民",
      subtitle: "荷兰王国投资计划",
      description: "通过投资获得居留权",
      requirements: ["投资€125万", "创造就业", "商业计划"],
      duration: "6-12个月",
      success: "95%",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "欧盟蓝卡",
      subtitle: "EU Blue Card",
      description: "欧盟内自由流动",
      requirements: ["年薪€56,000+", "本科学历", "工作合同"],
      duration: "4-8个月",
      success: "92%",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="为什么选择移民荷兰？享受世界顶级福利制度 - WEDESEN德森国际"
        description="荷兰移民优势详解：世界顶级社会福利、免费教育医疗、优越工作环境。专业移民顾问为您定制荷兰移民方案，享受欧洲高品质生活。"
        keywords="荷兰移民,荷兰福利,荷兰社会保障,荷兰教育,荷兰医疗,欧洲移民,荷兰居留权"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              🇳🇱 荷兰王国移民指南
            </Badge>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              为什么选择
              <span className="text-primary font-normal block mt-2">移民荷兰？</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              享受世界顶级福利制度，体验欧洲高品质生活
              <br />
              从社会保障到教育医疗，荷兰为您和家人提供全方位保障
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/consultation?service=荷兰移民服务" onClick={handleConsultationClick}>
                  免费评估移民资格
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/services/immigration">
                  了解移民方案
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">#3</div>
              <div className="text-sm text-muted-foreground">全球幸福指数排名</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">82.3</div>
              <div className="text-sm text-muted-foreground">人均寿命（岁）</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">英语普及率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">€293</div>
              <div className="text-sm text-muted-foreground">每月儿童津贴</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="text-primary">六大核心优势</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              荷兰以其完善的社会福利制度闻名世界，为居民提供从出生到养老的全方位保障
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {benefit.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Living Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary">生活品质优势</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {livingAdvantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6 border-0 bg-gradient-to-br from-white to-muted/20">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {advantage.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Paths */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary">主要移民途径</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              多种移民方案，总有一种适合您的情况
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {migrationPaths.map((path, index) => (
              <Card key={index} className={`relative ${path.color} border-2`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{path.subtitle}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      <span className="text-sm font-semibold">{path.success}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">申请条件：</h4>
                      <div className="space-y-1">
                        {path.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>周期：{path.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4 text-primary" />
                        <span>成功率：{path.success}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-4">
              开启您的
              <span className="text-primary font-normal">荷兰新生活</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              专业移民顾问为您量身定制移民方案，让您和家人享受荷兰的优质生活
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/consultation?service=荷兰移民服务" onClick={handleConsultationClick}>
                  <Users className="w-5 h-5 mr-2" />
                  预约专业咨询
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/services/immigration">
                  查看移民服务
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyDutchImmigration;