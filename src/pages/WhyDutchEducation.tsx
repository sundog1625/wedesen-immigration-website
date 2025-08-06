import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, Trophy, Globe, Users, BookOpen, Building2, 
  Lightbulb, Award, Star, CheckCircle, ArrowRight, TrendingUp,
  MapPin, Calendar, Euro, Briefcase, Languages, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAnalytics } from "@/lib/analytics";

const WhyDutchEducation = () => {
  const { trackEvent } = useAnalytics();

  const handleConsultationClick = () => {
    trackEvent('click', 'dutch_education_consultation', { page: 'why-dutch-education' });
  };

  const academicAdvantages = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "世界顶级学术声誉",
      description: "荷兰教育体系享誉全球，学历含金量极高",
      details: [
        "14所大学进入世界前200",
        "阿姆斯特丹大学全球排名#58",
        "代尔夫特理工全球工科排名#3",
        "鹿特丹商学院全球商科前10",
        "瓦格宁根大学农业科学全球#1"
      ]
    },
    {
      icon: <Languages className="w-8 h-8 text-primary" />,
      title: "全英文授课环境",
      description: "超过2000个英语授课项目，无需荷兰语基础",
      details: [
        "本科英语项目400+个",
        "硕士英语项目1600+个",
        "95%荷兰人流利英语",
        "国际化程度全球第2",
        "多语言学习环境"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "创新教育模式",
      description: "注重实践与创新，培养全球竞争力人才",
      details: [
        "问题导向学习(PBL)",
        "产学研深度合作",
        "创业孵化项目丰富",
        "国际交换机会多",
        "跨学科课程设置"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "优势专业全球领先",
      description: "多个专业领域处于世界前列",
      details: [
        "工程技术全球第4",
        "农业科学全球第1",
        "商科管理全球前10",
        "艺术设计全球前5",
        "环境科学全球第2"
      ]
    },
    {
      icon: <Euro className="w-8 h-8 text-primary" />,
      title: "高性价比留学",
      description: "相比英美，学费合理，生活成本可控",
      details: [
        "欧盟学生学费€2,314/年",
        "非欧盟学生€8,000-20,000/年",
        "生活费约€800-1,200/月",
        "丰富的奖学金项目",
        "允许合法打工20小时/周"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "优越就业前景",
      description: "毕业后就业机会丰富，职业发展广阔",
      details: [
        "就业率高达95%+",
        "一年求职签证政策",
        "欧盟境内自由就业",
        "起薪欧洲平均水平以上",
        "职业发展空间大"
      ]
    }
  ];

  const topUniversities = [
    {
      name: "阿姆斯特丹大学",
      rank: "#58",
      specialty: "社会科学、传媒学",
      description: "荷兰最大综合性大学",
      highlight: "全球排名前60"
    },
    {
      name: "代尔夫特理工大学",
      rank: "#47",
      specialty: "工程技术、建筑学",
      description: "欧洲顶级理工院校",
      highlight: "工科全球第3"
    },
    {
      name: "莱顿大学",
      rank: "#69",
      specialty: "法学、医学、人文",
      description: "荷兰最古老大学",
      highlight: "法学全球第25"
    },
    {
      name: "乌得勒支大学",
      rank: "#75",
      specialty: "兽医学、地理学",
      description: "研究实力雄厚",
      highlight: "兽医学全球第1"
    },
    {
      name: "瓦格宁根大学",
      rank: "#64",
      specialty: "农业科学、环境学",
      description: "农业科学全球领袖",
      highlight: "农业全球第1"
    },
    {
      name: "鹿特丹伊拉斯姆斯大学",
      rank: "#153",
      specialty: "商科、经济学",
      description: "欧洲顶级商学院",
      highlight: "商科全球前10"
    }
  ];

  const studyPrograms = [
    {
      level: "本科课程",
      duration: "3年",
      tuition: "€2,314-12,000",
      features: ["400+英语项目", "实践导向", "国际化程度高"],
      popular: ["商科", "工程", "社会科学", "艺术设计"]
    },
    {
      level: "硕士课程", 
      duration: "1-2年",
      tuition: "€8,000-20,000",
      features: ["1600+英语项目", "研究型/应用型", "产业合作"],
      popular: ["MBA", "工程硕士", "数据科学", "可持续发展"]
    },
    {
      level: "博士课程",
      duration: "4年",
      tuition: "有薪博士",
      features: ["全薪资待遇", "研究导向", "国际合作"],
      popular: ["STEM", "社会科学", "医学", "农业科学"]
    }
  ];

  const careerAdvantages = [
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "高就业率",
      stat: "95%+",
      description: "毕业生就业率欧洲领先"
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "全球认可度",
      stat: "全球通用",
      description: "学历全球雇主认可"
    },
    {
      icon: <Euro className="w-6 h-6 text-primary" />,
      title: "起薪水平",
      stat: "€35,000+",
      description: "毕业生平均起薪"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "工作机会",
      stat: "欧盟通行",
      description: "欧盟境内自由就业"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="为什么选择荷兰留学？世界顶级教育与学历含金量 - WEDESEN德森国际"
        description="荷兰留学优势全解析：世界排名前列大学、全英文授课、高学历含金量、优越就业前景。专业留学顾问为您量身定制荷兰求学方案。"
        keywords="荷兰留学,荷兰大学排名,荷兰教育,英语授课,留学荷兰,荷兰学历,欧洲留学,荷兰签证"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              🎓 荷兰教育指南
            </Badge>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              为什么选择
              <span className="text-primary font-normal block mt-2">荷兰留学？</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              世界顶级教育质量，全英文授课环境
              <br />
              高含金量学历，开启全球职业发展之路
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/consultation?service=欧洲留学服务" onClick={handleConsultationClick}>
                  免费留学规划
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/services/education">
                  了解留学方案
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
              <div className="text-3xl font-bold text-primary mb-2">#4</div>
              <div className="text-sm text-muted-foreground">全球教育质量排名</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">14所</div>
              <div className="text-sm text-muted-foreground">世界前200强大学</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2000+</div>
              <div className="text-sm text-muted-foreground">英语授课项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">毕业生就业率</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Advantages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="text-primary">六大学术优势</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              荷兰教育以其卓越的学术声誉和创新的教学模式享誉全球
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicAdvantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {advantage.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{advantage.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {advantage.details.map((detail, detailIndex) => (
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

      {/* Top Universities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary">顶级名校荟萃</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              多所世界排名前列大学，提供高含金量学历
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topUniversities.map((university, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="bg-primary">
                    {university.rank}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg pr-16">{university.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {university.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{university.description}</p>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-medium text-primary">{university.highlight}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary">学习项目选择</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              从本科到博士，丰富的英语授课项目等您选择
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studyPrograms.map((program, index) => (
              <Card key={index} className="relative bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{program.level}</CardTitle>
                    <Badge variant="secondary">{program.duration}</Badge>
                  </div>
                  <CardDescription className="text-lg font-medium text-primary">
                    {program.tuition}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">项目特色：</h4>
                      <div className="space-y-1">
                        {program.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">热门专业：</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.popular.map((subject, subjectIndex) => (
                          <Badge key={subjectIndex} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary">就业竞争优势</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              荷兰学历助您开启全球职业发展之路
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerAdvantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6 border-0 bg-gradient-to-br from-white to-muted/20">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {advantage.icon}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{advantage.stat}</div>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary">成功案例</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">张同学</h3>
                  <p className="text-sm text-muted-foreground">代尔夫特理工大学 - 土木工程硕士</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "毕业后直接进入荷兰皇家海事工程公司工作，年薪45,000欧元。荷兰的工程教育质量确实是世界一流的。"
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">李同学</h3>
                  <p className="text-sm text-muted-foreground">阿姆斯特丹大学 - 国际商务硕士</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "学校的国际化程度很高，同学来自世界各地。毕业后在联合利华欧洲总部担任市场分析师。"
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">王同学</h3>
                  <p className="text-sm text-muted-foreground">瓦格宁根大学 - 食品科学博士</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "在读期间获得多项研究奖励，博士毕业后成功申请到荷兰科研院所的研究员职位。"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-4">
              开启您的
              <span className="text-primary font-normal">荷兰求学之路</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              专业留学顾问为您量身定制留学方案，助您获得世界顶级教育资源
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/consultation?service=欧洲留学服务" onClick={handleConsultationClick}>
                  <BookOpen className="w-5 h-5 mr-2" />
                  制定留学规划
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/services/education">
                  查看教育服务
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

export default WhyDutchEducation;