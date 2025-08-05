import ServicePageLayout from "@/components/ServicePageLayout";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const services = [
    {
      title: "荷兰留学申请",
      description: "荷兰拥有世界领先的教育质量，英语授课项目丰富，学费相对较低",
      requirements: [
        "高中毕业证书或本科/硕士学位",
        "雅思6.5分或托福80分以上",
        "GPA 3.0以上（百分制80分以上）",
        "个人陈述和推荐信",
        "部分专业需要GMAT/GRE成绩"
      ],
      process: [
        "专业选择与院校定位",
        "准备申请材料和语言成绩",
        "在线提交申请",
        "等待录取通知书",
        "办理学生签证和入学手续"
      ],
      timeline: "6-8个月",
      price: "咨询获取详细报价"
    },
    {
      title: "德国留学申请",
      description: "德国公立大学免学费，教育质量世界认可，毕业后有良好的就业前景",
      requirements: [
        "高中毕业并通过APS审核",
        "德语TestDaF 4级或DSH-2水平",
        "或英语授课项目雅思6.5+",
        "相关专业背景和学术成绩",
        "经济担保证明（约11,000欧元/年）"
      ],
      process: [
        "APS审核和语言培训",
        "选择专业和申请大学",
        "准备申请材料",
        "递交签证申请",
        "获得签证后赴德学习"
      ],
      timeline: "8-12个月",
      price: "咨询获取详细报价"
    },
    {
      title: "意大利留学申请",
      description: "意大利艺术、设计类专业世界领先，公立大学学费低廉，文化氛围浓厚",
      requirements: [
        "高中毕业证书和成绩单",
        "意大利语B1-B2水平或英语雅思6.0+",
        "艺术类专业需要作品集",
        "价值声明（Dichiarazione di Valore）",
        "经济担保证明"
      ],
      process: [
        "语言培训和专业作品准备",
        "院校申请和预注册",
        "办理学习签证",
        "抵达意大利后完成注册",
        "开始正式学习"
      ],
      timeline: "6-10个月",
      price: "咨询获取详细报价"
    },
    {
      title: "留学后服务支持",
      description: "提供全方位的留学后续服务，帮助学生顺利适应海外学习生活",
      requirements: [
        "已获得欧洲国家学生签证",
        "需要学习生活指导",
        "希望获得实习就业帮助",
        "计划申请居留权或工作签证",
        "需要学业规划咨询"
      ],
      process: [
        "接机和住宿安排",
        "银行开户和保险办理",
        "学校注册和选课指导",
        "实习和就业推荐",
        "签证延期和身份转换"
      ],
      timeline: "持续服务",
      price: "咨询获取详细报价"
    }
  ];

  const advantages = [
    "🎓 专业教育顾问团队，深谙欧洲各国教育体系和申请要求",
    "🏫 与欧洲多所知名大学建立合作关系，提供独家申请通道",
    "📝 一对一文书指导，专业修改个人陈述和推荐信，提高录取率",
    "🗣️ 提供语言培训服务，专业老师指导雅思、托福、德语等考试",
    "🏠 提供住宿安排服务，帮助学生找到安全舒适的住所",
    "💼 就业指导服务，协助学生在欧洲找到实习和工作机会"
  ];

  const successCases = [
    {
      title: "陈同学 - 阿姆斯特丹大学",
      description: "国内211大学金融专业，通过我们的专业指导成功申请到阿姆斯特丹大学商科硕士项目。",
      result: "获得全额奖学金，现已在荷兰知名金融公司实习"
    },
    {
      title: "刘同学 - 慕尼黑工业大学",
      description: "机械工程专业背景，德语零基础，经过我们的语言培训和申请指导成功入学。",
      result: "德语达到C1水平，成功入读世界顶级工程大学"
    },
    {
      title: "王同学 - 博洛尼亚美术学院",
      description: "艺术设计专业学生，通过我们的作品集指导和申请服务成功进入意大利顶级艺术院校。",
      result: "作品获得教授高度认可，并获得学院奖学金"
    }
  ];

  return (
    <ServicePageLayout
      title="留学服务"
      subtitle="欧洲名校申请 · 全程专业指导"
      description="专注欧洲留学12年，为学生提供从院校选择、申请材料准备、签证办理到留学后服务的全程专业指导。我们与荷兰、德国、意大利等国的知名大学建立了良好的合作关系，帮助每一位学生实现欧洲留学梦想。"
      icon={<GraduationCap className="w-10 h-10 text-green-600" />}
      iconBg="bg-green-50"
      services={services}
      advantages={advantages}
      successCases={successCases}
      countries={["荷兰", "德国", "意大利", "法国", "西班牙"]}
    />
  );
};

export default Education;