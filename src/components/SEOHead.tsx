import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
  hreflang?: Array<{
    lang: string;
    url: string;
  }>;
}

const SEOHead = ({
  title = "WEDESEN德森 - 专业欧洲移民服务 | 荷兰移民 德国移民 意大利移民",
  description = "WEDESEN德森12年专业经验，提供荷兰技术移民、德国蓝卡申请、意大利投资移民等欧洲移民服务。一站式移民咨询，成功率高，专业可靠。",
  keywords = ["荷兰移民", "德国移民", "意大利移民", "荷兰技术移民", "德国蓝卡", "意大利投资移民", "欧洲移民", "留学移民", "移民咨询", "WEDESEN德森"],
  image = "/og-image.jpg",
  url = "https://wedeseneu.com",
  type = "website",
  structuredData,
  hreflang = []
}: SEOHeadProps) => {
  const fullTitle = title.includes("WEDESEN") ? title : `${title} - WEDESEN德森国际商务`;
  
  return (
    <Helmet>
      {/* 基础元数据 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="WEDESEN德森国际商务" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="WEDESEN德森国际商务" />
      <meta property="og:locale" content="zh_CN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* 移动端优化 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#667eea" />
      
      {/* 结构化数据 */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* 预连接优化 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Hreflang标签 */}
      {hreflang.map(({ lang, url: hreflangUrl }) => (
        <link
          key={lang}
          rel="alternate"
          hreflang={lang}
          href={hreflangUrl}
        />
      ))}
    </Helmet>
  );
};

// 预定义的结构化数据
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WEDESEN德森",
  "alternateName": "德森国际商务",
  "description": "专业欧洲移民服务机构，12年经验，提供荷兰移民、德国移民、意大利移民等专业服务",
  "url": "https://wedeseneu.com",
  "logo": "https://wedeseneu.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-13720010295",
    "contactType": "Customer Service",
    "email": "wedeseneu@gmail.com",
    "availableLanguage": ["Chinese", "English", "Dutch", "German", "Italian"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CN"
  },
  "foundingDate": "2012",
  "employees": "10-50",
  "serviceArea": ["Netherlands", "Germany", "Italy", "China"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "欧洲移民留学服务",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "荷兰移民服务",
          "description": "包括高技能移民、投资移民、创业移民等"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "德国移民服务",
          "description": "欧盟蓝卡申请、投资移民等服务"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "意大利移民服务",
          "description": "投资移民、居留签证申请服务"
        }
      }
    ]
  }
};

export const dutchImmigrationSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "荷兰移民优势详解 - 世界顶级福利制度",
  "description": "荷兰移民12大优势：世界第3幸福指数、免费医疗教育、HSM技术移民、欧盟护照等",
  "author": {
    "@type": "Organization",
    "name": "WEDESEN德森"
  },
  "publisher": {
    "@type": "Organization", 
    "name": "WEDESEN德森",
    "logo": {
      "@type": "ImageObject",
      "url": "https://wedeseneu.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://wedeseneu.com/why-dutch-immigration"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2025-08-06",
  "about": [
    {
      "@type": "Thing",
      "name": "荷兰移民"
    },
    {
      "@type": "Thing", 
      "name": "荷兰技术移民"
    },
    {
      "@type": "Thing",
      "name": "欧洲移民"
    }
  ]
};

export const consultationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "免费移民咨询服务",
  "description": "提供专业的欧洲移民咨询评估服务",
  "provider": {
    "@type": "Organization",
    "name": "WEDESEN德森国际商务"
  },
  "areaServed": ["Netherlands", "Germany", "Italy"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "咨询服务",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "移民资格评估"
        }
      }
    ]
  }
};

export default SEOHead;