const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LiveStartupCase-DU9tZCQ7.js","./_plugin-vue_export-helper-BmTdOM5R.js","./LiveStartupCase-0x0GUtLr.css","./RadarDemo-CpRu424b.js","./RadarDemo-v1l_L2_X.css","./InteractiveScreenDemo-2gI2E9Na.js","./InteractiveScreenDemo-TFTCVMQZ.css","./ProductCardDemo-CJtSbj_W.js","./gift-Dnh8HYHo.js","./ProductCardDemo-DGnEHXP4.css","./LogLensDemo-B69-BO2S.js","./PhX.vue-C2-bic8Z.js","./LogLensDemo-DvAez_E2.css","./LuckyLotteryDemo-9-NN1mOn.js","./LuckyLotteryDemo-C9W78xt6.css","./FillBlankDemo-Biw0mh7r.js","./FillBlankDemo-PesS53tf.css"])))=>i.map(i=>d[i]);
import{d as k,o as O,a as n,c as $,r as H,b as r,e,s as x,_ as b,u as T,t as u,n as w,f as A,F as f,g as P,h as j,w as Q,v as B,i as C,j as U,k as K,l as W,m as N,p as M,q as Z,x as E,y as q,z}from"./_plugin-vue_export-helper-BmTdOM5R.js";const D=[{id:"live-startup",year:"2026",month:"10",title:"小程序直播 · 起播链路优化",kind:"性能优化",origin:"company",presentation:"case",summary:"从播放器插件到宿主 Demo，把进入后的准备工作前移，同时守住鉴权、流量与播放统计的边界。",focus:["请求复用","播放器预热","生命周期管理"],experience:"从等待发生在哪里，到方案取舍与验证结果。",boundary:"案例基于插件源码、桌面客户 Demo 和回归记录整理；以下是方案说明，不是在网页中运行微信播放器。"},{id:"danmu-radar",year:"2026",month:"10",title:"弹幕雷达 · 主播行动助手",kind:"黑客松作品",origin:"personal",summary:"从刷屏弹幕中找出求购、展示请求和购买障碍，提醒主播先做什么，并跟进处理结果。",focus:["需求归并","商品上下文","操作反馈"],experience:"点击「演示完整场景」，依次体验商品推送、展示、答疑和场控反馈，也可以自己发送弹幕。",boundary:"保留原作界面与规则归并逻辑。弹幕、商品和推送均在浏览器内模拟，不连接直播、库存或大模型服务。",caseStudy:{context:"弹幕多时，主播很难同时辨认观众在问什么、指的是哪件商品，以及哪些问题还没解决。",decisions:[{title:"把弹幕归成可以处理的提醒",description:"按求购、展示、答疑和购买障碍整理近 60 秒的弹幕，同一观众重复发送不重复计数，并保留原话供主播核对。"},{title:"用发言当时的商品理解指代",description:"明确商品编号优先；「这款」结合当时的推送记录关联。商品不明确时先确认，避免推荐错商品。"},{title:"让每次操作都有后续",description:"推送后展示观看页接收结果；展示与回答由主播确认；购买受阻进入待核实列表，收到模拟场控反馈后才完成。"}]}},{id:"screen",year:"2026",month:"09",title:"互动大屏",kind:"直播互动",origin:"company",responsibility:"我完成了抽奖与 PK 的页面和交互开发，重点处理动画衔接与大屏适配。",summary:"把抽奖过程、倒计时和 PK 排名呈现在大屏上，让观众跟得上活动节奏。",focus:["动画状态","Canvas 昵称球","舞台适配"],experience:"切换滚动抽奖、昵称球或摇一摇 PK，体验从开始到结果的完整展示。",boundary:"从业务项目中提取的交互演示。参与者、分数和结果均为模拟数据，不连接直播间或真实抽奖服务。",caseStudy:{context:"难点不只是做出动画，而是让活动进度、动画和结果展示保持一致，并适应不同尺寸的屏幕。",decisions:[{title:"用活动状态驱动画面",description:"我把流程控制与画面展示分开，按等待、进行、结果等状态切换内容，让动画跟随活动进度，而不是各自播放。"},{title:"让动效表达信息",description:"抽奖用滚动头像和 Canvas 昵称球呈现参与者，PK 用水柱呈现分数。昵称球按深度排序绘制，让前后遮挡和远近关系一致。"},{title:"分开处理画面与操作区",description:"舞台按 1920 × 1080 比例缩放，保留完整内容；本站演示的操作区独立布局，避免按钮随画面缩小而难以点击。"}]}},{id:"product-card",year:"2026",month:"09",title:"商品卡片",kind:"业务组件",origin:"company",summary:"完成商品卡片的界面与相关服务端改造，让新增样式既能展示，也能随商品讲解自动推送。",focus:["推送规则","讲解联动","多端展示"],experience:"选择卡片样式，开始讲解，观察推送规则如何影响观看端展示。",boundary:"使用虚构商品，在浏览器内模拟规则匹配与消息传递，不连接真实后端、直播或支付服务。"},{id:"loglens",year:"2025",month:"10",title:"LogLens · AI 问数",kind:"数据工具 · 交互演示",origin:"personal",summary:"查看数据后可以直接提问，在同一界面阅读摘要和继续追问。",focus:["数据问答流程","推荐追问","回答中断"],experience:"查看示例数据，选择推荐问题，或在回答过程中点击停止。",boundary:"公开版使用虚构数据与预设回答，逐字呈现为前端动画，未连接 AI 服务。"},{id:"lucky-lottery",year:"2025",month:"02",title:"幸运抽奖",kind:"业务组件",origin:"company",summary:"九宫格和转盘共用奖品数据，动画结束时停在指定的奖品上。",focus:["动画落点","加减速节奏","重复操作控制"],experience:"选择九宫格或转盘，指定一个结果，观察动画如何停在对应奖品上。",boundary:"模拟抽奖，不连接真实抽奖服务，也不发放奖品。"},{id:"fill-blank",year:"2024",month:"09",title:"问卷填空题",kind:"业务组件 · 编辑器",origin:"company",responsibility:"我完成了题目编辑与作答界面，重点处理光标控制、空位增删和题目数据转换。",summary:"像编辑普通文字一样出填空题，同一份题目可以直接预览和作答。",focus:["光标控制","混合内容编辑","数据一致性"],experience:"在诗句中放置光标并添加空位，再打开预览，填写刚刚编辑的题目。",boundary:"从业务项目中提取的填空题交互。题目仅保存在当前演示中，不提交到业务服务。",caseStudy:{context:"文字和空位混在一起时，既要保留自然的输入体验，也要保证编辑后的空位在作答时位置、顺序不变。",decisions:[{title:"把空位当作完整单元",description:"我用 contenteditable 编辑文字，将空位设为不可编辑节点，并处理两侧的退格和删除，避免空位被拆成残缺内容。"},{title:"插入空位，不丢失光标",description:"用 Selection / Range 保存并恢复选区，在光标处插入空位。中文输入结束后再更新内容，粘贴只保留纯文本，并统一限制字数。"},{title:"共用数据，不绑定编辑器结构",description:"将编辑内容转换为带空位标记的题干，不直接保存 DOM。预览按标记顺序生成输入框，让编辑和作答使用同一份题目。"}]}}],F=[...new Set(D.map(t=>t.year))].map(t=>({year:t,projects:D.filter(a=>a.year===t)})),Y="modulepreload",J=function(t,a){return new URL(t,a).href},V={},S=function(a,c,i){let s=Promise.resolve();if(c&&c.length>0){let l=function(p){return Promise.all(p.map(d=>Promise.resolve(d).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const h=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),v=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));s=l(c.map(p=>{if(p=J(p,i),p in V)return;V[p]=!0;const d=p.endsWith(".css"),y=d?'[rel="stylesheet"]':"";if(!!i)for(let _=h.length-1;_>=0;_--){const I=h[_];if(I.href===p&&(!d||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${y}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Y,d||(g.as="script"),g.crossOrigin="",g.href=p,v&&g.setAttribute("nonce",v),document.head.appendChild(g),d)return new Promise((_,I)=>{g.addEventListener("load",_),g.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(l){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=l,window.dispatchEvent(h),!h.defaultPrevented)throw l}return s.then(l=>{for(const h of l||[])h.status==="rejected"&&o(h.reason);return a().catch(o)})},X={key:1,class:"load-status",role:"alert"},ee={key:2,class:"load-status",role:"status"},te=k({__name:"ProjectDemo",props:{projectId:{}},setup(t){const a=t,c={"live-startup":()=>S(()=>import("./LiveStartupCase-DU9tZCQ7.js"),__vite__mapDeps([0,1,2]),import.meta.url),"danmu-radar":()=>S(()=>import("./RadarDemo-CpRu424b.js"),__vite__mapDeps([3,1,4]),import.meta.url),screen:()=>S(()=>import("./InteractiveScreenDemo-2gI2E9Na.js"),__vite__mapDeps([5,1,6]),import.meta.url),"product-card":()=>S(()=>import("./ProductCardDemo-CJtSbj_W.js"),__vite__mapDeps([7,1,8,9]),import.meta.url),loglens:()=>S(()=>import("./LogLensDemo-B69-BO2S.js"),__vite__mapDeps([10,1,11,12]),import.meta.url),"lucky-lottery":()=>S(()=>import("./LuckyLotteryDemo-9-NN1mOn.js"),__vite__mapDeps([13,1,8,14]),import.meta.url),"fill-blank":()=>S(()=>import("./FillBlankDemo-Biw0mh7r.js"),__vite__mapDeps([15,1,11,16]),import.meta.url)},i=x(null),s=x(!1);let o=!1;async function l(){s.value=!1;try{const h=await c[a.projectId]();o||(i.value=h.default)}catch{o||(s.value=!0)}}return l(),O(()=>{o=!0}),(h,m)=>i.value?(n(),$(H(i.value),{key:0})):s.value?(n(),r("div",X,[m[0]||(m[0]=e("p",null,"演示未能加载，请检查网络后重试。",-1)),e("button",{type:"button",onClick:l},"重试加载")])):(n(),r("p",ee,"正在加载演示…"))}}),ne=b(te,[["__scopeId","data-v-bd6f0780"]]),ae=["id","aria-labelledby"],oe={class:"project-heading"},se={class:"project-meta"},ie=["datetime","aria-label"],le={class:"project-title-row"},re=["id"],ce=["aria-label"],de={class:"project-summary"},ue={key:0,class:"project-responsibility"},pe={class:"project-focus","aria-label":"实现关注点"},he={class:"project-actions"},ve=["aria-expanded","aria-controls","aria-label"],me=["aria-expanded","aria-controls","aria-label"],ye={"aria-hidden":"true"},ge=["id","aria-label"],fe={class:"case-context"},ke={class:"decisions"},be={class:"case-boundary"},_e=["id","aria-label"],we={class:"experience-tip"},$e={class:"experience-footer"},Ae=k({__name:"ProjectEntry",props:{project:{},active:{type:Boolean}},emits:["toggle"],setup(t,{emit:a}){const c=t,i=a,s=x(!1),o=T("entry"),l=T("experienceButton");async function h(){var v;i("toggle"),await C(),c.active&&((v=o.value)==null||v.scrollIntoView({block:"start"}))}async function m(){var v,p;i("toggle"),await C(),(v=l.value)==null||v.focus({preventScroll:!0}),(p=o.value)==null||p.scrollIntoView({block:"start"})}return(v,p)=>(n(),r("article",{id:t.project.id,ref_key:"entry",ref:o,class:"project-entry","aria-labelledby":`${t.project.id}-title`},[e("header",oe,[e("div",se,[e("time",{datetime:`${t.project.year}-${t.project.month}`,"aria-label":`${t.project.year} 年 ${t.project.month} 月`},u(t.project.month)+" 月",9,ie),p[1]||(p[1]=e("span",{class:"meta-divider","aria-hidden":"true"},"/",-1)),e("span",null,u(t.project.kind),1)]),e("div",le,[e("h3",{id:`${t.project.id}-title`,class:"project-title"},u(t.project.title),9,re),e("span",{class:w(["project-origin",`origin-${t.project.origin}`]),"aria-label":t.project.origin==="company"?"公司项目":"个人项目"},u(t.project.origin==="company"?"公司":"个人"),11,ce)]),e("p",de,u(t.project.summary),1),t.project.responsibility?(n(),r("p",ue,u(t.project.responsibility),1)):A("",!0),e("ul",pe,[(n(!0),r(f,null,P(t.project.focus,d=>(n(),r("li",{key:d},u(d),1))),128))])]),e("div",he,[e("button",{ref_key:"experienceButton",ref:l,type:"button",class:"experience-button","aria-expanded":t.active,"aria-controls":`${t.project.id}-demo`,"aria-label":`${t.active?"收起":t.project.presentation==="case"?"阅读":"体验"}${t.project.title}`,onClick:h},u(t.project.presentation==="case"?t.active?"收起案例":"阅读案例":t.active?"收起演示":"体验作品"),9,ve),t.project.caseStudy?(n(),r("button",{key:0,type:"button",class:"case-button","aria-expanded":s.value,"aria-controls":`${t.project.id}-case`,"aria-label":`${s.value?"收起":"查看"}${t.project.title}实现思路`,onClick:p[0]||(p[0]=d=>s.value=!s.value)},[j(u(s.value?"收起思路":"实现思路"),1),e("span",ye,u(s.value?"−":"+"),1)],8,me)):A("",!0)]),t.project.caseStudy?Q((n(),r("section",{key:0,id:`${t.project.id}-case`,class:"case-study","aria-label":`${t.project.title}实现思路`},[e("p",fe,u(t.project.caseStudy.context),1),e("ol",ke,[(n(!0),r(f,null,P(t.project.caseStudy.decisions,d=>(n(),r("li",{key:d.title},[e("h4",null,u(d.title),1),e("p",null,u(d.description),1)]))),128))]),e("p",be,u(t.project.boundary),1)],8,ge)),[[B,s.value]]):A("",!0),Q(e("section",{id:`${t.project.id}-demo`,class:"experience","aria-label":`${t.project.title}体验区`},[t.active?(n(),r(f,{key:0},[e("p",we,u(t.project.experience),1),(n(),$(ne,{key:t.project.id,"project-id":t.project.id},null,8,["project-id"])),e("div",$e,[e("p",null,u(t.project.boundary),1),e("button",{type:"button",onClick:m},u(t.project.presentation==="case"?"收起案例":"收起演示"),1)])],64)):A("",!0)],8,_e),[[B,t.active]])],8,ae))}}),xe=b(Ae,[["__scopeId","data-v-90ed8832"]]),je={class:"archive","aria-label":"项目经历时间归档"},Ie=["aria-labelledby"],Se=["id"],Pe={class:"year-items"},Ce=k({__name:"ProjectArchive",setup(t){const a=x(null);function c(i){a.value=a.value===i?null:i}return(i,s)=>(n(),r("section",je,[s[0]||(s[0]=e("h1",{class:"visually-hidden"},"项目经历",-1)),(n(!0),r(f,null,P(U(F),o=>(n(),r("section",{key:o.year,class:"year-group","aria-labelledby":`year-${o.year}`},[e("h2",{id:`year-${o.year}`,class:"year-label"},u(o.year),9,Se),e("div",Pe,[(n(!0),r(f,null,P(o.projects,l=>(n(),$(xe,{key:l.id,project:l,active:a.value===l.id,onToggle:h=>c(l.id)},null,8,["project","active","onToggle"]))),128))])],8,Ie))),128))]))}}),Ee=b(Ce,[["__scopeId","data-v-756abfdd"]]),Le={class:"cat-art",viewBox:"0 0 100 80",fill:"none","aria-hidden":"true"},Te=k({__name:"AboutCat",setup(t){const a=N(!1);return(c,i)=>(n(),r("button",{class:w(["cat",{"cat--stretching":a.value}]),type:"button","aria-label":"摸摸小猫，让它伸个懒腰",onClick:i[1]||(i[1]=s=>a.value=!0)},[(n(),r("svg",Le,[i[3]||(i[3]=e("ellipse",{cx:"49",cy:"67",rx:"36",ry:"3",fill:"currentColor",opacity:".08"},null,-1)),e("g",{class:"cat-body",onAnimationend:i[0]||(i[0]=K(s=>a.value=!1,["self"]))},[...i[2]||(i[2]=[W('<path class="cat-tail" d="M72 60C96 65 96 43 83 45" stroke="#a6ad94" stroke-width="8" stroke-linecap="round" data-v-3c0adc87></path><ellipse cx="58" cy="51" rx="25" ry="15" fill="#e7dcc6" stroke="#65675d" stroke-width="1.6" data-v-3c0adc87></ellipse><path d="M55 62H72C77 62 78 67 72 67H52" fill="#f3e9d6" stroke="#65675d" stroke-width="1.6" stroke-linecap="round" data-v-3c0adc87></path><g class="cat-head" data-v-3c0adc87><path d="M19 44L17 27Q18 24 21 27L31 34Q36 33 41 35L50 28Q53 26 53 30L52 47Q56 62 37 64Q17 64 17 51Z" fill="#f3e9d6" stroke="#65675d" stroke-width="1.6" stroke-linejoin="round" data-v-3c0adc87></path><path class="cat-ear" d="M21 31L23 40L28 36Z" fill="#cba99b" data-v-3c0adc87></path><path d="M49 33L44 38L49 41Z" fill="#cba99b" data-v-3c0adc87></path><path class="cat-eyes" d="M24 49Q27 52 30 49M39 49Q42 52 45 49" stroke="#65675d" stroke-width="1.6" stroke-linecap="round" data-v-3c0adc87></path><path d="M33 53H37L35 55Z" fill="#a48073" data-v-3c0adc87></path><path d="M35 55V57M32 58Q35 60 38 58M15 51L22 53M15 56H22M47 53L55 51M48 56H55" stroke="#65675d" stroke-width="1" stroke-linecap="round" data-v-3c0adc87></path></g><path class="cat-paws" d="M25 63H39Q44 63 43 66Q43 68 39 68H25Q20 68 20 66Q20 63 25 63Z" fill="#f3e9d6" stroke="#65675d" stroke-width="1.6" data-v-3c0adc87></path>',5)])],32)]))],2))}}),Me=b(Te,[["__scopeId","data-v-3c0adc87"]]),Re={class:"about-page","aria-labelledby":"about-title"},Qe={class:"introduction"},Be={class:"profile-links"},De=k({__name:"AboutPage",setup(t){return(a,c)=>(n(),r("section",Re,[e("div",Qe,[c[2]||(c[2]=W('<header class="identity" data-v-83c16f50><h1 id="about-title" class="about-lead" data-v-83c16f50><span class="name" data-v-83c16f50>lightlin</span><span class="identity-dot" aria-hidden="true" data-v-83c16f50>·</span><span class="role-part" data-v-83c16f50>Agent 工程师</span><span class="role-part" data-v-83c16f50>/ 前端工程师</span><span class="role-part" data-v-83c16f50>/ 7 年</span></h1><p class="current-role" data-v-83c16f50>Stay hungry, stay foolish.</p></header><dl class="experience" data-v-83c16f50><div class="experience-row" data-v-83c16f50><dt class="experience-label" data-v-83c16f50>现在</dt><dd class="experience-detail" data-v-83c16f50><span class="company" data-v-83c16f50>保利威</span><span class="work-scope" data-v-83c16f50>直播互动业务、小程序播放插件</span></dd></div><div class="experience-row" data-v-83c16f50><dt class="experience-label" data-v-83c16f50>此前</dt><dd class="experience-detail" data-v-83c16f50><span class="company" data-v-83c16f50>爱范儿</span></dd></div></dl><p class="about-copy" data-v-83c16f50>在意交互与播放体验，也探索 AI 的实际用法。把做过的项目、实用的 Skills 和思考记录在这里。</p>',3)),e("div",Be,[c[0]||(c[0]=e("a",{class:"project-link",href:"#/demo"},[j("项目经历 "),e("span",{"aria-hidden":"true"},"↗")],-1)),c[1]||(c[1]=e("a",{class:"project-link",href:"#/thoughts"},[j("阅读思考 "),e("span",{"aria-hidden":"true"},"↗")],-1)),M(Me)])]),c[3]||(c[3]=e("figure",{class:"landscape"},[e("img",{class:"landscape-image",src:"./home-landscape.jpg",width:"1400",height:"933",alt:"远山、森林与宁静湖面的倒影",fetchpriority:"high"})],-1))]))}}),Ve=b(De,[["__scopeId","data-v-83c16f50"]]),R=[{id:"qos",title:"服务质量 · QoS",body:`QoS 不是把播放器事件原样上报，而是把播放过程转换成能衡量服务质量的数据。

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

[Agent Skills 官方文档](https://agentskills.io/home)`,updatedAt:null}],Oe={class:"thought-body"},He={key:0,class:"figure"},Ue=["src","alt"],We={key:0},Ge={key:2,class:"paragraph"},Ke=["href"],Ne={key:3,class:"paragraph"},Ze=k({__name:"ThoughtBody",props:{body:{},imageBase:{},headingLevel:{}},setup(t){const a=t,c=/^!\[([^\]]*)\]\((thought-images\/[a-f0-9-]+\.(?:png|jpg|webp))\)$/,i=E(()=>a.body.split(/\n\s*\n/).filter(s=>s.trim()).map(s=>{const o=s.trim().match(c);if(o)return{type:"image",text:o[1],url:a.imageBase?a.imageBase+o[2].split("/")[1]:"./"+o[2]};const l=s.trim().match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);return l?{type:"link",text:l[1],url:l[2]}:s.startsWith("## ")?{type:"heading",text:s.slice(3)}:{type:"text",text:s}}));return(s,o)=>(n(),r("div",Oe,[(n(!0),r(f,null,P(i.value,(l,h)=>(n(),r(f,{key:h},[l.type==="image"?(n(),r("figure",He,[e("img",{src:l.url,alt:l.text,loading:"lazy"},null,8,Ue),l.text?(n(),r("figcaption",We,u(l.text),1)):A("",!0)])):l.type==="heading"?(n(),$(H(t.headingLevel||"h3"),{key:1,class:"section-title"},{default:Z(()=>[j(u(l.text),1)]),_:2},1024)):l.type==="link"?(n(),r("p",Ge,[e("a",{href:l.url,target:"_blank",rel:"noopener noreferrer"},[j(u(l.text),1),o[0]||(o[0]=e("span",{class:"new-window"},"（新窗口）",-1))],8,Ke)])):(n(),r("p",Ne,u(l.text),1))],64))),128))]))}}),G=b(Ze,[["__scopeId","data-v-ee5675dd"]]),qe={class:"notebook","aria-label":"思考笔记"},ze={class:"contents"},Fe=["aria-expanded"],Ye={"aria-hidden":"true"},Je=["aria-current","onClick"],Xe={class:"index"},et={class:"paper-heading"},tt=["datetime"],nt={key:1,class:"empty"},at=k({__name:"Thoughts",setup(t){var h;const a=[...R].sort((m,v)=>(v.updatedAt||"").localeCompare(m.updatedAt||"")),c=x((h=a[0])==null?void 0:h.id),i=E(()=>a.find(m=>m.id===c.value)),s=x(!1),o=T("title");async function l(m){var v;c.value=m,s.value=!1,await C(),(v=o.value)==null||v.focus({preventScroll:!0}),window.scrollTo({top:0,behavior:"instant"})}return(m,v)=>(n(),r("section",qe,[e("aside",ze,[e("button",{class:"contents-toggle",type:"button","aria-expanded":s.value,"aria-controls":"thought-contents",onClick:v[0]||(v[0]=p=>s.value=!s.value)},[v[1]||(v[1]=j(" 目录 ",-1)),e("span",Ye,u(s.value?"−":"+"),1)],8,Fe),v[2]||(v[2]=e("span",{class:"contents-label"},"目录",-1)),e("nav",{id:"thought-contents",class:w(["contents-list",{"is-open":s.value}]),"aria-label":"思考目录"},[(n(!0),r(f,null,P(U(a),(p,d)=>(n(),r("button",{key:p.id,type:"button","aria-current":p.id===c.value?"true":void 0,onClick:y=>l(p.id)},[e("span",Xe,u(String(d+1).padStart(2,"0")),1),e("span",null,u(p.title),1)],8,Je))),128))],2)]),i.value?(n(),r("article",{key:i.value.id,class:"paper","aria-labelledby":"thought-title"},[e("header",et,[i.value.updatedAt?(n(),r("time",{key:0,class:"date",datetime:i.value.updatedAt},u(i.value.updatedAt.slice(0,10)),9,tt)):A("",!0),e("h1",{id:"thought-title",ref_key:"title",ref:o,tabindex:"-1"},u(i.value.title),513)]),M(G,{body:i.value.body,"heading-level":"h2"},null,8,["body"])])):(n(),r("p",nt,"还没有发布内容。"))]))}}),ot=b(at,[["__scopeId","data-v-d6fbbdcc"]]),st={class:"reading-page","aria-labelledby":"reader-title"},it={class:"reader-heading"},lt={id:"reader-title",tabindex:"-1"},rt={key:0,class:"reader-date"},ct={key:0,class:"related-reading"},dt=["href"],ut=k({__name:"ThoughtReader",props:{card:{}},setup(t){const a=t,c={llm:"token",token:"context-window","context-window":"rag",hallucination:"rag",prompt:"llm",rag:"hallucination",agent:"mcp",mcp:"skill",skill:"agent"},i=E(()=>R.find(s=>{var o;return s.id===c[((o=a.card)==null?void 0:o.id)||""]}));return(s,o)=>(n(),r("article",st,[o[4]||(o[4]=e("a",{class:"back-link",href:"#/thoughts"},[e("span",{"aria-hidden":"true"},"←"),j(" 全部思考")],-1)),t.card?(n(),r(f,{key:0},[e("header",it,[e("h1",lt,u(t.card.title),1),t.card.updatedAt?(n(),r("p",rt,"更新于 "+u(t.card.updatedAt.slice(0,10)),1)):A("",!0)]),M(G,{body:t.card.body,"heading-level":"h2"},null,8,["body"]),i.value?(n(),r("footer",ct,[o[1]||(o[1]=e("span",null,"继续阅读",-1)),e("a",{href:"#/thoughts/"+encodeURIComponent(i.value.id)},[j(u(i.value.title)+" ",1),o[0]||(o[0]=e("span",{"aria-hidden":"true"},"→",-1))],8,dt)])):A("",!0)],64)):(n(),r(f,{key:1},[o[2]||(o[2]=e("h1",{id:"reader-title",class:"missing-title",tabindex:"-1"},"这篇文章暂时找不到了",-1)),o[3]||(o[3]=e("p",{class:"reader-date"},"可以返回列表，看看其他内容。",-1))],64))]))}}),pt=b(ut,[["__scopeId","data-v-464e9af8"]]),ht={class:"site-header","aria-label":"主导航"},vt={class:"navigation","aria-label":"站点栏目"},mt=["aria-current"],yt=["aria-current"],gt={class:"secondary-navigation"},ft=["aria-current"],kt=["aria-current"],bt={id:"main-content",tabindex:"-1"},_t={key:4,class:"content-page","aria-labelledby":"content-title"},wt=k({__name:"App",setup(t){const a=x("about"),c=x(null),i=E(()=>R.find(d=>d.id===c.value));let s="",o=0,l="",h="auto";const m={about:"LightLin · 思考与实践",demo:"项目经历 · 思考与实践",thoughts:"思考 · 思考与实践",skills:"Skills · 思考与实践"};function v(){const d=window.location.hash.replace(/^#\/?/,"");return d==="knowledge"||d.startsWith("thoughts/")?"thoughts":d==="demo"||d==="thoughts"||d==="skills"?d:"about"}async function p(){var _,I;if(window.location.hash==="#main-content")return;(s==="#/thoughts"||s==="#/knowledge")&&(o=window.scrollY,l=((_=document.activeElement)==null?void 0:_.id)||"");const d=window.location.hash;s=d,a.value=v();const y=d.match(/^#\/?thoughts\/(.*)$/);try{c.value=y?decodeURIComponent(y[1]):null}catch{c.value=""}if(document.title=c.value!==null?`${((I=i.value)==null?void 0:I.title)||"文章未找到"} · 思考与实践`:m[a.value],await C(),d!==window.location.hash)return;const L=a.value==="thoughts"&&c.value===null,g=L&&l?document.getElementById(l):document.getElementById("reader-title")||document.getElementById("main-content");g==null||g.focus({preventScroll:!0}),window.scrollTo({top:L?o:0,behavior:"instant"})}return q(()=>{h=history.scrollRestoration,history.scrollRestoration="manual",p(),window.addEventListener("hashchange",p)}),O(()=>{window.removeEventListener("hashchange",p),history.scrollRestoration=h}),(d,y)=>(n(),r("div",{class:w(["site-shell",{"site-shell--about":a.value==="about"}])},[e("header",ht,[e("nav",vt,[e("a",{class:w(["nav-link nav-link--secondary",{"nav-link--active":a.value==="about"}]),"aria-current":a.value==="about"?"page":void 0,href:"#/about"},"关于我",10,mt),e("a",{class:w(["nav-link nav-link--secondary",{"nav-link--active":a.value==="demo"}]),"aria-current":a.value==="demo"?"page":void 0,href:"#/demo"},"项目经历",10,yt),e("div",gt,[e("a",{class:w(["nav-link nav-link--secondary",{"nav-link--active":a.value==="thoughts"}]),"aria-current":a.value==="thoughts"?"page":void 0,href:"#/thoughts"},"思考",10,ft),e("a",{class:w(["nav-link nav-link--secondary",{"nav-link--active":a.value==="skills"}]),"aria-current":a.value==="skills"?"page":void 0,href:"#/skills"},"Skills",10,kt)])])]),e("main",bt,[a.value==="about"?(n(),$(Ve,{key:0})):a.value==="demo"?(n(),$(Ee,{key:1})):a.value==="thoughts"&&c.value!==null?(n(),$(pt,{key:2,card:i.value},null,8,["card"])):a.value==="thoughts"?(n(),$(ot,{key:3})):(n(),r("section",_t,[...y[0]||(y[0]=[e("span",{class:"content-status"},"整理中",-1),e("h1",{id:"content-title"},"Skills",-1),e("p",null,"计划分享业务实践中的可复用方法，附适用场景与脱敏示例。",-1),e("a",{class:"return-link",href:"#/demo"},"查看项目经历",-1)])]))])],2))}}),$t=b(wt,[["__scopeId","data-v-efaa2a40"]]);z($t).mount("#app");
