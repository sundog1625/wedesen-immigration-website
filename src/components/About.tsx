import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, MapPin, Clock } from "lucide-react";
import ProfessionalBanner from "@/components/ProfessionalBanner";

const About = () => {
  const stats = [
    { icon: Users, label: "成功案例", value: "1000+", color: "text-blue-600" },
    { icon: Award, label: "专业经验", value: "12年", color: "text-green-600" },
    { icon: MapPin, label: "服务国家", value: "3个", color: "text-purple-600" },
    { icon: Clock, label: "响应时间", value: "24小时", color: "text-orange-600" }
  ];

  const advantages = [
    {
      title: "专业团队",
      description: "拥有资深移民律师、税务专家、商务顾问等专业团队",
      badge: "专业"
    },
    {
      title: "一站式服务",
      description: "从移民咨询到商务落地，提供全流程一站式解决方案",
      badge: "便捷"
    },
    {
      title: "本地资源",
      description: "在荷兰、意大利、德国拥有丰富的本地合作资源",
      badge: "可靠"
    },
    {
      title: "贴心服务",
      description: "提供中文服务，深度理解中国客户需求",
      badge: "贴心"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <ProfessionalBanner />
            </div>
            
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-md text-sm font-medium tracking-wider mb-4">
              WEDESEN · 关于我们
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              <span className="font-normal">12年专业移民经验</span>
              <span className="text-primary block mt-2">欧洲移民首选品牌</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              WEDESEN（德森）国际商务是专业的欧洲移民服务机构，专注荷兰移民、德国移民、意大利移民12年。我们为中国客户提供荷兰技术移民、德国蓝卡申请、意大利投资移民等专业移民咨询服务。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
              拥有1000+成功移民案例，我们的专业团队深谙荷兰HSM签证、德国EU Blue Card、意大利居留卡等各国移民政策，为每位客户量身定制最适合的欧洲移民解决方案。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gray-100 flex items-center justify-center ${stat.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Advantages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">我们的优势</h3>
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Badge variant="secondary" className="mt-1">
                      {advantage.badge}
                    </Badge>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;