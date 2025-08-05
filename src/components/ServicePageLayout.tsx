import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, MessageCircle, Clock, Users, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  iconBg: string;
  services: Array<{
    title: string;
    description: string;
    requirements: string[];
    process: string[];
    timeline: string;
    price: string;
  }>;
  advantages: string[];
  successCases: Array<{
    title: string;
    description: string;
    result: string;
  }>;
  countries?: string[];
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  icon,
  iconBg,
  services,
  advantages,
  successCases,
  countries = []
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Link>
            
            <div className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              {icon}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-4">
              <span className="font-normal">{title}</span>
            </h1>
            <p className="text-xl text-primary font-medium mb-6">{subtitle}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>

            {countries.length > 0 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  服务国家：{countries.join(" • ")}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">
              <span className="text-primary">详细服务</span>项目
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        申请条件
                      </h4>
                      <ul className="space-y-2">
                        {service.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        办理流程
                      </h4>
                      <ol className="space-y-2">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-5 h-5 bg-primary/10 text-primary rounded-full text-xs flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.timeline}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {service.price}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">
              <span className="text-primary">选择我们的</span>优势
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{advantage}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">
              <span className="text-primary">成功案例</span>分享
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successCases.map((case_, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{case_.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{case_.description}</p>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="text-sm font-medium text-primary">{case_.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">
            准备开始您的{title}之旅？
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            我们的专业团队随时为您提供个性化咨询服务，立即联系我们获取详细方案
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Phone className="w-4 h-4 mr-2" />
              电话咨询：13720010295
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <MessageCircle className="w-4 h-4 mr-2" />
              微信咨询：LydiaFSZ
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ServicePageLayout;