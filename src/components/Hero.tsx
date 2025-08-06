import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/ui/lazy-image";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <LazyImage
          src={heroBg}
          alt="Professional business background"
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
              WEDESEN · 德森国际商务
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
              <span className="font-normal">连接东西</span>
              <span className="text-accent block mt-2">成就未来</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl font-light">
              深耕欧洲市场12年，为您提供荷兰、意大利、德国移民定制方案，以及全方位商务服务支持
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              "12年专业经验",
              "一站式服务",
              "成功案例1000+",
              "7x24小时支持"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="group" asChild>
              <Link to="/consultation?service=移民资格评估">
                免费评估
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <Link to="/why-dutch-immigration">
                荷兰移民优势
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-2xl font-bold text-accent">98%</div>
            <div className="text-sm">成功率</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-2xl font-bold text-accent">30天</div>
            <div className="text-sm">平均办理时间</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;