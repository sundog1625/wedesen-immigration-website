import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import SEOHead, { organizationSchema } from "@/components/SEOHead";

const Index = () => {
  const hreflangLinks = [
    { lang: "zh-CN", url: "https://wedeseneu.com/" },
    { lang: "en", url: "https://wedeseneu.com/en/" },
    { lang: "nl-NL", url: "https://wedeseneu.com/nl/" },
    { lang: "de-DE", url: "https://wedeseneu.com/de/" },
    { lang: "it-IT", url: "https://wedeseneu.com/it/" },
    { lang: "x-default", url: "https://wedeseneu.com/" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="WEDESEN德森 - 专业欧洲移民服务 | 荷兰移民 德国移民 意大利移民"
        description="WEDESEN德森12年专业经验，提供荷兰技术移民、德国蓝卡申请、意大利投资移民等欧洲移民服务。一站式移民咨询，成功率高，专业可靠。"
        keywords={["荷兰移民", "德国移民", "意大利移民", "荷兰技术移民", "德国蓝卡", "意大利投资移民", "欧洲移民", "留学移民", "移民咨询", "WEDESEN德森"]}
        url="https://wedeseneu.com/"
        structuredData={organizationSchema}
        hreflang={hreflangLinks}
      />
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
