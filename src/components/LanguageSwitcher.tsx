import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const LanguageSwitcher = () => {
  const location = useLocation();
  
  // 根据当前路径确定语言
  const getCurrentLanguage = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/nl')) return 'nl'; 
    if (path.startsWith('/de')) return 'de';
    if (path.startsWith('/it')) return 'it';
    return 'zh';
  };

  // 获取对应语言的路径
  const getLanguagePath = (lang: string) => {
    const currentPath = location.pathname;
    const currentLang = getCurrentLanguage();
    
    // 移除当前语言前缀
    let basePath = currentPath;
    if (currentLang !== 'zh') {
      basePath = currentPath.replace(`/${currentLang}`, '') || '/';
    }
    
    // 添加新语言前缀
    if (lang === 'zh') {
      return basePath === '/' ? '/' : basePath;
    } else {
      return `/${lang}${basePath === '/' ? '/' : basePath}`;
    }
  };

  const languages = [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  const currentLang = getCurrentLanguage();
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLanguage?.flag} {currentLanguage?.name}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} asChild>
            <Link
              to={getLanguagePath(language.code)}
              className={`flex items-center gap-2 w-full ${
                currentLang === language.code ? 'bg-accent text-accent-foreground' : ''
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
              {currentLang === language.code && (
                <span className="ml-auto text-xs">✓</span>
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;