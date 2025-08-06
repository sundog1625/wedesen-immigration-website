# WEDESEN (德森) 国际商务网站

专业的欧洲移民与商务服务平台，集成AI智能客服和RAG知识库系统。

## 🌟 功能特点

- **🎨 高端冷淡风设计** - 专业大气的视觉设计
- **🤖 AI智能客服** - 基于RAG系统的智能问答
- **📚 知识库系统** - 专业移民政策和商务信息
- **📱 响应式设计** - 完美适配各种设备
- **🔍 语义搜索** - 向量化知识库检索
- **⚡ 高性能优化** - 基于现代Web技术栈

## 🛠️ 技术栈

- **前端**: React 18 + TypeScript + Tailwind CSS
- **后端**: Supabase (PostgreSQL + Edge Functions)
- **AI**: OpenAI GPT + Embeddings API
- **部署**: Vercel / Netlify
- **开发工具**: Vite + ESLint + PostCSS

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或
bun install
```

### 2. 环境配置

创建 `.env.local` 文件：

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://zvuxgccegfyyjqipjakw.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here

# OpenAI Configuration (可选，用于AI功能)
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. 数据库设置

1. 在Supabase项目中启用Vector扩展：
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

2. 运行迁移文件创建知识库表：
```bash
supabase db push
```

### 4. 部署Edge Functions

```bash
# 部署聊天功能
supabase functions deploy chat

# 部署嵌入生成功能
supabase functions deploy generate-embeddings
```

### 5. 生成知识库嵌入向量

```bash
# 调用Edge Function生成嵌入向量
curl -X POST \
  https://zvuxgccegfyyjqipjakw.supabase.co/functions/v1/generate-embeddings \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

### 6. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站。

## 🎯 核心服务

### 移民服务
- 🇳🇱 荷兰高技能移民 & 投资移民
- 🇩🇪 德国欧盟蓝卡 & 企业家签证
- 🇮🇹 意大利投资移民 & 居留签证

### 商务服务
- 🏢 欧洲公司注册与银行开户
- 💰 财务税务与合规咨询
- 🛒 跨境电商落地服务
- 💻 专业网站开发

### 教育服务
- 🎓 欧洲名校留学申请
- 📝 语言培训与考试指导
- 🏠 住宿安排与生活支持

## 🤖 AI功能详解

### 智能客服系统
- 基于OpenAI GPT模型的对话系统
- 预设快捷问题提高效率
- 实时响应用户咨询

### RAG知识库
- 向量化存储移民政策文档
- 语义搜索精准匹配答案
- 持续更新政策信息

## 📞 联系方式

- **热线电话**: +31 6 8888 9999
- **邮箱**: wedeseneu@gmail.com
- **微信**: WEDESEN-EU
- **地址**: Herengracht 420, Amsterdam, Netherlands

## 📄 许可证

© 2024 WEDESEN International Business Services. 保留所有权利.

---

**WEDESEN · 德森国际商务**  
*连接东西，成就未来*
