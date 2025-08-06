import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead, { organizationSchema } from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, ArrowRight, Users, Award, MapPin, Clock,
  Heart, Shield, GraduationCap, Briefcase, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/ui/lazy-image";
import heroBg from "@/assets/hero-bg.jpg";

const IndexEn = () => {
  const hreflangLinks = [
    { lang: "zh-CN", url: "https://wedeseneu.com/" },
    { lang: "en", url: "https://wedeseneu.com/en/" },
    { lang: "nl-NL", url: "https://wedeseneu.com/nl/" },
    { lang: "de-DE", url: "https://wedeseneu.com/de/" },
    { lang: "it-IT", url: "https://wedeseneu.com/it/" },
    { lang: "x-default", url: "https://wedeseneu.com/" }
  ];

  const services = [
    {
      title: "Netherlands Immigration",
      description: "Highly Skilled Migrant visa, Investment immigration, Startup visa",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      features: ["HSM Visa", "Investment €125k+", "EU Blue Card", "Fast Process"]
    },
    {
      title: "Germany Immigration", 
      description: "EU Blue Card, Investment immigration, Skilled worker visa",
      icon: <Award className="w-8 h-8 text-red-600" />,
      features: ["EU Blue Card", "€58,400+ Salary", "Investment €25k+", "EU Access"]
    },
    {
      title: "Italy Immigration",
      description: "Investment immigration, Self-employment visa, Family reunification",
      icon: <Heart className="w-8 h-8 text-green-600" />,
      features: ["Investment €50k+", "Self-employment", "Property Purchase", "EU Passport"]
    }
  ];

  const stats = [
    { icon: Users, label: "Success Cases", value: "1000+", color: "text-blue-600" },
    { icon: Award, label: "Years Experience", value: "12+", color: "text-green-600" },
    { icon: MapPin, label: "Countries Served", value: "3", color: "text-purple-600" },
    { icon: Clock, label: "Response Time", value: "24h", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="WEDESEN - Professional European Immigration Services | Netherlands Germany Italy"
        description="WEDESEN provides professional European immigration services with 12 years experience. Specializing in Netherlands HSM visa, Germany Blue Card, Italy investment immigration. High success rate, one-stop service."
        keywords={["European immigration", "Netherlands immigration", "Germany immigration", "Italy immigration", "HSM visa", "EU Blue Card", "investment immigration", "WEDESEN"]}
        url="https://wedeseneu.com/en/"
        structuredData={organizationSchema}
        hreflang={hreflangLinks}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <LazyImage
            src={heroBg}
            alt="Professional European immigration services background"
            className="w-full h-full object-cover"
            priority={true}
            fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LXNpemU9IjI0Ij5Mb2FkaW5nLi4uPC90ZXh0Pgo8L3N2Zz4="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 rounded-md text-sm font-medium tracking-wider mb-6 border border-white/20">
                WEDESEN · European Immigration Services
              </span>
              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
                <span className="font-normal">Professional European</span>
                <span className="text-accent block mt-2">Immigration Services</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl font-light">
                WEDESEN has 12 years of experience in European immigration, specializing in Netherlands HSM visa, Germany Blue Card, and Italy investment immigration with customized solutions for each client.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "12+ Years Experience",
                "One-Stop Service",
                "1000+ Success Cases",
                "24/7 Support"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
                <Link to="/en/consultation">
                  Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              European Immigration Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive immigration services for Netherlands, Germany, and Italy with professional guidance throughout the entire process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/en/consultation">
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary">About WEDESEN</Badge>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                <span className="font-normal">12+ Years Professional</span>
                <span className="text-primary block mt-2">Immigration Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                WEDESEN is a professional European immigration service provider specializing in Netherlands immigration, Germany immigration, and Italy immigration for over 12 years. We provide Netherlands HSM visa, Germany Blue Card application, Italy investment immigration and other professional immigration consulting services for Chinese clients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                With 1000+ successful immigration cases, our professional team is well-versed in immigration policies of various countries including Netherlands HSM visa, Germany EU Blue Card, Italy residence permits, providing customized European immigration solutions for each client.
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

            {/* Right Content - Why Choose Us */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose WEDESEN?</h3>
              
              {[
                {
                  title: "Professional Team",
                  description: "Senior immigration lawyers, tax experts, and business consultants with extensive experience",
                  badge: "Professional"
                },
                {
                  title: "One-Stop Service", 
                  description: "Complete immigration services from consultation to business settlement",
                  badge: "Convenient"
                },
                {
                  title: "Local Resources",
                  description: "Rich local partnership resources in Netherlands, Italy, and Germany",
                  badge: "Reliable"
                },
                {
                  title: "Personalized Service",
                  description: "Chinese language service with deep understanding of Chinese client needs",
                  badge: "Caring"
                }
              ].map((advantage, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-foreground">{advantage.title}</h4>
                      <Badge variant="secondary" className="text-xs">{advantage.badge}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your European Immigration Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact WEDESEN professional immigration consultants for free assessment and customized immigration solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                <Link to="/en/consultation">
                  Free Immigration Assessment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Call +86-13720010295
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndexEn;