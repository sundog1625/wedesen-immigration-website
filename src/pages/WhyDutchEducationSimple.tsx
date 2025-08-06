import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle, GraduationCap, Award, Globe, Users, BookOpen, TrendingUp, MapPin, Clock, DollarSign, Star } from "lucide-react";
import { Link } from "react-router-dom";

const WhyDutchEducationSimple = () => {
  const topUniversities = [
    {
      name: "阿姆斯特丹大学",
      nameEn: "University of Amsterdam",
      ranking: "#58",
      strengths: ["社会科学", "传媒学", "心理学", "经济学"],
      logo: "🏛️",
      description: "荷兰最大的综合性研究型大学",
      tuition: "€2,530",
      tuitionNonEU: "€12,010-23,400",
      programs: "200+"
    },
    {
      name: "代尔夫特理工大学",
      nameEn: "Delft University of Technology", 
      ranking: "#47",
      strengths: ["工程技术", "建筑学", "计算机科学", "航空航天"],
      logo: "🔧",
      description: "欧洲顶级理工院校，工科全球排名第3",
      tuition: "€2,530", 
      tuitionNonEU: "€16,705-22,290",
      programs: "150+"
    },
    {
      name: "瓦格宁根大学",
      nameEn: "Wageningen University",
      ranking: "#64", 
      strengths: ["农业科学", "环境学", "食品科学", "生命科学"],
      logo: "🌱",
      description: "农业与生命科学全球排名第1",
      tuition: "€2,530",
      tuitionNonEU: "€17,300-20,600",
      programs: "30+"
    },
    {
      name: "莱顿大学",
      nameEn: "Leiden University",
      ranking: "#109",
      strengths: ["法学", "医学", "人文学", "国际关系"],
      logo: "⚖️",
      description: "荷兰最古老大学，法学院享誉全球",
      tuition: "€2,530",
      tuitionNonEU: "€12,000-18,000",
      programs: "100+"
    },
    {
      name: "乌得勒支大学", 
      nameEn: "Utrecht University",
      ranking: "#109",
      strengths: ["兽医学", "地理学", "教育学", "生物医学"],
      logo: "🔬",
      description: "荷兰最大的研究型大学之一",
      tuition: "€2,530",
      tuitionNonEU: "€13,000-19,000",
      programs: "90+"
    },
    {
      name: "鹿特丹伊拉斯姆斯大学",
      nameEn: "Erasmus University Rotterdam", 
      ranking: "#179",
      strengths: ["商学", "经济学", "管理学", "医学"],
      logo: "💼",
      description: "欧洲顶级商学院，MBA排名全球前20",
      tuition: "€2,530",
      tuitionNonEU: "€14,000-20,000",
      programs: "80+"
    }
  ];

  const studySteps = [
    {
      step: "1",
      title: "学业规划",
      description: "评估背景，制定个性化留学方案",
      duration: "1-2周",
      tasks: ["学术背景评估", "专业匹配分析", "院校选择建议", "时间规划制定"]
    },
    {
      step: "2", 
      title: "申请准备",
      description: "准备申请材料，提升背景实力",
      duration: "2-3个月",
      tasks: ["文书写作指导", "推荐信准备", "语言考试辅导", "作品集制作"]
    },
    {
      step: "3",
      title: "院校申请",
      description: "递交申请，跟踪申请进度",
      duration: "1-2个月", 
      tasks: ["网申系统填写", "材料递交", "申请跟踪", "面试辅导"]
    },
    {
      step: "4",
      title: "签证办理",
      description: "获得录取后办理学生签证",
      duration: "1-2个月",
      tasks: ["签证材料准备", "使馆面试预约", "签证递交", "签证跟踪"]
    },
    {
      step: "5",
      title: "行前准备", 
      description: "完成出国前各项准备工作",
      duration: "1个月",
      tasks: ["住宿安排", "保险购买", "银行开户", "行前指导"]
    }
  ];

  const costs = [
    {
      category: "学费",
      eu: "€2,530/年",
      nonEu: "€12,000-23,400/年", 
      description: "2024-2025学年官方标准"
    },
    {
      category: "生活费",
      eu: "€800-1,200/月",
      nonEu: "€800-1,200/月",
      description: "包含住宿、饮食、交通等"
    },
    {
      category: "住宿费",
      eu: "€400-700/月", 
      nonEu: "€400-700/月",
      description: "学生宿舍或私人住房"
    },
    {
      category: "其他费用",
      eu: "€200-400/月",
      nonEu: "€200-400/月",
      description: "书籍、保险、个人支出"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-background to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2" variant="secondary">
              🎓 留学荷兰专题
            </Badge>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              为什么选择
              <span className="text-primary font-normal block mt-2">留学荷兰？</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              世界顶级教育质量，全英文授课环境
              <br />
              高含金量学历，开启全球职业发展之路
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/consultation?service=欧洲留学服务">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  免费留学规划
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" onClick={() => {
                const universitiesSection = document.getElementById('universities');
                if (universitiesSection) {
                  universitiesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                查看院校排名
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              <div className="text-3xl font-bold text-primary mb-2">2,100+</div>
              <div className="text-sm text-muted-foreground">英语授课项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">毕业生就业率</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="text-primary">八大留学优势</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              荷兰教育以其卓越的学术声誉和创新的教学模式享誉全球
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <Award className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">世界顶级学术声誉</CardTitle>
                <CardDescription>14所大学进入世界前200</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">阿姆斯特丹大学全球#58</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">代尔夫特理工全球工科#3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <Globe className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">全英文授课环境</CardTitle>
                <CardDescription>2100+英语授课项目</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">本科英语项目400+</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">硕士英语项目1700+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">优越就业前景</CardTitle>
                <CardDescription>95%毕业生就业率</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">一年求职签证</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">欧盟境内自由就业</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <DollarSign className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">学费相对较低</CardTitle>
                <CardDescription>欧盟学生仅€2,530/年</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">公立大学学费低</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">奖学金机会多</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <Users className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle className="text-lg">国际化程度高</CardTitle>
                <CardDescription>来自100+国家的学生</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">12%国际学生比例</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">多元文化环境</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <BookOpen className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle className="text-lg">创新教学模式</CardTitle>
                <CardDescription>基于问题的学习方法</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">PBL教学法先驱</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">实践结合理论</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <MapPin className="w-8 h-8 text-teal-600 mb-2" />
                <CardTitle className="text-lg">地理位置优越</CardTitle>
                <CardDescription>欧洲中心，交通便利</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">2小时飞行覆盖欧洲</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">申根区自由通行</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <Clock className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle className="text-lg">学制灵活高效</CardTitle>
                <CardDescription>3年本科，1年硕士</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">学制短节省时间</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">学分制度灵活</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="text-primary">顶级名校荟萃</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              14所大学进入世界前200，提供高含金量学历
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topUniversities.map((university, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{university.logo}</span>
                    <Badge variant="outline" className="text-primary border-primary">
                      {university.ranking}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {university.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {university.nameEn}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {university.description}
                  </p>
                  <div className="space-y-3">
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-xs text-muted-foreground text-center mb-1">欧盟学生学费</div>
                        <div className="text-lg font-semibold text-green-600 text-center">{university.tuition}/年</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-xs text-muted-foreground text-center mb-1">非欧盟学生学费</div>
                        <div className="text-sm font-semibold text-blue-600 text-center">{university.tuitionNonEU}/年</div>
                      </div>
                      <div className="text-center p-2 bg-muted/50 rounded">
                        <div className="text-lg font-semibold text-primary">{university.programs}</div>
                        <div className="text-xs text-muted-foreground">专业项目</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2">优势专业：</div>
                      <div className="flex flex-wrap gap-1">
                        {university.strengths.map((strength, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {strength}
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

      {/* Study Process & Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="process" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="process">留学申请流程</TabsTrigger>
              <TabsTrigger value="costs">费用预算详情</TabsTrigger>
            </TabsList>
            
            <TabsContent value="process" className="mt-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light mb-4">
                  <span className="text-primary">五步申请流程</span>
                </h3>
                <p className="text-muted-foreground">专业团队全程指导，确保申请成功</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {studySteps.map((step, index) => (
                  <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="text-sm">{step.description}</CardDescription>
                      <Badge variant="outline" className="text-xs mx-auto">{step.duration}</Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-center text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="costs" className="mt-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light mb-4">
                  <span className="text-primary">留学费用预算</span>
                </h3>
                <p className="text-muted-foreground">透明的费用结构，合理的留学投资</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {costs.map((cost, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">{cost.category}</CardTitle>
                      <CardDescription className="text-sm">{cost.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <div className="text-sm text-muted-foreground">欧盟学生</div>
                          <div className="text-lg font-bold text-green-600">{cost.eu}</div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm text-muted-foreground">非欧盟学生</div>
                          <div className="text-lg font-bold text-blue-600">{cost.nonEu}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center">
                <h4 className="text-lg font-medium mb-2">💡 省钱小贴士</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div>• 申请荷兰橙色郁金香奖学金</div>
                  <div>• 选择学生宿舍降低住宿成本</div>
                  <div>• 兼职工作补贴生活费用</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              开启你的
              <span className="text-primary font-normal"> 荷兰留学之旅</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              12年专业经验，1000+成功案例，让我们为你打造专属的荷兰留学方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/consultation?service=欧洲留学服务">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  立即咨询留学顾问
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/services/education">
                  查看更多留学服务
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium mb-2">专业团队</h3>
                <p className="text-sm text-muted-foreground">12年荷兰留学申请经验</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium mb-2">成功率高</h3>
                <p className="text-sm text-muted-foreground">98%院校申请成功率</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium mb-2">全程服务</h3>
                <p className="text-sm text-muted-foreground">从申请到入学全程跟进</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyDutchEducationSimple;