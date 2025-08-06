import ServicePageLayout from "@/components/ServicePageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Immigration = () => {
  const services = [
    {
      title: "荷兰高技能移民",
      description: "适合有技能和工作经验的专业人士，通过雇主担保快速移民荷兰",
      requirements: [
        "本科以上学历（或同等工作经验）",
        "年薪不低于€56,000（30岁以下€43,000）", 
        "荷兰雇主担保工作合同",
        "无犯罪记录证明",
        "通过体检要求"
      ],
      process: [
        "个人资格评估与职业规划",
        "匹配合适的荷兰雇主",
        "准备申请材料并递交",
        "等待移民局审批（4-6周）",
        "获得居留许可，安排入境"
      ],
      timeline: "3-6个月",
      price: "咨询获取详细报价"
    },
    {
      title: "荷兰欧盟蓝卡",
      description: "荷兰欧盟蓝卡条件相对较低，学历要求低，无雇主资质要求，无严格居住要求",
      requirements: [
        "具有至少三年的全日制大专以上学历",
        "拥有工作合同和邀请函",
        "年薪达到€58,670以上（2024年标准）",
        "雇主无特殊资质要求",
        "无犯罪记录证明"
      ],
      process: [
        "学历认证和资格评估",
        "寻找符合条件的工作机会",
        "准备蓝卡申请材料",
        "递交移民局审批",
        "获得4年期居留许可"
      ],
      timeline: "3-6个月",
      price: "咨询获取详细报价"
    },
    {
      title: "荷兰优才计划移民",
      description: "手续简单，无语言、学历、资产背景要求，一人申请全家移民，3-6个月快速获批",
      requirements: [
        "无语言、学历、资产背景要求",
        "年龄18-55周岁",
        "无犯罪记录",
        "身体健康",
        "有移民意向和配合度"
      ],
      process: [
        "免费资格评估",
        "签约并准备申请材料",
        "递交移民申请",
        "等待批准（3-6个月）",
        "全家获得荷兰身份"
      ],
      timeline: "3-6个月",
      price: "咨询获取详细报价"
    },
    {
      title: "德国欧盟蓝卡",
      description: "针对高学历人才的快速移民通道，享受德国优质生活和工作环境",
      requirements: [
        "本科以上学历并通过学历认证",
        "年薪不低于€58,400（紧缺职业€45,552）",
        "德国雇主提供工作合同",
        "德语A1或英语B2水平",
        "购买医疗保险"
      ],
      process: [
        "学历认证（APS审核）",
        "职位匹配与雇主联系",
        "签证申请与面试",
        "蓝卡获批后入境德国",
        "3年后可申请永久居留"
      ],
      timeline: "4-8个月",
      price: "咨询获取详细报价"
    },
    {
      title: "意大利投资移民",
      description: "通过投资意大利创新企业或政府债券获得居留权，享受欧盟身份福利",
      requirements: [
        "投资€50万到创新企业或€200万到政府债券",
        "年龄18岁以上",
        "无犯罪记录",
        "购买医疗保险",
        "证明足够的资金来源"
      ],
      process: [
        "选择投资项目类型",
        "准备投资资金和材料",
        "递交投资移民申请",
        "完成投资并获得证明",
        "获得投资者居留许可"
      ],
      timeline: "6-10个月",
      price: "咨询获取详细报价"
    }
  ];

  const advantages = [
    "🏆 12年专业经验，累计服务3000+成功案例，成功率高达95%",
    "🎯 荷兰欧盟蓝卡门槛低：仅需大专学历，年薪€58,670，无雇主资质要求",
    "⚡ 荷兰优才计划超快速：无语言学历要求，3-6个月全家获批",
    "🌍 深度本土化服务，在荷兰、德国、意大利均有当地服务团队",
    "💰 荷兰福利丰厚：30%工资税减免、零首付购房购车、全球医疗保险",
    "🏠 荷兰生活成本低：三层别墅约30万欧元，可贷款110%，利息仅1.8%-3%",
    "🛡️ 成功保障承诺，不成功可申请退款，让您的投资更有保障"
  ];

  const successCases = [
    {
      title: "陈先生 - 荷兰欧盟蓝卡",
      description: "大专学历工程师，年薪6万欧元，通过我们成功申请荷兰欧盟蓝卡，获得4年居留许可。",
      result: "4个月成功获批，享受30%税收减免政策，全家在荷兰安居乐业"
    },
    {
      title: "刘女士 - 荷兰优才计划", 
      description: "无语言基础的全职妈妈，通过荷兰优才计划成功移民，全家三口获得荷兰身份。",
      result: "3个月快速获批，孩子免费入学，享受从摇篮到坟墓的福利保障"
    },
    {
      title: "张总 - 荷兰高技能移民",
      description: "企业高管背景，通过我们匹配到阿姆斯特丹总部职位，实现事业移民双丰收。",
      result: "6个月完成移民，零首付购买别墅，享受110%房贷优惠政策"
    }
  ];

  return (
    <div>
      <ServicePageLayout
        title="移民服务"
        subtitle="荷兰 · 德国 · 意大利 专业移民方案"
        description="深耕欧洲移民市场12年，为您提供荷兰、德国、意大利等国家的专业移民服务。从高技能移民到投资移民，从申请准备到成功获批，我们的专业团队为您量身定制最适合的移民方案，让您顺利开启欧洲新生活。"
        icon={<Plane className="w-10 h-10 text-blue-600" />}
        iconBg="bg-blue-50"
        services={services}
        advantages={advantages}
        successCases={successCases}
        countries={["荷兰", "德国", "意大利"]}
      />
      
      {/* 推荐阅读部分 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary">深度了解荷兰移民</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              深入了解荷兰移民的优势和福利政策
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">为什么选择移民荷兰？</CardTitle>
                    <CardDescription className="text-base">
                      详细了解荷兰世界顶级的社会福利制度、医疗保健系统、教育资源和工作环境。
                      从儿童津贴到养老保险，从免费教育到完善医疗，荷兰为您和家人提供全方位保障。
                    </CardDescription>
                  </div>
                  <Button asChild className="group-hover:scale-105 transition-transform">
                    <Link to="/why-dutch-immigration">
                      了解详情
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">#3</div>
                      <div className="text-xs text-muted-foreground">全球幸福指数</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">€293</div>
                      <div className="text-xs text-muted-foreground">月儿童津贴</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-xs text-muted-foreground">医保覆盖</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">免费</div>
                      <div className="text-xs text-muted-foreground">义务教育</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Immigration;