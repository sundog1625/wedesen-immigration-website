import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookie = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie政策</h1>
          <div className="text-sm text-muted-foreground mb-8">
            最后更新日期：2024年1月1日
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. 什么是Cookie</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookie是存储在您设备上的小型文本文件，当您访问网站时由网站服务器发送给您的浏览器。Cookie帮助网站记住您的偏好和活动，提供更好的用户体验。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. 我们使用的Cookie类型</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">必需Cookie</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                这些Cookie对网站正常运行必不可少，无法禁用。它们通常仅在您进行操作时设置，如设置隐私偏好、登录或填写表单。
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">功能Cookie</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                这些Cookie用于提供增强功能和个性化服务，如记住您的语言偏好、地区设置等。
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">分析Cookie</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                这些Cookie帮助我们了解访问者如何使用网站，包括哪些页面最受欢迎、用户如何浏览网站等，以便改进网站性能。
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">营销Cookie</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                这些Cookie用于跟踪访问者在不同网站上的活动，目的是展示相关和有吸引力的广告内容。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. 我们使用Cookie的目的</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>确保网站正常运行和安全</li>
                <li>记住您的偏好设置和选择</li>
                <li>提供个性化的用户体验</li>
                <li>分析网站使用情况和性能</li>
                <li>改进我们的服务和内容</li>
                <li>提供相关的信息和服务推荐</li>
                <li>防止欺诈和滥用行为</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. 第三方Cookie</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我们的网站可能包含第三方服务，这些服务可能设置自己的Cookie：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Google Analytics：</strong>用于网站分析和统计</li>
                <li><strong>社交媒体插件：</strong>如微信、微博分享按钮</li>
                <li><strong>在线客服系统：</strong>提供实时客服支持</li>
                <li><strong>支付服务提供商：</strong>处理在线支付</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                这些第三方Cookie受其各自隐私政策约束，我们建议您查看相关第三方的隐私政策。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookie的有效期</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">会话Cookie</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                临时Cookie，在您关闭浏览器时自动删除。
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">持久Cookie</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                在您的设备上保存一段指定时间，直到过期或被手动删除。不同Cookie的有效期从几天到几年不等。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. 如何管理Cookie</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                您可以通过以下方式管理Cookie：
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">浏览器设置</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                大多数浏览器允许您：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>查看存储在设备上的Cookie</li>
                <li>删除所有或特定Cookie</li>
                <li>阻止来自特定网站的Cookie</li>
                <li>阻止所有第三方Cookie</li>
                <li>在设置Cookie时收到通知</li>
              </ul>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">常见浏览器设置方法</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Chrome：</strong>设置 &gt; 高级 &gt; 隐私设置和安全性 &gt; Cookie和其他网站数据</li>
                <li><strong>Firefox：</strong>选项 &gt; 隐私与安全 &gt; Cookie和网站数据</li>
                <li><strong>Safari：</strong>偏好设置 &gt; 隐私 &gt; Cookie和网站数据</li>
                <li><strong>Edge：</strong>设置 &gt; Cookie和站点权限</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. 禁用Cookie的影响</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                禁用Cookie可能影响网站功能：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>无法记住您的偏好设置</li>
                <li>某些功能可能无法正常工作</li>
                <li>需要重复输入信息</li>
                <li>个性化体验受到限制</li>
                <li>网站性能分析数据不准确</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookie政策更新</h2>
              <p className="text-muted-foreground leading-relaxed">
                我们可能会不时更新此Cookie政策。任何重大变更都会在网站上公布，并在必要时通过其他方式通知您。请定期查看此政策以了解最新信息。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. 联系我们</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如果您对我们的Cookie使用有任何疑问，请联系我们：
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>电话：</strong>13720010295</li>
                <li><strong>微信：</strong>LydiaFSZ</li>
                <li><strong>邮箱：</strong>请通过电话或微信获取</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookie;