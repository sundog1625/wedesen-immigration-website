import ServicePageLayout from "@/components/ServicePageLayout";
import { Calculator } from "lucide-react";

const Finance = () => {
  const services = [
    {
      title: "记账报税服务",
      description: "专业的欧洲记账报税服务，确保企业财务合规",
      requirements: [
        "已注册的欧洲公司",
        "提供完整的财务凭证",
        "配合财务数据整理",
        "按时提供银行流水",
        "遵守当地财务法规"
      ],
      process: [
        "建立财务记账体系",
        "月度财务数据处理",
        "季度税务申报",
        "年度财务审计",
        "税务筹划建议"
      ],
      timeline: "持续服务",
      price: "€300/月起"
    },
    {
      title: "税务筹划咨询",
      description: "合理的税务筹划，帮助企业降低税负成本",
      requirements: [
        "企业年营收€100万以上",
        "有税务优化需求",
        "愿意配合税务规划",
        "业务结构相对复杂",
        "符合法律合规要求"
      ],
      process: [
        "现有税务结构分析",
        "税务优化方案设计",
        "合规性风险评估",
        "实施方案执行",
        "效果跟踪和调整"
      ],
      timeline: "2-3个月",
      price: "咨询获取详细报价"
    },
    {
      title: "财务审计服务",
      description: "专业的财务审计服务，满足法律要求和投资需求",
      requirements: [
        "公司规模达到审计门槛",
        "财务记录完整清晰",
        "配合审计师工作",
        "提供必要的财务资料",
        "遵守审计时间安排"
      ],
      process: [
        "审计前期准备工作",
        "财务数据审核",
        "内控制度评估",
        "审计报告编制",
        "审计意见和建议"
      ],
      timeline: "4-8周",
      price: "€3,000起"
    },
    {
      title: "VAT税务服务",
      description: "欧盟VAT注册、申报和退税等专业服务",
      requirements: [
        "在欧盟有销售业务",
        "达到VAT注册门槛",
        "提供完整销售记录",
        "配合VAT申报流程",
        "保持良好的合规记录"
      ],
      process: [
        "VAT注册资格评估",
        "各国VAT号码申请",
        "月度/季度VAT申报",
        "VAT退税申请",
        "VAT合规指导"
      ],
      timeline: "持续服务",
      price: "€150/申报期起"
    }
  ];

  const advantages = [
    "📊 专业财务团队，持有欧洲各国会计师和税务师资格证书",
    "💰 有效降低税负，通过合理筹划平均为客户节省15-30%的税费",
    "⚖️ 确保合规运营，避免税务风险和法律纠纷",
    "🔍 定期财务分析，提供专业的经营建议和改进方案",
    "📱 数字化财务管理，实时查看财务状况和税务申报进度",
    "🌍 多国税务服务，一站式解决跨国经营的复杂税务问题"
  ];

  const successCases = [
    {
      title: "跨境电商VAT优化",
      description: "为一家跨境电商企业设计了完整的欧盟VAT税务结构，覆盖7个欧盟国家。",
      result: "年节省VAT成本超过50万欧元，合规风险降为零"
    },
    {
      title: "制造企业税务筹划",
      description: "通过荷兰控股公司结构，为制造企业实现了有效的税务优化。",
      result: "整体税率从25%降至12%，每年节省税费200万欧元"
    },
    {
      title: "投资公司财务管理",
      description: "为投资公司建立了完善的财务管理体系，确保投资回报最大化。",
      result: "财务透明度显著提升，获得了多家国际投资机构认可"
    }
  ];

  return (
    <ServicePageLayout
      title="财务税务"
      subtitle="专业财务管理 · 合规税务筹划"
      description="提供全面的欧洲财务税务服务，包括记账报税、税务筹划、财务审计、VAT服务等。我们的专业团队帮助企业建立完善的财务体系，确保合规运营的同时，通过合理的税务筹划降低企业成本。"
      icon={<Calculator className="w-10 h-10 text-red-600" />}
      iconBg="bg-red-50"
      services={services}
      advantages={advantages}
      successCases={successCases}
      countries={["荷兰", "德国", "意大利", "法国", "西班牙", "比利时"]}
    />
  );
};

export default Finance;