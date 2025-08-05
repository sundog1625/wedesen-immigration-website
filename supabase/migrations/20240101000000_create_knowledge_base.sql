-- Create knowledge_base table for RAG system
CREATE TABLE IF NOT EXISTS knowledge_base (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  subcategory VARCHAR(100),
  tags TEXT[], -- Array of tags for better searching
  embedding VECTOR(1536), -- OpenAI embedding dimension
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_knowledge_base_category ON knowledge_base(category);
CREATE INDEX IF NOT EXISTS idx_knowledge_base_subcategory ON knowledge_base(subcategory);
CREATE INDEX IF NOT EXISTS idx_knowledge_base_tags ON knowledge_base USING GIN(tags);

-- Create function to search knowledge base using vector similarity
CREATE OR REPLACE FUNCTION search_knowledge(
  query_embedding VECTOR(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 5
)
RETURNS TABLE (
  id UUID,
  title VARCHAR(255),
  content TEXT,
  category VARCHAR(100),
  subcategory VARCHAR(100),
  similarity FLOAT
)
LANGUAGE SQL STABLE
AS $$
  SELECT
    kb.id,
    kb.title,
    kb.content,
    kb.category,
    kb.subcategory,
    1 - (kb.embedding <=> query_embedding) AS similarity
  FROM knowledge_base kb
  WHERE 1 - (kb.embedding <=> query_embedding) > match_threshold
  ORDER BY kb.embedding <=> query_embedding
  LIMIT match_count;
$$;

-- Insert initial knowledge base data
INSERT INTO knowledge_base (title, content, category, subcategory, tags) VALUES
(
  '荷兰高技能移民申请条件',
  '荷兰高技能移民(Highly Skilled Migrant)是荷兰政府为吸引国际人才而设立的移民项目。申请条件包括：1. 必须有荷兰雇主提供工作岗位并愿意担保；2. 薪资要求：30岁以下年薪至少38,961欧元，30岁及以上年薪至少53,413欧元；3. 雇主必须是经过荷兰移民局认可的担保雇主；4. 学历要求：通常需要本科以上学历；5. 无犯罪记录证明。申请成功后首次获得1年居留许可，之后可延期。连续居住5年后可申请永久居留。',
  '荷兰移民',
  '高技能移民',
  ARRAY['荷兰', '移民', '高技能', 'HSM', '工作签证', '居留许可']
),
(
  '荷兰投资移民项目详情',
  '荷兰投资移民适合有一定资金实力的申请人。主要要求：1. 投资金额：在荷兰投资至少125万欧元设立企业；2. 创造就业：为荷兰当地人创造至少1个全职工作岗位；3. 商业计划：提交详细的商业计划书，证明投资项目的可行性和对荷兰经济的贡献；4. 管理经验：申请人需要具备相关的管理或经商经验；5. 语言要求：具备基本的荷兰语或英语沟通能力。成功后获得企业家居留许可，可带配偶和18岁以下子女。',
  '荷兰移民',
  '投资移民',
  ARRAY['荷兰', '投资移民', '企业家', '商业计划', '就业创造']
),
(
  '德国欧盟蓝卡申请指南',
  '德国欧盟蓝卡是面向高技能人才的长期居留许可。申请条件：1. 学历要求：拥有德国认可的大学学位或等同的外国学位；2. 工作合同：获得德国雇主提供的工作合同，合同期至少6个月；3. 薪资标准：年薪至少58,400欧元（2024年标准），紧缺职业（IT、工程、医疗等）年薪至少45,552欧元；4. 德语要求：通常不需要德语证明，但有助于申请；5. 健康保险：购买德国健康保险。蓝卡持有者在德居住21个月且具备B1德语水平，或33个月可申请永居。',
  '德国移民',
  '欧盟蓝卡',
  ARRAY['德国', '蓝卡', '高技能', '工作签证', '永居']
),
(
  '意大利投资移民政策解读',
  '意大利投资移民通过"投资者签证"计划实施。投资要求：1. 创新企业投资：在意大利创新初创企业投资至少50万欧元；2. 成熟企业投资：在意大利成熟企业投资至少25万欧元；3. 慈善捐款：向意大利公益项目捐款至少20万欧元；4. 政府债券：购买意大利政府债券至少200万欧元。申请条件：无犯罪记录、购买健康保险、证明经济来源合法、意大利语A2水平（部分情况可豁免）。获得2年期投资者居留许可，可续期，5年后可申请长期居留。',
  '意大利移民',
  '投资移民',
  ARRAY['意大利', '投资移民', '创新企业', '政府债券', '慈善捐款']
),
(
  'WEDESEN公司简介',
  'WEDESEN（德森）国际商务有限公司成立于2010年，总部位于荷兰阿姆斯特丹，是一家专业从事欧洲移民、留学、商务服务的综合性咨询公司。公司拥有欧洲三国（荷兰、德国、意大利）的执业律师和移民顾问团队，累计服务客户超过3000人次，成功率达98%以上。核心服务包括：移民申请、留学规划、企业注册、财务税务、电商落地、网站开发等。公司秉承"连接东西，成就未来"的理念，为中欧商务往来架起专业桥梁。',
  '公司信息',
  '公司简介',
  ARRAY['WEDESEN', '德森', '公司简介', '移民', '留学', '商务服务']
);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_knowledge_base_updated_at 
    BEFORE UPDATE ON knowledge_base 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();