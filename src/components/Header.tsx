import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import { useAnalytics } from "@/lib/analytics";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { trackEvent } = useAnalytics();

  // 智能导航处理
  const handleNavClick = (anchor: string) => {
    trackEvent('click', `nav_${anchor}`, { from: location.pathname });
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      // 在首页，使用锚点滚动
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 在其他页面，先跳转到首页再滚动
      window.location.href = `/#${anchor}`;
    }
  };

  const handleConsultationClick = () => {
    trackEvent('click', 'header_consultation_button', { from: location.pathname });
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              首页
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              服务
            </button>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
                <span>荷兰专题</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link 
                  to="/why-dutch-immigration" 
                  className="block px-4 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-b border-border/50"
                  onClick={() => {
                    trackEvent('click', 'nav_dutch_immigration');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="font-medium">移民荷兰</div>
                  <div className="text-xs text-muted-foreground">世界顶级福利制度</div>
                </Link>
                <Link 
                  to="/why-dutch-education" 
                  className="block px-4 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                  onClick={() => {
                    trackEvent('click', 'nav_dutch_education');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="font-medium">留学荷兰</div>
                  <div className="text-xs text-muted-foreground">高含金量学历认证</div>
                </Link>
              </div>
            </div>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              关于我们
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              联系我们
            </button>
          </nav>

          {/* Desktop Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
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
            <Button variant="hero" size="sm" asChild>
              <Link to="/consultation?service=通用咨询" onClick={handleConsultationClick}>
                免费咨询
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="hero" size="sm" asChild>
              <Link to="/consultation?service=通用咨询" onClick={handleConsultationClick}>
                咨询
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                首页
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                服务
              </button>
              
              {/* Mobile Dutch Topics Section */}
              <div className="py-2">
                <div className="text-foreground font-medium mb-3">荷兰专题</div>
                <div className="pl-4 space-y-3">
                  <Link 
                    to="/why-dutch-immigration" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_dutch_immigration');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">移民荷兰</div>
                    <div className="text-xs text-muted-foreground/70">世界顶级福利制度</div>
                  </Link>
                  <Link 
                    to="/why-dutch-education" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_dutch_education');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">留学荷兰</div>
                    <div className="text-xs text-muted-foreground/70">高含金量学历认证</div>
                  </Link>
                </div>
              </div>
              
              <button 
                onClick={() => handleNavClick('about')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                关于我们
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                联系我们
              </button>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>13720010295</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>咨询客服获取邮箱</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;