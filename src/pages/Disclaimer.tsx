import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">免责声明</h1>
          <div className="text-sm text-muted-foreground mb-8">
            最后更新日期：2024年1月1日
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. 一般免责声明</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                本网站及WEDESEN（德森）国际商务提供的信息和服务仅供参考。我们尽力确保信息的准确性和及时性，但不对其完整性、准确性、时效性或适用性作任何明示或暗示的保证。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                使用本网站信息和服务的风险由用户自行承担。在做出任何重要决定前，建议咨询专业人士。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. 移民和留学服务免责</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">申请结果不保证</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>移民、签证、留学申请的最终结果由相关政府机构或教育机构决定</li>
                <li>我们不能保证任何申请的成功，即使申请人符合所有已知要求</li>
                <li>政策变化、法规调整可能影响申请结果</li>
                <li>个人情况的特殊性可能导致不同的处理结果</li>
              </ul>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">政策变化</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                各国移民、签证、留学政策可能随时变化。我们会尽力跟踪政策更新，但不承担因政策变化导致的任何损失或不便。
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">处理时间</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                申请处理时间受多种因素影响，包括但不限于政府机构工作效率、申请数量、个案复杂性等。我们提供的时间估算仅供参考。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. 信息准确性免责</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">内容更新</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我们努力保持网站信息的准确性和时效性，但由于信息量大且更新频繁，可能存在过时或不准确的信息。
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">第三方信息</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                网站可能包含来自第三方的信息或链接。我们不对这些信息的准确性、完整性或可靠性承担责任。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. 技术服务免责</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">网站可用性</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>我们不保证网站24小时无中断运行</li>
                <li>系统维护、技术故障可能导致服务临时中断</li>
                <li>网络连接问题可能影响用户体验</li>
                <li>不承担因网站技术问题导致的任何损失</li>
              </ul>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">数据安全</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                虽然我们采取合理的安全措施保护用户数据，但不能保证绝对的数据安全。互联网传输存在固有风险，用户应当了解并接受这些风险。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. 商务服务免责</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">公司注册服务</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>注册成功与否取决于相关政府部门的审批</li>
                <li>法规变化可能影响注册要求和流程</li>
                <li>公司注册后的运营责任由客户自行承担</li>
              </ul>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">财务税务服务</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>税务建议基于当前法规，法规变化可能影响建议的有效性</li>
                <li>最终税务责任由纳税人承担</li>
                <li>建议客户就重大事项咨询当地税务专业人士</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. 第三方服务免责</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我们可能与第三方合作提供服务或推荐第三方服务。对于第三方的行为、服务质量或结果，我们不承担责任。
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>律师事务所的法律服务</li>
                <li>翻译机构的翻译服务</li>
                <li>教育机构的培训服务</li>
                <li>金融机构的金融服务</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. 不可抗力免责</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                对于因以下不可抗力因素导致的服务延误、中断或无法履行，我们不承担责任：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>自然灾害（地震、洪水、台风等）</li>
                <li>政治事件（战争、政变、制裁等）</li>
                <li>法律法规的重大变化</li>
                <li>政府机构的特殊措施</li>
                <li>全球性疫情或公共卫生事件</li>
                <li>技术故障或网络攻击</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. 损害赔偿限制</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                在法律允许的最大范围内，WEDESEN对以下损失不承担责任：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>间接损失、特殊损失或后果性损失</li>
                <li>利润损失、商誉损失或数据丢失</li>
                <li>因使用或无法使用服务导致的任何损失</li>
                <li>第三方行为导致的损失</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                如需承担赔偿责任，赔偿总额不超过客户已支付的服务费用。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. 专业建议免责</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                本网站提供的信息不构成专业法律、税务、投资或其他专业建议。对于重要事项，建议咨询相关领域的专业人士。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. 适用法律</h2>
              <p className="text-muted-foreground leading-relaxed">
                本免责声明受中华人民共和国法律管辖。如有争议，应友好协商解决；协商不成的，提交有管辖权的人民法院解决。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. 联系我们</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如对本免责声明有任何疑问，请联系我们：
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

export default Disclaimer;