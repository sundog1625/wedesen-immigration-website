import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

const SEOHead = ({
  title = "WEDESEN德森国际商务 - 专业欧洲移民留学服务",
  description = "WEDESEN专注欧洲移民留学12年，提供荷兰、德国、意大利移民服务，以及留学、公司注册、财务税务、电商等全方位商务服务。累计3000+成功案例，一站式解决方案。",
  keywords = ["欧洲移民", "荷兰移民", "德国移民", "意大利移民", "欧洲留学", "移民咨询", "WEDESEN", "德森国际"],
  image = "/og-image.jpg",
  url = "https://wedesen-immigration-website.vercel.app",
  type = "website",
  structuredData
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
    </Helmet>
  );
};

// 预定义的结构化数据
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WEDESEN德森国际商务",
  "description": "专业欧洲移民留学服务机构，提供荷兰、德国、意大利移民及相关商务服务",
  "url": "https://wedesen-immigration-website.vercel.app",
  "logo": "https://wedesen-immigration-website.vercel.app/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-13720010295",
    "contactType": "customer service",
    "availableLanguage": ["Chinese", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CN"
  },
  "foundingDate": "2012",
  "employees": "10-50",
  "serviceArea": ["Netherlands", "Germany", "Italy"],
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