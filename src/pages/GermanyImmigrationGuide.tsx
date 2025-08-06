import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, Clock, Euro, FileText, Users, AlertTriangle,
  GraduationCap, Briefcase, Home, Heart, Shield, Award
} from "lucide-react";
import { Link } from "react-router-dom";

const GermanyImmigrationGuide = () => {
  const immigrationTypes = [
    {
      title: "德国蓝卡 (EU Blue Card)",
      description: "面向高技能人才的欧盟蓝卡项目",
      requirements: [
        "大学本科以上学历",
        "获得德国工作offer",
        "年薪€58,400以上",
        "相关工作经验"
      ],
      minSalary: "€58,400",
      duration: "4年",
      icon: <Award className="w-8 h-8 text-blue-600" />
    },
    {
      title: "德国投资移民",
      description: "通过投资德国企业获得居留权",
      requirements: [
        "投资€25万以上",
        "创造就业机会",
        "可行性商业计划",
        "管理经验证明"
      ],
      minSalary: "€250,000",
      duration: "3年",
      icon: <Euro className="w-8 h-8 text-green-600" />
    },
    {
      title: "德国技术工人移民",
      description: "针对技术工人的移民通道",
      requirements: [
        "职业技能认证",
        "德语B1水平",
        "获得工作合同",
        "相关工作经验"
      ],
      minSalary: "€45,000",
      duration: "4年",
      icon: <Briefcase className="w-8 h-8 text-purple-600" />
    }
  ];

  const benefits = [
    {
      title: "欧盟最大经济体",
      description: "稳定的经济环境和就业机会",
      icon: <Euro className="w-6 h-6 text-blue-600" />
    },
    {
      title: "免费教育医疗",
      description: "完善的社会保障体系",
      icon: <Heart className="w-6 h-6 text-red-600" />
    },
    {
      title: "欧盟通行",
      description: "德国护照可自由通行欧盟",
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      title: "高质量教育",
      description: "世界一流的教育资源",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />
    }
  ];

  const germanyImmigrationSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "德国移民完整指南",
    "description": "德国蓝卡、投资移民、技术移民申请条件流程详解",
    "image": "https://wedeseneu.com/germany-immigration-guide.jpg",
    "totalTime": "P18M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "评估德国移民资格",
        "text": "根据学历、工作经验选择蓝卡或其他移民方式"
      },
      {
        "@type": "HowToStep",
        "name": "学习德语",
        "text": "达到B1或B2德语水平要求"
      },
      {
        "@type": "HowToStep",
        "name": "寻找德国工作",
        "text": "获得德国雇主的工作offer"
      },
      {
        "@type": "HowToStep",
        "name": "申请德国签证",
        "text": "递交蓝卡或工作签证申请"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="2025年德国移民指南 - 蓝卡申请条件流程费用 | WEDESEN德森移民"
        description="德国移民最新攻略：EU蓝卡申请条件€58400、技术移民、投资移民详解。德语要求、申请流程、成功率分析。WEDESEN德森专业德国移民服务。"
        keywords={["德国移民", "德国蓝卡", "EU Blue Card", "德国投资移民", "德国技术移民", "德国签证", "德国居留许可", "德国移民条件", "德语要求", "WEDESEN德森"]}
        url="https://wedeseneu.com/germany-immigration-guide"
        structuredData={germanyImmigrationSchema}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-red-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-100 text-red-800">2025年最新政策</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              德国移民完整指南
              <span className="block text-red-600 mt-2">欧盟蓝卡申请攻略</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              德国蓝卡年薪€58,400起，技术移民、投资移民多种选择。WEDESEN德森专业移民顾问，助您快速移民德国，享受欧盟福利。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <Link to="/consultation?service=德国移民咨询">
                  免费德国移民评估
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                蓝卡条件自测
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 德国移民优势 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              为什么选择移民德国？
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 移民类型对比 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              德国移民方式对比
            </h2>
            <p className="text-xl text-gray-600">
              选择最适合你的德国移民路径
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {immigrationTypes.map((type, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">最低薪资</span>
                      <span className="font-semibold text-green-600">{type.minSalary}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">居留期限</span>
                      <span className="font-semibold">{type.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">申请条件：</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 德国蓝卡详解 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                德国蓝卡申请详解
              </h2>
              <p className="text-xl text-gray-600">
                欧盟蓝卡是德国移民的黄金通道
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-blue-600" />
                    <span>蓝卡申请条件</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">学历要求</div>
                        <div className="text-sm text-gray-600">大学本科以上学历，需通过德国学历认证</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">工作offer</div>
                        <div className="text-sm text-gray-600">获得德国雇主的正式工作合同</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">薪资标准</div>
                        <div className="text-sm text-gray-600">年薪€58,400以上（紧缺职业€45,552）</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">语言要求</div>
                        <div className="text-sm text-gray-600">德语A1或英语流利（部分岗位）</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-green-600" />
                    <span>蓝卡申请流程</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                      <div>
                        <div className="font-semibold">学历认证</div>
                        <div className="text-sm text-gray-600">3-6个月</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                      <div>
                        <div className="font-semibold">求职准备</div>
                        <div className="text-sm text-gray-600">2-6个月</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                      <div>
                        <div className="font-semibold">签证申请</div>
                        <div className="text-sm text-gray-600">1-3个月</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                      <div>
                        <div className="font-semibold">登陆德国</div>
                        <div className="text-sm text-gray-600">获批后即可</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              开启您的德国移民之路
            </h2>
            <p className="text-xl mb-8 opacity-90">
              WEDESEN德森专业德国移民顾问，熟悉蓝卡申请流程，成功率高达95%
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div>蓝卡成功案例</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div>申请成功率</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6个月</div>
                <div>平均获批时间</div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
              <Link to="/consultation?service=德国移民咨询">
                立即咨询德国移民
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GermanyImmigrationGuide;