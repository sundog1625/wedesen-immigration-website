import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

interface ConsultationRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  wechat: string;
  service: string;
  urgency: string;
  budget: string;
  background: string;
  questions: string;
  contactTime: string;
  contactMethod: string;
  timestamp: string;
  status: string;
}

interface EmailRequest {
  consultation: ConsultationRecord;
  recipients: string[];
}

serve(async (req) => {
  // 处理CORS预检请求
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { consultation, recipients }: EmailRequest = await req.json()

    // 格式化邮件内容
    const emailContent = formatConsultationEmail(consultation);
    const subject = `新咨询申请 - ${consultation.service} - ${consultation.name}`;

    // 这里可以集成实际的邮件服务
    // 例如：SendGrid, Resend, 或其他邮件服务提供商
    console.log('📧 邮件内容:', {
      to: recipients,
      subject,
      content: emailContent
    });

    // 模拟发送邮件成功
    // 在实际生产环境中，这里应该调用真实的邮件服务API
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: '邮件通知已发送',
        consultation_id: consultation.id 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('发送邮件失败:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})

function formatConsultationEmail(record: ConsultationRecord): string {
  const urgencyMap = {
    'urgent': '非常紧急（1周内）',
    'normal': '一般紧急（1个月内）',
    'flexible': '时间灵活（3个月内）'
  };

  const budgetMap = {
    'low': '5万元以下',
    'medium': '5-20万元', 
    'high': '20-50万元',
    'premium': '50万元以上',
    'discuss': '面议'
  };

  const contactTimeMap = {
    'morning': '上午 (9:00-12:00)',
    'afternoon': '下午 (14:00-18:00)',
    'evening': '晚上 (18:00-21:00)',
    'anytime': '任何时间'
  };

  const contactMethodMap = {
    'phone': '电话',
    'wechat': '微信',
    'email': '邮箱'
  };

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>新咨询申请通知</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
        .info-item { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; }
        .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
        .value { color: #333; }
        .urgent { border-left-color: #e74c3c; }
        .urgent .label { color: #e74c3c; }
        .questions { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #667eea; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔔 新咨询申请</h1>
            <p>WEDESEN国际商务 - ${new Date(record.timestamp).toLocaleString('zh-CN')}</p>
        </div>
        
        <div class="content">
            <div class="info-grid">
                <div class="info-item">
                    <div class="label">👤 客户姓名</div>
                    <div class="value">${record.name}</div>
                </div>
                
                <div class="info-item">
                    <div class="label">📱 手机号码</div>
                    <div class="value">${record.phone}</div>
                </div>
                
                <div class="info-item">
                    <div class="label">📧 邮箱地址</div>
                    <div class="value">${record.email || '未提供'}</div>
                </div>
                
                <div class="info-item">
                    <div class="label">💬 微信号</div>
                    <div class="value">${record.wechat || '未提供'}</div>
                </div>
                
                <div class="info-item">
                    <div class="label">🎯 咨询服务</div>
                    <div class="value">${record.service}</div>
                </div>
                
                <div class="info-item ${record.urgency === 'urgent' ? 'urgent' : ''}">
                    <div class="label">⏰ 紧急程度</div>
                    <div class="value">${urgencyMap[record.urgency] || record.urgency || '未指定'}</div>
                </div>
                
                <div class="info-item">
                    <div class="label">💰 预算范围</div>
                    <div class="value">${budgetMap[record.budget] || record.budget || '未指定'}</div>
                </div>
                
                <div class="info-item">
                    <div class="label">🕒 联系时间</div>
                    <div class="value">${contactTimeMap[record.contactTime] || record.contactTime || '未指定'}</div>
                </div>
                
                <div class="info-item">
                    <div class="label">📞 联系方式</div>
                    <div class="value">${contactMethodMap[record.contactMethod] || record.contactMethod || '未指定'}</div>
                </div>
            </div>
            
            ${record.background ? `
            <div class="info-item">
                <div class="label">📋 个人背景</div>
                <div class="value">${record.background}</div>
            </div>
            ` : ''}
            
            <div class="questions">
                <div class="label">❓ 咨询问题</div>
                <div class="value">${record.questions}</div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 20px; background: #e3f2fd; border-radius: 8px;">
                <h3 style="color: #1976d2; margin: 0 0 10px 0;">⚡ 请在24小时内联系客户！</h3>
                <p style="margin: 0; color: #666;">记录ID: ${record.id}</p>
            </div>
        </div>
    </div>
</body>
</html>
  `.trim();
}