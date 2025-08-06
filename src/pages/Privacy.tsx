import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">隐私政策</h1>
          <div className="text-sm text-muted-foreground mb-8">
            最后更新日期：2024年1月1日
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. 信息收集</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                WEDESEN（德森）国际商务（以下简称"我们"）致力于保护您的隐私。本政策说明我们如何收集、使用和保护您的个人信息。
              </p>
              <h3 className="text-xl font-medium text-foreground mb-3">我们收集的信息类型：</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>个人身份信息：姓名、电话号码、电子邮箱地址</li>
                <li>服务相关信息：咨询内容、服务需求、申请材料</li>
                <li>技术信息：IP地址、浏览器类型、访问时间、页面访问记录</li>
                <li>通信记录：与我们的通话、邮件往来、聊天记录</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. 信息使用</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我们使用收集的信息用于以下目的：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>提供移民、留学、商务等专业咨询服务</li>
                <li>处理您的服务申请和跟进服务进度</li>
                <li>与您沟通服务相关事宜</li>
                <li>改善我们的服务质量和用户体验</li>
                <li>发送服务更新、政策变化等重要通知</li>
                <li>遵守法律法规要求</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. 信息共享</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我们不会出售、交易或以其他方式转让您的个人信息给第三方，除非：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>获得您的明确同意</li>
                <li>为提供服务需要与合作伙伴（如律师事务所、政府机构）共享</li>
                <li>法律法规要求或司法程序需要</li>
                <li>保护我们的权利、财产或安全</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. 信息安全</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我们采取多种安全措施保护您的个人信息：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>使用SSL加密技术保护数据传输</li>
                <li>限制员工访问个人信息的权限</li>
                <li>定期更新安全系统和防护措施</li>
                <li>对敏感信息进行加密存储</li>
                <li>建立数据备份和恢复机制</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookie使用</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我们的网站使用Cookie和类似技术来：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>记住您的偏好设置</li>
                <li>分析网站使用情况</li>
                <li>改善网站功能和用户体验</li>
                <li>提供个性化服务</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                您可以通过浏览器设置管理或禁用Cookie，但这可能影响网站的正常功能。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. 您的权利</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                您对个人信息享有以下权利：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>访问权：要求查看我们持有的您的个人信息</li>
                <li>更正权：要求更正不准确或不完整的信息</li>
                <li>删除权：在特定情况下要求删除您的个人信息</li>
                <li>限制处理权：要求限制对您个人信息的处理</li>
                <li>数据携带权：要求以结构化格式获取您的个人信息</li>
                <li>反对权：反对我们处理您的个人信息</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. 数据保留</h2>
              <p className="text-muted-foreground leading-relaxed">
                我们将根据法律要求和业务需要保留您的个人信息。一般情况下，我们会在服务关系结束后保留信息7年，以满足法规要求和处理可能的争议。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. 政策更新</h2>
              <p className="text-muted-foreground leading-relaxed">
                我们可能会不时更新本隐私政策。重大变更时，我们会通过网站公告或直接通知的方式告知您。请定期查看本政策以了解最新信息。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. 联系我们</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>电话：</strong>13720010295</li>
                <li><strong>微信：</strong>LydiaFSZ</li>
                <li><strong>邮箱：</strong>wedeseneu@gmail.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;