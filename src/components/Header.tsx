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
            
            {/* 移民服务下拉菜单 */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
                <span>移民服务</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link 
                    to="/why-dutch-immigration" 
                    className="block px-3 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded border-b border-border/30"
                    onClick={() => {
                      trackEvent('click', 'nav_dutch_immigration');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">🇳🇱 移民荷兰</div>
                    <div className="text-xs text-muted-foreground">世界顶级福利制度详解</div>
                  </Link>
                  <Link 
                    to="/services/immigration" 
                    className="block px-3 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded"
                    onClick={() => {
                      trackEvent('click', 'nav_immigration_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">移民咨询服务</div>
                    <div className="text-xs text-muted-foreground">荷兰、意大利、德国移民办理</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* 留学服务下拉菜单 */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
                <span>留学服务</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link 
                    to="/why-dutch-education" 
                    className="block px-3 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded border-b border-border/30"
                    onClick={() => {
                      trackEvent('click', 'nav_dutch_education');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">🎓 留学荷兰</div>
                    <div className="text-xs text-muted-foreground">高含金量学历认证详解</div>
                  </Link>
                  <Link 
                    to="/services/education" 
                    className="block px-3 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded"
                    onClick={() => {
                      trackEvent('click', 'nav_education_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">留学咨询服务</div>
                    <div className="text-xs text-muted-foreground">欧洲名校申请与留学规划</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* 商务服务下拉菜单 */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center space-x-1">
                <span>商务服务</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link 
                    to="/services/consulting" 
                    className="block px-3 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded"
                    onClick={() => {
                      trackEvent('click', 'nav_consulting_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    专业移民与商务咨询
                  </Link>
                  <Link 
                    to="/services/registration" 
                    className="block px-3 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded"
                    onClick={() => {
                      trackEvent('click', 'nav_registration_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    欧洲公司设立与企业服务
                  </Link>
                  <Link 
                    to="/services/finance" 
                    className="block px-3 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded"
                    onClick={() => {
                      trackEvent('click', 'nav_finance_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    财务管理与税务筹划
                  </Link>
                  <Link 
                    to="/services/ecommerce" 
                    className="block px-3 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded"
                    onClick={() => {
                      trackEvent('click', 'nav_ecommerce_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    跨境电商与本地化运营
                  </Link>
                  <Link 
                    to="/services/development" 
                    className="block px-3 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded"
                    onClick={() => {
                      trackEvent('click', 'nav_development_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    网站设计与开发服务
                  </Link>
                  <Link 
                    to="/services/business" 
                    className="block px-3 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors rounded"
                    onClick={() => {
                      trackEvent('click', 'nav_business_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    商务代理与支持服务
                  </Link>
                </div>
              </div>
            </div>

            {/* 在线咨询 */}
            <Link 
              to="/consultation?service=通用咨询" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => {
                trackEvent('click', 'nav_consultation');
                setIsMobileMenuOpen(false);
              }}
            >
              在线咨询
            </Link>

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
              
              {/* 移民服务 */}
              <div className="py-2">
                <div className="text-foreground font-medium mb-3">移民服务</div>
                <div className="pl-4 space-y-3">
                  <Link 
                    to="/why-dutch-immigration" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_dutch_immigration');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">🇳🇱 移民荷兰</div>
                    <div className="text-xs text-muted-foreground/70">世界顶级福利制度详解</div>
                  </Link>
                  <Link 
                    to="/services/immigration" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_immigration_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">移民咨询服务</div>
                    <div className="text-xs text-muted-foreground/70">荷兰、意大利、德国移民办理</div>
                  </Link>
                </div>
              </div>
              
              {/* 留学服务 */}
              <div className="py-2">
                <div className="text-foreground font-medium mb-3">留学服务</div>
                <div className="pl-4 space-y-3">
                  <Link 
                    to="/why-dutch-education" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_dutch_education');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">🎓 留学荷兰</div>
                    <div className="text-xs text-muted-foreground/70">高含金量学历认证详解</div>
                  </Link>
                  <Link 
                    to="/services/education" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_education_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="font-medium">留学咨询服务</div>
                    <div className="text-xs text-muted-foreground/70">欧洲名校申请与留学规划</div>
                  </Link>
                </div>
              </div>
              
              {/* 商务服务 */}
              <div className="py-2">
                <div className="text-foreground font-medium mb-3">商务服务</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/services/consulting" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_consulting_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    专业移民与商务咨询
                  </Link>
                  <Link 
                    to="/services/registration" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_registration_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    欧洲公司设立与企业服务
                  </Link>
                  <Link 
                    to="/services/finance" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_finance_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    财务管理与税务筹划
                  </Link>
                  <Link 
                    to="/services/ecommerce" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_ecommerce_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    跨境电商与本地化运营
                  </Link>
                  <Link 
                    to="/services/development" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_development_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    网站设计与开发服务
                  </Link>
                  <Link 
                    to="/services/business" 
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => {
                      trackEvent('click', 'mobile_nav_business_service');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    商务代理与支持服务
                  </Link>
                </div>
              </div>

              {/* 在线咨询 */}
              <Link 
                to="/consultation?service=通用咨询" 
                className="text-left text-foreground hover:text-primary transition-colors py-2"
                onClick={() => {
                  trackEvent('click', 'mobile_nav_consultation');
                  setIsMobileMenuOpen(false);
                }}
              >
                在线咨询
              </Link>
              
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