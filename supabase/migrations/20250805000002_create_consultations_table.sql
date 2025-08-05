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