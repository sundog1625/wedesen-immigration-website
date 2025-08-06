import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle, Heart, Shield, GraduationCap, Home, Briefcase, Users, Clock, Star, Euro, Baby, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const WhyDutchImmigrationSimple = () => {
  const welfareData = [
    {
      category: "儿童津贴",
      icon: Baby,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      benefits: [
        { age: "0-5岁", amount: "€281.69", period: "每季度", annual: "€1,126.76/年" },
        { age: "6-11岁", amount: "€342.05", period: "每季度", annual: "€1,368.20/年" },
        { age: "12-17岁", amount: "€402.41", period: "每季度", annual: "€1,609.64/年" }
      ],
      description: "2024年最新标准，按季度发放至18岁"
    },
    {
      category: "医疗保险",
      icon: Shield,
      color: "text-green-600", 
      bgColor: "bg-green-50",
      benefits: [
        { item: "保险费用", amount: "€50-100/月", desc: "成人保费" },
        { item: "儿童保险", amount: "免费", desc: "18岁以下全免" },
        { item: "医疗覆盖", amount: "100%", desc: "住院医疗全免" },
        { item: "家庭医生", amount: "免费", desc: "基础医疗服务" }
      ],
      description: "强制性健康保险，全民医疗覆盖"
    },
    {
      category: "养老保险",
      icon: UserCheck,
      color: "text-blue-600",
      bgColor: "bg-blue-50", 
      benefits: [
        { item: "AOW基础养老金", amount: "17.90%", desc: "工资扣除比例" },
        { item: "退休年龄", amount: "65岁", desc: "法定退休年龄" },
        { item: "目标收入", amount: "70%", desc: "最后收入比例" },
        { item: "居住要求", amount: "满额", desc: "居住50年获得" }
      ],
      description: "国家基础养老金制度，与收入无关"
    },
    {
      category: "失业救济",
      icon: Briefcase,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      benefits: [
        { item: "救济比例", amount: "70%", desc: "原工资的70%" },
        { item: "最长期限", amount: "38个月", desc: "根据工作年限" },
        { item: "申请条件", amount: "26周", desc: "过去36周工作" },
        { item: "配偶福利", amount: "适用", desc: "家庭收入保障" }
      ],
      description: "完善的失业保障制度，确保生活无忧"
    }
  ];

  const educationBenefits = [
    { stage: "义务教育", age: "4-18岁", cost: "完全免费", subsidy: "政府全额承担", extra: "免费校餐、交通" },
    { stage: "高等教育", age: "18-27岁", cost: "€2,530/年", subsidy: "€4,500/年", extra: "免费公共交通" },
    { stage: "成人教育", age: "成年人", cost: "大幅减免", subsidy: "政府补贴", extra: "职业培训支持" }
  ];

  const qualityOfLife = [
    { metric: "全球幸福指数", rank: "#5", year: "2024年" },
    { metric: "人均寿命", value: "82.3岁", rank: "欧洲前三" },
    { metric: "英语普及率", value: "95%", rank: "全球第一" },
    { metric: "工作时长", value: "29小时/周", rank: "欧洲最短" },
    { metric: "带薪假期", value: "25天/年", rank: "法定最低" },
    { metric: "犯罪率", rank: "全球第16低", year: "2024年" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2" variant="secondary">
              🇳🇱 移民荷兰专题
            </Badge>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              为什么选择
              <span className="text-primary font-normal block mt-2">移民荷兰？</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              享受世界顶级福利制度，体验欧洲高品质生活
              <br />
              从摇篮到坟墓的全方位社会保障体系
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/consultation?service=荷兰移民服务">
                  <Heart className="w-5 h-5 mr-2" />
                  免费评估移民资格
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" onClick={() => {
                const welfareSection = document.getElementById('welfare-details');
                if (welfareSection) {
                  welfareSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                查看福利详情
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality of Life Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light mb-4">生活品质指标</h2>
            <p className="text-muted-foreground">荷兰在多项国际生活质量排名中名列前茅</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {qualityOfLife.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {item.rank || item.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium mb-1">
                    {item.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.year || item.rank}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Welfare Benefits */}
      <section id="welfare-details" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="text-primary">详细福利制度</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              基于2024年官方数据的完整福利体系详解
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {welfareData.map((welfare, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 ${welfare.bgColor}`}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 ${welfare.bgColor} rounded-lg group-hover:scale-110 transition-transform`}>
                      <welfare.icon className={`w-8 h-8 ${welfare.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {welfare.category}
                      </CardTitle>
                      <CardDescription className="text-sm mt-2">
                        {welfare.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {welfare.benefits.map((benefit, idx) => (
                      <div key={idx} className="p-3 bg-white/70 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-foreground">
                            {benefit.age || benefit.item}
                          </span>
                          <span className={`font-bold ${welfare.color}`}>
                            {benefit.amount}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {benefit.period || benefit.desc}
                          {benefit.annual && (
                            <span className="ml-2 text-primary">({benefit.annual})</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="text-primary">教育福利体系</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从幼儿园到大学的全程教育支持
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationBenefits.map((edu, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{edu.stage}</CardTitle>
                  <CardDescription>{edu.age}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">学费成本</div>
                    <div className="text-lg font-bold text-green-600">{edu.cost}</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">政府补贴</div>
                    <div className="text-lg font-bold text-blue-600">{edu.subsidy}</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">额外福利</div>
                    <div className="text-sm font-medium text-purple-600">{edu.extra}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Immigration Path */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="text-primary">移民路径选择</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              多种途径实现荷兰移民梦想
            </p>
          </div>
          
          <Tabs defaultValue="investment" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="investment">投资移民</TabsTrigger>
              <TabsTrigger value="skilled">技术移民</TabsTrigger>
              <TabsTrigger value="family">家庭团聚</TabsTrigger>
            </TabsList>
            
            <TabsContent value="investment" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Euro className="w-6 h-6 text-primary" />
                    <span>投资移民方案</span>
                  </CardTitle>
                  <CardDescription>通过投资荷兰企业实现快速移民</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">申请条件</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>投资额不低于€125万欧元</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>创造至少5个就业岗位</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>无犯罪记录证明</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>通过投资计划审核</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">项目优势</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>审批周期相对较快</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>一人申请全家移民</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>5年后可申请永居</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>享受欧盟自由通行</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="skilled" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <span>技术移民方案</span>
                  </CardTitle>
                  <CardDescription>高技能工作者快速通道</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">申请要求</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>获得荷兰雇主Job Offer</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>薪资达到技术移民标准</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>学历或工作经验认证</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>英语或荷兰语能力</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">热门职业</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>IT与软件工程师</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>医疗健康专业</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>工程技术人员</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>金融与商务分析</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="family" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-primary" />
                    <span>家庭团聚方案</span>
                  </CardTitle>
                  <CardDescription>与荷兰居民或公民团聚</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">适用人群</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>荷兰公民或永居者配偶</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>未成年子女</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>需要照顾的父母</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>同性伴侣关系</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">申请要求</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>关系证明文件</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>收入证明（担保方）</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>基础荷兰语考试</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>健康检查和保险</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              <span className="text-primary font-normal"> 荷兰移民之旅</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              12年专业经验，1000+成功案例，让我们为你定制专属的荷兰移民方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/consultation?service=荷兰移民服务">
                  <Heart className="w-5 h-5 mr-2" />
                  立即咨询移民顾问
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/services/immigration">
                  查看更多移民服务
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
                <p className="text-sm text-muted-foreground">12年荷兰移民申请经验</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium mb-2">成功率高</h3>
                <p className="text-sm text-muted-foreground">98%移民申请成功率</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium mb-2">全程服务</h3>
                <p className="text-sm text-muted-foreground">从申请到落地全程跟进</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyDutchImmigrationSimple;