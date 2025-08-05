# WEDESEN 咨询表单系统部署指南

## 🚀 部署状态

✅ **前端部署**：已通过GitHub自动部署到Vercel  
⏳ **数据库迁移**：需要手动执行SQL  
⏳ **Edge Function**：需要手动部署  
⏳ **邮件服务**：需要配置邮件提供商  

## 📋 手动部署步骤

### 1. 数据库迁移 (必须执行)

请登录到 [Supabase Dashboard](https://supabase.com/dashboard/project/zvuxgccegfyyjqipjakw) 的SQL Editor，并执行以下SQL代码（**注意：不要包含```标记，只复制纯SQL代码**）：
-- 创建咨询表来存储用户提交的咨询申请
CREATE TABLE IF NOT EXISTS consultations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  wechat TEXT,
  service TEXT NOT NULL,
  urgency TEXT,
  budget TEXT,
  background TEXT,
  questions TEXT NOT NULL,
  contact_time TEXT,
  contact_method TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 创建更新时间的触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_consultations_updated_at 
    BEFORE UPDATE ON consultations 
    FOR EACH ROW 
    EXECUTE PROCEDURE update_updated_at_column();

-- 为常用查询创建索引
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultations_status ON consultations(status);
CREATE INDEX IF NOT EXISTS idx_consultations_service ON consultations(service);
CREATE INDEX IF NOT EXISTS idx_consultations_phone ON consultations(phone);

-- 添加注释
COMMENT ON TABLE consultations IS '用户咨询申请表';
COMMENT ON COLUMN consultations.id IS '咨询记录唯一标识';
COMMENT ON COLUMN consultations.name IS '客户姓名';
COMMENT ON COLUMN consultations.phone IS '客户手机号';
COMMENT ON COLUMN consultations.email IS '客户邮箱';
COMMENT ON COLUMN consultations.wechat IS '客户微信号';
COMMENT ON COLUMN consultations.service IS '咨询服务类型';
COMMENT ON COLUMN consultations.urgency IS '紧急程度';
COMMENT ON COLUMN consultations.budget IS '预算范围';
COMMENT ON COLUMN consultations.background IS '客户背景信息';
COMMENT ON COLUMN consultations.questions IS '具体咨询问题';
COMMENT ON COLUMN consultations.contact_time IS '方便联系时间';
COMMENT ON COLUMN consultations.contact_method IS '首选联系方式';
COMMENT ON COLUMN consultations.status IS '处理状态：pending-待处理，contacted-已联系，completed-已完成';

### 2. 部署Edge Function

1. 访问 [Supabase Dashboard > Edge Functions](https://supabase.com/dashboard/project/zvuxgccegfyyjqipjakw/functions)
2. 创建新函数：`send-consultation-email`
3. 复制以下代码到函数编辑器：

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
}

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

  return `
📋 新咨询申请 - ${record.service}

👤 客户信息：
• 姓名：${record.name}
• 手机：${record.phone}
• 邮箱：${record.email || '未提供'}
• 微信：${record.wechat || '未提供'}

🎯 咨询详情：
• 服务类型：${record.service}
• 紧急程度：${urgencyMap[record.urgency] || record.urgency || '未指定'}
• 预算范围：${budgetMap[record.budget] || record.budget || '未指定'}
• 方便联系时间：${record.contactTime || '未指定'}
• 首选联系方式：${record.contactMethod || '未指定'}

📝 个人背景：
${record.background || '未提供'}

❓ 咨询问题：
${record.questions}

⏰ 提交时间：${new Date(record.timestamp).toLocaleString('zh-CN')}
🆔 记录ID：${record.id}

---
请在24小时内联系客户！
  `.trim();
}
```

### 3. 配置邮件服务 (可选)

如需实际发送邮件通知，请：

1. 选择邮件服务提供商（推荐 Resend 或 SendGrid）
2. 获取API密钥
3. 在Supabase项目设置中添加环境变量
4. 修改Edge Function集成邮件服务

## 📊 测试咨询表单

部署完成后，可以通过以下方式测试：

1. 访问任意服务页面（如 `/services/immigration`）
2. 点击服务卡片下的"免费咨询"按钮
3. 填写并提交测试表单
4. 检查Supabase数据库中的`consultations`表

## 🔍 数据查看

可以在Supabase Dashboard的Table Editor中查看提交的咨询数据：
- 表名：`consultations`
- 常用字段：name, phone, service, questions, created_at, status

## 📞 联系方式分配逻辑

系统会根据服务类型自动分配顾问：
- **移民服务**（荷兰、德国、意大利）→ LydiaFSZ
- **其他服务** → s438468137

## 🚨 注意事项

1. 数据库迁移必须先执行，否则表单提交会失败
2. Edge Function是可选的，主要用于邮件通知
3. 即使没有邮件服务，数据仍会保存到数据库和本地存储
4. 建议定期检查数据库中的咨询申请并及时跟进

---

**部署完成后，咨询表单系统即可投入使用！** 🎉