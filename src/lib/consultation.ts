import { supabase } from "@/integrations/supabase/client";

export interface ConsultationData {
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
}

export interface ConsultationRecord extends ConsultationData {
  id: string;
  timestamp: string;
  status: 'pending' | 'contacted' | 'completed';
}

/**
 * 发送咨询数据的主要函数
 * 支持多种发送方式：
 * 1. 保存到Supabase数据库
 * 2. 发送邮件通知
 * 3. 本地存储备份
 */
export const sendConsultationData = async (data: ConsultationData): Promise<void> => {
  const consultationRecord: ConsultationRecord = {
    ...data,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    status: 'pending'
  };

  const errors: string[] = [];

  // 方式1: 尝试保存到Supabase数据库
  try {
    await saveToSupabase(consultationRecord);
    console.log('✅ 成功保存到Supabase数据库');
  } catch (error) {
    console.error('❌ Supabase保存失败:', error);
    errors.push('数据库保存失败');
  }

  // 方式2: 发送邮件通知 (通过Supabase Edge Function)
  try {
    await sendEmailNotification(consultationRecord);
    console.log('✅ 成功发送邮件通知');
  } catch (error) {
    console.error('❌ 邮件发送失败:', error);
    errors.push('邮件通知失败');
  }

  // 方式3: 本地存储备份 (始终执行)
  try {
    saveToLocalStorage(consultationRecord);
    console.log('✅ 成功保存到本地存储');
  } catch (error) {
    console.error('❌ 本地存储失败:', error);
    errors.push('本地备份失败');
  }

  // 如果所有方式都失败，抛出错误
  if (errors.length >= 2) {
    throw new Error(`咨询提交部分失败: ${errors.join(', ')}`);
  }
};

/**
 * 保存咨询数据到Supabase数据库
 */
const saveToSupabase = async (record: ConsultationRecord): Promise<void> => {
  const { error } = await supabase
    .from('consultations')
    .insert({
      id: record.id,
      name: record.name,
      phone: record.phone,
      email: record.email,
      wechat: record.wechat,
      service: record.service,
      urgency: record.urgency,
      budget: record.budget,
      background: record.background,
      questions: record.questions,
      contact_time: record.contactTime,
      contact_method: record.contactMethod,
      status: record.status,
      created_at: record.timestamp
    });

  if (error) {
    throw error;
  }
};

/**
 * 通过Supabase Edge Function发送邮件通知
 */
const sendEmailNotification = async (record: ConsultationRecord): Promise<void> => {
  const { error } = await supabase.functions.invoke('send-consultation-email', {
    body: {
      consultation: record,
      recipients: ['info@wedesen.com', 'contact@wedesen.com'], // 实际的接收邮箱
    }
  });

  if (error) {
    throw error;
  }
};

/**
 * 保存到本地存储 (作为备份)
 */
const saveToLocalStorage = (record: ConsultationRecord): void => {
  const consultations = JSON.parse(localStorage.getItem('wedesen-consultations') || '[]');
  consultations.push(record);
  
  // 只保留最近100条记录
  if (consultations.length > 100) {
    consultations.splice(0, consultations.length - 100);
  }
  
  localStorage.setItem('wedesen-consultations', JSON.stringify(consultations));
};

/**
 * 获取本地存储的咨询记录 (用于管理后台)
 */
export const getLocalConsultations = (): ConsultationRecord[] => {
  try {
    return JSON.parse(localStorage.getItem('wedesen-consultations') || '[]');
  } catch {
    return [];
  }
};

/**
 * 格式化咨询数据为可读文本 (用于邮件内容)
 */
export const formatConsultationForEmail = (record: ConsultationRecord): string => {
  return `
📋 新咨询申请 - ${record.service}

👤 客户信息：
• 姓名：${record.name}
• 手机：${record.phone}
• 邮箱：${record.email || '未提供'}
• 微信：${record.wechat || '未提供'}

🎯 咨询详情：
• 服务类型：${record.service}
• 紧急程度：${record.urgency || '未指定'}
• 预算范围：${record.budget || '未指定'}
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
};

/**
 * 根据服务类型确定负责顾问的联系方式
 */
export const getConsultantByService = (service: string): { name: string; wechat: string; phone: string } => {
  const immigrationServices = ['荷兰移民服务', '德国移民服务', '意大利移民服务'];
  
  if (immigrationServices.some(s => service.includes(s.replace('服务', '')))) {
    return {
      name: '移民专家',
      wechat: 'LydiaFSZ',
      phone: '13720010295'
    };
  }
  
  return {
    name: '业务顾问',
    wechat: 's438468137', 
    phone: '13720010295'
  };
};