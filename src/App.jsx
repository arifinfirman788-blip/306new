import React from 'react';
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
  FileSpreadsheet
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

const App = () => {
  const [activeSection, setActiveSection] = React.useState('');
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
    { id: 'overview', label: '组织投入' },
    { id: 'arch', label: '组网架构' },
    { id: 'visitor', label: '游客端' },
    { id: 'operation', label: '运营组织' },
    { id: 'enterprise', label: '企业端' },
    { id: 'gov', label: '政府端' },
    { id: 'ip', label: 'IP生态' }
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

              {/* 3点汇报重点 */}
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 shadow-sm flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                    <Target size={18} />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">全力以赴面对AI应用决战之年</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 shadow-sm flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                    <Users size={18} />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">用户规模正以十倍速度增长</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 shadow-sm flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">企业级智能体全面开花</span>
                </div>
              </div>
            </motion.div>
        </section>

        {/* Section 1: 总体进展概览 */}
        <Section 
          id="overview" 
          title="加强组织，加大投入" 
          icon={BarChart3} 
          gradient="from-slate-700 to-slate-900"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 重要会议 */}
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Calendar size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900">重要指示</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5" />
                  <p className="text-slate-600 font-medium"><span className="text-slate-900 font-bold">2025.11.04</span> 专题会</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5" />
                  <p className="text-slate-600 font-medium"><span className="text-slate-900 font-bold">2026.01.07</span> 贵旅集团现场调研会</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5" />
                  <p className="text-slate-600 font-medium"><span className="text-slate-900 font-bold">2026.01.13</span> 省领导重要批示</p>
                </li>
              </ul>
            </div>

            {/* 项目投入 */}
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <CreditCard size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900">直接项目投入</h4>
              </div>
              <div className="mb-4">
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">2025年1月以来累计</p>
                <p className="text-4xl font-black text-slate-900">3800<span className="text-xl text-slate-500 ml-1">余万元</span></p>
              </div>
              <div className="space-y-2 text-sm font-medium text-slate-600">
                <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                  <span>贵旅数网</span>
                  <span className="font-bold text-slate-900">1400万元</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                  <span>华创云信</span>
                  <span className="font-bold text-slate-900">2400万元</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed font-medium">
                *根据不完全统计，华创云信于AI上2025总投入已达1.4亿
              </p>
            </div>

            {/* 研发团队 */}
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                  <Users size={24} />
                </div>
                <h4 className="text-xl font-black text-slate-900">贵阳集中研发团队</h4>
              </div>
              <div className="flex items-end gap-4 mb-6">
                <div>
                  <p className="text-sm text-slate-500 font-bold mb-1">扩充前</p>
                  <p className="text-2xl font-black text-slate-400">80人</p>
                </div>
                <ArrowRight className="mb-2 text-indigo-300" />
                <div>
                  <p className="text-sm text-indigo-600 font-bold mb-1">扩充后</p>
                  <p className="text-4xl font-black text-indigo-600">121<span className="text-xl ml-1">人</span></p>
                </div>
              </div>
              
              {/* 工作视频轮播 */}
              <div className="mt-6 rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-black h-32 relative group">
                <video 
                  src={import.meta.env.BASE_URL + "video/f688a180eaffc8c281117271dd6bd668.mp4"} 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white/90 text-xs font-bold flex items-center gap-2">
                  <Video size={12} /> 工作实录
                </div>
              </div>
            </div>
          </div>
        </Section>

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
            {/* 左侧内容区：包含所有4个点 */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* 1. 新首页 = 超级门户 */}
              <div className="space-y-8">
                <SubSectionTitle className="!mt-0">1. 新首页 = 超级门户</SubSectionTitle>
                <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                  <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                    本质：用智能体替代传统功能入口
                  </p>
                  <div className="space-y-6">
                    {[
                      { desc: "多模态呈现", title: "融合图文、形象、状态，赋予智能体真实的“生命感”。", icon: PlayCircle },
                      { desc: "即时交互诱导", title: "第一眼即让用户“想和它对话、想用它解决问题”。", icon: MessageSquare },
                      { desc: "统一扩展方式", title: "不断接入新的智能体与垂直服务。", icon: Network }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5 p-5 hover:bg-slate-50 rounded-3xl transition-colors group">
                        <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-all">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h5 className="text-xl font-black text-slate-900 mb-1">{item.title}</h5>
                          <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. 多智能体协同 */}
              <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <Layers className="text-violet-600" size={28} /> 2. 多智能体协同的智能问答服务
                </h4>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-slate-900 font-bold text-lg mb-2">不再是“一个机器人回答所有问题”</p>
                  <p className="text-slate-600 font-medium">后台自动调度不同职能智能体，用户只需“提问”，系统自动分工。</p>
                </div>
              </div>

              {/* 3. 个人专属智能体 */}
              <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-[48px] p-10 text-white shadow-lg">
                <h4 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <UserCircle size={28} /> 3. 支持快速生成个人专属智能体
                </h4>
                <p className="font-medium text-lg opacity-90">“人人可参与、人人可分发”的旅游智能服务生态</p>
              </div>

              {/* 4. 从“响应需求”转向“预判需求” */}
              <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                <h4 className="text-3xl font-black text-slate-900 mb-8 tracking-tight flex items-center gap-3">
                  <Compass className="text-amber-600" size={32} /> 4. 从“响应需求”转向“预判需求”
                </h4>
                <p className="text-slate-600 font-medium text-lg mb-8">
                  结合“身份 + 状态 + 场景”，实时捕捉游客潜在需求，主动推送服务。
                </p>
                <div className="space-y-8">
                  {[
                    { title: "用户是谁", desc: "游客 / 从业者 / 企业", icon: Users },
                    { title: "所处阶段", desc: "来前 / 在途 / 服务中 / 离开后", icon: Target },
                    { title: "所处场景", desc: "区域 / 企业 / 个人", icon: Globe }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h5 className="text-xl font-black text-slate-900 mb-2">{item.title}</h5>
                        <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 右侧手机展示区：Sticky */}
            <div className="lg:col-span-5 sticky top-32">
              <div className="relative mx-auto w-[400px] h-[800px] rounded-[40px] overflow-hidden shadow-xl border border-slate-200 bg-white group">
                <div className="w-[400px] h-[824px] absolute -top-6 left-0 origin-top-left scale-100">
                  <iframe 
                    src="https://arifinfirman788-blip.github.io/HuangxiaoxiV4.0" 
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
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4">下步规划</h4>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li>• 酒店与景区智能体接入高德地图</li>
                <li>• 景区、餐饮、旅行社智能体上线</li>
                <li className="text-amber-600 font-bold">• 扩大天然流量优势</li>
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
            
            {/* 运营数据合作企业 */}
            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm mb-12">
              <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <Briefcase size={24} className="text-indigo-600" />
                运营数据合作企业
              </h4>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 text-center">
                   <p className="text-slate-500 font-bold text-sm mb-2 uppercase tracking-wider">上线酒店</p>
                   <p className="text-4xl font-black text-indigo-600">169<span className="text-lg ml-1 text-indigo-400">家</span></p>
                </div>
                <div className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100 text-center">
                   <p className="text-slate-500 font-bold text-sm mb-2 uppercase tracking-wider">签约待上线</p>
                   <p className="text-4xl font-black text-orange-600">340<span className="text-lg ml-1 text-orange-400">家</span></p>
                </div>
                <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 text-center">
                   <p className="text-slate-500 font-bold text-sm mb-2 uppercase tracking-wider">环比增长</p>
                   <p className="text-4xl font-black text-emerald-600">201.18<span className="text-lg ml-1 text-emerald-400">%</span></p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col justify-center">
                   <p className="text-slate-500 font-bold text-sm mb-2 uppercase tracking-wider">省外推广即将启动</p>
                   <div className="flex flex-wrap gap-2 justify-center">
                     {['四川省', '云南省', '河南开封'].map(city => (
                       <span key={city} className="bg-white px-2 py-1 rounded-lg text-xs font-bold text-slate-700 shadow-sm border border-slate-200">{city}</span>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            {/* 经营数据 */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
               {/* 整体情况 */}
               <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
                  <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <BarChart3 size={24} className="text-violet-600" />
                    经营数据 - 整体情况
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-5 bg-violet-50/50 rounded-2xl border border-violet-100">
                      <span className="font-bold text-slate-600">累计AI问答数</span>
                      <span className="text-3xl font-black text-violet-600">36,610<span className="text-sm text-violet-400 ml-1">条</span></span>
                    </div>
                    <div className="flex justify-between items-center p-5 bg-violet-50/50 rounded-2xl border border-violet-100">
                      <span className="font-bold text-slate-600">累计访问量</span>
                      <span className="text-3xl font-black text-violet-600">20,985<span className="text-sm text-violet-400 ml-1">人次</span></span>
                    </div>
                  </div>
               </div>

               {/* 贵州饭店·贵宾楼 */}
               <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
                  <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Target size={24} className="text-rose-600" />
                    重点案例：贵州饭店·贵宾楼
                  </h4>
                  <div className="space-y-4">
                    <div className="p-5 bg-rose-50/50 rounded-2xl border border-rose-100">
                      <div className="text-xs font-black text-rose-400 uppercase tracking-widest mb-2">两会期间</div>
                      <div className="flex gap-8">
                         <div>
                           <div className="text-2xl font-black text-slate-900">342<span className="text-xs text-slate-400 ml-1">条</span></div>
                           <div className="text-xs font-bold text-slate-500">累计AI问答</div>
                         </div>
                         <div>
                           <div className="text-2xl font-black text-slate-900">190<span className="text-xs text-slate-400 ml-1">人次</span></div>
                           <div className="text-xs font-bold text-slate-500">累计访问量</div>
                         </div>
                      </div>
                    </div>
                    <div className="p-5 bg-rose-50/50 rounded-2xl border border-rose-100">
                      <div className="text-xs font-black text-rose-400 uppercase tracking-widest mb-2">上周末 (2.28-3.01)</div>
                      <div className="flex gap-8">
                         <div>
                           <div className="text-2xl font-black text-slate-900">74<span className="text-xs text-slate-400 ml-1">条</span></div>
                           <div className="text-xs font-bold text-slate-500">累计AI问答</div>
                         </div>
                         <div>
                           <div className="text-2xl font-black text-slate-900">70<span className="text-xs text-slate-400 ml-1">人次</span></div>
                           <div className="text-xs font-bold text-slate-500">累计访问量</div>
                         </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* 标杆案例 & 产品展示 - 拆分为独立行 */}
            <div className="space-y-16 mb-32">
              {/* 1. 智能体门户 */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                     <h4 className="text-2xl font-black text-slate-900 mb-6">1. 标杆案例与产品进展</h4>
                     <div className="relative pl-6 border-l-4 border-indigo-500 space-y-6">
                       <div>
                         <div className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                           <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                           标杆案例
                         </div>
                         <ul className="space-y-2 pl-4 text-slate-600">
                           <li>• 贵州饭店“两会特别版”智能服务</li>
                           <li>• 获代表委员好评</li>
                         </ul>
                       </div>
                       
                       <div>
                         <div className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                           <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                           产品进展
                         </div>
                         <ul className="space-y-2 pl-4 text-slate-600">
                           <li>• 聚焦住客服务提质，打造多类场景化智能体</li>
                         </ul>
                       </div>
                     </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-[240px]">
                    <img src={import.meta.env.BASE_URL + "image/2-1.png"} alt="两会特别版" className="w-full rounded-[24px] shadow-lg border border-slate-100" />
                  </div>
                </div>
              </div>

              {/* 2. SaaS化 */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                     <h4 className="text-2xl font-black text-slate-900 mb-6">2. 重点工作推进情况</h4>
                     <ul className="space-y-4 text-slate-600">
                       <li className="leading-relaxed">
                         <span className="font-bold text-indigo-600 mr-2">a.</span>
                         1月23日正式发布<span className="font-bold text-slate-900">“两会特别版”智能体门户</span>，集成两会助手、健康小妙招、黄小西、亲子陪伴4个专项智能体。
                       </li>
                       <li className="leading-relaxed pl-6 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                         <span className="font-bold text-indigo-600 mr-2">b.</span>
                         <span className="font-bold text-slate-700">两会运行数据：</span>
                         <div className="grid grid-cols-2 gap-4 mt-2">
                           <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm text-center">
                             <div className="text-slate-500 text-xs mb-1">日均访问量</div>
                             <div className="font-black text-slate-900 text-lg">70人</div>
                           </div>
                           <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm text-center">
                             <div className="text-slate-500 text-xs mb-1">日均问答数</div>
                             <div className="font-black text-slate-900 text-lg">90条</div>
                           </div>
                         </div>
                       </li>
                       <li className="leading-relaxed">
                         <span className="font-bold text-indigo-600 mr-2">c.</span>
                         本地推荐官、会议助手、睡眠助手等3个新角色预计在年前上线。
                       </li>
                       <li className="leading-relaxed">
                         <span className="font-bold text-indigo-600 mr-2">d.</span>
                         目前已支持接入不同AI平台的智能体，通过主门户对话即可精准调度特定服务，实现了“总控+分身”的架构闭环。
                       </li>
                       <li className="leading-relaxed">
                         <span className="font-bold text-indigo-600 mr-2">e.</span>
                         部分酒店已联动PMS系统，实现个性化需求的精准预测与主动推送，提升住客体验与消费转化。
                       </li>
                     </ul>
                  </div>
                </div>
                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-[240px]">
                    <img src={import.meta.env.BASE_URL + "image/2-3.png"} alt="SaaS注册" loading="lazy" className="w-full rounded-[24px] shadow-lg border border-slate-100" />
                  </div>
                </div>
              </div>

              {/* 3. 多端数字分身 */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                     <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                       <UserCircle className="text-blue-600" size={28} /> 3. 聚焦员工效能提升，为员工提供智能助手
                     </h4>
                     <p className="text-slate-600 mb-4">为酒店员工提供“客房服务助手”、“前台记事助手”等智能体，其中“前台记事助手”预计在年前上线。</p>
                     <ProgressBar label="年前全部上线" percentage={90} color="bg-blue-600" />
                  </div>
                </div>
                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-[240px]">
                    <img src={import.meta.env.BASE_URL + "image/868dbb8bc5354d00ed5c90e27c26931d.png"} alt="多端协同" loading="lazy" className="w-full rounded-[24px] shadow-lg border border-slate-100" />
                  </div>
                </div>
              </div>

              {/* 4. 硬件设备落地 */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                     <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                       <Cpu className="text-amber-600" size={28} /> 4. 硬件设备落地
                     </h4>
                     <p className="text-slate-600 mb-4">ODM贴牌模式，喵伴小音箱已测通。预计3月中出量产样机。</p>
                     <ProgressBar label="硬件集成进度" percentage={75} color="bg-amber-600" />
                  </div>
                </div>
                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-[240px]">
                    <img src={import.meta.env.BASE_URL + "image/2-4.png"} alt="硬件交互" className="w-full rounded-[24px] shadow-lg border border-slate-100" />
                  </div>
                </div>
              </div>

              {/* 5. 通用供应链 */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm">
                     <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                       <ShoppingBag className="text-emerald-600" size={28} /> 5. 聚焦流量渠道拓展
                     </h4>
                     <ul className="space-y-4 text-slate-600 mb-6">
                       <li className="leading-relaxed">
                         <span className="font-bold text-indigo-600 mr-2">a.</span>
                         通过对接阿里、高德等主流平台，建立酒店自有服务门户
                       </li>
                       <li className="leading-relaxed">
                         <span className="font-bold text-indigo-600 mr-2">b.</span>
                         可在多个平台上实现酒店智能体直接对接住客咨询、预约等服务
                       </li>
                     </ul>
                     <ProgressBar label="接入进度" percentage={80} color="bg-emerald-600" />
                  </div>
                </div>
                <div className="lg:col-span-4 flex justify-center">
                  <div className="w-[240px]">
                    <img src={import.meta.env.BASE_URL + "image/c143b31a430951881367b7e8c49abdcb.png"} alt="交易闭环" className="w-full rounded-[24px] shadow-lg border border-slate-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* (二) 景区 & (三) 其他 */}
          <div className="space-y-12">
            {/* 景区智能体 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm h-full">
                  <h4 className="text-2xl font-black text-slate-900 mb-6">（二）景区智能体：1.0版本完成并试点</h4>
                  <ul className="space-y-4 text-slate-600">
                    <li className="leading-relaxed flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 shrink-0" />
                      <span>已在加榜梯田、云峰屯堡、岜沙苗寨、多彩贵州城四家景区开展试点测试</span>
                    </li>
                    <li className="leading-relaxed flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2.5 shrink-0" />
                      <span>计划旅发大会实现“黄小西吃晚饭”全面上线及2.0版本发布</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-center gap-4">
                <div className="w-[160px] aspect-[9/19.5] bg-slate-100 rounded-[24px] border border-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold shadow-sm overflow-hidden">
                  <img src={import.meta.env.BASE_URL + "image/3c107169e9a1b428157a2a4dd7e16c1d.jpg"} alt="景区展示1" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="w-[160px] aspect-[9/19.5] bg-slate-100 rounded-[24px] border border-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold shadow-sm overflow-hidden">
                  <img src={import.meta.env.BASE_URL + "image/2f0940dc11c58bf3a57634678ec7dee0.jpg"} alt="景区展示2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* 其他行业 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm h-full">
                  <h4 className="text-2xl font-black text-slate-900 mb-4">（三）其他涉旅行业智能体</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center"><Zap size={20}/></div>
                      <span className="font-bold text-slate-700">餐饮智能体已测试运行</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center shrink-0"><Globe size={20}/></div>
                      <div>
                        <span className="font-bold text-slate-700 block mb-1">旅行社、导游智能体完成方案设计</span>
                        <span className="text-slate-500 text-sm font-medium">覆盖“团前—团中—团后”全流程服务</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-4 flex justify-center gap-4">
                <div className="w-[160px] aspect-[9/19.5] bg-slate-100 rounded-[24px] border border-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold shadow-sm overflow-hidden">
                  <img src={import.meta.env.BASE_URL + "image/e8a91d5c8c3b6e0a9e53d83e7cc4d288.jpg"} alt="餐饮智能体" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="w-[160px] aspect-[9/19.5] bg-slate-100 rounded-[24px] border border-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold shadow-sm overflow-hidden">
                  <img src={import.meta.env.BASE_URL + "image/3077fa4fc9e050a4ad72f48ebcc216d2.png"} alt="导游智能体" loading="lazy" className="w-full h-full object-cover" />
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
             <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20"></div>
             
             <div className="flex flex-col gap-12 relative z-10">
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

        {/* Section 7: IP与品牌生态 */}
        <Section 
          id="ip" 
          title="IP与品牌生态" 
          subtitle="“黄小西家族”"
          icon={UserCircle} 
          gradient="from-pink-600 to-rose-600"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm text-center">
              <div className="w-20 h-20 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">IP形象体系</h4>
              <p className="text-slate-600">融合贵州17个世居民族文化，构建“黄小西家族”。</p>
            </div>
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm text-center">
              <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu size={32} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">载体可落地</h4>
              <p className="text-slate-600">智能芯片、全息屏等多形态载体应用。</p>
            </div>
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm text-center">
              <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video size={32} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">品牌传播</h4>
              <p className="text-slate-600">视频矩阵同步推进，打造文旅超级符号。</p>
            </div>
          </div>

          {/* 长图与视频展示 */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 左侧：长图展示 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center font-black">图</div>
                <h4 className="text-xl font-black text-slate-900">IP家族全景图</h4>
              </div>
              <div className="rounded-[32px] overflow-hidden shadow-xl border border-slate-100 bg-white">
                <img 
                  src={import.meta.env.BASE_URL + "image/ip_family_optimized.jpg"} 
                  alt="IP家族长图" 
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* 右侧：视频展示 */}
            <div className="space-y-6 sticky top-32">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-black">视</div>
                <h4 className="text-xl font-black text-slate-900">品牌宣传视频</h4>
              </div>
              <div className="rounded-[32px] overflow-hidden shadow-xl border border-slate-100 bg-black aspect-video relative group">
                <video 
                  src={import.meta.env.BASE_URL + "video/2_optimized.mp4"} 
                  controls 
                  className="w-full h-full object-cover"
                  poster={import.meta.env.BASE_URL + "image/video-poster-placeholder.png"} // 可选：添加封面图
                >
                  您的浏览器不支持视频播放。
                </video>
              </div>
            </div>
          </div>
        </Section>

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
