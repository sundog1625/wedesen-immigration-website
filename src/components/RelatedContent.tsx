import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, FileText, BookOpen, Calculator } from 'lucide-react';

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  type: 'guide' | 'service' | 'tool';
}

interface RelatedContentProps {
  currentPage?: string;
  category?: 'immigration' | 'education' | 'business' | 'general';
}

const RelatedContent: React.FC<RelatedContentProps> = ({ 
  currentPage = '', 
  category = 'general' 
}) => {
  
  // 根据类别定义相关内容
  const relatedContentMap: { [key: string]: RelatedItem[] } = {
    immigration: [
      {
        title: '荷兰移民完整指南',
        description: '详细了解荷兰移民政策、申请流程和所需材料',
        href: '/guides/netherlands-immigration',
        type: 'guide'
      },
      {
        title: '德国蓝卡申请指南',
        description: '德国高技能移民快速通道申请全攻略',
        href: '/guides/germany-immigration',
        type: 'guide'
      },
      {
        title: '移民资格免费评估',
        description: '快速评估您的欧洲移民资格和成功率',
        href: '/consultation/eligibility-assessment',
        type: 'tool'
      },
      {
        title: '荷兰移民优势详解',
        description: '了解荷兰移民的12大优势和福利制度',
        href: '/netherlands/immigration-benefits',
        type: 'guide'
      },
      {
        title: '专业移民咨询服务',
        description: '一对一定制化移民方案设计',
        href: '/services/immigration',
        type: 'service'
      }
    ],
    education: [
      {
        title: '荷兰教育体系介绍',
        description: '深入了解荷兰教育优势和留学机会',
        href: '/netherlands/education-benefits',
        type: 'guide'
      },
      {
        title: '欧洲留学申请服务',
        description: '专业的欧洲名校申请指导和规划',
        href: '/services/education',
        type: 'service'
      },
      {
        title: '留学移民一站式服务',
        description: '从留学到移民的完整解决方案',
        href: '/consultation/europe-education',
        type: 'service'
      },
      {
        title: '免费留学资源下载',
        description: '获取最新的留学指南和申请材料模板',
        href: '/resources',
        type: 'tool'
      }
    ],
    business: [
      {
        title: '欧洲公司注册服务',
        description: '快速在荷兰、德国设立欧洲公司',
        href: '/services/registration',
        type: 'service'
      },
      {
        title: '财务税务筹划',
        description: '专业的欧洲财务管理和税务优化',
        href: '/services/finance',
        type: 'service'
      },
      {
        title: '跨境电商解决方案',
        description: '欧洲电商市场进入和本地化运营',
        href: '/services/ecommerce',
        type: 'service'
      },
      {
        title: '商务咨询服务',
        description: '欧洲市场分析和商业策略制定',
        href: '/services/consulting',
        type: 'service'
      }
    ],
    general: [
      {
        title: '免费移民评估',
        description: '快速了解您的移民可行性',
        href: '/consultation/free-assessment',
        type: 'tool'
      },
      {
        title: '移民资源中心',
        description: '下载免费的移民指南和工具',
        href: '/resources',
        type: 'guide'
      },
      {
        title: '常见问题解答',
        description: '获取移民留学相关问题的答案',
        href: '/faq',
        type: 'guide'
      },
      {
        title: '权威合作伙伴',
        description: '了解我们的官方认证和合作机构',
        href: '/partners',
        type: 'guide'
      }
    ]
  };

  // 获取相关内容，过滤掉当前页面
  const getRelatedContent = (): RelatedItem[] => {
    const content = relatedContentMap[category] || relatedContentMap.general;
    return content
      .filter(item => !currentPage.includes(item.href))
      .slice(0, 4); // 最多显示4个相关内容
  };

  const relatedContent = getRelatedContent();

  const getIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="w-5 h-5" />;
      case 'service':
        return <FileText className="w-5 h-5" />;
      case 'tool':
        return <Calculator className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  if (relatedContent.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            相关内容推荐
          </h2>
          <p className="text-gray-600">
            探索更多相关的服务和资源
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedContent.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${
                      item.type === 'guide' ? 'bg-blue-100' :
                      item.type === 'service' ? 'bg-green-100' :
                      'bg-purple-100'
                    }`}>
                      {getIcon(item.type)}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* 更多资源CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/resources"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            查看所有资源
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;