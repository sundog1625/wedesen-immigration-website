export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface FormErrors {
  [key: string]: string;
}

// 预定义的验证规则
export const validationRules: ValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[\u4e00-\u9fa5a-zA-Z\s]+$/,
  },
  phone: {
    required: true,
    pattern: /^1[3-9]\d{9}$/,
    custom: (value: string) => {
      if (value && !/^1[3-9]\d{9}$/.test(value)) {
        return '请输入正确的手机号码';
      }
      return null;
    }
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    custom: (value: string) => {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return '请输入正确的邮箱地址';
      }
      return null;
    }
  },
  wechat: {
    minLength: 6,
    maxLength: 20,
    pattern: /^[a-zA-Z][\w-]{5,19}$/,
    custom: (value: string) => {
      if (value && value.length > 0 && !/^[a-zA-Z][\w-]{5,19}$/.test(value)) {
        return '微信号格式不正确（6-20位，字母开头）';
      }
      return null;
    }
  },
  questions: {
    required: true,
    minLength: 10,
    maxLength: 500,
    custom: (value: string) => {
      if (value && value.length < 10) {
        return '请详细描述您的需求（至少10个字符）';
      }
      return null;
    }
  },
  background: {
    maxLength: 300,
  }
};

// 验证单个字段
export function validateField(value: string, rule: ValidationRule): string | null {
  // 必填验证
  if (rule.required && (!value || value.trim().length === 0)) {
    return '此项为必填项';
  }

  // 如果值为空且不是必填，则跳过其他验证
  if (!value || value.trim().length === 0) {
    return null;
  }

  // 最小长度验证
  if (rule.minLength && value.length < rule.minLength) {
    return `至少需要${rule.minLength}个字符`;
  }

  // 最大长度验证
  if (rule.maxLength && value.length > rule.maxLength) {
    return `不能超过${rule.maxLength}个字符`;
  }

  // 正则表达式验证
  if (rule.pattern && !rule.pattern.test(value)) {
    return '格式不正确';
  }

  // 自定义验证
  if (rule.custom) {
    const customError = rule.custom(value);
    if (customError) {
      return customError;
    }
  }

  return null;
}

// 验证整个表单
export function validateForm(data: Record<string, string>, rules: ValidationRules): FormErrors {
  const errors: FormErrors = {};

  Object.keys(rules).forEach(field => {
    const value = data[field] || '';
    const rule = rules[field];
    const error = validateField(value, rule);
    
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
}

// 实时验证（用于输入时的即时反馈）
export function validateFieldRealtime(value: string, rule: ValidationRule): string | null {
  // 对于实时验证，我们只在用户输入了内容后才验证格式
  if (!value || value.trim().length === 0) {
    return null; // 不显示必填错误，等到提交时再显示
  }

  // 最大长度验证（实时显示）
  if (rule.maxLength && value.length > rule.maxLength) {
    return `不能超过${rule.maxLength}个字符`;
  }

  // 正则表达式验证（实时显示）
  if (rule.pattern && !rule.pattern.test(value)) {
    // 对于某些字段，只在输入足够长度后才验证格式
    if (rule.minLength && value.length < rule.minLength) {
      return null;
    }
    return '格式不正确';
  }

  // 自定义验证（实时显示）
  if (rule.custom) {
    const customError = rule.custom(value);
    if (customError) {
      return customError;
    }
  }

  return null;
}

// 获取字段的帮助文本
export function getFieldHelpText(fieldName: string): string {
  const helpTexts: { [key: string]: string } = {
    name: '请输入您的真实姓名',
    phone: '请输入11位手机号码',
    email: '用于接收咨询回复和相关资料',
    wechat: '可选，方便我们通过微信联系您',
    service: '选择您最感兴趣的服务类型',
    questions: '请详细描述您的需求，以便我们提供更精准的服务',
    background: '可选，简述教育背景、工作经历等有助于评估的信息',
    urgency: '让我们了解您的时间安排',
    budget: '帮助我们推荐合适的方案',
    contactTime: '选择您方便接听电话的时间',
    contactMethod: '您更偏好的联系方式'
  };

  return helpTexts[fieldName] || '';
}