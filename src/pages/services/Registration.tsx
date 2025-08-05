import ServicePageLayout from "@/components/ServicePageLayout";
import { Building } from "lucide-react";

const Registration = () => {
  const services = [
    {
      title: "荷兰公司注册",
      description: "在荷兰注册公司，享受优惠的税收政策和便利的营商环境",
      requirements: [
        "确定公司名称和经营范围",
        "最低注册资本€1（建议€18,000以上）",
        "至少一名董事（可为外国人）",
        "荷兰注册地址",
        "通过KvK商会审核"
      ],
      process: [
        "公司名称查询和预留",
        "准备注册文件和材料",
        "商会（KvK）注册登记",
        "税务局登记获得税号",
        "银行开户和后续服务"
      ],
      timeline: "2-4周",
      price: "€1,500起"
    },
    {
      title: "德国公司注册",
      description: "德国作为欧洲经济中心，为企业提供了优越的发展环境",
      requirements: [
        "GmbH最低注册资本€25,000",
        "至少一名管理董事",
        "德国注册地址",
        "公司章程（德语版本）",
        "通过公证处公证程序"
      ],
      process: [
        "公司章程起草和公证",
        "注册资本到位验证",
        "商业法院注册登记",
        "税务和社保登记",
        "银行开户和运营支持"
      ],
      timeline: "4-6周",
      price: "€2,500起"
    },
    {
      title: "意大利公司注册",
      description: "意大利公司注册程序相对简化，适合快速进入欧洲市场",
      requirements: [
        "Srl最低注册资本€1",
        "至少一名法定代表人",
        "意大利注册地址",
        "公司章程（意大利语）",
        "经公证的身份证明文件"
      ],
      process: [
        "公司名称核准",
        "公证处办理公司成立手续",
        "商会和税务局登记",
        "获得VAT税号",
        "银行开户和合规设置"
      ],
      timeline: "3-5周",
      price: "€2,000起"
    },
    {
      title: "银行开户服务",
      description: "协助企业在欧洲主要银行开设公司账户，支持多币种业务",
      requirements: [
        "公司注册证明文件",
        "董事身份证明和地址证明",
        "公司经营计划书",
        "预计资金流水说明",
        "符合银行KYC要求"
      ],
      process: [
        "银行资质评估和选择",
        "准备开户申请材料",
        "预约银行面谈",
        "提交开户申请",
        "账户激活和网银设置"
      ],
      timeline: "2-6周",
      price: "€800起"
    }
  ];

  const advantages = [
    "⚡ 快速注册通道，与当地商会和政府部门建立良好合作关系",
    "📋 一站式服务，从公司注册到银行开户、税务登记全程代办",
    "🏦 银行资源丰富，与多家欧洲主流银行建立合作关系",
    "⚖️ 法律合规保障，确保公司注册和运营完全符合当地法律",
    "🔄 后续服务支持，提供持续的公司秘书和合规维护服务",
    "💰 透明收费标准，无隐藏费用，性价比高"
  ];

  const successCases = [
    {
      title: "科技企业荷兰总部",
      description: "为一家人工智能公司在阿姆斯特丹设立欧洲总部，享受荷兰创新盒税收优惠。",
      result: "成功注册并获得税收优惠，有效税率降至5%，节省税费超过100万欧元"
    },
    {
      title: "贸易公司德国分支",
      description: "为中国贸易公司在汉堡注册分公司，便于拓展欧洲市场和物流业务。",
      result: "快速完成注册并开户，第一年欧洲业务增长300%"
    },
    {
      title: "时尚品牌意大利公司",
      description: "协助时尚品牌在米兰设立公司，利用意大利的时尚产业优势。",
      result: "成功进入欧洲高端市场，品牌知名度显著提升"
    }
  ];

  return (
    <ServicePageLayout
      title="公司注册"
      subtitle="欧洲公司设立 · 一站式企业服务"
      description="专业的欧洲公司注册服务，涵盖荷兰、德国、意大利等国家。我们提供从公司注册、银行开户到税务登记的一站式服务，帮助企业快速进入欧洲市场，享受当地的营商环境和税收优惠。"
      icon={<Building className="w-10 h-10 text-orange-600" />}
      iconBg="bg-orange-50"
      services={services}
      advantages={advantages}
      successCases={successCases}
      countries={["荷兰", "德国", "意大利", "比利时", "卢森堡"]}
    />
  );
};

export default Registration;