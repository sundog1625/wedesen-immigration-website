import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TestDeployment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              部署测试页面
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              当前时间：{new Date().toLocaleString('zh-CN')}
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                ✅ 新功能已成功部署
              </h2>
              <ul className="text-left text-green-700 space-y-2">
                <li>• 荷兰移民优势页面：/why-dutch-immigration</li>
                <li>• 荷兰留学优势页面：/why-dutch-education</li>
                <li>• 管理后台：/admin (密码: wedesen2024)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TestDeployment;