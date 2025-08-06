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

const IndexNl = () => {
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
      title: "Nederland Immigratie",
      description: "Kennismigrant visa, Investering immigratie, Startup visa",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      features: ["HSM Visa", "Investering €125k+", "EU Blue Card", "Snelle Procedure"]
    },
    {
      title: "Duitsland Immigratie", 
      description: "EU Blue Card, Investering immigratie, Geschoolde arbeider visa",
      icon: <Award className="w-8 h-8 text-red-600" />,
      features: ["EU Blue Card", "€58.400+ Salaris", "Investering €25k+", "EU Toegang"]
    },
    {
      title: "Italië Immigratie",
      description: "Investering immigratie, Zelfstandige visa, Gezinshereniging",
      icon: <Heart className="w-8 h-8 text-green-600" />,
      features: ["Investering €50k+", "Zelfstandig", "Eigendom Aankoop", "EU Paspoort"]
    }
  ];

  const stats = [
    { icon: Users, label: "Succesvolle Gevallen", value: "1000+", color: "text-blue-600" },
    { icon: Award, label: "Jaar Ervaring", value: "12+", color: "text-green-600" },
    { icon: MapPin, label: "Landen Gediend", value: "3", color: "text-purple-600" },
    { icon: Clock, label: "Reactietijd", value: "24u", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="WEDESEN - Professionele Europese Immigratiediensten | Nederland Duitsland Italië"
        description="WEDESEN biedt professionele Europese immigratiediensten met 12 jaar ervaring. Gespecialiseerd in Nederland HSM visa, Duitsland Blue Card, Italië investering immigratie. Hoog slagingspercentage, one-stop service."
        keywords={["Europese immigratie", "Nederland immigratie", "Duitsland immigratie", "Italië immigratie", "HSM visa", "EU Blue Card", "investering immigratie", "WEDESEN"]}
        url="https://wedeseneu.com/nl/"
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
            alt="Professionele Europese immigratiediensten achtergrond"
            className="w-full h-full object-cover"
            priority={true}
            fallback="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LXNpemU9IjI0Ij5MYWRpbmcuLi48L3RleHQ+Cjwvc3ZnPg=="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 rounded-md text-sm font-medium tracking-wider mb-6 border border-white/20">
                WEDESEN · Europese Immigratiediensten
              </span>
              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
                <span className="font-normal">Professionele Europese</span>
                <span className="text-accent block mt-2">Immigratiediensten</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl font-light">
                WEDESEN heeft 12 jaar ervaring in Europese immigratie, gespecialiseerd in Nederland HSM visa, Duitsland Blue Card, en Italië investering immigratie met maatwerk oplossingen voor elke klant.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "12+ Jaar Ervaring",
                "One-Stop Service",
                "1000+ Succesvolle Gevallen",
                "24/7 Ondersteuning"
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
                <Link to="/nl/consultation">
                  Gratis Consultatie
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Download Gids
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary">Onze Diensten</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Europese Immigratie Oplossingen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uitgebreide immigratiediensten voor Nederland, Duitsland en Italië met professionele begeleiding gedurende het hele proces.
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
                    <Link to="/nl/consultation">
                      Meer Informatie
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar om uw Europese immigratie reis te beginnen?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Neem contact op met WEDESEN professionele immigratie consultants voor gratis beoordeling en maatwerk immigratie oplossingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                <Link to="/nl/consultation">
                  Gratis Immigratie Beoordeling
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                Bel +86-13720010295
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndexNl;