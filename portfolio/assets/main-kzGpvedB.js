const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LiveStartupCase-DQ3-Bu_Y.js","./_plugin-vue_export-helper-VevzovFu.js","./LiveStartupCase-0x0GUtLr.css","./RadarDemo-CGM3OdbI.js","./RadarDemo-v1l_L2_X.css","./InteractiveScreenDemo-C8lrkpkD.js","./InteractiveScreenDemo-TFTCVMQZ.css","./ProductCardDemo-D5KYhPCO.js","./gift-Dnh8HYHo.js","./ProductCardDemo-DGnEHXP4.css","./LogLensDemo-Rowx06lD.js","./PhX.vue-Dxozhm0-.js","./LogLensDemo-DvAez_E2.css","./LuckyLotteryDemo-bbbE91yW.js","./LuckyLotteryDemo-C9W78xt6.css","./FillBlankDemo-CekuIhh5.js","./FillBlankDemo-PesS53tf.css"])))=>i.map(i=>d[i]);
import{d as w,o as U,a as i,c as j,r as G,b as l,e as t,s as x,_ as A,u as B,t as d,n as E,f as k,F as f,g as I,h as P,w as D,v as V,i as C,j as S,k as K,l as R,m as W,p as q,q as F}from"./_plugin-vue_export-helper-VevzovFu.js";const O=[{id:"live-startup",year:"2026",month:"10",title:"小程序直播 · 起播链路优化",kind:"性能优化",origin:"company",presentation:"case",summary:"从播放器插件到宿主 Demo，把进入后的准备工作前移，同时守住鉴权、流量与播放统计的边界。",focus:["请求复用","播放器预热","生命周期管理"],experience:"从等待发生在哪里，到方案取舍与验证结果。",boundary:"案例基于插件源码、桌面客户 Demo 和回归记录整理；以下是方案说明，不是在网页中运行微信播放器。"},{id:"danmu-radar",year:"2026",month:"10",title:"弹幕雷达 · 主播行动助手",kind:"黑客松作品",origin:"personal",summary:"从刷屏弹幕中找出求购、展示请求和购买障碍，提醒主播先做什么，并跟进处理结果。",focus:["需求归并","商品上下文","操作反馈"],experience:"点击「演示完整场景」，依次体验商品推送、展示、答疑和场控反馈，也可以自己发送弹幕。",boundary:"保留原作界面与规则归并逻辑。弹幕、商品和推送均在浏览器内模拟，不连接直播、库存或大模型服务。",caseStudy:{context:"弹幕多时，主播很难同时辨认观众在问什么、指的是哪件商品，以及哪些问题还没解决。",decisions:[{title:"把弹幕归成可以处理的提醒",description:"按求购、展示、答疑和购买障碍整理近 60 秒的弹幕，同一观众重复发送不重复计数，并保留原话供主播核对。"},{title:"用发言当时的商品理解指代",description:"明确商品编号优先；「这款」结合当时的推送记录关联。商品不明确时先确认，避免推荐错商品。"},{title:"让每次操作都有后续",description:"推送后展示观看页接收结果；展示与回答由主播确认；购买受阻进入待核实列表，收到模拟场控反馈后才完成。"}]}},{id:"screen",year:"2026",month:"09",title:"互动大屏",kind:"直播互动",origin:"company",responsibility:"我完成了抽奖与 PK 的页面和交互开发，重点处理动画衔接与大屏适配。",summary:"把抽奖过程、倒计时和 PK 排名呈现在大屏上，让观众跟得上活动节奏。",focus:["动画状态","Canvas 昵称球","舞台适配"],experience:"切换滚动抽奖、昵称球或摇一摇 PK，体验从开始到结果的完整展示。",boundary:"从业务项目中提取的交互演示。参与者、分数和结果均为模拟数据，不连接直播间或真实抽奖服务。",caseStudy:{context:"难点不只是做出动画，而是让活动进度、动画和结果展示保持一致，并适应不同尺寸的屏幕。",decisions:[{title:"用活动状态驱动画面",description:"我把流程控制与画面展示分开，按等待、进行、结果等状态切换内容，让动画跟随活动进度，而不是各自播放。"},{title:"让动效表达信息",description:"抽奖用滚动头像和 Canvas 昵称球呈现参与者，PK 用水柱呈现分数。昵称球按深度排序绘制，让前后遮挡和远近关系一致。"},{title:"分开处理画面与操作区",description:"舞台按 1920 × 1080 比例缩放，保留完整内容；本站演示的操作区独立布局，避免按钮随画面缩小而难以点击。"}]}},{id:"product-card",year:"2026",month:"09",title:"商品卡片",kind:"业务组件",origin:"company",summary:"完成商品卡片的界面与相关服务端改造，让新增样式既能展示，也能随商品讲解自动推送。",focus:["推送规则","讲解联动","多端展示"],experience:"选择卡片样式，开始讲解，观察推送规则如何影响观看端展示。",boundary:"使用虚构商品，在浏览器内模拟规则匹配与消息传递，不连接真实后端、直播或支付服务。"},{id:"loglens",year:"2025",month:"10",title:"LogLens · AI 问数",kind:"数据工具 · 交互演示",origin:"personal",summary:"查看数据后可以直接提问，在同一界面阅读摘要和继续追问。",focus:["数据问答流程","推荐追问","回答中断"],experience:"查看示例数据，选择推荐问题，或在回答过程中点击停止。",boundary:"公开版使用虚构数据与预设回答，逐字呈现为前端动画，未连接 AI 服务。"},{id:"lucky-lottery",year:"2025",month:"02",title:"幸运抽奖",kind:"业务组件",origin:"company",summary:"九宫格和转盘共用奖品数据，动画结束时停在指定的奖品上。",focus:["动画落点","加减速节奏","重复操作控制"],experience:"选择九宫格或转盘，指定一个结果，观察动画如何停在对应奖品上。",boundary:"模拟抽奖，不连接真实抽奖服务，也不发放奖品。"},{id:"fill-blank",year:"2024",month:"09",title:"问卷填空题",kind:"业务组件 · 编辑器",origin:"company",responsibility:"我完成了题目编辑与作答界面，重点处理光标控制、空位增删和题目数据转换。",summary:"像编辑普通文字一样出填空题，同一份题目可以直接预览和作答。",focus:["光标控制","混合内容编辑","数据一致性"],experience:"在诗句中放置光标并添加空位，再打开预览，填写刚刚编辑的题目。",boundary:"从业务项目中提取的填空题交互。题目仅保存在当前演示中，不提交到业务服务。",caseStudy:{context:"文字和空位混在一起时，既要保留自然的输入体验，也要保证编辑后的空位在作答时位置、顺序不变。",decisions:[{title:"把空位当作完整单元",description:"我用 contenteditable 编辑文字，将空位设为不可编辑节点，并处理两侧的退格和删除，避免空位被拆成残缺内容。"},{title:"插入空位，不丢失光标",description:"用 Selection / Range 保存并恢复选区，在光标处插入空位。中文输入结束后再更新内容，粘贴只保留纯文本，并统一限制字数。"},{title:"共用数据，不绑定编辑器结构",description:"将编辑内容转换为带空位标记的题干，不直接保存 DOM。预览按标记顺序生成输入框，让编辑和作答使用同一份题目。"}]}}],N=[...new Set(O.map(e=>e.year))].map(e=>({year:e,projects:O.filter(s=>s.year===e)})),z="modulepreload",H=function(e,s){return new URL(e,s).href},M={},$=function(s,u,r){let o=Promise.resolve();if(u&&u.length>0){let a=function(h){return Promise.all(h.map(c=>Promise.resolve(c).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const p=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),v=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));o=a(u.map(h=>{if(h=H(h,r),h in M)return;M[h]=!0;const c=h.endsWith(".css"),y=c?'[rel="stylesheet"]':"";if(!!r)for(let _=p.length-1;_>=0;_--){const b=p[_];if(b.href===h&&(!c||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${y}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":z,c||(g.as="script"),g.crossOrigin="",g.href=h,v&&g.setAttribute("nonce",v),document.head.appendChild(g),c)return new Promise((_,b)=>{g.addEventListener("load",_),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function n(a){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=a,window.dispatchEvent(p),!p.defaultPrevented)throw a}return o.then(a=>{for(const p of a||[])p.status==="rejected"&&n(p.reason);return s().catch(n)})},Y={key:1,class:"load-status",role:"alert"},J={key:2,class:"load-status",role:"status"},Q=w({__name:"ProjectDemo",props:{projectId:{}},setup(e){const s=e,u={"live-startup":()=>$(()=>import("./LiveStartupCase-DQ3-Bu_Y.js"),__vite__mapDeps([0,1,2]),import.meta.url),"danmu-radar":()=>$(()=>import("./RadarDemo-CGM3OdbI.js"),__vite__mapDeps([3,1,4]),import.meta.url),screen:()=>$(()=>import("./InteractiveScreenDemo-C8lrkpkD.js"),__vite__mapDeps([5,1,6]),import.meta.url),"product-card":()=>$(()=>import("./ProductCardDemo-D5KYhPCO.js"),__vite__mapDeps([7,1,8,9]),import.meta.url),loglens:()=>$(()=>import("./LogLensDemo-Rowx06lD.js"),__vite__mapDeps([10,1,11,12]),import.meta.url),"lucky-lottery":()=>$(()=>import("./LuckyLotteryDemo-bbbE91yW.js"),__vite__mapDeps([13,1,8,14]),import.meta.url),"fill-blank":()=>$(()=>import("./FillBlankDemo-CekuIhh5.js"),__vite__mapDeps([15,1,11,16]),import.meta.url)},r=x(null),o=x(!1);let n=!1;async function a(){o.value=!1;try{const p=await u[s.projectId]();n||(r.value=p.default)}catch{n||(o.value=!0)}}return a(),U(()=>{n=!0}),(p,m)=>r.value?(i(),j(G(r.value),{key:0})):o.value?(i(),l("div",Y,[m[0]||(m[0]=t("p",null,"演示未能加载，请检查网络后重试。",-1)),t("button",{type:"button",onClick:a},"重试加载")])):(i(),l("p",J,"正在加载演示…"))}}),X=A(Q,[["__scopeId","data-v-bd6f0780"]]),Z=["id","aria-labelledby"],ee={class:"project-heading"},te={class:"project-meta"},ne=["datetime","aria-label"],oe={class:"project-title-row"},ae=["id"],ie=["aria-label"],se={class:"project-summary"},le={key:0,class:"project-responsibility"},re={class:"project-focus","aria-label":"实现关注点"},ce={class:"project-actions"},de=["aria-expanded","aria-controls","aria-label"],ue=["aria-expanded","aria-controls","aria-label"],he={"aria-hidden":"true"},pe=["id","aria-label"],me={class:"case-context"},ye={class:"decisions"},ge={class:"case-boundary"},ve=["id","aria-label"],fe={class:"experience-tip"},ke={class:"experience-footer"},_e=w({__name:"ProjectEntry",props:{project:{},active:{type:Boolean}},emits:["toggle"],setup(e,{emit:s}){const u=e,r=s,o=x(!1),n=B("entry"),a=B("experienceButton");async function p(){var v;r("toggle"),await C(),u.active&&((v=n.value)==null||v.scrollIntoView({block:"start"}))}async function m(){var v,h;r("toggle"),await C(),(v=a.value)==null||v.focus({preventScroll:!0}),(h=n.value)==null||h.scrollIntoView({block:"start"})}return(v,h)=>(i(),l("article",{id:e.project.id,ref_key:"entry",ref:n,class:"project-entry","aria-labelledby":`${e.project.id}-title`},[t("header",ee,[t("div",te,[t("time",{datetime:`${e.project.year}-${e.project.month}`,"aria-label":`${e.project.year} 年 ${e.project.month} 月`},d(e.project.month)+" 月",9,ne),h[1]||(h[1]=t("span",{class:"meta-divider","aria-hidden":"true"},"/",-1)),t("span",null,d(e.project.kind),1)]),t("div",oe,[t("h3",{id:`${e.project.id}-title`,class:"project-title"},d(e.project.title),9,ae),t("span",{class:E(["project-origin",`origin-${e.project.origin}`]),"aria-label":e.project.origin==="company"?"公司项目":"个人项目"},d(e.project.origin==="company"?"公司":"个人"),11,ie)]),t("p",se,d(e.project.summary),1),e.project.responsibility?(i(),l("p",le,d(e.project.responsibility),1)):k("",!0),t("ul",re,[(i(!0),l(f,null,I(e.project.focus,c=>(i(),l("li",{key:c},d(c),1))),128))])]),t("div",ce,[t("button",{ref_key:"experienceButton",ref:a,type:"button",class:"experience-button","aria-expanded":e.active,"aria-controls":`${e.project.id}-demo`,"aria-label":`${e.active?"收起":e.project.presentation==="case"?"阅读":"体验"}${e.project.title}`,onClick:p},d(e.project.presentation==="case"?e.active?"收起案例":"阅读案例":e.active?"收起演示":"体验作品"),9,de),e.project.caseStudy?(i(),l("button",{key:0,type:"button",class:"case-button","aria-expanded":o.value,"aria-controls":`${e.project.id}-case`,"aria-label":`${o.value?"收起":"查看"}${e.project.title}实现思路`,onClick:h[0]||(h[0]=c=>o.value=!o.value)},[P(d(o.value?"收起思路":"实现思路"),1),t("span",he,d(o.value?"−":"+"),1)],8,ue)):k("",!0)]),e.project.caseStudy?D((i(),l("section",{key:0,id:`${e.project.id}-case`,class:"case-study","aria-label":`${e.project.title}实现思路`},[t("p",me,d(e.project.caseStudy.context),1),t("ol",ye,[(i(!0),l(f,null,I(e.project.caseStudy.decisions,c=>(i(),l("li",{key:c.title},[t("h4",null,d(c.title),1),t("p",null,d(c.description),1)]))),128))]),t("p",ge,d(e.project.boundary),1)],8,pe)),[[V,o.value]]):k("",!0),D(t("section",{id:`${e.project.id}-demo`,class:"experience","aria-label":`${e.project.title}体验区`},[e.active?(i(),l(f,{key:0},[t("p",fe,d(e.project.experience),1),(i(),j(X,{key:e.project.id,"project-id":e.project.id},null,8,["project-id"])),t("div",ke,[t("p",null,d(e.project.boundary),1),t("button",{type:"button",onClick:m},d(e.project.presentation==="case"?"收起案例":"收起演示"),1)])],64)):k("",!0)],8,ve),[[V,e.active]])],8,Z))}}),be=A(_e,[["__scopeId","data-v-98eee046"]]),$e={class:"archive","aria-label":"项目作品时间归档"},je=["aria-labelledby"],we=["id"],Ae={class:"year-items"},xe=w({__name:"ProjectArchive",setup(e){const s=x(null);function u(r){s.value=s.value===r?null:r}return(r,o)=>(i(),l("section",$e,[o[0]||(o[0]=t("h1",{class:"visually-hidden"},"项目作品",-1)),(i(!0),l(f,null,I(S(N),n=>(i(),l("section",{key:n.year,class:"year-group","aria-labelledby":`year-${n.year}`},[t("h2",{id:`year-${n.year}`,class:"year-label"},d(n.year),9,we),t("div",Ae,[(i(!0),l(f,null,I(n.projects,a=>(i(),j(be,{key:a.id,project:a,active:s.value===a.id,onToggle:p=>u(a.id)},null,8,["project","active","onToggle"]))),128))])],8,je))),128))]))}}),Ie=A(xe,[["__scopeId","data-v-f0689850"]]),L=[{id:"llm",title:"大语言模型 · LLM",body:`从大量数据中学习语言规律，能根据上下文理解和生成文本的 AI 模型。

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

[Agent Skills 官方文档](https://agentskills.io/home)`,updatedAt:null}];function Pe(e){var u;const s=((u=e.split(/\n\s*\n/).find(r=>r.trim()&&!/^(#|!\[)/.test(r.trim())))==null?void 0:u.trim())||"";return s.length>90?s.slice(0,90)+"…":s}const Ee={class:"knowledge-page","aria-label":"思考"},Se={class:"concept-group","aria-label":"文章列表"},Te={class:"card-grid"},Ce=["id","href","aria-label"],Re={class:"concept-name"},Le={key:0,class:"card-subtitle"},Be={class:"card-term"},De={class:"card-summary"},Ve={key:0,class:"collection-label"},Oe=w({__name:"Thoughts",setup(e){const s=[...L].sort((r,o)=>(o.updatedAt||"").localeCompare(r.updatedAt||""));function u(r){const o=r.split(/\s+·\s+/);if(o.length!==2)return{title:r,subtitle:""};const n=o.find(a=>/[\u3400-\u9fff]/.test(a));return!n||o.every(a=>/[\u3400-\u9fff]/.test(a))?{title:r,subtitle:""}:{title:n,subtitle:o.find(a=>a!==n)||""}}return(r,o)=>(i(),l("section",Ee,[t("section",Se,[t("div",Te,[(i(!0),l(f,null,I(S(s),n=>(i(),l("a",{key:n.id,id:"thought-"+n.id,class:"concept-card",href:"#/thoughts/"+encodeURIComponent(n.id),"aria-label":"阅读："+n.title},[t("span",Re,[u(n.title).subtitle?(i(),l("span",Le,d(u(n.title).subtitle),1)):k("",!0),t("span",Be,d(u(n.title).title),1)]),t("span",De,d(S(Pe)(n.body)),1),o[0]||(o[0]=t("span",{class:"card-action","aria-hidden":"true"},[t("span",null,"阅读全文"),t("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[t("path",{d:"M5 12h14M13 6l6 6-6 6"})])],-1))],8,Ce))),128))])]),S(s).length?k("",!0):(i(),l("p",Ve,"还没有文章。"))]))}}),Me=A(Oe,[["__scopeId","data-v-51209985"]]),Ue={class:"thought-body"},Ge={key:0,class:"figure"},Ke=["src","alt"],We={key:0},qe={key:2,class:"paragraph"},Fe=["href"],Ne={key:3,class:"paragraph"},ze=w({__name:"ThoughtBody",props:{body:{},imageBase:{},headingLevel:{}},setup(e){const s=e,u=/^!\[([^\]]*)\]\((thought-images\/[a-f0-9-]+\.(?:png|jpg|webp))\)$/,r=R(()=>s.body.split(/\n\s*\n/).filter(o=>o.trim()).map(o=>{const n=o.trim().match(u);if(n)return{type:"image",text:n[1],url:s.imageBase?s.imageBase+n[2].split("/")[1]:"./"+n[2]};const a=o.trim().match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);return a?{type:"link",text:a[1],url:a[2]}:o.startsWith("## ")?{type:"heading",text:o.slice(3)}:{type:"text",text:o}}));return(o,n)=>(i(),l("div",Ue,[(i(!0),l(f,null,I(r.value,(a,p)=>(i(),l(f,{key:p},[a.type==="image"?(i(),l("figure",Ge,[t("img",{src:a.url,alt:a.text,loading:"lazy"},null,8,Ke),a.text?(i(),l("figcaption",We,d(a.text),1)):k("",!0)])):a.type==="heading"?(i(),j(G(e.headingLevel||"h3"),{key:1,class:"section-title"},{default:K(()=>[P(d(a.text),1)]),_:2},1024)):a.type==="link"?(i(),l("p",qe,[t("a",{href:a.url,target:"_blank",rel:"noopener noreferrer"},[P(d(a.text),1),n[0]||(n[0]=t("span",{class:"new-window"},"（新窗口）",-1))],8,Fe)])):(i(),l("p",Ne,d(a.text),1))],64))),128))]))}}),He=A(ze,[["__scopeId","data-v-ee5675dd"]]),Ye={class:"reading-page","aria-labelledby":"reader-title"},Je={class:"reader-heading"},Qe={id:"reader-title",tabindex:"-1"},Xe={key:0,class:"reader-date"},Ze={key:0,class:"related-reading"},et=["href"],tt=w({__name:"ThoughtReader",props:{card:{}},setup(e){const s=e,u={llm:"token",token:"context-window","context-window":"rag",hallucination:"rag",prompt:"llm",rag:"hallucination",agent:"mcp",mcp:"skill",skill:"agent"},r=R(()=>L.find(o=>{var n;return o.id===u[((n=s.card)==null?void 0:n.id)||""]}));return(o,n)=>(i(),l("article",Ye,[n[4]||(n[4]=t("a",{class:"back-link",href:"#/thoughts"},[t("span",{"aria-hidden":"true"},"←"),P(" 全部思考")],-1)),e.card?(i(),l(f,{key:0},[t("header",Je,[t("h1",Qe,d(e.card.title),1),e.card.updatedAt?(i(),l("p",Xe,"更新于 "+d(e.card.updatedAt.slice(0,10)),1)):k("",!0)]),W(He,{body:e.card.body,"heading-level":"h2"},null,8,["body"]),r.value?(i(),l("footer",Ze,[n[1]||(n[1]=t("span",null,"继续阅读",-1)),t("a",{href:"#/thoughts/"+encodeURIComponent(r.value.id)},[P(d(r.value.title)+" ",1),n[0]||(n[0]=t("span",{"aria-hidden":"true"},"→",-1))],8,et)])):k("",!0)],64)):(i(),l(f,{key:1},[n[2]||(n[2]=t("h1",{id:"reader-title",class:"missing-title",tabindex:"-1"},"这篇文章暂时找不到了",-1)),n[3]||(n[3]=t("p",{class:"reader-date"},"可以返回列表，看看其他内容。",-1))],64))]))}}),nt=A(tt,[["__scopeId","data-v-dddd6e43"]]),ot={class:"site-shell"},at={class:"site-header","aria-label":"主导航"},it={class:"navigation","aria-label":"站点栏目"},st=["aria-current"],lt={class:"secondary-navigation"},rt=["aria-current"],ct=["aria-current"],dt={id:"main-content",tabindex:"-1"},ut={key:3,class:"content-page","aria-labelledby":"content-title"},ht=w({__name:"App",setup(e){const s=x("demo"),u=x(null),r=R(()=>L.find(c=>c.id===u.value));let o="",n=0,a="",p="auto";const m={demo:"项目作品 · 思考与实践",thoughts:"思考 · 思考与实践",skills:"Skills · 思考与实践"};function v(){const c=window.location.hash.replace(/^#\/?/,"");return c==="knowledge"||c.startsWith("thoughts/")?"thoughts":c==="thoughts"||c==="skills"?c:"demo"}async function h(){var _,b;if(window.location.hash==="#main-content")return;(o==="#/thoughts"||o==="#/knowledge")&&(n=window.scrollY,a=((_=document.activeElement)==null?void 0:_.id)||"");const c=window.location.hash;o=c,s.value=v();const y=c.match(/^#\/?thoughts\/(.*)$/);try{u.value=y?decodeURIComponent(y[1]):null}catch{u.value=""}if(document.title=u.value!==null?`${((b=r.value)==null?void 0:b.title)||"文章未找到"} · 思考与实践`:m[s.value],await C(),c!==window.location.hash)return;const T=s.value==="thoughts"&&u.value===null,g=T&&a?document.getElementById(a):document.getElementById("reader-title")||document.getElementById("main-content");g==null||g.focus({preventScroll:!0}),window.scrollTo({top:T?n:0,behavior:"instant"})}return q(()=>{p=history.scrollRestoration,history.scrollRestoration="manual",h(),window.addEventListener("hashchange",h)}),U(()=>{window.removeEventListener("hashchange",h),history.scrollRestoration=p}),(c,y)=>(i(),l("div",ot,[t("header",at,[t("nav",it,[t("a",{class:E(["nav-link",{"nav-link--active":s.value==="demo"}]),"aria-current":s.value==="demo"?"page":void 0,href:"#/demo"},"项目作品",10,st),t("div",lt,[t("a",{class:E(["nav-link nav-link--secondary",{"nav-link--active":s.value==="thoughts"}]),"aria-current":s.value==="thoughts"?"page":void 0,href:"#/thoughts"},"思考",10,rt),t("a",{class:E(["nav-link nav-link--secondary",{"nav-link--active":s.value==="skills"}]),"aria-current":s.value==="skills"?"page":void 0,href:"#/skills"},[...y[0]||(y[0]=[P("Skills",-1),t("span",null,"整理中",-1)])],10,ct)])])]),t("main",dt,[s.value==="demo"?(i(),j(Ie,{key:0})):s.value==="thoughts"&&u.value!==null?(i(),j(nt,{key:1,card:r.value},null,8,["card"])):s.value==="thoughts"?(i(),j(Me,{key:2})):(i(),l("section",ut,[...y[1]||(y[1]=[t("span",{class:"content-status"},"整理中",-1),t("h1",{id:"content-title"},"Skills",-1),t("p",null,"计划分享业务实践中的可复用方法，附适用场景与脱敏示例。",-1),t("a",{class:"return-link",href:"#/demo"},"查看项目作品",-1)])]))])]))}}),pt=A(ht,[["__scopeId","data-v-ccf41fcf"]]);F(pt).mount("#app");
