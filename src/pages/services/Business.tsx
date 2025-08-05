import ServicePageLayout from "@/components/ServicePageLayout";
import { Briefcase } from "lucide-react";

const Business = () => {
  const services = [
    {
      title: "文件代办服务",
      description: "代办各类官方文件，包括公证、认证、翻译等服务",
      requirements: [
        "提供需要代办的文件清单",
        "配合提供相关证明材料",
        "明确文件使用目的和要求",
        "支付相关政府费用",
        "遵守办理时间安排"
      ],
      process: [
        "文件需求评估分析",
        "准备相关申请材料",
        "递交政府部门办理",
        "跟踪办理进度",
        "文件领取和邮寄"
      ],
      timeline: "1-4周",
      price: "€200起"
    },
    {
      title: "专业翻译认证",
      description: "提供多语言专业翻译和官方认证服务",
      requirements: [
        "提供需要翻译的原文件",
        "明确翻译语言和用途",
        "是否需要官方认证",
        "交付时间要求",
        "特殊格式或要求说明"
      ],
      process: [
        "文件评估和报价",
        "专业译员翻译",
        "校对和质量检查",
        "官方认证盖章",
        "交付译文和认证书"
      ],
      timeline: "3-7个工作日",
      price: "€0.15/字起"
    },
    {
      title: "商务洽谈支持",
      description: "提供商务洽谈的翻译、陪同和项目协调服务",
      requirements: [
        "明确商务洽谈目的和内容",
        "提前告知参会人员和时间",
        "准备相关商务资料",
        "了解对方企业背景",
        "制定谈判策略和目标"
      ],
      process: [
        "商务背景调研",
        "洽谈策略制定",
        "现场翻译陪同",
        "会议记录整理",
        "后续跟进协调"
      ],
      timeline: "按项目而定",
      price: "€500/天起"
    },
    {
      title: "项目管理代理",
      description: "为复杂的跨国项目提供全程管理和协调服务",
      requirements: [
        "项目规模较大复杂度高",
        "涉及多方合作伙伴",
        "有明确的项目目标和预算",
        "授权项目管理权限",
        "配合项目进度安排"
      ],
      process: [
        "项目范围和目标确定",
        "制定项目计划和里程碑",
        "组建项目执行团队",
        "执行监控和风险管理",
        "项目交付和总结"
      ],
      timeline: "根据项目复杂度",
      price: "咨询获取详细报价"
    }
  ];

  const advantages = [
    "🌐 多语言服务能力，精通中文、英语、荷兰语、德语、意大利语等",
    "⚡ 快速响应机制，紧急文件24小时内可完成翻译认证",
    "🏛️ 官方合作渠道，与各国政府部门建立良好合作关系",
    "💼 丰富商务经验，深度了解欧洲商务文化和谈判技巧",
    "🔒 严格保密制度，所有文件和商务信息严格保密",
    "📍 本地化服务，在欧洲主要城市设有服务团队"
  ];

  const successCases = [
    {
      title: "跨国并购项目管理",
      description: "协助中国企业成功收购德国制造企业，负责整个并购过程的协调管理。",
      result: "项目按期完成，收购价格比预期节省15%，实现平滑过渡"
    },
    {
      title: "技术转让商务洽谈",
      description: "为某科技公司与荷兰技术公司的技术转让项目提供全程商务支持。",
      result: "成功达成技术转让协议，为客户引进了核心技术和专利"
    },
    {
      title: "大型展会项目代理",
      description: "代理中国企业参加德国汉诺威工业展，从展位申请到现场服务全程负责。",
      result: "展会效果超预期，客户获得了30+优质合作意向"
    }
  ];

  return (
    <ServicePageLayout
      title="商务代理"
      subtitle="全方位商务代理 · 专业项目管理"
      description="提供全方位的商务代理服务，包括文件代办、翻译认证、商务洽谈支持、项目管理等。我们的专业团队具备丰富的跨国商务经验，能够为客户在欧洲的各类商务活动提供专业、高效、可靠的代理服务。"
      icon={<Briefcase className="w-10 h-10 text-yellow-600" />}
      iconBg="bg-yellow-50"
      services={services}
      advantages={advantages}
      successCases={successCases}
      countries={["荷兰", "德国", "意大利", "法国", "比利时", "西班牙"]}
    />
  );
};

export default Business;