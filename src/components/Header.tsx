import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">首页</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">服务</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">关于我们</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">联系我们</a>
          </nav>

          {/* Contact Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>13720010295</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>咨询客服获取邮箱</span>
              </div>
            </div>
            <Button variant="hero" size="sm">
              免费咨询
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;