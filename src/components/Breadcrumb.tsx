import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // 路径到标签的映射
  const pathToLabel: { [key: string]: string } = {
    'services': '服务',
    'immigration': '移民服务',
    'education': '留学服务',
    'consulting': '咨询服务',
    'registration': '公司注册',
    'finance': '财务服务',
    'ecommerce': '电商服务',
    'development': '开发服务',
    'business': '商务服务',
    'consultation': '咨询',
    'general': '通用咨询',
    'netherlands-immigration': '荷兰移民咨询',
    'germany-immigration': '德国移民咨询',
    'europe-education': '欧洲留学服务',
    'netherlands-services': '荷兰移民服务',
    'eligibility-assessment': '移民资格评估',
    'free-assessment': '免费评估',
    'netherlands': '荷兰',
    'immigration-benefits': '移民优势',
    'education-benefits': '教育优势',
    'guides': '指南',
    'smart-immigration': '智能移民指南',
    'tools': '工具',
    'immigration-recommendations': '移民推荐',
    'resources': '资源中心',
    'partners': '合作伙伴',
    'faq': '常见问题',
    'privacy': '隐私政策',
    'terms': '服务条款',
    'cookie': 'Cookie政策',
    'disclaimer': '免责声明'
  };

  // 生成面包屑项目
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: '首页', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = pathToLabel[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // 最后一个段落不需要链接（当前页面）
      if (index === pathSegments.length - 1) {
        breadcrumbs.push({ label });
      } else {
        breadcrumbs.push({ label, href: currentPath });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // 不在首页显示面包屑
  if (location.pathname === '/') {
    return null;
  }

  // 结构化数据 for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://wedeseneu.com${item.href}` : undefined
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav 
        aria-label="面包屑导航" 
        className="bg-gray-50 border-b border-gray-200"
      >
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center">
                {index === 0 ? (
                  <>
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="text-gray-600 hover:text-primary transition-colors flex items-center"
                        aria-label="返回首页"
                      >
                        <Home className="w-4 h-4 mr-1" />
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <span className="text-gray-900 font-medium flex items-center">
                        <Home className="w-4 h-4 mr-1" />
                        {item.label}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-gray-900 font-medium" aria-current="page">
                        {item.label}
                      </span>
                    )}
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;