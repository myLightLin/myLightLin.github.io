const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LiveStartupCase-OdeOtFZ9.js","./_plugin-vue_export-helper-Bbe1h9CL.js","./LiveStartupCase-0x0GUtLr.css","./RadarDemo-BNuH1iCs.js","./RadarDemo-v1l_L2_X.css","./InteractiveScreenDemo-9WLwqzcx.js","./InteractiveScreenDemo-TFTCVMQZ.css","./ProductCardDemo-F3wTEj9g.js","./gift-Dnh8HYHo.js","./ProductCardDemo-DGnEHXP4.css","./LogLensDemo-BXK-8dRm.js","./PhX.vue-Cuiq5lxS.js","./LogLensDemo-DvAez_E2.css","./LuckyLotteryDemo-B1swpcB_.js","./LuckyLotteryDemo-C9W78xt6.css","./FillBlankDemo-BY7NLYxw.js","./FillBlankDemo-PesS53tf.css"])))=>i.map(i=>d[i]);
import{d as I,o as O,a,c as k,r as Q,b as l,e as t,s as w,_ as $,u as R,t as d,n as x,f as _,F as f,g as S,h as P,w as B,v as D,i as E,j as U,k as K,l as N,m as T,p as W,q,x as z}from"./_plugin-vue_export-helper-Bbe1h9CL.js";const V=[{id:"live-startup",year:"2026",month:"10",title:"小程序直播 · 起播链路优化",kind:"性能优化",origin:"company",presentation:"case",summary:"从播放器插件到宿主 Demo，把进入后的准备工作前移，同时守住鉴权、流量与播放统计的边界。",focus:["请求复用","播放器预热","生命周期管理"],experience:"从等待发生在哪里，到方案取舍与验证结果。",boundary:"案例基于插件源码、桌面客户 Demo 和回归记录整理；以下是方案说明，不是在网页中运行微信播放器。"},{id:"danmu-radar",year:"2026",month:"10",title:"弹幕雷达 · 主播行动助手",kind:"黑客松作品",origin:"personal",summary:"从刷屏弹幕中找出求购、展示请求和购买障碍，提醒主播先做什么，并跟进处理结果。",focus:["需求归并","商品上下文","操作反馈"],experience:"点击「演示完整场景」，依次体验商品推送、展示、答疑和场控反馈，也可以自己发送弹幕。",boundary:"保留原作界面与规则归并逻辑。弹幕、商品和推送均在浏览器内模拟，不连接直播、库存或大模型服务。",caseStudy:{context:"弹幕多时，主播很难同时辨认观众在问什么、指的是哪件商品，以及哪些问题还没解决。",decisions:[{title:"把弹幕归成可以处理的提醒",description:"按求购、展示、答疑和购买障碍整理近 60 秒的弹幕，同一观众重复发送不重复计数，并保留原话供主播核对。"},{title:"用发言当时的商品理解指代",description:"明确商品编号优先；「这款」结合当时的推送记录关联。商品不明确时先确认，避免推荐错商品。"},{title:"让每次操作都有后续",description:"推送后展示观看页接收结果；展示与回答由主播确认；购买受阻进入待核实列表，收到模拟场控反馈后才完成。"}]}},{id:"screen",year:"2026",month:"09",title:"互动大屏",kind:"直播互动",origin:"company",responsibility:"我完成了抽奖与 PK 的页面和交互开发，重点处理动画衔接与大屏适配。",summary:"把抽奖过程、倒计时和 PK 排名呈现在大屏上，让观众跟得上活动节奏。",focus:["动画状态","Canvas 昵称球","舞台适配"],experience:"切换滚动抽奖、昵称球或摇一摇 PK，体验从开始到结果的完整展示。",boundary:"从业务项目中提取的交互演示。参与者、分数和结果均为模拟数据，不连接直播间或真实抽奖服务。",caseStudy:{context:"难点不只是做出动画，而是让活动进度、动画和结果展示保持一致，并适应不同尺寸的屏幕。",decisions:[{title:"用活动状态驱动画面",description:"我把流程控制与画面展示分开，按等待、进行、结果等状态切换内容，让动画跟随活动进度，而不是各自播放。"},{title:"让动效表达信息",description:"抽奖用滚动头像和 Canvas 昵称球呈现参与者，PK 用水柱呈现分数。昵称球按深度排序绘制，让前后遮挡和远近关系一致。"},{title:"分开处理画面与操作区",description:"舞台按 1920 × 1080 比例缩放，保留完整内容；本站演示的操作区独立布局，避免按钮随画面缩小而难以点击。"}]}},{id:"product-card",year:"2026",month:"09",title:"商品卡片",kind:"业务组件",origin:"company",summary:"完成商品卡片的界面与相关服务端改造，让新增样式既能展示，也能随商品讲解自动推送。",focus:["推送规则","讲解联动","多端展示"],experience:"选择卡片样式，开始讲解，观察推送规则如何影响观看端展示。",boundary:"使用虚构商品，在浏览器内模拟规则匹配与消息传递，不连接真实后端、直播或支付服务。"},{id:"loglens",year:"2025",month:"10",title:"LogLens · AI 问数",kind:"数据工具 · 交互演示",origin:"personal",summary:"查看数据后可以直接提问，在同一界面阅读摘要和继续追问。",focus:["数据问答流程","推荐追问","回答中断"],experience:"查看示例数据，选择推荐问题，或在回答过程中点击停止。",boundary:"公开版使用虚构数据与预设回答，逐字呈现为前端动画，未连接 AI 服务。"},{id:"lucky-lottery",year:"2025",month:"02",title:"幸运抽奖",kind:"业务组件",origin:"company",summary:"九宫格和转盘共用奖品数据，动画结束时停在指定的奖品上。",focus:["动画落点","加减速节奏","重复操作控制"],experience:"选择九宫格或转盘，指定一个结果，观察动画如何停在对应奖品上。",boundary:"模拟抽奖，不连接真实抽奖服务，也不发放奖品。"},{id:"fill-blank",year:"2024",month:"09",title:"问卷填空题",kind:"业务组件 · 编辑器",origin:"company",responsibility:"我完成了题目编辑与作答界面，重点处理光标控制、空位增删和题目数据转换。",summary:"像编辑普通文字一样出填空题，同一份题目可以直接预览和作答。",focus:["光标控制","混合内容编辑","数据一致性"],experience:"在诗句中放置光标并添加空位，再打开预览，填写刚刚编辑的题目。",boundary:"从业务项目中提取的填空题交互。题目仅保存在当前演示中，不提交到业务服务。",caseStudy:{context:"文字和空位混在一起时，既要保留自然的输入体验，也要保证编辑后的空位在作答时位置、顺序不变。",decisions:[{title:"把空位当作完整单元",description:"我用 contenteditable 编辑文字，将空位设为不可编辑节点，并处理两侧的退格和删除，避免空位被拆成残缺内容。"},{title:"插入空位，不丢失光标",description:"用 Selection / Range 保存并恢复选区，在光标处插入空位。中文输入结束后再更新内容，粘贴只保留纯文本，并统一限制字数。"},{title:"共用数据，不绑定编辑器结构",description:"将编辑内容转换为带空位标记的题干，不直接保存 DOM。预览按标记顺序生成输入框，让编辑和作答使用同一份题目。"}]}}],F=[...new Set(V.map(e=>e.year))].map(e=>({year:e,projects:V.filter(o=>o.year===e)})),H="modulepreload",Y=function(e,o){return new URL(e,o).href},M={},j=function(o,p,c){let i=Promise.resolve();if(p&&p.length>0){let s=function(u){return Promise.all(u.map(r=>Promise.resolve(r).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const h=document.getElementsByTagName("link"),v=document.querySelector("meta[property=csp-nonce]"),m=(v==null?void 0:v.nonce)||(v==null?void 0:v.getAttribute("nonce"));i=s(p.map(u=>{if(u=Y(u,c),u in M)return;M[u]=!0;const r=u.endsWith(".css"),y=r?'[rel="stylesheet"]':"";if(!!c)for(let b=h.length-1;b>=0;b--){const A=h[b];if(A.href===u&&(!r||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${y}`))return;const g=document.createElement("link");if(g.rel=r?"stylesheet":H,r||(g.as="script"),g.crossOrigin="",g.href=u,m&&g.setAttribute("nonce",m),document.head.appendChild(g),r)return new Promise((b,A)=>{g.addEventListener("load",b),g.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${u}`)))})}))}function n(s){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=s,window.dispatchEvent(h),!h.defaultPrevented)throw s}return i.then(s=>{for(const h of s||[])h.status==="rejected"&&n(h.reason);return o().catch(n)})},J={key:1,class:"load-status",role:"alert"},X={key:2,class:"load-status",role:"status"},Z=I({__name:"ProjectDemo",props:{projectId:{}},setup(e){const o=e,p={"live-startup":()=>j(()=>import("./LiveStartupCase-OdeOtFZ9.js"),__vite__mapDeps([0,1,2]),import.meta.url),"danmu-radar":()=>j(()=>import("./RadarDemo-BNuH1iCs.js"),__vite__mapDeps([3,1,4]),import.meta.url),screen:()=>j(()=>import("./InteractiveScreenDemo-9WLwqzcx.js"),__vite__mapDeps([5,1,6]),import.meta.url),"product-card":()=>j(()=>import("./ProductCardDemo-F3wTEj9g.js"),__vite__mapDeps([7,1,8,9]),import.meta.url),loglens:()=>j(()=>import("./LogLensDemo-BXK-8dRm.js"),__vite__mapDeps([10,1,11,12]),import.meta.url),"lucky-lottery":()=>j(()=>import("./LuckyLotteryDemo-B1swpcB_.js"),__vite__mapDeps([13,1,8,14]),import.meta.url),"fill-blank":()=>j(()=>import("./FillBlankDemo-BY7NLYxw.js"),__vite__mapDeps([15,1,11,16]),import.meta.url)},c=w(null),i=w(!1);let n=!1;async function s(){i.value=!1;try{const h=await p[o.projectId]();n||(c.value=h.default)}catch{n||(i.value=!0)}}return s(),O(()=>{n=!0}),(h,v)=>c.value?(a(),k(Q(c.value),{key:0})):i.value?(a(),l("div",J,[v[0]||(v[0]=t("p",null,"演示未能加载，请检查网络后重试。",-1)),t("button",{type:"button",onClick:s},"重试加载")])):(a(),l("p",X,"正在加载演示…"))}}),ee=$(Z,[["__scopeId","data-v-bd6f0780"]]),te=["id","aria-labelledby"],ne={class:"project-heading"},ae={class:"project-meta"},oe=["datetime","aria-label"],ie={class:"project-title-row"},se=["id"],le=["aria-label"],re={class:"project-summary"},ce={key:0,class:"project-responsibility"},de={class:"project-focus","aria-label":"实现关注点"},ue={class:"project-actions"},pe=["aria-expanded","aria-controls","aria-label"],he=["aria-expanded","aria-controls","aria-label"],me={"aria-hidden":"true"},ve=["id","aria-label"],ye={class:"case-context"},ge={class:"decisions"},fe={class:"case-boundary"},be=["id","aria-label"],ke={class:"experience-tip"},_e={class:"experience-footer"},we=I({__name:"ProjectEntry",props:{project:{},active:{type:Boolean}},emits:["toggle"],setup(e,{emit:o}){const p=e,c=o,i=w(!1),n=R("entry"),s=R("experienceButton");async function h(){var m;c("toggle"),await E(),p.active&&((m=n.value)==null||m.scrollIntoView({block:"start"}))}async function v(){var m,u;c("toggle"),await E(),(m=s.value)==null||m.focus({preventScroll:!0}),(u=n.value)==null||u.scrollIntoView({block:"start"})}return(m,u)=>(a(),l("article",{id:e.project.id,ref_key:"entry",ref:n,class:"project-entry","aria-labelledby":`${e.project.id}-title`},[t("header",ne,[t("div",ae,[t("time",{datetime:`${e.project.year}-${e.project.month}`,"aria-label":`${e.project.year} 年 ${e.project.month} 月`},d(e.project.month)+" 月",9,oe),u[1]||(u[1]=t("span",{class:"meta-divider","aria-hidden":"true"},"/",-1)),t("span",null,d(e.project.kind),1)]),t("div",ie,[t("h3",{id:`${e.project.id}-title`,class:"project-title"},d(e.project.title),9,se),t("span",{class:x(["project-origin",`origin-${e.project.origin}`]),"aria-label":e.project.origin==="company"?"公司项目":"个人项目"},d(e.project.origin==="company"?"公司":"个人"),11,le)]),t("p",re,d(e.project.summary),1),e.project.responsibility?(a(),l("p",ce,d(e.project.responsibility),1)):_("",!0),t("ul",de,[(a(!0),l(f,null,S(e.project.focus,r=>(a(),l("li",{key:r},d(r),1))),128))])]),t("div",ue,[t("button",{ref_key:"experienceButton",ref:s,type:"button",class:"experience-button","aria-expanded":e.active,"aria-controls":`${e.project.id}-demo`,"aria-label":`${e.active?"收起":e.project.presentation==="case"?"阅读":"体验"}${e.project.title}`,onClick:h},d(e.project.presentation==="case"?e.active?"收起案例":"阅读案例":e.active?"收起演示":"体验作品"),9,pe),e.project.caseStudy?(a(),l("button",{key:0,type:"button",class:"case-button","aria-expanded":i.value,"aria-controls":`${e.project.id}-case`,"aria-label":`${i.value?"收起":"查看"}${e.project.title}实现思路`,onClick:u[0]||(u[0]=r=>i.value=!i.value)},[P(d(i.value?"收起思路":"实现思路"),1),t("span",me,d(i.value?"−":"+"),1)],8,he)):_("",!0)]),e.project.caseStudy?B((a(),l("section",{key:0,id:`${e.project.id}-case`,class:"case-study","aria-label":`${e.project.title}实现思路`},[t("p",ye,d(e.project.caseStudy.context),1),t("ol",ge,[(a(!0),l(f,null,S(e.project.caseStudy.decisions,r=>(a(),l("li",{key:r.title},[t("h4",null,d(r.title),1),t("p",null,d(r.description),1)]))),128))]),t("p",fe,d(e.project.boundary),1)],8,ve)),[[D,i.value]]):_("",!0),B(t("section",{id:`${e.project.id}-demo`,class:"experience","aria-label":`${e.project.title}体验区`},[e.active?(a(),l(f,{key:0},[t("p",ke,d(e.project.experience),1),(a(),k(ee,{key:e.project.id,"project-id":e.project.id},null,8,["project-id"])),t("div",_e,[t("p",null,d(e.project.boundary),1),t("button",{type:"button",onClick:v},d(e.project.presentation==="case"?"收起案例":"收起演示"),1)])],64)):_("",!0)],8,be),[[D,e.active]])],8,te))}}),$e=$(we,[["__scopeId","data-v-90ed8832"]]),Ae={class:"archive","aria-label":"项目经历时间归档"},je=["aria-labelledby"],xe=["id"],Ie={class:"year-items"},Se=I({__name:"ProjectArchive",setup(e){const o=w(null);function p(c){o.value=o.value===c?null:c}return(c,i)=>(a(),l("section",Ae,[i[0]||(i[0]=t("h1",{class:"visually-hidden"},"项目经历",-1)),(a(!0),l(f,null,S(U(F),n=>(a(),l("section",{key:n.year,class:"year-group","aria-labelledby":`year-${n.year}`},[t("h2",{id:`year-${n.year}`,class:"year-label"},d(n.year),9,xe),t("div",Ie,[(a(!0),l(f,null,S(n.projects,s=>(a(),k($e,{key:s.id,project:s,active:o.value===s.id,onToggle:h=>p(s.id)},null,8,["project","active","onToggle"]))),128))])],8,je))),128))]))}}),Pe=$(Se,[["__scopeId","data-v-756abfdd"]]),Ee={},Te={class:"about-page","aria-labelledby":"about-title"};function Ce(e,o){return a(),l("section",Te,[...o[0]||(o[0]=[K('<div class="introduction" data-v-ad88c111><header class="identity" data-v-ad88c111><h1 id="about-title" class="about-lead" data-v-ad88c111><span class="name" data-v-ad88c111>lightlin</span><span class="identity-dot" aria-hidden="true" data-v-ad88c111>·</span><span data-v-ad88c111>Agent 工程师</span></h1><p class="current-role" data-v-ad88c111>7 年前端开发经验</p></header><dl class="experience" data-v-ad88c111><div class="experience-row" data-v-ad88c111><dt class="experience-label" data-v-ad88c111>现在</dt><dd class="experience-detail" data-v-ad88c111><span class="company" data-v-ad88c111>保利威</span><span class="work-scope" data-v-ad88c111>直播互动业务、小程序播放插件</span></dd></div><div class="experience-row" data-v-ad88c111><dt class="experience-label" data-v-ad88c111>此前</dt><dd class="experience-detail" data-v-ad88c111><span class="company" data-v-ad88c111>爱范儿</span></dd></div></dl><p class="about-copy" data-v-ad88c111>在意交互与播放体验，也探索 AI 的实际用法。把做过的项目、实用的 Skills 和思考记录在这里。</p><div class="profile-links" data-v-ad88c111><a class="project-link" href="#/demo" data-v-ad88c111>项目经历 <span aria-hidden="true" data-v-ad88c111>↗</span></a><a class="project-link" href="#/thoughts" data-v-ad88c111>阅读思考 <span aria-hidden="true" data-v-ad88c111>↗</span></a></div></div>',1),t("figure",{class:"landscape"},[t("img",{class:"landscape-image",src:"./home-landscape.jpg",width:"1400",height:"933",alt:"远山、森林与宁静湖面的倒影",fetchpriority:"high"})],-1)])])}const Re=$(Ee,[["render",Ce],["__scopeId","data-v-ad88c111"]]),L=[{id:"qos",title:"服务质量 · QoS",body:`QoS 不是把播放器事件原样上报，而是把播放过程转换成能衡量服务质量的数据。

QoS 是 Quality of Service，中文叫「服务质量」。它并不专属于播放器。在播放场景里，可以从能否成功播放、起播耗时、缓冲时长和错误等指标，观察服务是否稳定、快速、流畅。

## 监听事件，只是第一步

可以把播放器事件想成仪表盘上的信号灯：灯亮了，说明状态发生了变化，但还不能直接判断原因。质量监测需要结合当前阶段和计时，解释这次变化意味着什么。

播放器事件 → 判断播放阶段 → 计算质量指标 → 上报

因此，播放器里的「QoS 模块」通常指质量数据的采集与统计实现，不等于 QoS 这个概念本身。

## 同一个 waiting，不一定都是卡顿

以 Web 播放器为例，waiting 表示播放因暂时缺少数据而等待。它不是一个可以直接累计为「卡顿次数」的业务结论。

首次播放尚未开始：这段等待属于起播过程，应按约定的起止点计入起播耗时，而不是当成播放中途卡顿。

正在拖动进度条：这是 seek 等待，需要与正常播放中的缓冲分开统计。

正常播放中突然停下来等待：这时才可能属于播放卡顿，需要记录开始时间，并在恢复播放时结束计时。

如果同一段等待重复触发事件，应识别为同一段过程，不能重复计次，也不能不断重置开始时间。

## 指标准确，优化才有方向

如果把起播等待也算成卡顿，报表就可能出现「视频还没播，已经卡了一次」。问题不一定在网络，而可能在统计口径。

做质量监测，先明确一次播放的边界、各阶段的起止点，再处理暂停、拖动、重试和结束。修正事件的业务含义，往往比增加上报字段更重要。

## QoS 和 QoE 有什么区别

QoS 更侧重服务表现；QoE 是 Quality of Experience，中文叫「体验质量」，关注用户实际感受到的体验。

请求失败、加载耗时和缓冲等数据，可以帮助解释「为什么看得不顺」。但技术指标好，不等于用户一定满意；画面清晰度、声音是否同步等因素也会影响体验。两者有关联，不是一回事。

## 延伸阅读

[MDN · waiting 事件](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/waiting_event)

[HTML 标准 · 媒体元素与播放状态](https://html.spec.whatwg.org/multipage/media.html)

[ITU · 服务质量与体验质量术语](https://www.itu.int/rec/T-REC-P.10-201711-I/en)`,updatedAt:"2026-11-05"},{id:"llm",title:"大语言模型 · LLM",body:`从大量数据中学习语言规律，能根据上下文理解和生成文本的 AI 模型。

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

[Agent Skills 官方文档](https://agentskills.io/home)`,updatedAt:null}],Le={class:"thought-body"},Be={key:0,class:"figure"},De=["src","alt"],Ve={key:0},Me={key:2,class:"paragraph"},Oe=["href"],Qe={key:3,class:"paragraph"},Ue=I({__name:"ThoughtBody",props:{body:{},imageBase:{},headingLevel:{}},setup(e){const o=e,p=/^!\[([^\]]*)\]\((thought-images\/[a-f0-9-]+\.(?:png|jpg|webp))\)$/,c=T(()=>o.body.split(/\n\s*\n/).filter(i=>i.trim()).map(i=>{const n=i.trim().match(p);if(n)return{type:"image",text:n[1],url:o.imageBase?o.imageBase+n[2].split("/")[1]:"./"+n[2]};const s=i.trim().match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);return s?{type:"link",text:s[1],url:s[2]}:i.startsWith("## ")?{type:"heading",text:i.slice(3)}:{type:"text",text:i}}));return(i,n)=>(a(),l("div",Le,[(a(!0),l(f,null,S(c.value,(s,h)=>(a(),l(f,{key:h},[s.type==="image"?(a(),l("figure",Be,[t("img",{src:s.url,alt:s.text,loading:"lazy"},null,8,De),s.text?(a(),l("figcaption",Ve,d(s.text),1)):_("",!0)])):s.type==="heading"?(a(),k(Q(e.headingLevel||"h3"),{key:1,class:"section-title"},{default:N(()=>[P(d(s.text),1)]),_:2},1024)):s.type==="link"?(a(),l("p",Me,[t("a",{href:s.url,target:"_blank",rel:"noopener noreferrer"},[P(d(s.text),1),n[0]||(n[0]=t("span",{class:"new-window"},"（新窗口）",-1))],8,Oe)])):(a(),l("p",Qe,d(s.text),1))],64))),128))]))}}),G=$(Ue,[["__scopeId","data-v-ee5675dd"]]),We={class:"notebook","aria-label":"思考笔记"},Ge={class:"contents"},Ke=["aria-expanded"],Ne={"aria-hidden":"true"},qe=["aria-current","onClick"],ze={class:"index"},Fe={class:"paper-heading"},He=["datetime"],Ye={key:1,class:"empty"},Je=I({__name:"Thoughts",setup(e){var h;const o=[...L].sort((v,m)=>(m.updatedAt||"").localeCompare(v.updatedAt||"")),p=w((h=o[0])==null?void 0:h.id),c=T(()=>o.find(v=>v.id===p.value)),i=w(!1),n=R("title");async function s(v){var m;p.value=v,i.value=!1,await E(),(m=n.value)==null||m.focus({preventScroll:!0}),window.scrollTo({top:0,behavior:"instant"})}return(v,m)=>(a(),l("section",We,[t("aside",Ge,[t("button",{class:"contents-toggle",type:"button","aria-expanded":i.value,"aria-controls":"thought-contents",onClick:m[0]||(m[0]=u=>i.value=!i.value)},[m[1]||(m[1]=P(" 目录 ",-1)),t("span",Ne,d(i.value?"−":"+"),1)],8,Ke),m[2]||(m[2]=t("span",{class:"contents-label"},"目录",-1)),t("nav",{id:"thought-contents",class:x(["contents-list",{"is-open":i.value}]),"aria-label":"思考目录"},[(a(!0),l(f,null,S(U(o),(u,r)=>(a(),l("button",{key:u.id,type:"button","aria-current":u.id===p.value?"true":void 0,onClick:y=>s(u.id)},[t("span",ze,d(String(r+1).padStart(2,"0")),1),t("span",null,d(u.title),1)],8,qe))),128))],2)]),c.value?(a(),l("article",{key:c.value.id,class:"paper","aria-labelledby":"thought-title"},[t("header",Fe,[c.value.updatedAt?(a(),l("time",{key:0,class:"date",datetime:c.value.updatedAt},d(c.value.updatedAt.slice(0,10)),9,He)):_("",!0),t("h1",{id:"thought-title",ref_key:"title",ref:n,tabindex:"-1"},d(c.value.title),513)]),W(G,{body:c.value.body,"heading-level":"h2"},null,8,["body"])])):(a(),l("p",Ye,"还没有发布内容。"))]))}}),Xe=$(Je,[["__scopeId","data-v-d6fbbdcc"]]),Ze={class:"reading-page","aria-labelledby":"reader-title"},et={class:"reader-heading"},tt={id:"reader-title",tabindex:"-1"},nt={key:0,class:"reader-date"},at={key:0,class:"related-reading"},ot=["href"],it=I({__name:"ThoughtReader",props:{card:{}},setup(e){const o=e,p={llm:"token",token:"context-window","context-window":"rag",hallucination:"rag",prompt:"llm",rag:"hallucination",agent:"mcp",mcp:"skill",skill:"agent"},c=T(()=>L.find(i=>{var n;return i.id===p[((n=o.card)==null?void 0:n.id)||""]}));return(i,n)=>(a(),l("article",Ze,[n[4]||(n[4]=t("a",{class:"back-link",href:"#/thoughts"},[t("span",{"aria-hidden":"true"},"←"),P(" 全部思考")],-1)),e.card?(a(),l(f,{key:0},[t("header",et,[t("h1",tt,d(e.card.title),1),e.card.updatedAt?(a(),l("p",nt,"更新于 "+d(e.card.updatedAt.slice(0,10)),1)):_("",!0)]),W(G,{body:e.card.body,"heading-level":"h2"},null,8,["body"]),c.value?(a(),l("footer",at,[n[1]||(n[1]=t("span",null,"继续阅读",-1)),t("a",{href:"#/thoughts/"+encodeURIComponent(c.value.id)},[P(d(c.value.title)+" ",1),n[0]||(n[0]=t("span",{"aria-hidden":"true"},"→",-1))],8,ot)])):_("",!0)],64)):(a(),l(f,{key:1},[n[2]||(n[2]=t("h1",{id:"reader-title",class:"missing-title",tabindex:"-1"},"这篇文章暂时找不到了",-1)),n[3]||(n[3]=t("p",{class:"reader-date"},"可以返回列表，看看其他内容。",-1))],64))]))}}),st=$(it,[["__scopeId","data-v-464e9af8"]]),lt={class:"site-header","aria-label":"主导航"},rt={class:"navigation","aria-label":"站点栏目"},ct=["aria-current"],dt=["aria-current"],ut={class:"secondary-navigation"},pt=["aria-current"],ht=["aria-current"],mt={id:"main-content",tabindex:"-1"},vt={key:4,class:"content-page","aria-labelledby":"content-title"},yt=I({__name:"App",setup(e){const o=w("about"),p=w(null),c=T(()=>L.find(r=>r.id===p.value));let i="",n=0,s="",h="auto";const v={about:"LightLin · 思考与实践",demo:"项目经历 · 思考与实践",thoughts:"思考 · 思考与实践",skills:"Skills · 思考与实践"};function m(){const r=window.location.hash.replace(/^#\/?/,"");return r==="knowledge"||r.startsWith("thoughts/")?"thoughts":r==="demo"||r==="thoughts"||r==="skills"?r:"about"}async function u(){var b,A;if(window.location.hash==="#main-content")return;(i==="#/thoughts"||i==="#/knowledge")&&(n=window.scrollY,s=((b=document.activeElement)==null?void 0:b.id)||"");const r=window.location.hash;i=r,o.value=m();const y=r.match(/^#\/?thoughts\/(.*)$/);try{p.value=y?decodeURIComponent(y[1]):null}catch{p.value=""}if(document.title=p.value!==null?`${((A=c.value)==null?void 0:A.title)||"文章未找到"} · 思考与实践`:v[o.value],await E(),r!==window.location.hash)return;const C=o.value==="thoughts"&&p.value===null,g=C&&s?document.getElementById(s):document.getElementById("reader-title")||document.getElementById("main-content");g==null||g.focus({preventScroll:!0}),window.scrollTo({top:C?n:0,behavior:"instant"})}return q(()=>{h=history.scrollRestoration,history.scrollRestoration="manual",u(),window.addEventListener("hashchange",u)}),O(()=>{window.removeEventListener("hashchange",u),history.scrollRestoration=h}),(r,y)=>(a(),l("div",{class:x(["site-shell",{"site-shell--about":o.value==="about"}])},[t("header",lt,[t("nav",rt,[t("a",{class:x(["nav-link nav-link--secondary",{"nav-link--active":o.value==="about"}]),"aria-current":o.value==="about"?"page":void 0,href:"#/about"},"关于我",10,ct),t("a",{class:x(["nav-link nav-link--secondary",{"nav-link--active":o.value==="demo"}]),"aria-current":o.value==="demo"?"page":void 0,href:"#/demo"},"项目经历",10,dt),t("div",ut,[t("a",{class:x(["nav-link nav-link--secondary",{"nav-link--active":o.value==="thoughts"}]),"aria-current":o.value==="thoughts"?"page":void 0,href:"#/thoughts"},"思考",10,pt),t("a",{class:x(["nav-link nav-link--secondary",{"nav-link--active":o.value==="skills"}]),"aria-current":o.value==="skills"?"page":void 0,href:"#/skills"},"Skills",10,ht)])])]),t("main",mt,[o.value==="about"?(a(),k(Re,{key:0})):o.value==="demo"?(a(),k(Pe,{key:1})):o.value==="thoughts"&&p.value!==null?(a(),k(st,{key:2,card:c.value},null,8,["card"])):o.value==="thoughts"?(a(),k(Xe,{key:3})):(a(),l("section",vt,[...y[0]||(y[0]=[t("span",{class:"content-status"},"整理中",-1),t("h1",{id:"content-title"},"Skills",-1),t("p",null,"计划分享业务实践中的可复用方法，附适用场景与脱敏示例。",-1),t("a",{class:"return-link",href:"#/demo"},"查看项目经历",-1)])]))])],2))}}),gt=$(yt,[["__scopeId","data-v-efaa2a40"]]);z(gt).mount("#app");
