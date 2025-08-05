import ServicePageLayout from "@/components/ServicePageLayout";
import { Globe } from "lucide-react";

const Development = () => {
  const services = [
    {
      title: "企业官网设计开发",
      description: "专业的企业官网设计开发，符合欧美用户习惯和审美标准",
      requirements: [
        "明确的网站功能需求",
        "提供企业VI和品牌素材",
        "准备网站内容和图片",
        "确定目标用户群体",
        "有合理的项目预算"
      ],
      process: [
        "需求分析和方案设计",
        "UI/UX设计和原型制作",
        "前端开发和后端开发",
        "测试优化和上线部署",
        "培训交付和后续维护"
      ],
      timeline: "6-12周",
      price: "€3,000起"
    },
    {
      title: "电商网站开发",
      description: "功能完善的电商网站开发，支持多语言多货币",
      requirements: [
        "明确的电商业务模式",
        "产品分类和支付方案",
        "物流配送体系规划",
        "多语言内容准备",
        "符合GDPR等法规要求"
      ],
      process: [
        "电商功能规划设计",
        "购物车和支付系统开发",
        "库存管理系统集成",
        "多语言本地化实现",
        "安全测试和性能优化"
      ],
      timeline: "8-16周",
      price: "€8,000起"
    },
    {
      title: "定制化系统开发",
      description: "根据企业特殊需求开发定制化的业务管理系统",
      requirements: [
        "有具体的业务流程需求",
        "现有系统集成要求",
        "用户权限和安全要求",
        "数据迁移和备份需求",
        "充足的开发周期和预算"
      ],
      process: [
        "需求调研和系统设计",
        "数据库设计和架构搭建",
        "核心功能模块开发",
        "系统集成和接口开发",
        "测试部署和用户培训"
      ],
      timeline: "12-24周",
      price: "咨询获取详细报价"
    },
    {
      title: "网站维护升级",
      description: "现有网站的维护、升级和功能扩展服务",
      requirements: [
        "现有网站运行正常",
        "有明确的升级需求",
        "提供网站源代码访问",
        "配合测试和验收工作",
        "长期合作意向"
      ],
      process: [
        "现有系统评估分析",
        "升级方案制定",
        "功能开发和测试",
        "数据迁移和备份",
        "上线部署和监控"
      ],
      timeline: "2-8周",
      price: "€100/小时起"
    }
  ];

  const advantages = [
    "💻 技术团队经验丰富，精通React、Vue、PHP、Python等主流技术栈",
    "🎨 设计理念国际化，深度理解欧美用户的使用习惯和审美偏好",
    "⚡ 开发效率高，采用敏捷开发模式，确保项目按时交付",
    "🔒 安全性保障，严格遵循GDPR、CCPA等数据保护法规",
    "📱 响应式设计，确保网站在各种设备上都有完美的用户体验",
    "🔧 提供持续支持，包括技术维护、功能升级、安全更新等服务"
  ];

  const successCases = [
    {
      title: "国际贸易公司官网",
      description: "为大型国际贸易公司开发多语言官网，支持8种语言，集成CRM系统。",
      result: "网站上线后询盘量增长300%，有效提升了公司国际形象"
    },
    {
      title: "奢侈品电商平台",
      description: "开发高端时尚电商平台，注重用户体验和品牌形象展示。",
      result: "平台转化率达到4.2%，获得了多个国际知名品牌入驻"
    },
    {
      title: "智能制造ERP系统",
      description: "为制造企业开发定制化ERP系统，实现生产、销售、财务一体化管理。",
      result: "系统上线后生产效率提升25%，管理成本降低30%"
    }
  ];

  return (
    <ServicePageLayout
      title="网站开发"
      subtitle="专业网站设计 · 定制化系统开发"
      description="提供专业的网站设计开发服务，包括企业官网、电商平台、定制化系统等。我们的技术团队具备丰富的国际项目经验，深度理解欧美用户需求，能够为客户打造符合国际标准、具有优秀用户体验的网站和系统。"
      icon={<Globe className="w-10 h-10 text-teal-600" />}
      iconBg="bg-teal-50"
      services={services}
      advantages={advantages}
      successCases={successCases}
      countries={["荷兰", "德国", "意大利", "全球服务"]}
    />
  );
};

export default Development;