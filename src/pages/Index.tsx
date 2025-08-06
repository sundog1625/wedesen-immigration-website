import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* 临时测试链接 */}
      <div className="fixed top-20 right-4 z-50 bg-yellow-100 border-2 border-yellow-500 p-4 rounded-lg shadow-lg">
        <p className="font-bold text-sm mb-2">新页面测试链接：</p>
        <a href="/why-dutch-immigration" className="block text-blue-600 hover:underline text-sm">→ 荷兰移民优势</a>
        <a href="/why-dutch-education" className="block text-blue-600 hover:underline text-sm">→ 荷兰留学优势</a>
        <a href="/admin" className="block text-blue-600 hover:underline text-sm">→ 管理后台</a>
        <p className="text-xs mt-2 text-gray-600">更新时间: {new Date().toLocaleString()}</p>
      </div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
