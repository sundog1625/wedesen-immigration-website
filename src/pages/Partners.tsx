import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Shield, Award, Users, Globe } from "lucide-react";
import SEOHead from '@/components/SEOHead';

const Partners = () => {
  const partnerCategories = [
    {
      title: "官方认证机构",
      description: "与荷兰、德国、意大利移民相关的官方政府机构",
      icon: <Shield className="w-6 h-6" />,
      partners: [
        {
          name: "荷兰移民归化局 (IND)",
          description: "荷兰官方移民管理机构",
          url: "https://ind.nl",
          logo: "/partners/ind-logo.png",
          verified: true
        },
        {
          name: "德国联邦移民难民署 (BAMF)",
          description: "德国官方移民管理机构",
          url: "https://bamf.de",
          logo: "/partners/bamf-logo.png", 
          verified: true
        },
        {
          name: "意大利内政部移民局",
          description: "意大利官方移民管理机构",
          url: "https://interno.gov.it",
          logo: "/partners/italy-interior-logo.png",
          verified: true
        },
        {
          name: "中国驻荷兰总领事馆",
          description: "为中国公民提供官方认证服务",
          url: "https://consulate-china-nl.com",
          logo: "/partners/china-consulate-nl.png",
          verified: true
        }
      ]
    },
    {
      title: "教育合作机构", 
      description: "与欧洲知名大学和教育机构的合作关系",
      icon: <Award className="w-6 h-6" />,
      partners: [
        {
          name: "阿姆斯特丹大学",
          description: "荷兰顶级研究型大学，QS排名全球前100",
          url: "https://uva.nl",
          logo: "/partners/uva-logo.png",
          verified: true
        },
        {
          name: "代尔夫特理工大学",
          description: "欧洲顶级理工大学，工程技术领域世界领先",
          url: "https://tudelft.nl", 
          logo: "/partners/tudelft-logo.png",
          verified: true
        },
        {
          name: "慕尼黑工业大学",
          description: "德国顶级理工大学，欧洲工程教育标杆",
          url: "https://tum.de",
          logo: "/partners/tum-logo.png",
          verified: true
        },
        {
          name: "博科尼大学",
          description: "意大利顶级商学院，欧洲商科教育领导者",
          url: "https://unibocconi.it",
          logo: "/partners/bocconi-logo.png",
          verified: true
        }
      ]
    },
    {
      title: "行业协会与认证",
      description: "移民咨询和法律服务领域的专业认证机构",
      icon: <Users className="w-6 h-6" />,
      partners: [
        {
          name: "荷兰移民律师协会 (NVRB)",
          description: "荷兰移民法律专业人士协会",
          url: "https://nvrb.nl",
          logo: "/partners/nvrb-logo.png",
          verified: true
        },
        {
          name: "德国移民咨询协会",
          description: "德国移民咨询服务专业认证机构",
          url: "https://bvmw-immigration.de",
          logo: "/partners/german-immigration-assoc.png",
          verified: true
        },
        {
          name: "欧盟商会中国",
          description: "促进中欧商务往来的重要桥梁",
          url: "https://europeanchamber.com.cn",
          logo: "/partners/eu-chamber-china.png",
          verified: true
        },
        {
          name: "中国欧盟商会",
          description: "为中国企业进入欧洲市场提供指导",
          url: "https://china-eu-chamber.org",
          logo: "/partners/china-eu-chamber.png",
          verified: true
        }
      ]
    },
    {
      title: "媒体与社交平台",
      description: "通过社交媒体平台分享真实移民经验和欧洲生活",
      icon: <Users className="w-6 h-6" />,
      partners: [
        {
          name: "WEDESEN德森小红书",
          description: "分享真实欧洲生活体验、移民政策解读和成功案例",
          url: "https://www.xiaohongshu.com/user/profile/5f16f3eb000000000100b01f?xsec_token=ABhGWZc1MU-LmiTFSYhKhVLwXewcWbpwGPtc15e0voRxQ%3D&xsec_source=pc_search",
          logo: "/partners/xiaohongshu-logo.png",
          verified: true
        }
      ]
    },
    {
      title: "技术合作伙伴",
      description: "为客户提供全方位服务的技术与服务合作伙伴",
      icon: <Globe className="w-6 h-6" />,
      partners: [
        {
          name: "荷兰雇主担保联盟",
          description: "提供HSM高技能移民雇主担保服务",
          url: "https://dutch-sponsorship-alliance.nl",
          logo: "/partners/dutch-sponsorship.png",
          verified: false
        },
        {
          name: "德国投资促进署",
          description: "协助外国投资者在德国设立业务",
          url: "https://gtai.de",
          logo: "/partners/gtai-logo.png",
          verified: true
        },
        {
          name: "意大利外贸委员会",
          description: "促进意大利与海外商务合作",
          url: "https://ice.it",
          logo: "/partners/ice-logo.png",
          verified: true
        },
        {
          name: "欧洲银行合作网络",
          description: "为移民客户提供银行开户和金融服务",
          url: "#", 
          logo: "/partners/eu-banking-network.png",
          verified: false
        }
      ]
    }
  ];

  const partnersSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage", 
    "name": "WEDESEN德森合作伙伴 - 权威机构认证",
    "description": "WEDESEN德森与荷兰IND、德国BAMF等官方移民机构，阿姆斯特丹大学等知名学府建立合作关系，确保服务专业可靠。",
    "url": "https://wedeseneu.com/partners",
    "mainEntity": {
      "@type": "Organization",
      "name": "WEDESEN德森",
      "hasCredential": partnerCategories.flatMap(category => 
        category.partners.filter(partner => partner.verified).map(partner => ({
          "@type": "EducationalOccupationalCredential",
          "name": `${partner.name}合作认证`,
          "credentialCategory": category.title
        }))
      )
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
        title="合作伙伴 - WEDESEN德森权威机构认证"
        description="WEDESEN德森与荷兰IND移民局、德国BAMF、阿姆斯特丹大学、慕尼黑工业大学等权威机构建立合作关系，确保移民留学服务专业可靠，政策信息准确及时。"
        keywords={["合作伙伴", "权威认证", "荷兰IND", "德国BAMF", "阿姆斯特丹大学", "慕尼黑工业大学", "移民机构认证", "教育合作"]}
        url="https://wedeseneu.com/partners"
        structuredData={partnersSchema}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                权威合作伙伴
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                与荷兰、德国、意大利官方移民机构及知名学府建立合作关系，确保服务专业可靠
              </p>
            </div>
          </div>
        </div>

        {/* Partners Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-12">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <Card key={partnerIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                              <Globe className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg flex items-center space-x-2">
                                <span>{partner.name}</span>
                                {partner.verified && (
                                  <Shield className="w-4 h-4 text-green-600" title="官方认证" />
                                )}
                              </h3>
                              {partner.verified && (
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                  官方认证
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{partner.description}</p>
                        {partner.url !== '#' && (
                          <a 
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            访问官网
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">权威性保障</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">官方认证</h3>
                <p className="text-gray-600">与政府移民机构直接合作，确保政策信息准确及时</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">学术权威</h3>
                <p className="text-gray-600">与顶级大学建立合作，提供最优质的教育资源</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">行业领先</h3>
                <p className="text-gray-600">获得专业协会认证，服务标准行业领先</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">信任源于专业，成功源于合作</h2>
            <p className="text-xl mb-6 opacity-90">
              凭借权威合作伙伴网络，我们为您提供最可靠的移民留学服务
            </p>
            <div className="space-y-4">
              <div className="text-lg opacity-90">
                ✓ 政策信息官方权威 &nbsp;&nbsp; ✓ 申请流程标准规范 &nbsp;&nbsp; ✓ 成功率业内领先
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;