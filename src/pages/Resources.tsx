import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, FileText, Calculator, CheckCircle } from "lucide-react";
import SEOHead from '@/components/SEOHead';

const Resources = () => {
  const resourceCategories = [
    {
      title: "移民评估工具",
      description: "免费在线工具帮助评估移民可行性",
      resources: [
        {
          name: "荷兰HSM高技能移民评分器",
          description: "评估您是否符合荷兰高技能移民条件",
          type: "tool",
          link: "/tools/hsm-calculator",
          downloadable: false
        },
        {
          name: "德国蓝卡申请条件检查器",
          description: "快速检查您是否满足德国蓝卡申请要求",
          type: "tool", 
          link: "/tools/blue-card-checker",
          downloadable: false
        }
      ]
    },
    {
      title: "移民指南文档",
      description: "详细的移民流程指导文档",
      resources: [
        {
          name: "2025年荷兰移民完整指南 (PDF)",
          description: "包含最新政策、申请流程、材料清单的完整指南",
          type: "pdf",
          link: "/downloads/netherlands-immigration-guide-2025.pdf",
          downloadable: true
        },
        {
          name: "德国移民政策变化分析报告",
          description: "2025年德国移民政策最新变化详细解读",
          type: "pdf", 
          link: "/downloads/germany-policy-changes-2025.pdf",
          downloadable: true
        },
        {
          name: "欧洲各国移民费用对比表",
          description: "荷兰、德国、意大利等国移民费用详细对比",
          type: "excel",
          link: "/downloads/europe-immigration-costs-2025.xlsx", 
          downloadable: true
        }
      ]
    },
    {
      title: "成功案例研究",
      description: "真实客户移民成功案例分析",
      resources: [
        {
          name: "IT专业人士荷兰移民案例集",
          description: "10个IT行业客户成功移居荷兰的详细案例",
          type: "case-study",
          link: "/case-studies/it-professionals-netherlands",
          downloadable: false
        },
        {
          name: "企业家德国创业移民指南",
          description: "企业家在德国创业并获得居留权的实操指南",
          type: "case-study",
          link: "/case-studies/entrepreneur-germany", 
          downloadable: false
        }
      ]
    },
    {
      title: "法律文档模板",
      description: "常用移民申请文档模板",
      resources: [
        {
          name: "荷兰居留许可申请表模板",
          description: "标准荷兰居留许可申请表格模板",
          type: "template",
          link: "/templates/netherlands-residence-application.pdf",
          downloadable: true
        },
        {
          name: "德国求职签证申请材料清单",
          description: "德国求职签证所需材料的完整清单模板",
          type: "template", 
          link: "/templates/germany-job-seeker-visa-checklist.pdf",
          downloadable: true
        }
      ]
    },
    {
      title: "市场研究报告", 
      description: "欧洲移民市场趋势分析",
      resources: [
        {
          name: "2025年欧洲移民趋势报告",
          description: "基于官方数据的欧洲各国移民趋势深度分析",
          type: "report",
          link: "/reports/europe-immigration-trends-2025",
          downloadable: true
        },
        {
          name: "中国人欧洲移民偏好调研报告", 
          description: "1000+中国移民申请者偏好和趋势调研",
          type: "report",
          link: "/reports/chinese-europe-immigration-preferences",
          downloadable: true
        }
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'tool': return <Calculator className="w-5 h-5" />;
      case 'pdf': return <FileText className="w-5 h-5" />;
      case 'excel': return <FileText className="w-5 h-5" />;
      case 'case-study': return <CheckCircle className="w-5 h-5" />;
      case 'template': return <FileText className="w-5 h-5" />;
      case 'report': return <FileText className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const resourcesSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "欧洲移民资源中心 - 免费工具和指南",
    "description": "提供免费的欧洲移民评估工具、详细指南、成功案例和法律文档模板，帮助您更好地了解和准备移民申请。",
    "url": "https://wedeseneu.com/resources",
    "mainEntity": {
      "@type": "ItemList", 
      "itemListElement": resourceCategories.map((category, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": category.title,
        "description": category.description
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": "WEDESEN德森",
      "url": "https://wedeseneu.com"
    }
  };

  return (
    <>
      <SEOHead
        title="欧洲移民免费资源中心 - 工具、指南、案例分析"
        description="WEDESEN德森提供免费的欧洲移民评估工具、详细移民指南、成功案例分析和法律文档模板。荷兰德国意大利移民必备资源，专业可靠。"
        keywords={["欧洲移民资源", "移民评估工具", "移民指南", "荷兰移民工具", "德国蓝卡计算器", "移民案例分析", "移民文档模板"]}
        url="https://wedeseneu.com/resources"
        structuredData={resourcesSchema}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                欧洲移民资源中心
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                免费提供专业的移民评估工具、详细指南和成功案例，助您轻松开启欧洲移民之路
              </p>
            </div>
          </div>
        </div>

        {/* Resources Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card key={resourceIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2">
                            {getIcon(resource.type)}
                            <CardTitle className="text-lg">{resource.name}</CardTitle>
                          </div>
                          {resource.downloadable && (
                            <Download className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">
                          {resource.description}
                        </CardDescription>
                        <Button 
                          className="w-full" 
                          variant={resource.downloadable ? "default" : "outline"}
                        >
                          {resource.downloadable ? "下载资源" : "查看详情"}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">需要个性化移民方案？</h2>
            <p className="text-xl mb-6 opacity-90">
              我们的资深移民顾问为您提供一对一专业咨询
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              立即预约免费咨询
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;