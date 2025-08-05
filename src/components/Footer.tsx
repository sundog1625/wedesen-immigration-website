import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const services = [
    "荷兰移民", "意大利移民", "德国移民", "留学服务",
    "公司注册", "财务税务", "电商服务", "网站开发"
  ];

  const countries = [
    "荷兰 Netherlands", "意大利 Italy", "德国 Germany"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-white">
                <Logo />
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              深耕欧洲市场12年，WEDESEN致力于为中欧商务往来架起专业桥梁，成就您的欧洲梦想。
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>13720010295</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>咨询客服获取邮箱</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>荷兰｜德国｜意大利</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">服务项目</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">服务国家</h4>
            <ul className="space-y-3">
              {countries.map((country, index) => (
                <li key={index} className="text-primary-foreground/80 text-sm">
                  {country}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h5 className="font-semibold mb-3">快速链接</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">首页</a></li>
                <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">服务</a></li>
                <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">关于我们</a></li>
                <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">联系我们</a></li>
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">联系我们</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">营业时间</h5>
                <div className="text-sm text-primary-foreground/80 space-y-1">
                  <p>周一至周五: 9:00 - 18:00</p>
                  <p>周六: 10:00 - 16:00</p>
                  <p>周日: 预约服务</p>
                </div>
              </div>
              <div>
                <h5 className="font-medium mb-2">微信咨询</h5>
                <p className="text-sm text-primary-foreground/80">LydiaFSZ</p>
                <p className="text-xs text-primary-foreground/60">一对一专属顾问</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">专业保障</h5>
                <p className="text-sm text-primary-foreground/80">12年专业经验</p>
                <p className="text-sm font-medium text-accent">1000+ 成功案例</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 WEDESEN International Business Services. 保留所有权利.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                隐私政策
              </a>
              <a href="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                服务条款
              </a>
              <a href="/cookie" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Cookie政策
              </a>
              <a href="/disclaimer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                免责声明
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;