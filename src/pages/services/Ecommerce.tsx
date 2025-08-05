import ServicePageLayout from "@/components/ServicePageLayout";
import { ShoppingCart } from "lucide-react";

const Ecommerce = () => {
  const services = [
    {
      title: "亚马逊欧洲站点",
      description: "协助中国卖家在亚马逊欧洲站点成功开店和运营",
      requirements: [
        "具备合法的公司主体",
        "有一定的跨境电商经验",
        "具备基本的英语沟通能力",
        "有稳定的产品供应链",
        "符合欧洲产品标准和认证"
      ],
      process: [
        "账号注册和店铺开设",
        "产品上架和优化",
        "广告投放和推广",
        "库存管理和物流配送",
        "客服支持和售后服务"
      ],
      timeline: "2-4周开店",
      price: "€2,000起"
    },
    {
      title: "eBay欧洲市场",
      description: "帮助卖家在eBay欧洲站点建立业务，拓展销售渠道",
      requirements: [
        "有eBay销售经验或愿意学习",
        "产品适合eBay平台销售",
        "了解eBay政策和规则",
        "有稳定的产品库存",
        "支持多语言客服"
      ],
      process: [
        "账号注册和店铺装修",
        "产品分析和定价策略",
        "listing优化和SEO",
        "多渠道推广和营销",
        "数据分析和业务优化"
      ],
      timeline: "3-6周",
      price: "€1,500起"
    },
    {
      title: "独立站建设运营",
      description: "为企业搭建专属的跨境电商独立站，建立品牌影响力",
      requirements: [
        "有明确的品牌定位",
        "准备充足的产品图片和描述",
        "规划好支付和物流方案",
        "有一定的营销预算",
        "长期运营的决心"
      ],
      process: [
        "网站策划和设计",
        "功能开发和测试",
        "支付系统集成",
        "SEO优化和推广",
        "数据分析和优化"
      ],
      timeline: "6-12周",
      price: "€5,000起"
    },
    {
      title: "欧洲本地化运营",
      description: "提供深度的本地化服务，帮助中国品牌真正融入欧洲市场",
      requirements: [
        "已在欧洲有一定销售基础",
        "产品符合欧洲市场需求",
        "愿意投入本地化改造",
        "有长期发展计划",
        "具备一定的资金实力"
      ],
      process: [
        "市场调研和竞品分析",
        "本地化策略制定",
        "品牌形象本土化改造",
        "本地团队建设",
        "市场拓展和维护"
      ],
      timeline: "3-12个月",
      price: "咨询获取详细报价"
    }
  ];

  const advantages = [
    "🏆 丰富的欧洲电商经验，成功帮助200+中国品牌进入欧洲市场",
    "🌍 深度本地化服务，在荷兰、德国、意大利设有运营团队",
    "📈 数据驱动运营，通过专业分析提升转化率和ROI",
    "🚚 完善的供应链服务，提供仓储、物流、客服一体化解决方案",
    "💰 灵活的合作模式，从基础开店到深度运营，满足不同需求",
    "🔧 技术支持强大，自主开发多种电商工具和系统"
  ];

  const successCases = [
    {
      title: "家居品牌欧洲扩张",
      description: "协助某家居品牌在亚马逊欧洲站点实现从0到月销售额100万欧元的突破。",
      result: "18个月内成为细分类目Top 3，建立了稳定的欧洲客户群"
    },
    {
      title: "3C数码独立站",
      description: "为3C数码品牌搭建独立站，通过SEO和社交媒体营销实现快速增长。",
      result: "网站月访问量达到50万，转化率保持在3.5%以上"
    },
    {
      title: "时尚品牌本地化",
      description: "帮助时尚品牌在意大利市场实现本地化运营，建立了当地的设计和营销团队。",
      result: "成功进入意大利主流时尚零售渠道，品牌认知度大幅提升"
    }
  ];

  return (
    <ServicePageLayout
      title="电商服务"
      subtitle="跨境电商 · 欧洲本地化运营"
      description="专业的跨境电商服务，帮助中国企业和品牌成功进入欧洲市场。我们提供从平台开店、产品运营到本地化服务的全链条解决方案，包括亚马逊、eBay等主流平台以及独立站建设。凭借深度的本地化运营经验，助力您的品牌在欧洲市场取得成功。"
      icon={<ShoppingCart className="w-10 h-10 text-indigo-600" />}
      iconBg="bg-indigo-50"
      services={services}
      advantages={advantages}
      successCases={successCases}
      countries={["荷兰", "德国", "意大利", "法国", "西班牙", "英国"]}
    />
  );
};

export default Ecommerce;