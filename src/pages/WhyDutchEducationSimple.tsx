import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const WhyDutchEducationSimple = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              为什么选择
              <span className="text-primary font-normal block mt-2">荷兰留学？</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              世界顶级教育质量，全英文授课环境
              <br />
              高含金量学历，开启全球职业发展之路
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/consultation?service=欧洲留学服务">
                免费留学规划
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">#4</div>
              <div className="text-sm text-muted-foreground">全球教育质量排名</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">14所</div>
              <div className="text-sm text-muted-foreground">世界前200强大学</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2000+</div>
              <div className="text-sm text-muted-foreground">英语授课项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">毕业生就业率</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Advantages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <span className="text-primary">六大学术优势</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              荷兰教育以其卓越的学术声誉和创新的教学模式享誉全球
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">世界顶级学术声誉</CardTitle>
                <CardDescription>荷兰教育体系享誉全球，学历含金量极高</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">14所大学进入世界前200</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">阿姆斯特丹大学全球排名#58</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">代尔夫特理工全球工科排名#3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">全英文授课环境</CardTitle>
                <CardDescription>超过2000个英语授课项目，无需荷兰语基础</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">本科英语项目400+个</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">硕士英语项目1600+个</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">95%荷兰人流利英语</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">优越就业前景</CardTitle>
                <CardDescription>毕业后就业机会丰富，职业发展广阔</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">就业率高达95%+</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">一年求职签证政策</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">欧盟境内自由就业</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary">顶级名校荟萃</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              多所世界排名前列大学，提供高含金量学历
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="relative hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">阿姆斯特丹大学</CardTitle>
                <CardDescription className="text-primary font-medium">
                  社会科学、传媒学 - 全球排名#58
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">荷兰最大综合性大学</p>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">代尔夫特理工大学</CardTitle>
                <CardDescription className="text-primary font-medium">
                  工程技术、建筑学 - 全球排名#47
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">欧洲顶级理工院校，工科全球第3</p>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">瓦格宁根大学</CardTitle>
                <CardDescription className="text-primary font-medium">
                  农业科学、环境学 - 全球排名#64
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">农业科学全球第1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyDutchEducationSimple;