import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, Clock, Euro, FileText, Users, AlertTriangle,
  GraduationCap, Briefcase, Home, Heart, Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const NetherlandsImmigrationGuide = () => {
  const immigrationTypes = [
    {
      title: "荷兰技术移民 (HSM)",
      description: "高技能移民签证，适合有工作offer的专业人士",
      requirements: [
        "获得荷兰雇主工作offer",
        "雇主具有HSM担保资质",
        "薪资符合最低标准",
        "学历符合要求"
      ],
      minSalary: "€38,961",
      duration: "5年",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />
    },
    {
      title: "荷兰投资移民",
      description: "通过投资荷兰企业获得居留权",
      requirements: [
        "投资金额€125万起",
        "创造就业机会",
        "商业计划书审批",
        "资金来源证明"
      ],
      minSalary: "€1,250,000",
      duration: "5年",
      icon: <Euro className="w-8 h-8 text-green-600" />
    },
    {
      title: "荷兰创业移民",
      description: "创新型企业家移民项目",
      requirements: [
        "创新商业理念",
        "获得政府认可",
        "足够启动资金",
        "商业导师支持"
      ],
      minSalary: "€15,000",
      duration: "1+2年",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />
    }
  ];

  const timeline = [
    {
      phase: "准备阶段",
      duration: "1-3个月",
      tasks: [
        "评估移民资格",
        "选择移民类型",
        "准备申请材料",
        "寻找雇主/投资项目"
      ]
    },
    {
      phase: "申请阶段", 
      duration: "3-6个月",
      tasks: [
        "递交居留许可申请",
        "等待审批结果",
        "补充材料（如需要）",
        "获得居留许可"
      ]
    },
    {
      phase: "登陆阶段",
      duration: "1-2个月", 
      tasks: [
        "预订机票登陆荷兰",
        "申请BSN社会保险号",
        "开设银行账户",
        "安排住房和保险"
      ]
    },
    {
      phase: "定居阶段",
      duration: "3-6个月",
      tasks: [
        "子女教育安排",
        "融入荷兰社会",
        "学习荷兰语",
        "申请永居准备"
      ]
    }
  ];

  const dutchImmigrationGuideSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "荷兰移民完整指南",
    "description": "详细的荷兰移民申请流程、条件要求和注意事项指南",
    "image": "https://wedeseneu.com/netherlands-immigration-guide.jpg",
    "totalTime": "P12M",
    "supply": [
      "护照和身份证明",
      "学历证明文件",
      "工作经历证明",
      "资金证明",
      "健康证明"
    ],
    "tool": [
      "荷兰移民局IND系统",
      "专业移民顾问",
      "法律文件翻译服务"
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "评估移民资格",
        "text": "根据个人条件选择最适合的荷兰移民类型"
      },
      {
        "@type": "HowToStep", 
        "name": "准备申请材料",
        "text": "收集并准备所有必需的申请文件和证明材料"
      },
      {
        "@type": "HowToStep",
        "name": "递交申请",
        "text": "通过IND系统递交荷兰居留许可申请"
      },
      {
        "@type": "HowToStep",
        "name": "等待审批",
        "text": "等待荷兰移民局审批结果，通常需要3-6个月"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="2025年荷兰移民完整指南 - HSM技术移民申请流程条件 | WEDESEN德森"
        description="荷兰移民最新政策指南：HSM技术移民、投资移民、创业移民申请条件、流程、费用详解。WEDESEN德森专业移民顾问，12年经验，成功率高。"
        keywords={["荷兰移民指南", "荷兰HSM", "荷兰技术移民", "荷兰投资移民", "荷兰移民条件", "荷兰移民流程", "荷兰居留许可", "IND申请", "荷兰移民政策", "WEDESEN德森"]}
        url="https://wedeseneu.com/netherlands-immigration-guide"
        structuredData={dutchImmigrationGuideSchema}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800">2025年最新政策</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              荷兰移民完整指南
              <span className="block text-blue-600 mt-2">专业移民顾问12年经验分享</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              从HSM技术移民到投资移民，详解荷兰移民申请条件、流程、时间、费用。WEDESEN德森移民专家一对一咨询，助您顺利移民荷兰。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/consultation?service=荷兰移民咨询">
                  免费移民评估
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                下载移民指南
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 移民类型对比 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              荷兰移民类型对比
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解不同荷兰移民方式的申请条件、投资要求和获批时间
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
                      <span className="text-sm text-gray-500">最低要求</span>
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

      {/* 申请流程时间线 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              荷兰移民申请流程
            </h2>
            <p className="text-xl text-gray-600">
              完整的荷兰移民申请时间线，从准备到定居
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((phase, index) => (
                <Card key={index} className="relative">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                    <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{phase.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 专业服务介绍 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              为什么选择WEDESEN德森？
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">12+</div>
                <div>年专业经验</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div>成功案例</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div>成功率</div>
              </div>
            </div>
            <p className="text-xl mb-8 opacity-90">
              专业荷兰移民顾问，熟悉最新政策法规，为您提供一站式移民服务
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/consultation?service=荷兰移民咨询">
                立即咨询荷兰移民
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NetherlandsImmigrationGuide;