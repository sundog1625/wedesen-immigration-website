import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, CheckCircle, Clock, Euro, FileText, AlertTriangle,
  Users, Globe, Shield, Award, Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      title: "荷兰移民常见问题",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      questions: [
        {
          question: "申请荷兰HSM签证需要什么条件？",
          answer: "申请荷兰HSM（Highly Skilled Migrant）签证需要满足以下条件：1）获得荷兰雇主的工作offer；2）雇主具有HSM担保资质；3）薪资达到最低标准（2025年为€38,961）；4）具备相关学历和工作经验。整个申请过程通常需要3-6个月。"
        },
        {
          question: "荷兰移民有哪些福利待遇？",
          answer: "荷兰移民可享受世界顶级福利：1）全民医疗保险制度；2）失业救济金高达70%工资；3）儿童津贴每月最高€293；4）免费教育从小学到大学；5）养老金制度完善；6）工作与生活平衡，每年25天带薪年假。荷兰在全球幸福指数排名第3位。"
        },
        {
          question: "荷兰永居和国籍申请需要多长时间？",
          answer: "荷兰永居（欧盟长期居留）可在合法居住5年后申请，荷兰国籍可在合法居住5年后申请（需通过荷兰语和社会融入考试）。持有荷兰护照可在欧盟27国自由工作生活，全球免签183个国家。"
        },
        {
          question: "荷兰移民费用大概多少？",
          answer: "荷兰移民费用包括：1）政府申请费约€1,500；2）律师服务费€5,000-10,000；3）材料翻译认证费€2,000；4）体检费€500；5）生活费每月€2,000-3,000。总体费用约€15,000-25,000不等，具体因个人情况而异。"
        }
      ]
    },
    {
      title: "德国移民常见问题",
      icon: <Award className="w-6 h-6 text-red-600" />,
      questions: [
        {
          question: "德国蓝卡申请条件是什么？",
          answer: "德国EU蓝卡申请条件：1）大学本科以上学历并通过德国学历认证；2）获得德国雇主工作合同；3）年薪达到€58,400以上（紧缺职业€45,552）；4）德语A1水平或英语流利；5）相关工作经验。蓝卡有效期4年，可续签。"
        },
        {
          question: "德国移民需要学德语吗？",
          answer: "德国移民语言要求因签证类型而异：蓝卡申请通常需要德语A1或英语流利；技术工人签证需要德语B1；永居申请需要德语B1；入籍申请需要德语B2。我们提供德语学习指导和考试辅导服务。"
        },
        {
          question: "德国投资移民需要投资多少钱？",
          answer: "德国投资移民最低投资额为€25万，需要创建一个可行的商业计划并创造就业机会。投资移民获得的是企业家签证，3年后可申请永居。我们协助准备商业计划书和投资项目评估。"
        },
        {
          question: "德国医疗和教育怎么样？",
          answer: "德国拥有世界顶级的医疗和教育系统：1）医疗保险覆盖95%以上医疗费用；2）公立教育从小学到大学免学费；3）双元制职业教育享誉全球；4）拥有多所世界一流大学。德国在全球生活质量排名前10位。"
        }
      ]
    },
    {
      title: "意大利移民常见问题",
      icon: <Globe className="w-6 h-6 text-green-600" />,
      questions: [
        {
          question: "意大利投资移民的投资要求是什么？",
          answer: "意大利投资移民主要方式包括：1）投资创新型初创企业至少€50万；2）购买房产并自雇€30万起；3）创建公司并雇佣意大利员工；4）投资政府债券€200万。不同投资方式有不同的居留期限和续签要求。"
        },
        {
          question: "意大利居留卡可以在欧盟其他国家工作吗？",
          answer: "意大利居留卡（Permesso di Soggiorno）持有者可以在欧盟其他国家短期停留（90天内），但工作需要另外申请工作许可。获得意大利永居后可在欧盟其他国家工作3个月，获得意大利国籍后可在欧盟27国自由工作。"
        },
        {
          question: "意大利购房移民政策如何？",
          answer: "意大利没有直接的购房移民政策，但可以通过购房+自雇的方式获得居留权：1）购买房产€30万以上；2）开设公司或自雇业务；3）证明有足够资金维持生活；4）购买医疗保险。这种方式适合希望在意大利投资房产并开展业务的人士。"
        },
        {
          question: "意大利语言要求高吗？",
          answer: "意大利移民语言要求相对灵活：初次申请居留卡不强制要求意大利语，但续签和永居申请需要A2水平，入籍需要B1水平。我们提供意大利语学习资源和考试指导，帮助客户满足语言要求。"
        }
      ]
    },
    {
      title: "移民申请流程",
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      questions: [
        {
          question: "移民申请一般需要多长时间？",
          answer: "移民申请时间因国家和签证类型而异：荷兰HSM签证3-6个月；德国蓝卡3-6个月；意大利投资移民6-12个月。我们会根据您的具体情况制定详细的时间规划，并提供加急服务以缩短等待时间。"
        },
        {
          question: "申请被拒绝了怎么办？",
          answer: "申请被拒绝后可以：1）分析拒签原因并补充材料重新申请；2）提交行政复议或上诉；3）选择其他移民方式；4）咨询专业律师寻求法律救济。我们有丰富的拒签案例处理经验，成功率高达80%。"
        },
        {
          question: "需要准备哪些材料？",
          answer: "移民申请材料清单包括：1）护照和身份证明；2）学历学位证书及认证；3）工作经历证明；4）资金证明和银行流水；5）无犯罪记录证明；6）健康证明和体检报告；7）婚姻状况证明；8）语言水平证书。我们提供完整的材料准备指导。"
        },
        {
          question: "家属可以一起移民吗？",
          answer: "大多数移民项目都允许携带家属：配偶和18岁以下未婚子女通常可以同时获得居留权；18岁以上子女可能需要单独申请；父母可以通过家庭团聚方式后续申请。家属享受与主申请人相同的福利待遇。"
        }
      ]
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="欧洲移民常见问题FAQ - 荷兰德国意大利移民问答 | WEDESEN德森"
        description="欧洲移民FAQ大全：荷兰HSM签证、德国蓝卡、意大利投资移民等常见问题解答。申请条件、流程、费用、时间全面解析。WEDESEN德森专业移民顾问12年经验。"
        keywords={["欧洲移民FAQ", "荷兰移民问题", "德国移民问答", "意大利移民咨询", "HSM签证", "德国蓝卡", "移民申请流程", "WEDESEN德森"]}
        url="https://wedeseneu.com/faq"
        structuredData={faqSchema}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800">移民问答</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              欧洲移民常见问题
              <span className="block text-blue-600 mt-2">专业解答，解决您的移民疑惑</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              WEDESEN德森12年移民经验，为您解答荷兰、德国、意大利移民申请中的各种问题。从申请条件到流程费用，专业顾问一对一解答。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/consultation?service=移民咨询">
                  一对一专业咨询
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <HelpCircle className="w-4 h-4 mr-2" />
                更多问题咨询
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="mb-8 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    {category.icon}
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left hover:text-blue-600">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              还有其他问题？
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              WEDESEN德森专业移民顾问随时为您解答移民相关问题
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <CardTitle>电话咨询</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">专业顾问一对一电话解答</p>
                  <p className="font-semibold text-blue-600">13720010295</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <CardTitle>微信咨询</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">微信在线实时交流</p>
                  <p className="font-semibold text-green-600">LydiaFSZ</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <FileText className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <CardTitle>在线表单</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">填写表单获得专业建议</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/consultation">立即填写</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">专业移民评估</h3>
              <p className="text-blue-100 mb-6">
                获得免费的个人移民方案评估，了解最适合您的移民路径
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link to="/consultation?service=免费评估">
                  立即获得免费评估
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

export default FAQ;