import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AgentRouter from './components/AgentRouter';
import hotelData from './data/hotel_data.json';
import { 
  Target, 
  Layers, 
  Lightbulb, 
  Settings, 
  Users, 
  Zap, 
  ShoppingBag, 
  UserCircle,
  LayoutDashboard,
  Cpu,
  ArrowRight,
  PlayCircle,
  Network,
  Share2,
  Rocket,
  Globe,
  Compass,
  Briefcase,
  PenTool,
  MessageSquare,
  Repeat,
  MapPin,
  Calendar,
  CreditCard,
  BarChart3,
  Video,
  Image,
  X,
  FileSpreadsheet,
  Building2,
  TrendingUp,
  FileText,
  Users2,
  Map,
  Camera,
  CalendarDays,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

const Section = ({ id, title, subtitle, icon: Icon, children, delay = 0, gradient = "from-indigo-600 to-violet-600" }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="mb-32 scroll-mt-24"
  >
    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-12">
      <div className={`p-5 bg-gradient-to-br ${gradient} text-white rounded-[24px] shadow-xl shadow-indigo-100 shrink-0 self-start mt-2`}>
        <Icon size={40} />
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-3">{title}</h2>
        {subtitle && <p className="text-xl md:text-2xl font-bold text-slate-500/90">{subtitle}</p>}
        <div className="h-2 w-32 bg-indigo-600 rounded-full mt-8" />
      </div>
    </div>
    {children}
  </motion.section>
);

const Card = ({ title, description, imagePlaceholder, delay = 0, badge, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-2xl hover:shadow-indigo-50 hover:-translate-y-2 flex flex-col h-full"
  >
    <div className="relative h-64 bg-slate-50 overflow-hidden flex items-center justify-center p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50/30" />
      <div className="relative z-10 flex flex-col items-center text-center">
        {Icon && <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-500"><Icon size={48} /></div>}
        <div className="text-slate-400 italic text-sm font-medium px-4">
          {imagePlaceholder || '可视化设计稿预留'}
        </div>
      </div>
      {badge && (
        <div className="absolute top-6 right-6 bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest">
          {badge}
        </div>
      )}
    </div>
    <div className="p-10 flex flex-col flex-grow">
      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg font-medium">{description}</p>
    </div>
  </motion.div>
);

const SubSectionTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl md:text-2xl font-black text-slate-800 mb-8 mt-12 flex items-center gap-3 ${className}`}>
    <div className="w-2 h-8 bg-indigo-600 rounded-full" />
    {children}
  </h3>
);

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex gap-6 p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:border-indigo-200 transition-all group">
    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
      <Icon size={32} />
    </div>
    <div>
      <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{title}</h4>
      <p className="text-slate-600 leading-relaxed text-lg font-medium">{description}</p>
    </div>
  </div>
);

const ProgressBar = ({ label, percentage, date, color = "bg-indigo-600" }) => (
  <div className="mb-8">
    <div className="flex justify-between items-end mb-3">
      <div>
        {date && <span className="text-sm font-black text-slate-400 uppercase tracking-widest block mb-1">{date}</span>}
        <span className="text-xl font-black text-slate-900">{label}</span>
      </div>
      <span className="text-2xl font-black text-indigo-600">{percentage}%</span>
    </div>
    <div className="h-4 bg-slate-100 rounded-full overflow-hidden p-1 border border-slate-50">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full rounded-full ${color} shadow-sm`}
      />
    </div>
  </div>
);

const DataCard = ({ value, label, subtext, icon: Icon, color = "text-indigo-600", bgColor = "bg-indigo-50" }) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-4">
    <div className={`w-12 h-12 ${bgColor} ${color} rounded-2xl flex items-center justify-center shrink-0`}>
      <Icon size={24} />
    </div>
    <div>
      <div className={`text-2xl font-black ${color} mb-1`}>{value}</div>
      <div className="text-slate-900 font-bold mb-1">{label}</div>
      {subtext && <div className="text-slate-500 text-sm font-medium">{subtext}</div>}
    </div>
  </div>
);

const homepageVersions = [
  {
    id: "1.0",
    title: "首页 1.0 —— 表单式提示词阶段",
    shortTitle: "1.0 表单式提示词阶段",
    features: [
      "固定按钮",
      "功能罗列",
      "类似“功能目录式”"
    ],
    description: "功能清晰，但偏被动。",
    image: "image/8c7bcefecaa79d8acd305b8d44069640.png",
    color: "slate",
    summary: "特点：功能清晰，但偏被动。"
  },
  {
    id: "2.0",
    title: "首页 2.0 —— 预设问题对话引导",
    shortTitle: "2.0 预设问题对话引导",
    features: [
      "引导式提问",
      "场景化问题"
    ],
    description: "开始从“工具逻辑”向“对话逻辑”转变。用户开始通过对话完成需求。",
    image: "image/2ae693e43f548bfe4bcd7986bd1d8bad.png",
    color: "indigo",
    summary: "特点：开始从“工具逻辑”向“对话逻辑”转变。"
  },
  {
    id: "3.0",
    title: "首页 3.0 —— 多数字分身员工卡片",
    shortTitle: "3.0 多数字分身员工卡片",
    features: [
      "不再是统一客服",
      "多角色数字员工入口",
      "用户可选择不同分身进入服务"
    ],
    description: "角色化、人格化、服务分层。用户可选择不同分身进入服务。",
    image: "image/d4eadbed71e4aa9981d9927cd1040781.png",
    color: "violet",
    summary: "特点：角色化、人格化、服务分层。"
  },
  {
    id: "4.0",
    title: "首页 4.0 —— 能力直接前置展示",
    shortTitle: "4.0 能力直接前置展示",
    features: [
      "不仅展示“员工是谁”",
      "更直接展示“员工能做什么”",
      "根据入住状态动态推荐能力"
    ],
    description: "根据入住状态动态推荐能力。",
    image: "image/03ef4cc34dc54155fcc98a4edaa6b3c8.png",
    color: "blue",
    summary: "从按钮驱动 → 对话驱动；从客服逻辑 → 智能体逻辑；从被动展示 → 主动经营。"
  }
];

const App = () => {
  const [activeSection, setActiveSection] = React.useState('');
  const [activeTab, setActiveTab] = useState(3);
  const [showGaodeModal, setShowGaodeModal] = React.useState(false);
  const [showExcelModal, setShowExcelModal] = React.useState(false);
  const [showArchModal, setShowArchModal] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'arch', label: '组网架构' },
    { id: 'visitor', label: '游客端' },
    { id: 'operation', label: '运营组织' },
    { id: 'enterprise', label: '企业端' },
    { id: 'gov', label: '政府端' },
    { id: 'ip', label: '筹备进展' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-100 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <Cpu size={24} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">AI <span className="text-indigo-600">Product</span></span>
          </div>
          <nav className="hidden xl:flex gap-6 text-sm font-black text-slate-400 tracking-[0.1em]">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`hover:text-indigo-600 transition-all relative py-2 ${activeSection === item.id ? 'text-indigo-600' : ''}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                  />
                )}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* 预留位置 */}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-overlay"></div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-block px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-10">
                Product Design Strategic Report
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.85] text-center">
                <span>
                  黄小西
                </span>
                <br />
                <div className="flex justify-center mt-2">
                  <span className="px-2 sm:px-2 md:px-3 bg-indigo-600 text-white rounded-lg py-0.5 sm:py-1 md:py-2">
                    AI应用生态
                  </span>
                </div>
              </h1>

              {/* 3点汇报重点已被移除 */}
            </motion.div>
        </section>

        {/* Section 2: 能力体系升级 */}
        <Section 
          id="arch" 
          title="构建“三层智能体组网架构”" 
          subtitle="我们在搭建的是一个“智能体组成的生产系统”"
          icon={Layers} 
          gradient="from-indigo-600 via-blue-600 to-emerald-600"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              {[
                {
                  title: "1. 调度级智能体",
                  desc: "在多智能体调度这一前沿方向上，我们不是停留在概念验证，而是已经在真实文旅场景中完成了体系化落地，整体进度在国内处于第一梯队，在文旅行业Ai应用层面具有绝对的先发优势。",
                  layout: "row" // 新增布局标记
                },
                {
                  title: "2. 企业级 / 功能级服务智能体",
                  desc: "面向酒店、景区、餐饮等涉旅企业，赋能具体业务与服务场景。",
                },
                {
                  title: "3. 个人级 / 角色级数字分身智能体",
                  desc: "面向个人用户与从业者，构建数字世界的“第二分身”。",
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <h4 className="text-2xl font-black text-indigo-600 mb-2">{item.title}</h4>
                  <p className="text-slate-900 font-bold mb-4 text-lg">{item.desc}</p>
                </div>
              ))}
              
              <div className="p-8 bg-indigo-900 rounded-[32px] text-white text-center">
                <p className="text-xl font-black">总结：“一个入口，调度多类智能体，覆盖文旅服务全链条”</p>
              </div>
            </div>
            
            <div className="lg:col-span-5 sticky top-32">
              <div 
                className="bg-slate-50 rounded-[32px] p-6 border border-slate-200 shadow-xl cursor-pointer hover:shadow-2xl transition-all group"
                onClick={() => setShowArchModal(true)}
              >
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    import.meta.env.BASE_URL + 'image/f4bab413fd5144e5e01246d33823e5ce.jpg',
                    import.meta.env.BASE_URL + 'image/2-1.png',
                    import.meta.env.BASE_URL + 'image/2f0940dc11c58bf3a57634678ec7dee0.jpg',
                    import.meta.env.BASE_URL + 'image/e8a91d5c8c3b6e0a9e53d83e7cc4d288.jpg'
                  ].map((src, index) => (
                    <div key={index} className="aspect-[9/19.5] bg-white rounded-lg border border-slate-100 flex items-center justify-center text-slate-300 text-[10px] font-bold shadow-sm overflow-hidden">
                      <img src={src} alt={`展示图${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="aspect-[16/10] bg-white rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 text-xs font-bold shadow-sm overflow-hidden">
                  <img src={import.meta.env.BASE_URL + "image/4991f55ea85abc50aa6a75c6effb763f.png"} alt="PC端展示位" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-24 h-2 bg-slate-800/10 mx-auto mt-4 rounded-full blur-sm" />
            </div>
          </div>
        </Section>

        {/* Section 3: 新版「黄小西」游客端 */}
        <Section 
          id="visitor" 
          title="新版「黄小西」游客端" 
          subtitle="文旅智能服务超级入口"
          icon={Rocket} 
          gradient="from-violet-600 to-fuchsia-600"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* 左侧内容区 */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* 核心亮点浓缩 */}
              <div className="bg-white rounded-[48px] p-10 lg:p-16 border border-slate-100 shadow-sm lg:h-[800px] flex flex-col justify-center">
                <div className="flex flex-col gap-y-16">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center shrink-0">
                        <PlayCircle size={24} />
                      </div>
                      <h5 className="text-xl font-black text-slate-900">新首页 = 超级门户</h5>
                    </div>
                    <p className="text-slate-500 font-medium text-base pl-[64px]">用智能体替代传统功能入口</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                        <Layers size={24} />
                      </div>
                      <h5 className="text-xl font-black text-slate-900">多智能体协同</h5>
                    </div>
                    <p className="text-slate-500 font-medium text-base pl-[64px]">不再是“一个机器人回答所有问题”</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-fuchsia-50 text-fuchsia-600 rounded-xl flex items-center justify-center shrink-0">
                        <UserCircle size={24} />
                      </div>
                      <h5 className="text-xl font-black text-slate-900">个人专属智能体</h5>
                    </div>
                    <p className="text-slate-500 font-medium text-base pl-[64px]">“人人可参与”的服务生态</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                        <Compass size={24} />
                      </div>
                      <h5 className="text-xl font-black text-slate-900">主动预判需求</h5>
                    </div>
                    <p className="text-slate-500 font-medium text-base pl-[64px]">从“响应”转向“预判”</p>
                  </div>
                </div>
              </div>

              {/* 当前进展已被移除 */}

            </div>

            {/* 右侧手机展示区：Sticky */}
            <div className="lg:col-span-5 sticky top-32">
              <div className="relative mx-auto w-[400px] h-[800px] rounded-[40px] overflow-hidden shadow-xl border border-slate-200 bg-white group">
                <div className="w-[400px] h-[824px] absolute -top-6 left-0 origin-top-left scale-100">
                  <iframe 
                    src="https://arifinfirman788-blip.github.io/HuangxiaoxiV4.0/" 
                    className="w-full h-full border-0"
                    title="新版首页舞台"
                    scrolling="no"
                    loading="lazy"
                    allow="accelerometer; autoplay; camera; clipboard-write; encrypted-media; fullscreen; geolocation; gyroscope; microphone; midi; payment; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-xs font-bold text-slate-500 flex items-center gap-2">
                    <PlayCircle size={14} /> 可交互演示
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 4: 创新的运营组织形式 */}
        <Section 
          id="operation" 
          title="创新的运营组织形式" 
          subtitle="生态共建与引流反哺"
          icon={Network} 
          gradient="from-blue-600 to-cyan-600"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* 高德地图 */}
            <div 
              onClick={() => setShowGaodeModal(true)}
              className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4">黄小西 x 高德地图</h4>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li>• 2月1日上线高德贵州文旅专区</li>
                <li>• 构建“内容-规划-导航-服务”闭环</li>
                <li className="text-blue-600 font-bold">• 上线首日带动日活提升 1500 人次</li>
              </ul>
              <div className="mt-6 w-full py-3 rounded-xl bg-blue-50 text-blue-600 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
                <Image size={16} /> 查看效果展示
              </div>
            </div>

            {/* 反哺引流 */}
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Repeat size={28} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4">企业端反哺游客端</h4>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li>• 酒店智能体深度嵌入经营流程</li>
                <li>• 服务中自然引导使用“黄小西”</li>
                <li className="text-emerald-600 font-bold">• 带动游客端日活提升约 900 人次</li>
              </ul>
            </div>

            {/* 下步规划 */}
            <div className="bg-white p-8 rounded-[40px] border border-amber-200 shadow-xl ring-4 ring-amber-50 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm">
                <Target size={28} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-6 relative z-10 leading-tight">深度打通“黄小西”与“来黔啦”平台</h4>
              <ul className="space-y-4 text-slate-600 font-medium text-sm relative z-10">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span><span className="text-amber-600 font-black">会员互通</span>：建立统一积分体系，提升粘性</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span><span className="text-amber-600 font-black">权益共享</span>：构建公益版与会员版联合运营</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span><span className="text-amber-600 font-black">双向引流</span>：实现“服务引流—商业转化”闭环</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Section 5: 企业端智能体 */}
        <Section 
          id="enterprise" 
          title="企业端智能体" 
          subtitle="已进入可复制、可推广阶段"
          icon={Briefcase} 
          gradient="from-indigo-600 to-purple-600"
        >
          {/* (一) 酒店智能体 */}
          <div className="mb-24">
            <SubSectionTitle>
              <div className="flex-1 flex items-center justify-between">
                <span>（一）酒店智能体上线运行情况</span>
                <button 
                  onClick={() => setShowExcelModal(true)}
                  className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                >
                  <FileSpreadsheet size={16} />
                  查看深度运营数据
                </button>
              </div>
            </SubSectionTitle>
            
            {/* 运营数据双栏布局 */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Left Card: 合作企业 */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                     <Building2 size={24} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">合作企业</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50/80 rounded-2xl p-5">
                    <p className="text-slate-500 text-xs font-bold mb-2">上线酒店</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-900">169</span>
                      <span className="text-sm font-bold text-slate-400">家</span>
                    </div>
                  </div>
                  <div className="bg-slate-50/80 rounded-2xl p-5">
                    <p className="text-slate-500 text-xs font-bold mb-2">签约待上线</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-900">340</span>
                      <span className="text-sm font-bold text-slate-400">家</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-5 mb-8 flex items-center gap-4 border border-emerald-100/50">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-emerald-800 text-xs font-bold mb-0.5">环比增长</p>
                    <p className="text-2xl font-black text-emerald-600">201.18%</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={18} className="text-slate-400" />
                    <span className="text-sm font-bold text-slate-700">省外推广计划</span>
                  </div>
                  <div className="flex gap-3">
                    {['四川省', '云南省', '河南开封'].map(city => (
                      <span key={city} className="bg-slate-100 px-4 py-2 rounded-xl text-xs font-bold text-slate-600">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Card: 经营数据 */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600">
                     <BarChart3 size={24} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">经营数据</h4>
                </div>

                <p className="text-slate-400 text-xs font-bold mb-6 tracking-wider">整体情况</p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-slate-900 leading-none mb-1">36,610</p>
                      <p className="text-slate-400 text-xs font-bold">累计AI问答数</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-slate-900 leading-none mb-1">20,985</p>
                      <p className="text-slate-400 text-xs font-bold">累计访问量</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100">
                  <div className="flex justify-between items-center mb-5">
                    <h5 className="font-bold text-slate-900 text-lg">贵州饭店·贵宾楼</h5>
                    <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg tracking-wide">标杆案例</span>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex justify-between items-center text-sm border-b border-slate-200/60 pb-4">
                      <div className="space-y-1.5">
                        <p className="text-slate-400 text-xs font-bold">两会期间</p>
                        <p className="font-bold text-slate-700">AI问答: <span className="text-slate-900">342条</span></p>
                      </div>
                      <div className="text-right space-y-1.5">
                         <p className="text-slate-400 text-xs font-bold opacity-0">占位</p>
                         <p className="font-bold text-slate-700">访问量: <span className="text-slate-900">190人次</span></p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div className="space-y-1.5">
                        <p className="text-slate-400 text-xs font-bold">上周末 (2.28-3.1)</p>
                        <p className="font-bold text-slate-700">AI问答: <span className="text-slate-900">74条</span></p>
                      </div>
                      <div className="text-right space-y-1.5">
                         <p className="text-slate-400 text-xs font-bold opacity-0">占位</p>
                         <p className="font-bold text-slate-700">访问量: <span className="text-slate-900">70人次</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* 标杆案例 & 产品展示 - 拆分为独立行 */}
            <div className="space-y-16 mb-32">
              {/* 1. 持续跟进AI潮流的首页迭代能力 */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-12">
                  <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                     <h4 className="text-2xl font-black text-slate-900 mb-6">1. 持续跟进AI潮流的首页迭代能力（产品持续进化能力）</h4>
                     <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8 bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                       这是整个产品最核心、也最具战略意义的特点。我们不是一次性做完一个首页，而是持续跟随 AI 交互范式演进进行升级。
                     </p>
                     
                     {/* Version Tabs */}
                     <div className="flex flex-wrap gap-4 mb-12 p-2 bg-slate-50/50 rounded-2xl border border-slate-100">
                       {homepageVersions.map((version, index) => (
                         <button
                           key={version.id}
                           onClick={() => setActiveTab(index)}
                           className={`px-6 py-4 rounded-xl text-sm font-bold transition-all duration-300 flex-1 md:flex-none text-center flex items-center justify-center gap-2
                             ${activeTab === index 
                               ? 'bg-white text-indigo-600 shadow-lg shadow-indigo-100 ring-1 ring-indigo-50 scale-105' 
                               : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
                             }`}
                         >
                           <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${activeTab === index ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'}`}>
                             {version.id}
                           </span>
                           {version.shortTitle.split(' ')[1]}
                         </button>
                       ))}
                     </div>

                     {/* Active Version Content */}
                     <div className="grid lg:grid-cols-12 gap-12 items-start min-h-[600px]">
                       {/* Left: Description */}
                       <div className="lg:col-span-5 space-y-8">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                            <span className="text-slate-500 text-xs font-black uppercase tracking-wider">VER {homepageVersions[activeTab].id} 阶段特征</span>
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                            {homepageVersions[activeTab].title.split(' —— ')[1]}
                          </h3>

                          <div className="space-y-6">
                            <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider">核心功能</h5>
                            <ul className="space-y-4">
                              {homepageVersions[activeTab].features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 group">
                                  <div className={`mt-1 w-5 h-5 rounded-full bg-${homepageVersions[activeTab].color}-100 flex items-center justify-center shrink-0 group-hover:bg-${homepageVersions[activeTab].color}-200 transition-colors`}>
                                    <div className={`w-2 h-2 rounded-full bg-${homepageVersions[activeTab].color}-500`} />
                                  </div>
                                  <span className="text-lg font-medium text-slate-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className={`p-6 rounded-2xl bg-${homepageVersions[activeTab].color}-50 border border-${homepageVersions[activeTab].color}-100`}>
                            <h5 className={`text-${homepageVersions[activeTab].color}-900 font-bold mb-2 flex items-center gap-2`}>
                              阶段总结
                            </h5>
                            <p className={`text-${homepageVersions[activeTab].color}-700/80 leading-relaxed`}>
                              {homepageVersions[activeTab].summary}
                            </p>
                          </div>
                       </div>

                       {/* Right: Image */}
                       <div className="lg:col-span-7">
                          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-slate-100 rounded-[40px] border-8 border-slate-50 shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white"></div>
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl -ml-16 -mb-16"></div>
                            
                            <div className="relative h-full w-full flex items-center justify-center p-8 lg:p-12">
                              <img 
                                src={import.meta.env.BASE_URL + homepageVersions[activeTab].image} 
                                alt={homepageVersions[activeTab].title} 
                                className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                          </div>
                       </div>
                     </div>
                     
                  </div>
                </div>
                

              </div>

              {/* 2. 当前进展 */}
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden mb-16">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                <div className="relative z-10">
                   <h4 className="text-3xl font-black mb-10 flex items-center gap-4">
                     <Rocket size={32} className="text-indigo-400" />
                     2. 当前进展
                   </h4>

                   {/* Key Focus - Guiju Code */}
                   <div className="mb-12 bg-gradient-to-r from-orange-500/20 to-rose-500/20 border border-orange-500/30 rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                     <div className="absolute -right-6 -top-6 text-orange-500/10 group-hover:text-orange-500/20 transition-colors duration-500 rotate-12">
                       <ShieldCheck size={120} />
                     </div>
                     <div className="relative z-10">
                       <div className="flex items-center gap-3 mb-6">
                         <span className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-1.5 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-orange-500/20">重点推进</span>
                         <h5 className="text-2xl font-black text-orange-200">“黄小西 × 贵居码”深度融合</h5>
                       </div>
                       <div className="space-y-4">
                         <p className="text-lg text-slate-100 leading-relaxed font-medium">
                           与省公安厅的“贵居码”融合方案已完成，正在公安厅内部审批中。
                         </p>
                         <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                           <p className="text-orange-100/90 font-bold leading-relaxed">
                             <span className="text-orange-400 mr-2">✦</span>
                             打通后可实现帮助公安快速推进新兴住宿行业信息监管采集信息的动态采集，依托“黄小西*贵居码”，帮助快速推进酒店智能体的市场占有。
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                   
                   {/* Doing/Milestone已被移除 */}
                </div>
              </div>

              {/* 3. 经营计划 */}
              <div className="bg-white rounded-[48px] p-12 border border-slate-100 shadow-sm">
                <h4 className="text-3xl font-black mb-10 text-slate-900 flex items-center gap-4">
                  <Briefcase size={32} className="text-indigo-600" />
                  3. 经营计划
                </h4>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* 一文读懂 */}
                  <div className="group cursor-pointer">
                    <div className="relative aspect-video bg-indigo-50 rounded-[32px] overflow-hidden border border-indigo-100 mb-6 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                      <div className="absolute inset-0 bg-indigo-900/5 group-hover:bg-transparent transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src={import.meta.env.BASE_URL + "image/12f3d4377647c24a149e2caccf7bbc4a.png"} alt="一文读懂酒店智能体" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black text-indigo-600 shadow-sm">
                        深度解析
                      </div>
                    </div>
                    <h5 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                      <FileText size={24} />
                      一文读懂酒店智能体
                    </h5>
                  </div>

                  {/* 一图看懂 */}
                  <div className="group cursor-pointer">
                    <div className="relative aspect-video bg-indigo-50 rounded-[32px] overflow-hidden border border-indigo-100 mb-6 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                      <div className="absolute inset-0 bg-indigo-900/5 group-hover:bg-transparent transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img src={import.meta.env.BASE_URL + "image/052d9dbace76be0e8aeca312c6f76941.png"} alt="一图看懂酒店智能体" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black text-indigo-600 shadow-sm">
                        可视化图解
                      </div>
                    </div>
                    <h5 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                      <Image size={24} />
                      一图看懂酒店智能体
                    </h5>
                  </div>
                </div>

                {/* 3月份任务目标已被移除 */}
              </div>
            </div>
          </div>

          {/* (二) 景区 & (三) 其他 */}
          <div className="space-y-12">
            {/* 景区智能体 */}
            <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div>
                    <h4 className="text-3xl font-black text-slate-900 mb-2">（二）景区智能体</h4>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm font-bold border border-teal-100">
                      <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                      2.0 版本全新升级
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  {/* 1. 简介模块 */}
                  <div className="space-y-6">
                    <div className="bg-teal-50/50 rounded-3xl p-6 border border-teal-100 h-full">
                      <h5 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                        <Users2 size={24} className="text-teal-600" />
                        景区专属陪伴群
                      </h5>
                      <p className="text-teal-800/80 leading-relaxed mb-6 font-medium">
                        逛景区就像带了一群专属搭子，全程无忧！里面全是具有专长且贴心的小伙伴。
                      </p>
                      
                      <div className="grid gap-4">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-teal-100/50 flex gap-4">
                          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                            <Map size={20} />
                          </div>
                          <div>
                            <h6 className="font-bold text-slate-900 mb-1">路线引导</h6>
                            <p className="text-xs text-slate-500 leading-relaxed">实时看客流、舒适度，告诉游客今天适不适合慢慢逛</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-teal-100/50 flex gap-4">
                          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                            <UserCircle size={20} />
                          </div>
                          <div>
                            <h6 className="font-bold text-slate-900 mb-1">讲解人</h6>
                            <p className="text-xs text-slate-500 leading-relaxed">通晓贵州的历史文化和风俗脉络，走到哪讲到哪</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-teal-100/50 flex gap-4">
                          <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                            <Camera size={20} />
                          </div>
                          <div>
                            <h6 className="font-bold text-slate-900 mb-1">贴心助手团</h6>
                            <p className="text-xs text-slate-500 leading-relaxed">服务、旅拍、活动助手：找洗手间、停车场、最佳打卡点、演出活动一键搞定</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. 进展情况已被移除 */}

                  {/* 3. 展示图区域 */}
                  <div className="space-y-6 flex flex-col h-full">
                    <h5 className="text-xl font-bold text-slate-900 flex items-center gap-2 invisible">
                      <Image size={24} />
                      展示图
                    </h5>
                    <a 
                      href="https://marsnowine-create.github.io/JQ-3.1/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden flex-1 relative group min-h-[400px] block"
                    >
                      <img 
                        src={import.meta.env.BASE_URL + "image/5063bbd0a5c52052d9468a17a5d1d098.png"} 
                        alt="景区智能体展示" 
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="text-sm font-bold bg-white/20 backdrop-blur-md inline-block px-3 py-1 rounded-full border border-white/30 mb-2 group-hover:bg-white/30 transition-colors">
                          点击查看交互演示
                        </div>
                        <p className="text-sm font-medium text-white/90">
                          打造"吃住行游购娱"全场景智能陪伴
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 其他行业 */}
            <div>
              <h4 className="text-2xl font-black text-slate-900 mb-8">（三）其他涉旅行业智能体</h4>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* 餐饮智能体 */}
                <div className="bg-white rounded-[48px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Zap size={24} />
                    </div>
                    <h5 className="text-xl font-black text-slate-900">餐饮智能体</h5>
                  </div>
                  
                  <div className="flex flex-col xl:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-600 rounded text-xs font-bold">1.0 简介</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                          在延续本地美食推荐的基础上，新增订座、点餐、开票等便捷服务。
                          <span className="block mt-2 text-orange-600 font-bold bg-orange-50 p-2 rounded-lg border border-orange-100">
                            努力完成：基于食客身体指标与当前餐厅菜品进行“精细化匹配”，精准推荐最适合他吃的菜，实现“美味+健康”的双重满足。
                          </span>
                        </p>
                      </div>
                      
                      {/* 进展情况已被移除 */}
                    </div>

                    <div className="flex justify-center xl:justify-end shrink-0">
                      <div className="w-[140px] aspect-[9/19.5] bg-slate-100 rounded-[20px] border-4 border-slate-100 shadow-lg overflow-hidden relative group">
                        <img 
                          src={import.meta.env.BASE_URL + "image/e8a91d5c8c3b6e0a9e53d83e7cc4d288.jpg"} 
                          alt="餐饮智能体" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 个人智能体 */}
                <div className="bg-white rounded-[48px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center shrink-0">
                      <UserCircle size={24} />
                    </div>
                    <h5 className="text-xl font-black text-slate-900">个人智能体</h5>
                  </div>
                  
                  <div className="flex flex-col xl:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-teal-100 text-teal-600 rounded text-xs font-bold">1.0 简介</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                          可以帮助手艺人们把自己的绝活、作品和故事清清楚楚地介绍给游客，还能实现24小时智能问答、自动推荐和接单，搭起手艺人与游客之间的桥梁。
                        </p>
                      </div>
                      
                      {/* 进展情况已被移除 */}
                    </div>

                    <div className="flex justify-center xl:justify-end shrink-0">
                      <div className="w-[140px] aspect-[9/19.5] bg-slate-100 rounded-[20px] border-4 border-slate-100 shadow-lg overflow-hidden relative group">
                        <img 
                          src={import.meta.env.BASE_URL + "image/实名认证 – 完善分身信息 – 创建.png"} 
                          alt="个人智能体" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 6: 政府端 */}
        <Section 
          id="gov" 
          title="政府端" 
          subtitle="文旅智慧驾驶舱进入试点运行"
          icon={LayoutDashboard} 
          gradient="from-slate-600 to-slate-800"
        >
           <div className="bg-slate-900 text-white rounded-[48px] p-12 relative overflow-hidden">
             {/* Progress Alert 已被移除 */}

             <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20"></div>
             
             <div className="flex flex-col gap-12 relative z-10 mt-8">
               {/* 上方文字内容 */}
               <div className="w-full grid md:grid-cols-2 gap-8">
                 <div className="space-y-12">
                   <div>
                     <h4 className="text-2xl font-black text-indigo-400 mb-4">1. 从“看数据”到“能分析、能预警、能调度”</h4>
                     <ul className="space-y-3 text-slate-300">
                       <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5"/> 客流、消费、产业数据统一汇聚</li>
                       <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5"/> 自动分析变化、主动预警，支持自然语言追问分析</li>
                       <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5"/> 移动端驾驶舱，实现“掌上决策”</li>
                     </ul>
                   </div>
                   
                   <div>
                     <h4 className="text-2xl font-black text-indigo-400 mb-4">2. 多源数据深度整合</h4>
                     <p className="text-slate-300 leading-relaxed">
                       地图、运营商、OTA、公共数据等多源数据交叉验证，确保数据真实准确。
                     </p>
                   </div>
                 </div>

                 <div className="space-y-12">
                   <div>
                     <h4 className="text-2xl font-black text-indigo-400 mb-4">3. 可层层穿透，协同推进</h4>
                     <ul className="space-y-3 text-slate-300">
                       <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5"/> 省级 + 市州同步适配，从省一路点到具体景区</li>
                       <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5"/> 同步推进应急指挥调度平台</li>
                     </ul>
                   </div>

                   <div>
                     <h4 className="text-2xl font-black text-indigo-400 mb-4">4. 真正给基层减负的“智能问策”</h4>
                     <p className="text-slate-300 mb-3 font-medium">让 AI 帮基层查资料、找政策、做整理</p>
                     <ul className="space-y-3 text-slate-400 text-sm">
                       <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2"/> 内部知识库快速应答</li>
                       <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2"/> 自动标注来源、确保权威</li>
                     </ul>
                   </div>
                 </div>
               </div>

               {/* 下方展示位 */}
               <div className="w-full grid md:grid-cols-2 gap-8 items-center">
                 {/* PC端 */}
                 <a href="https://glsw-provincescreen-test.aihuangxiaoxi.com/admin/#/index" target="_blank" rel="noopener noreferrer" className="group block">
                   <div className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700/50 hover:border-indigo-500/50 transition-all shadow-xl">
                     <div className="aspect-[16/10] bg-slate-900 rounded-xl overflow-hidden relative">
                       <img src={import.meta.env.BASE_URL + "image/4991f55ea85abc50aa6a75c6effb763f.png"} alt="PC端驾驶舱" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20">点击访问管理后台</span>
                       </div>
                     </div>
                   </div>
                   <div className="flex items-center justify-center gap-2 mt-3 text-slate-400 group-hover:text-indigo-400 transition-colors">
                      <LayoutDashboard size={16} />
                      <span className="text-sm font-bold">PC端管理后台</span>
                   </div>
                 </a>

                 {/* 移动端 - 居中显示 */}
                 <div className="flex justify-center">
                   <a href="https://glsw-provincescreen-test.aihuangxiaoxi.com/h5/#/" target="_blank" rel="noopener noreferrer" className="group block w-[200px]">
                     <div className="bg-slate-800/50 rounded-[32px] p-2 border border-slate-700/50 hover:border-indigo-500/50 transition-all shadow-xl">
                       <div className="aspect-[9/19.5] bg-slate-900 rounded-[24px] overflow-hidden relative">
                         <img src={import.meta.env.BASE_URL + "image/eec5799acf1fe30d813b4401c1dac7e8.png"} alt="移动端驾驶舱" loading="lazy" className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold border border-white/20">点击访问移动端</span>
                         </div>
                       </div>
                     </div>
                     <div className="flex items-center justify-center gap-2 mt-3 text-slate-400 group-hover:text-indigo-400 transition-colors">
                        <Rocket size={16} />
                        <span className="text-sm font-bold">移动端驾驶舱</span>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
        </Section>

        {/* Section 7: 旅发大会筹备进展已被移除 */}

      </main>

      <footer className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Cpu size={28} />
              </div>
              <span className="font-black text-3xl tracking-tighter text-slate-900">AI STRATEGIC REPORT</span>
            </div>
            <p className="text-slate-500 font-bold text-xl max-w-sm text-center md:text-left leading-relaxed">
              构筑 AI 超级应用，定义数字化未来的新样板。
            </p>
          </div>
          <div className="flex gap-20">
             {/* 简化 Footer 链接 */}
             <div className="flex flex-col gap-6">
              <span className="font-black text-xs uppercase tracking-[0.3em] text-slate-400">导航</span>
              <a href="#overview" className="font-black text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm">回到顶部</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 font-black text-sm tracking-[0.2em] uppercase">© 2026 AI STRATEGY GROUP.</p>
        </div>
      </footer>

      {/* Image Modal */}
      {showGaodeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" 
            onClick={() => setShowGaodeModal(false)}
          />
          <div className="relative z-10 bg-transparent w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center justify-center">
             <button 
               onClick={() => setShowGaodeModal(false)}
               className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
             >
               <X size={32} />
             </button>
             
             {/* 横图 */}
              <div className="w-full md:w-2/3">
                <div className="aspect-video bg-slate-800/50 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center relative backdrop-blur-sm">
                  <img 
                      src={import.meta.env.BASE_URL + "image/1d8057d625a906bbc2e3a6660be207ab.png"} 
                      alt="运营效果展示" 
                      loading="lazy"
                      className="w-full h-full object-contain p-2"
                    />
                </div>
                <p className="text-center text-white/50 text-sm mt-4 font-bold">运营效果展示</p>
              </div>
 
              {/* 竖图 */}
              <div className="w-full md:w-1/3">
                <div className="aspect-[9/16] bg-slate-800/50 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center relative backdrop-blur-sm">
                  <img 
                    src={import.meta.env.BASE_URL + "image/246f8d254afcdecd35a289c87a616e5c.png"} 
                    alt="交互界面展示" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <p className="text-center text-white/50 text-sm mt-4 font-bold">交互界面展示</p>
              </div>
          </div>
        </div>
      )}

      {/* Excel Modal */}
      {showExcelModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" 
            onClick={() => setShowExcelModal(false)}
          />
          <div className="relative z-10 bg-white w-full max-w-6xl max-h-[90vh] rounded-[32px] overflow-hidden flex flex-col shadow-2xl">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                   <FileSpreadsheet size={20} />
                 </div>
                 <h3 className="text-xl font-black text-slate-900">酒店智能体深度运营情况表</h3>
               </div>
               <button 
                 onClick={() => setShowExcelModal(false)}
                 className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all"
               >
                 <X size={24} />
               </button>
             </div>
             <div className="overflow-auto p-6 flex-1">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr>
                     {hotelData.columns.map((col, i) => (
                       <th key={i} className="p-4 border-b border-slate-200 bg-slate-50 font-black text-slate-700 text-sm whitespace-nowrap sticky top-0">
                         {col}
                       </th>
                     ))}
                   </tr>
                 </thead>
                 <tbody>
                   {hotelData.data.map((row, i) => (
                     <tr key={i} className="hover:bg-slate-50 transition-colors">
                       {row.map((cell, j) => (
                         <td key={j} className="p-4 border-b border-slate-100 text-slate-600 text-sm whitespace-nowrap">
                           {cell}
                         </td>
                       ))}
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>
        </div>
      )}

      {/* Arch Modal */}
      {showArchModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm" 
            onClick={() => setShowArchModal(false)}
          />
          <div className="relative z-10 w-full max-w-7xl max-h-[90vh] flex flex-col">
             <button 
               onClick={() => setShowArchModal(false)}
               className="absolute top-4 right-4 md:right-0 md:-top-12 text-white/70 hover:text-white transition-colors z-50 bg-black/20 md:bg-transparent p-2 rounded-full backdrop-blur-md md:backdrop-blur-none"
             >
               <X size={32} />
             </button>
             
             <div className="flex-1 overflow-y-auto rounded-[32px] md:pr-2">
               <div className="flex flex-col gap-8 pb-10">
                 {/* Mobile Images Grid */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {[
                      import.meta.env.BASE_URL + 'image/f4bab413fd5144e5e01246d33823e5ce.jpg',
                      import.meta.env.BASE_URL + 'image/2-1.png',
                      import.meta.env.BASE_URL + 'image/2f0940dc11c58bf3a57634678ec7dee0.jpg',
                      import.meta.env.BASE_URL + 'image/e8a91d5c8c3b6e0a9e53d83e7cc4d288.jpg'
                    ].map((src, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50">
                        <img src={src} alt={`展示图${index + 1}`} className="w-full h-auto block" />
                      </div>
                    ))}
                 </div>

                 {/* PC Image */}
                 <div className="w-full">
                   <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50">
                     <img 
                       src={import.meta.env.BASE_URL + "image/4991f55ea85abc50aa6a75c6effb763f.png"} 
                       alt="PC端展示位" 
                       className="w-full h-auto block" 
                     />
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      )}
      
      {/* Intelligent Agent Router */}
      <AgentRouter />
    </div>
  );
};

// 补充 CheckCircle 定义，之前漏了
const CheckCircle = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default App;
