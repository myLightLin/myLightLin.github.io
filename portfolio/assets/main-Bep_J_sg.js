const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LiveStartupCase-Cc04SnWw.js","./_plugin-vue_export-helper-opLXPlw3.js","./LiveStartupCase-0x0GUtLr.css","./RadarDemo-Bu-mKIr-.js","./RadarDemo-v1l_L2_X.css","./InteractiveScreenDemo-DGeoCOPM.js","./InteractiveScreenDemo-TFTCVMQZ.css","./ProductCardDemo-CFnNGoNT.js","./gift-Dnh8HYHo.js","./ProductCardDemo-DGnEHXP4.css","./LogLensDemo-DmdGynxy.js","./LogLensDemo-DvAez_E2.css","./LuckyLotteryDemo-lN75US2f.js","./LuckyLotteryDemo-C9W78xt6.css","./FillBlankDemo-B6SvuYjA.js","./FillBlankDemo-PesS53tf.css"])))=>i.map(i=>d[i]);
import{d as b,o as B,a as o,c as A,r as H,b as l,e as t,s as w,_ as k,u as S,t as h,f as g,F as f,g as j,h as R,w as M,v as V,n as E,i as $,j as C,k as G,m as K,l as P,p as z,q as N,x as D,y as T,z as Y}from"./_plugin-vue_export-helper-opLXPlw3.js";const O=[{id:"live-startup",year:"2026",month:"10",title:"小程序直播 · 起播链路优化",kind:"性能优化",presentation:"case",summary:"从播放器插件到宿主 Demo，把进入后的准备工作前移，同时守住鉴权、流量与播放统计的边界。",focus:["请求复用","播放器预热","生命周期管理"],experience:"从等待发生在哪里，到方案取舍与验证结果。",boundary:"案例基于插件源码、桌面客户 Demo 和回归记录整理；以下是方案说明，不是在网页中运行微信播放器。"},{id:"danmu-radar",year:"2026",month:"10",title:"弹幕雷达 · 主播行动助手",kind:"黑客松作品",summary:"从刷屏弹幕中找出求购、展示请求和购买障碍，提醒主播先做什么，并跟进处理结果。",focus:["需求归并","商品上下文","操作反馈"],experience:"点击「演示完整场景」，依次体验商品推送、展示、答疑和场控反馈，也可以自己发送弹幕。",boundary:"保留原作界面与规则归并逻辑。弹幕、商品和推送均在浏览器内模拟，不连接直播、库存或大模型服务。",caseStudy:{context:"弹幕多时，主播很难同时辨认观众在问什么、指的是哪件商品，以及哪些问题还没解决。",decisions:[{title:"把弹幕归成可以处理的提醒",description:"按求购、展示、答疑和购买障碍整理近 60 秒的弹幕，同一观众重复发送不重复计数，并保留原话供主播核对。"},{title:"用发言当时的商品理解指代",description:"明确商品编号优先；「这款」结合当时的推送记录关联。商品不明确时先确认，避免推荐错商品。"},{title:"让每次操作都有后续",description:"推送后展示观看页接收结果；展示与回答由主播确认；购买受阻进入待核实列表，收到模拟场控反馈后才完成。"}]}},{id:"screen",year:"2026",month:"09",title:"互动大屏",kind:"直播互动",responsibility:"我完成了抽奖与 PK 的页面和交互开发，重点处理动画衔接与大屏适配。",summary:"把抽奖过程、倒计时和 PK 排名呈现在大屏上，让观众跟得上活动节奏。",focus:["动画状态","Canvas 昵称球","舞台适配"],experience:"切换滚动抽奖、昵称球或摇一摇 PK，体验从开始到结果的完整展示。",boundary:"从业务项目中提取的交互演示。参与者、分数和结果均为模拟数据，不连接直播间或真实抽奖服务。",caseStudy:{context:"难点不只是做出动画，而是让活动进度、动画和结果展示保持一致，并适应不同尺寸的屏幕。",decisions:[{title:"用活动状态驱动画面",description:"我把流程控制与画面展示分开，按等待、进行、结果等状态切换内容，让动画跟随活动进度，而不是各自播放。"},{title:"让动效表达信息",description:"抽奖用滚动头像和 Canvas 昵称球呈现参与者，PK 用水柱呈现分数。昵称球按深度排序绘制，让前后遮挡和远近关系一致。"},{title:"分开处理画面与操作区",description:"舞台按 1920 × 1080 比例缩放，保留完整内容；本站演示的操作区独立布局，避免按钮随画面缩小而难以点击。"}]}},{id:"product-card",year:"2026",month:"09",title:"商品卡片",kind:"业务组件",summary:"完成商品卡片的界面与相关服务端改造，让新增样式既能展示，也能随商品讲解自动推送。",focus:["推送规则","讲解联动","多端展示"],experience:"选择卡片样式，开始讲解，观察推送规则如何影响观看端展示。",boundary:"使用虚构商品，在浏览器内模拟规则匹配与消息传递，不连接真实后端、直播或支付服务。"},{id:"loglens",year:"2025",month:"10",title:"LogLens · AI 问数",kind:"数据工具 · 交互演示",summary:"查看数据后可以直接提问，在同一界面阅读摘要和继续追问。",focus:["数据问答流程","推荐追问","回答中断"],experience:"查看示例数据，选择推荐问题，或在回答过程中点击停止。",boundary:"公开版使用虚构数据与预设回答，逐字呈现为前端动画，未连接 AI 服务。"},{id:"lucky-lottery",year:"2025",month:"02",title:"幸运抽奖",kind:"业务组件",summary:"九宫格和转盘共用奖品数据，动画结束时停在指定的奖品上。",focus:["动画落点","加减速节奏","重复操作控制"],experience:"选择九宫格或转盘，指定一个结果，观察动画如何停在对应奖品上。",boundary:"模拟抽奖，不连接真实抽奖服务，也不发放奖品。"},{id:"fill-blank",year:"2024",month:"09",title:"问卷填空题",kind:"业务组件 · 编辑器",responsibility:"我完成了题目编辑与作答界面，重点处理光标控制、空位增删和题目数据转换。",summary:"像编辑普通文字一样出填空题，同一份题目可以直接预览和作答。",focus:["光标控制","混合内容编辑","数据一致性"],experience:"在诗句中放置光标并添加空位，再打开预览，填写刚刚编辑的题目。",boundary:"从业务项目中提取的填空题交互。题目仅保存在当前演示中，不提交到业务服务。",caseStudy:{context:"文字和空位混在一起时，既要保留自然的输入体验，也要保证编辑后的空位在作答时位置、顺序不变。",decisions:[{title:"把空位当作完整单元",description:"我用 contenteditable 编辑文字，将空位设为不可编辑节点，并处理两侧的退格和删除，避免空位被拆成残缺内容。"},{title:"插入空位，不丢失光标",description:"用 Selection / Range 保存并恢复选区，在光标处插入空位。中文输入结束后再更新内容，粘贴只保留纯文本，并统一限制字数。"},{title:"共用数据，不绑定编辑器结构",description:"将编辑内容转换为带空位标记的题干，不直接保存 DOM。预览按标记顺序生成输入框，让编辑和作答使用同一份题目。"}]}}],q=[...new Set(O.map(e=>e.year))].map(e=>({year:e,projects:O.filter(a=>a.year===e)})),W="modulepreload",X=function(e,a){return new URL(e,a).href},Z={},_=function(a,u,c){let r=Promise.resolve();if(u&&u.length>0){let n=function(i){return Promise.all(i.map(y=>Promise.resolve(y).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};const d=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),p=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));r=n(u.map(i=>{if(i=X(i,c),i in Z)return;Z[i]=!0;const y=i.endsWith(".css"),x=y?'[rel="stylesheet"]':"";if(!!c)for(let L=d.length-1;L>=0;L--){const I=d[L];if(I.href===i&&(!y||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${x}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":W,y||(v.as="script"),v.crossOrigin="",v.href=i,p&&v.setAttribute("nonce",p),document.head.appendChild(v),y)return new Promise((L,I)=>{v.addEventListener("load",L),v.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${i}`)))})}))}function s(n){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=n,window.dispatchEvent(d),!d.defaultPrevented)throw n}return r.then(n=>{for(const d of n||[])d.status==="rejected"&&s(d.reason);return a().catch(s)})},F={key:1,class:"load-status",role:"alert"},U={key:2,class:"load-status",role:"status"},J=b({__name:"ProjectDemo",props:{projectId:{}},setup(e){const a=e,u={"live-startup":()=>_(()=>import("./LiveStartupCase-Cc04SnWw.js"),__vite__mapDeps([0,1,2]),import.meta.url),"danmu-radar":()=>_(()=>import("./RadarDemo-Bu-mKIr-.js"),__vite__mapDeps([3,1,4]),import.meta.url),screen:()=>_(()=>import("./InteractiveScreenDemo-DGeoCOPM.js"),__vite__mapDeps([5,1,6]),import.meta.url),"product-card":()=>_(()=>import("./ProductCardDemo-CFnNGoNT.js"),__vite__mapDeps([7,1,8,9]),import.meta.url),loglens:()=>_(()=>import("./LogLensDemo-DmdGynxy.js"),__vite__mapDeps([10,1,11]),import.meta.url),"lucky-lottery":()=>_(()=>import("./LuckyLotteryDemo-lN75US2f.js"),__vite__mapDeps([12,1,8,13]),import.meta.url),"fill-blank":()=>_(()=>import("./FillBlankDemo-B6SvuYjA.js"),__vite__mapDeps([14,1,15]),import.meta.url)},c=w(null),r=w(!1);let s=!1;async function n(){r.value=!1;try{const d=await u[a.projectId]();s||(c.value=d.default)}catch{s||(r.value=!0)}}return n(),B(()=>{s=!0}),(d,m)=>c.value?(o(),A(H(c.value),{key:0})):r.value?(o(),l("div",F,[m[0]||(m[0]=t("p",null,"演示未能加载，请检查网络后重试。",-1)),t("button",{type:"button",onClick:n},"重试加载")])):(o(),l("p",U,"正在加载演示…"))}}),Q=k(J,[["__scopeId","data-v-bd6f0780"]]),ee=["id","aria-labelledby"],te={class:"project-heading"},ne={class:"project-meta"},ae=["datetime","aria-label"],oe=["id"],ie={class:"project-summary"},se={key:0,class:"project-responsibility"},le={class:"project-focus","aria-label":"实现关注点"},re={class:"project-actions"},ce=["aria-expanded","aria-controls","aria-label"],de=["aria-expanded","aria-controls","aria-label"],ue={"aria-hidden":"true"},pe=["id","aria-label"],he={class:"case-context"},me={class:"decisions"},ye={class:"case-boundary"},ge=["id","aria-label"],ve={class:"experience-tip"},fe={class:"experience-footer"},be=b({__name:"ProjectEntry",props:{project:{},active:{type:Boolean}},emits:["toggle"],setup(e,{emit:a}){const u=e,c=a,r=w(!1),s=S("entry"),n=S("experienceButton");async function d(){var p;c("toggle"),await E(),u.active&&((p=s.value)==null||p.scrollIntoView({block:"start"}))}async function m(){var p,i;c("toggle"),await E(),(p=n.value)==null||p.focus({preventScroll:!0}),(i=s.value)==null||i.scrollIntoView({block:"start"})}return(p,i)=>(o(),l("article",{id:e.project.id,ref_key:"entry",ref:s,class:"project-entry","aria-labelledby":`${e.project.id}-title`},[t("header",te,[t("div",ne,[t("time",{datetime:`${e.project.year}-${e.project.month}`,"aria-label":`${e.project.year} 年 ${e.project.month} 月`},h(e.project.month)+" 月",9,ae),i[1]||(i[1]=t("span",{class:"meta-divider","aria-hidden":"true"},"/",-1)),t("span",null,h(e.project.kind),1)]),t("h3",{id:`${e.project.id}-title`,class:"project-title"},h(e.project.title),9,oe),t("p",ie,h(e.project.summary),1),e.project.responsibility?(o(),l("p",se,h(e.project.responsibility),1)):g("",!0),t("ul",le,[(o(!0),l(f,null,j(e.project.focus,y=>(o(),l("li",{key:y},h(y),1))),128))])]),t("div",re,[t("button",{ref_key:"experienceButton",ref:n,type:"button",class:"experience-button","aria-expanded":e.active,"aria-controls":`${e.project.id}-demo`,"aria-label":`${e.active?"收起":e.project.presentation==="case"?"阅读":"体验"}${e.project.title}`,onClick:d},h(e.project.presentation==="case"?e.active?"收起案例":"阅读案例":e.active?"收起演示":"体验作品"),9,ce),e.project.caseStudy?(o(),l("button",{key:0,type:"button",class:"case-button","aria-expanded":r.value,"aria-controls":`${e.project.id}-case`,"aria-label":`${r.value?"收起":"查看"}${e.project.title}实现思路`,onClick:i[0]||(i[0]=y=>r.value=!r.value)},[R(h(r.value?"收起思路":"实现思路"),1),t("span",ue,h(r.value?"−":"+"),1)],8,de)):g("",!0)]),e.project.caseStudy?M((o(),l("section",{key:0,id:`${e.project.id}-case`,class:"case-study","aria-label":`${e.project.title}实现思路`},[t("p",he,h(e.project.caseStudy.context),1),t("ol",me,[(o(!0),l(f,null,j(e.project.caseStudy.decisions,y=>(o(),l("li",{key:y.title},[t("h4",null,h(y.title),1),t("p",null,h(y.description),1)]))),128))]),t("p",ye,h(e.project.boundary),1)],8,pe)),[[V,r.value]]):g("",!0),M(t("section",{id:`${e.project.id}-demo`,class:"experience","aria-label":`${e.project.title}体验区`},[e.active?(o(),l(f,{key:0},[t("p",ve,h(e.project.experience),1),(o(),A(Q,{key:e.project.id,"project-id":e.project.id},null,8,["project-id"])),t("div",fe,[t("p",null,h(e.project.boundary),1),t("button",{type:"button",onClick:m},h(e.project.presentation==="case"?"收起案例":"收起演示"),1)])],64)):g("",!0)],8,ge),[[V,e.active]])],8,ee))}}),_e=k(be,[["__scopeId","data-v-3a649068"]]),ke={class:"archive","aria-label":"项目作品时间归档"},$e=["aria-labelledby"],Ae=["id"],we={class:"year-items"},je=b({__name:"ProjectArchive",setup(e){const a=w(null);function u(c){a.value=a.value===c?null:c}return(c,r)=>(o(),l("section",ke,[r[0]||(r[0]=t("h1",{class:"visually-hidden"},"项目作品",-1)),(o(!0),l(f,null,j($(q),s=>(o(),l("section",{key:s.year,class:"year-group","aria-labelledby":`year-${s.year}`},[t("h2",{id:`year-${s.year}`,class:"year-label"},h(s.year),9,Ae),t("div",we,[(o(!0),l(f,null,j(s.projects,n=>(o(),A(_e,{key:n.id,project:n,active:a.value===n.id,onToggle:d=>u(n.id)},null,8,["project","active","onToggle"]))),128))])],8,$e))),128))]))}}),xe=k(je,[["__scopeId","data-v-f0689850"]]),Le=[{id:"llm",title:"大语言模型 · LLM",body:`从大量数据中学习语言规律，能根据上下文理解和生成文本的 AI 模型。

可以把它想成一位读过很多材料、擅长组织语言的助手。不过，这只是类比：它并不是像人一样读书，也不是把所有网页存起来，再逐条搜索答案。

常见的生成式语言模型会根据前面的内容，逐步生成后续文本。这种训练形成的能力，不只可以用来聊天，也能用于翻译、总结、写代码和分析材料。

## 举个例子

把一段杂乱的会议记录交给它，让它整理出“决定了什么、谁负责、还有什么没确定”。它可以重新组织信息，而不只是复制原句。

## 容易混淆

模型不等于聊天产品。聊天产品还可能额外提供联网搜索、文件读取和记忆功能。模型本身也不是实时更新、保证正确的百科全书。

## 延伸阅读

[Google Cloud · 生成式 AI 术语表](https://docs.cloud.google.com/docs/generative-ai/glossary)`,updatedAt:null},{id:"token",title:"Token · 文本单位",body:`AI 处理文字时使用的小块单位，不等于一个字，也不等于一个单词。

人习惯按字和词阅读，模型则先把文本转换成 Token。一个 Token 可能对应一个字、一个词的一部分，或者标点；具体怎么切分，取决于模型使用的编码方式。

可以把它理解为：同一段文字，需要先拆成模型能够处理的“小积木”。

## 举个例子

两篇字数相同的文章，一篇中文、一篇英文，转换后的 Token 数量不一定相同。同一段文字交给不同模型，Token 数量也可能不同。

为什么值得知道？因为上下文容量和许多模型服务的用量，都用 Token 衡量。

## 容易混淆

“生成了 100 个 Token”不代表“写了 100 个字”。输入、输出，以及某些模型内部使用的推理 Token，也需要区分。

## 延伸阅读

[OpenAI · 理解和计算 Token](https://help.openai.com/en/articles/4936856-understanding-and-counting-tokens)`,updatedAt:null},{id:"context-window",title:"上下文窗口 · Context Window",body:`模型在一次处理过程中，能够容纳的信息总量上限。

可以把它想成一张工作台：当前问题、聊天记录、参考文件和工具返回的结果，都需要放到台面上。通常还要为接下来生成的内容留出空间。

工作台越大，一次能放下的材料越多。但材料放得下，不代表每个细节都一定能被准确利用。

## 举个例子

让 AI 对照几份长文档找差异时，文档会占用上下文。如果内容太多，应用可能需要分批处理，或者先把旧内容压缩成摘要。

这也解释了为什么长对话里，AI 有时会漏掉很早之前说过的要求。

## 容易混淆

上下文不是长期记忆，也不是训练时学过的全部知识。聊天产品能跨会话“记住”偏好，通常还涉及额外的存储和检索机制。

## 延伸阅读

[Anthropic · 上下文窗口](https://platform.claude.com/docs/en/build-with-claude/context-windows)`,updatedAt:null},{id:"hallucination",title:"幻觉 · Hallucination",body:`AI 给出了看似可信、实际上错误或缺乏依据的内容。

最容易让人误判的，不是它答不出来，而是它答得很完整：措辞自然、细节丰富，甚至带着一条像模像样的参考链接。

语言流畅和事实正确是两回事。生成一个合理的回答，并不等于已经核实了回答中的事实。

## 举个例子

让 AI 推荐一本讨论某个冷门主题的书，它可能生成一个不存在的书名，顺带补上作者和出版年份。所有部分都很像真的，但查不到这本书。

## 怎么应对

涉及日期、数字、引用和重要结论时，要检查原始来源；资料不足时，允许它明确回答“不知道”。

## 容易混淆

幻觉不等于 AI 有意撒谎。联网搜索和提供参考资料可以降低部分错误，但不能保证幻觉完全消失。

## 延伸阅读

[OpenAI · 为什么语言模型会产生幻觉](https://openai.com/index/why-language-models-hallucinate/)`,updatedAt:null},{id:"prompt",title:"提示词 · Prompt",body:`交给 AI 的任务说明，以及帮助它完成任务的背景、材料和要求。

虽然中文叫“提示词”，它通常不只是几个关键词，也不只是一个问题。它可以包含任务目标、参考内容、输出格式和示例。

可以把它想成给协作者写的一份简短任务单：要求越明确，双方越不容易理解错。

## 举个例子

只说：“帮我总结这篇文章。”

换成：“给第一次接触这个主题的人，总结文章的三个核心观点。每点不超过两句话；文章没提到的信息不要补充。”

第二种写法明确了受众、篇幅和内容边界，更容易得到符合预期的结果。

## 容易混淆

提示词不是越长越好，也没有一句万能咒语能保证正确。有效的提示，是把任务说清楚，而不是堆满角色设定和形容词。

## 延伸阅读

[Google Cloud · 提示工程](https://cloud.google.com/discover/what-is-prompt-engineering)`,updatedAt:null},{id:"rag",title:"检索增强生成 · RAG",body:`先找到相关资料，再让 AI 结合资料回答。

如果只靠模型训练时学到的内容回答，可能缺少最新信息，也不了解某个组织的内部资料。RAG 的思路，是在回答前补上这部分依据。

它有点像开卷考试：不是只凭记忆作答，而是先翻到相关章节，再组织答案。

## 举个例子

询问公司助手：“出差住宿费用怎么报销？”

系统先从制度文档中检索相关条款，再把条款和问题一起交给模型，让它解释报销规则，并附上出处。

## 记住这个过程

提问 → 查找资料 → 结合资料回答

## 容易混淆

RAG 通常不会把资料重新训练进模型。它是在回答时提供参考；如果资料过期、检索找错，或者模型误读了条款，答案仍然可能出错。

## 延伸阅读

[Anthropic · 上下文检索](https://www.anthropic.com/engineering/contextual-retrieval)`,updatedAt:null},{id:"agent",title:"智能体 · Agent",body:`围绕一个目标，能够选择下一步行动，并根据结果继续调整的 AI 系统。

普通的一问一答，主要交付一段回答。Agent 则可以在具备工具和权限的环境里，反复进行“判断、行动、查看结果”，直到完成任务或需要人介入。

可以把它理解成：不仅告诉你怎么做，还能在授权范围内动手做。

## 举个例子

任务是“找出网页按钮失效的原因”。Agent 可以读取代码、运行检查、查看报错，再决定接下来查哪里。关键不在于步骤多，而在于后续行动会受前一步结果影响。

## 容易混淆

给聊天机器人接上一个工具，不一定就构成了完整的 Agent。预先写死每一步的流程，与由模型动态选择行动的系统，也存在区别。

Agent 同样会判断错误，因此需要清晰的权限、停止条件和结果检查。

## 延伸阅读

[Anthropic · 构建有效的 Agent](https://www.anthropic.com/engineering/building-effective-agents)`,updatedAt:null},{id:"mcp",title:"模型上下文协议 · MCP",body:`让 AI 应用与外部工具、数据源连接时，使用同一套沟通规则。

AI 应用要读文件、查数据库或访问日历，需要有人把这些能力接进来。如果每次连接都采用完全不同的方式，重复开发和维护会很麻烦。

MCP 的作用，是约定一套标准的连接方式。可以把它类比为通用接口：双方遵循相同规则，就更容易接在一起。

## 举个例子

一个日历服务通过 MCP 提供“查询空闲时间”的能力。支持相应连接方式的 AI 应用，在完成配置和授权后，就可以调用它，而不必为每个应用重新设计整套交互。

## 容易混淆

MCP 不是模型，也不是 Agent，更不等于已经获得所有工具的权限。

它解决的是“如何连接和沟通”；连接什么、允许做什么、结果是否可信，仍需要另外处理。AI 使用工具也不一定必须经过 MCP。

## 延伸阅读

[MCP 官方文档](https://modelcontextprotocol.io/docs/getting-started/intro)`,updatedAt:null},{id:"skill",title:"技能 · Skill",body:`把完成某类任务的方法、注意事项和配套资源，整理成 AI 可以复用的技能包。

这里说的是 Agent Skill。它可以包含操作说明、参考资料、模板和脚本，通常用 SKILL.md 说明适用场景与处理方法。

可以把它想成一份工作手册：不是每次从头交代怎么做，而是在遇到合适的任务时，取出对应手册。

## 举个例子

一个“中文文案校对”Skill，可以规定：保留原意，不编造事实；统一术语、标点和中英文排版；用修改前后的例子说明标准。

之后处理同类文案，就可以复用这些要求。

## 容易混淆

Skill 不是把新知识永久训练进模型，也不保证每次都执行正确。实际效果仍取决于说明质量、模型能力和运行环境。

它与 MCP 可以配合：MCP 提供连接工具的方式，Skill 说明某类任务该怎么做。

## 延伸阅读

[Agent Skills 官方文档](https://agentskills.io/home)`,updatedAt:null}];function Pe(e){var u;const a=((u=e.split(/\n\s*\n/).find(c=>c.trim()&&!/^(#|!\[)/.test(c.trim())))==null?void 0:u.trim())||"";return a.length>90?a.slice(0,90)+"…":a}const Ie=["width","height","fill","transform"],Ce={key:0},Se=t("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"},null,-1),Te=[Se],Ee={key:1},Be=t("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"},null,-1),Re=t("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"},null,-1),Me=[Be,Re],Ve={key:2},De=t("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"},null,-1),Oe=[De],Ze={key:3},ze=t("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"},null,-1),He=[ze],Ge={key:4},Ke=t("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"},null,-1),Ne=[Ke],Ye={key:5},qe=t("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"},null,-1),We=[qe],Xe={name:"PhX"},Fe=b({...Xe,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const a=e,u=C("weight","regular"),c=C("size","1em"),r=C("color","currentColor"),s=C("mirrored",!1),n=P(()=>a.weight??u),d=P(()=>a.size??c),m=P(()=>a.color??r),p=P(()=>a.mirrored!==void 0?a.mirrored?"scale(-1, 1)":void 0:s?"scale(-1, 1)":void 0);return(i,y)=>(o(),l("svg",K({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:d.value,height:d.value,fill:m.value,transform:p.value},i.$attrs),[G(i.$slots,"default"),n.value==="bold"?(o(),l("g",Ce,Te)):n.value==="duotone"?(o(),l("g",Ee,Me)):n.value==="fill"?(o(),l("g",Ve,Oe)):n.value==="light"?(o(),l("g",Ze,He)):n.value==="regular"?(o(),l("g",Ge,Ne)):n.value==="thin"?(o(),l("g",Ye,We)):g("",!0)],16,Ie))}}),Ue={class:"thought-body"},Je={key:0,class:"figure"},Qe=["src","alt"],et={key:0},tt={key:1,class:"section-title"},nt={key:2,class:"paragraph"},at=["href"],ot={key:3,class:"paragraph"},it=b({__name:"ThoughtBody",props:{body:{},imageBase:{}},setup(e){const a=e,u=/^!\[([^\]]*)\]\((thought-images\/[a-f0-9-]+\.(?:png|jpg|webp))\)$/,c=P(()=>a.body.split(/\n\s*\n/).filter(r=>r.trim()).map(r=>{const s=r.trim().match(u);if(s)return{type:"image",text:s[1],url:a.imageBase?a.imageBase+s[2].split("/")[1]:"./"+s[2]};const n=r.trim().match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);return n?{type:"link",text:n[1],url:n[2]}:r.startsWith("## ")?{type:"heading",text:r.slice(3)}:{type:"text",text:r}}));return(r,s)=>(o(),l("div",Ue,[(o(!0),l(f,null,j(c.value,(n,d)=>(o(),l(f,{key:d},[n.type==="image"?(o(),l("figure",Je,[t("img",{src:n.url,alt:n.text,loading:"lazy"},null,8,Qe),n.text?(o(),l("figcaption",et,h(n.text),1)):g("",!0)])):n.type==="heading"?(o(),l("h3",tt,h(n.text),1)):n.type==="link"?(o(),l("p",nt,[t("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[R(h(n.text),1),s[0]||(s[0]=t("span",{class:"new-window"},"（新窗口）",-1))],8,at)])):(o(),l("p",ot,h(n.text),1))],64))),128))]))}}),st=k(it,[["__scopeId","data-v-eb9b310f"]]),lt={class:"reader-toolbar"},rt={class:"reader-scroll"},ct={class:"reading-column"},dt={class:"reader-heading"},ut={key:0,class:"reader-name"},pt=b({__name:"ThoughtReader",props:{card:{}},emits:["close"],setup(e,{emit:a}){const u=a,c=S("dialog"),r=S("title");let s=0,n=null,d=!1;z(()=>{var p,i;s=window.scrollY,n=document.body.getAttribute("style"),Object.assign(document.body.style,{position:"fixed",top:`-${s}px`,width:"100%",overflow:"hidden"}),d=!0,(p=c.value)==null||p.showModal(),(i=r.value)==null||i.focus({preventScroll:!0})}),B(()=>{var p;(p=c.value)==null||p.close(),d&&(n===null?document.body.removeAttribute("style"):document.body.setAttribute("style",n),window.scrollTo({top:s,behavior:"instant"}))});function m(p){if(p.target!==c.value||!c.value)return;const i=c.value.getBoundingClientRect();(p.clientX<i.left||p.clientX>i.right||p.clientY<i.top||p.clientY>i.bottom)&&u("close")}return(p,i)=>(o(),l("dialog",{ref_key:"dialog",ref:c,class:"reader","aria-labelledby":"reader-title",onCancel:i[1]||(i[1]=N(y=>u("close"),["prevent"])),onClick:m},[t("header",lt,[i[3]||(i[3]=t("span",{class:"reader-label"},"思考",-1)),t("button",{type:"button",class:"close-button",onClick:i[0]||(i[0]=y=>u("close"))},[i[2]||(i[2]=t("span",null,"返回列表",-1)),D($(Fe),{size:18,"aria-hidden":"true"})])]),t("div",rt,[t("article",ct,[t("header",dt,[t("h2",{id:"reader-title",ref_key:"title",ref:r,class:"reader-term",tabindex:"-1"},h(e.card.title),513),e.card.updatedAt?(o(),l("p",ut,"更新于 "+h(e.card.updatedAt.slice(0,10)),1)):g("",!0)]),D(st,{body:e.card.body},null,8,["body"])])])],544))}}),ht=k(pt,[["__scopeId","data-v-83b00d3b"]]),mt={class:"knowledge-page","aria-labelledby":"knowledge-title"},yt={class:"page-heading"},gt={class:"collection-label"},vt={class:"concept-group","aria-label":"文章列表"},ft={class:"card-grid"},bt=["aria-label","onClick"],_t={class:"concept-name"},kt={class:"card-term"},$t={class:"card-summary"},At={key:0,class:"collection-label"},wt=b({__name:"Thoughts",setup(e){const a=[...Le].sort((n,d)=>(d.updatedAt||"").localeCompare(n.updatedAt||"")),u=w(null);let c=null;function r(n,d){c=d.currentTarget,u.value=n}async function s(){u.value=null,await E(),c!=null&&c.isConnected&&c.focus({preventScroll:!0})}return(n,d)=>(o(),l("section",mt,[t("header",yt,[d[0]||(d[0]=t("h1",{id:"knowledge-title"},"思考",-1)),t("span",gt,h($(a).length)+" 篇",1)]),t("section",vt,[t("div",ft,[(o(!0),l(f,null,j($(a),m=>(o(),l("button",{key:m.id,type:"button",class:"concept-card","aria-haspopup":"dialog","aria-label":"阅读："+m.title,onClick:p=>r(m,p)},[t("span",_t,[t("span",kt,h(m.title),1)]),t("span",$t,h($(Pe)(m.body)),1),d[1]||(d[1]=t("span",{class:"card-action","aria-hidden":"true"},"阅读全文",-1))],8,bt))),128))])]),$(a).length?g("",!0):(o(),l("p",At,"还没有文章。")),u.value?(o(),A(ht,{key:1,card:u.value,onClose:s},null,8,["card"])):g("",!0)]))}}),jt=k(wt,[["__scopeId","data-v-abd2a5c0"]]),xt={class:"site-shell"},Lt={class:"site-header","aria-label":"主导航"},Pt={class:"navigation","aria-label":"站点栏目"},It=["aria-current"],Ct={class:"secondary-navigation"},St=["aria-current"],Tt=["aria-current"],Et={id:"main-content",tabindex:"-1"},Bt={key:2,class:"content-page","aria-labelledby":"content-title"},Rt=b({__name:"App",setup(e){const a=w("demo"),u={demo:"项目作品 · 思考与实践",thoughts:"思考 · 思考与实践",skills:"Skills · 思考与实践"};function c(){const s=window.location.hash.replace(/^#\/?/,"");return s==="knowledge"?"thoughts":s==="thoughts"||s==="skills"?s:"demo"}function r(){window.location.hash!=="#main-content"&&(a.value=c(),document.title=u[a.value],window.scrollTo({top:0,behavior:"auto"}))}return z(()=>{r(),window.addEventListener("hashchange",r)}),B(()=>window.removeEventListener("hashchange",r)),(s,n)=>(o(),l("div",xt,[t("header",Lt,[t("nav",Pt,[t("a",{class:T(["nav-link",{"nav-link--active":a.value==="demo"}]),"aria-current":a.value==="demo"?"page":void 0,href:"#/demo"},"项目作品",10,It),t("div",Ct,[t("a",{class:T(["nav-link nav-link--secondary",{"nav-link--active":a.value==="thoughts"}]),"aria-current":a.value==="thoughts"?"page":void 0,href:"#/thoughts"},"思考",10,St),t("a",{class:T(["nav-link nav-link--secondary",{"nav-link--active":a.value==="skills"}]),"aria-current":a.value==="skills"?"page":void 0,href:"#/skills"},[...n[0]||(n[0]=[R("Skills",-1),t("span",null,"整理中",-1)])],10,Tt)])])]),t("main",Et,[a.value==="demo"?(o(),A(xe,{key:0})):a.value==="thoughts"?(o(),A(jt,{key:1})):(o(),l("section",Bt,[...n[1]||(n[1]=[t("span",{class:"content-status"},"整理中",-1),t("h1",{id:"content-title"},"Skills",-1),t("p",null,"计划分享业务实践中的可复用方法，附适用场景与脱敏示例。",-1),t("a",{class:"return-link",href:"#/demo"},"查看项目作品",-1)])]))])]))}}),Mt=k(Rt,[["__scopeId","data-v-b14ac9c7"]]);Y(Mt).mount("#app");export{Fe as F};
