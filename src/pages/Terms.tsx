import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">服务条款</h1>
          <div className="text-sm text-muted-foreground mb-8">
            最后更新日期：2024年1月1日
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. 服务概述</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                欢迎使用WEDESEN（德森）国际商务的服务。通过访问我们的网站或使用我们的服务，您同意遵守以下服务条款。
              </p>
              <h3 className="text-xl font-medium text-foreground mb-3">我们提供的服务包括：</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>欧洲移民咨询和申请服务（荷兰、德国、意大利）</li>
                <li>留学申请指导和相关服务</li>
                <li>欧洲公司注册和商务服务</li>
                <li>财务税务咨询服务</li>
                <li>跨境电商落地服务</li>
                <li>网站开发和数字化服务</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. 服务使用条件</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">使用我们的服务，您需要：</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>年满18周岁或在法定监护人同意下使用服务</li>
                <li>提供真实、准确、完整的个人信息</li>
                <li>遵守中国法律法规和目标国家法律法规</li>
                <li>不得将服务用于非法目的</li>
                <li>承担因提供虚假信息导致的后果</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. 服务费用和支付</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">费用说明：</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>具体服务费用根据服务类型和复杂程度确定</li>
                <li>费用将在签署服务协议前明确告知</li>
                <li>费用不包括政府收费、第三方费用和其他额外支出</li>
                <li>支付方式和时间安排在具体服务协议中约定</li>
              </ul>
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">退款政策：</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>已开始提供的服务，根据服务进度计算费用</li>
                <li>因客户原因终止服务的，已产生费用不予退还</li>
                <li>因不可抗力导致服务无法完成的，按实际服务量结算</li>
                <li>具体退款条件以服务协议约定为准</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. 客户责任和义务</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">您承诺：</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>提供真实、完整、有效的申请材料和信息</li>
                <li>及时配合我们的服务要求和时间安排</li>
                <li>按时支付服务费用</li>
                <li>遵守目标国家的法律法规</li>
                <li>对因您的行为导致的后果承担责任</li>
                <li>保护我们提供给您的保密信息</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. 我们的责任和义务</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">我们承诺：</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>提供专业、诚信的咨询和服务</li>
                <li>保护您的个人信息和隐私</li>
                <li>及时跟进服务进度并告知重要变化</li>
                <li>在合理范围内协助解决服务过程中的问题</li>
                <li>按照约定的标准和时间提供服务</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. 服务限制和免责</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">我们不承担以下责任：</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>政府政策变化导致的申请结果变化</li>
                <li>客户提供虚假信息导致的申请失败</li>
                <li>客户未按要求配合导致的服务延误</li>
                <li>不可抗力因素（如自然灾害、政治事件等）</li>
                <li>第三方机构的决定和行为</li>
                <li>超出我们服务范围的其他事项</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>重要提醒：</strong>移民、留学等申请结果最终由相关政府机构决定，我们不能保证申请成功，但会尽最大努力提供专业服务。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. 知识产权</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                我们网站的内容、设计、商标等知识产权归WEDESEN所有。未经授权，不得复制、传播或用于商业目的。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. 争议解决</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如发生争议，双方应首先通过友好协商解决。协商不成的，可通过以下方式解决：
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>向消费者协会投诉</li>
                <li>向相关行业监管部门举报</li>
                <li>申请仲裁或向有管辖权的法院起诉</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. 条款变更</h2>
              <p className="text-muted-foreground leading-relaxed">
                我们保留随时修改这些服务条款的权利。重大变更会提前通知客户。继续使用我们的服务即表示您接受修改后的条款。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. 联系方式</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                如对本服务条款有疑问，请联系我们：
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

export default Terms;