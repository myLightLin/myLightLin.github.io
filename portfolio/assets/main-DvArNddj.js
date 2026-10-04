const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./InteractiveScreenDemo-C-6iKleh.js","./_plugin-vue_export-helper-DmF5V5fn.js","./InteractiveScreenDemo-TFTCVMQZ.css","./ProductCardDemo-CIDUvaxU.js","./gift-Dnh8HYHo.js","./ProductCardDemo-RyBlwiJz.css","./LogLensDemo-CMi6UKLW.js","./LogLensDemo-DvAez_E2.css","./LuckyLotteryDemo-BZwYf3aD.js","./LuckyLotteryDemo-C9W78xt6.css","./FillBlankDemo-CHREHP0M.js","./FillBlankDemo-PesS53tf.css"])))=>i.map(i=>d[i]);
import{d as b,o as B,a,c as $,r as H,b as l,e,s as A,_,u as S,t as h,f as g,F as f,g as w,h as R,w as M,v as V,n as E,i as k,j as I,k as G,m as K,l as P,p as z,q as N,x as D,y as T,z as Y}from"./_plugin-vue_export-helper-DmF5V5fn.js";const O=[{id:"screen",year:"2026",month:"09",title:"互动大屏",kind:"直播互动",featured:!0,responsibility:"我完成了抽奖与 PK 的页面和交互开发，重点处理动画衔接与大屏适配。",summary:"把抽奖过程、倒计时和 PK 排名呈现在大屏上，让观众跟得上活动节奏。",focus:["动画状态","Canvas 昵称球","舞台适配"],experience:"切换滚动抽奖、昵称球或摇一摇 PK，体验从开始到结果的完整展示。",boundary:"从业务项目中提取的交互演示。参与者、分数和结果均为模拟数据，不连接直播间或真实抽奖服务。",caseStudy:{context:"难点不只是做出动画，而是让活动进度、动画和结果展示保持一致，并适应不同尺寸的屏幕。",decisions:[{title:"用活动状态驱动画面",description:"我把流程控制与画面展示分开，按等待、进行、结果等状态切换内容，让动画跟随活动进度，而不是各自播放。"},{title:"让动效表达信息",description:"抽奖用滚动头像和 Canvas 昵称球呈现参与者，PK 用水柱呈现分数。昵称球按深度排序绘制，让前后遮挡和远近关系一致。"},{title:"分开处理画面与操作区",description:"舞台按 1920 × 1080 比例缩放，保留完整内容；本站演示的操作区独立布局，避免按钮随画面缩小而难以点击。"}]}},{id:"product-card",year:"2026",month:"09",title:"商品卡片",kind:"业务组件",summary:"在一张商品卡片里展示秒杀、售罄和讲解状态，兼顾长标题与手机窄屏。",focus:["状态组合","内容裁切","响应式布局"],experience:"切换商品状态，尝试长标题、无图模式和不同卡片宽度。",boundary:"使用虚构商品；仅展示交互状态，不提供购买或支付功能。"},{id:"loglens",year:"2025",month:"10",title:"LogLens · AI 问数",kind:"数据工具 · 交互演示",summary:"查看数据后可以直接提问，在同一界面阅读摘要和继续追问。",focus:["数据问答流程","推荐追问","回答中断"],experience:"查看示例数据，选择推荐问题，或在回答过程中点击停止。",boundary:"公开版使用虚构数据与预设回答，逐字呈现为前端动画，未连接 AI 服务。"},{id:"lucky-lottery",year:"2025",month:"02",title:"幸运抽奖",kind:"业务组件",summary:"九宫格和转盘共用奖品数据，动画结束时停在指定的奖品上。",focus:["动画落点","加减速节奏","重复操作控制"],experience:"选择九宫格或转盘，指定一个结果，观察动画如何停在对应奖品上。",boundary:"模拟抽奖，不连接真实抽奖服务，也不发放奖品。"},{id:"fill-blank",year:"2024",month:"09",title:"问卷填空题",kind:"业务组件 · 编辑器",featured:!0,responsibility:"我完成了题目编辑与作答界面，重点处理光标控制、空位增删和题目数据转换。",summary:"像编辑普通文字一样出填空题，同一份题目可以直接预览和作答。",focus:["光标控制","混合内容编辑","数据一致性"],experience:"在诗句中放置光标并添加空位，再打开预览，填写刚刚编辑的题目。",boundary:"从业务项目中提取的填空题交互。题目仅保存在当前演示中，不提交到业务服务。",caseStudy:{context:"文字和空位混在一起时，既要保留自然的输入体验，也要保证编辑后的空位在作答时位置、顺序不变。",decisions:[{title:"把空位当作完整单元",description:"我用 contenteditable 编辑文字，将空位设为不可编辑节点，并处理两侧的退格和删除，避免空位被拆成残缺内容。"},{title:"插入空位，不丢失光标",description:"用 Selection / Range 保存并恢复选区，在光标处插入空位。中文输入结束后再更新内容，粘贴只保留纯文本，并统一限制字数。"},{title:"共用数据，不绑定编辑器结构",description:"将编辑内容转换为带空位标记的题干，不直接保存 DOM。预览按标记顺序生成输入框，让编辑和作答使用同一份题目。"}]}}],q=[...new Set(O.map(t=>t.year))].map(t=>({year:t,projects:O.filter(o=>o.year===t)})),W="modulepreload",X=function(t,o){return new URL(t,o).href},Z={},L=function(o,u,c){let r=Promise.resolve();if(u&&u.length>0){let n=function(s){return Promise.all(s.map(y=>Promise.resolve(y).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};const d=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),p=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));r=n(u.map(s=>{if(s=X(s,c),s in Z)return;Z[s]=!0;const y=s.endsWith(".css"),j=y?'[rel="stylesheet"]':"";if(!!c)for(let x=d.length-1;x>=0;x--){const C=d[x];if(C.href===s&&(!y||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${j}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":W,y||(v.as="script"),v.crossOrigin="",v.href=s,p&&v.setAttribute("nonce",p),document.head.appendChild(v),y)return new Promise((x,C)=>{v.addEventListener("load",x),v.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${s}`)))})}))}function i(n){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=n,window.dispatchEvent(d),!d.defaultPrevented)throw n}return r.then(n=>{for(const d of n||[])d.status==="rejected"&&i(d.reason);return o().catch(i)})},F={key:1,class:"load-status",role:"alert"},U={key:2,class:"load-status",role:"status"},J=b({__name:"ProjectDemo",props:{projectId:{}},setup(t){const o=t,u={screen:()=>L(()=>import("./InteractiveScreenDemo-C-6iKleh.js"),__vite__mapDeps([0,1,2]),import.meta.url),"product-card":()=>L(()=>import("./ProductCardDemo-CIDUvaxU.js"),__vite__mapDeps([3,1,4,5]),import.meta.url),loglens:()=>L(()=>import("./LogLensDemo-CMi6UKLW.js"),__vite__mapDeps([6,1,7]),import.meta.url),"lucky-lottery":()=>L(()=>import("./LuckyLotteryDemo-BZwYf3aD.js"),__vite__mapDeps([8,1,4,9]),import.meta.url),"fill-blank":()=>L(()=>import("./FillBlankDemo-CHREHP0M.js"),__vite__mapDeps([10,1,11]),import.meta.url)},c=A(null),r=A(!1);let i=!1;async function n(){r.value=!1;try{const d=await u[o.projectId]();i||(c.value=d.default)}catch{i||(r.value=!0)}}return n(),B(()=>{i=!0}),(d,m)=>c.value?(a(),$(H(c.value),{key:0})):r.value?(a(),l("div",F,[m[0]||(m[0]=e("p",null,"演示未能加载，请检查网络后重试。",-1)),e("button",{type:"button",onClick:n},"重试加载")])):(a(),l("p",U,"正在加载演示…"))}}),Q=_(J,[["__scopeId","data-v-a8bc7e9f"]]),ee=["id","aria-labelledby"],te={class:"project-heading"},ne={class:"project-meta"},ae=["datetime","aria-label"],oe={key:0,class:"featured"},se=["id"],le={class:"project-summary"},ie={key:0,class:"project-responsibility"},re={class:"project-focus","aria-label":"实现关注点"},ce={class:"project-actions"},de=["aria-expanded","aria-controls","aria-label"],ue=["aria-expanded","aria-controls","aria-label"],pe={"aria-hidden":"true"},he=["id","aria-label"],me={class:"case-context"},ye={class:"decisions"},ge={class:"case-boundary"},ve=["id","aria-label"],fe={class:"experience-tip"},be={class:"experience-footer"},_e=b({__name:"ProjectEntry",props:{project:{},active:{type:Boolean}},emits:["toggle"],setup(t,{emit:o}){const u=t,c=o,r=A(!1),i=S("entry"),n=S("experienceButton");async function d(){var p;c("toggle"),await E(),u.active&&((p=i.value)==null||p.scrollIntoView({block:"start"}))}async function m(){var p,s;c("toggle"),await E(),(p=n.value)==null||p.focus({preventScroll:!0}),(s=i.value)==null||s.scrollIntoView({block:"start"})}return(p,s)=>(a(),l("article",{id:t.project.id,ref_key:"entry",ref:i,class:"project-entry","aria-labelledby":`${t.project.id}-title`},[e("header",te,[e("div",ne,[e("time",{datetime:`${t.project.year}-${t.project.month}`,"aria-label":`${t.project.year} 年 ${t.project.month} 月`},h(t.project.month)+" 月",9,ae),s[1]||(s[1]=e("span",{class:"meta-divider","aria-hidden":"true"},"/",-1)),e("span",null,h(t.project.kind),1),t.project.featured?(a(),l("span",oe,"精选")):g("",!0)]),e("h3",{id:`${t.project.id}-title`,class:"project-title"},h(t.project.title),9,se),e("p",le,h(t.project.summary),1),t.project.responsibility?(a(),l("p",ie,h(t.project.responsibility),1)):g("",!0),e("ul",re,[(a(!0),l(f,null,w(t.project.focus,y=>(a(),l("li",{key:y},h(y),1))),128))])]),e("div",ce,[e("button",{ref_key:"experienceButton",ref:n,type:"button",class:"experience-button","aria-expanded":t.active,"aria-controls":`${t.project.id}-demo`,"aria-label":`${t.active?"收起":"体验"}${t.project.title}`,onClick:d},h(t.active?"收起演示":"体验作品"),9,de),t.project.caseStudy?(a(),l("button",{key:0,type:"button",class:"case-button","aria-expanded":r.value,"aria-controls":`${t.project.id}-case`,"aria-label":`${r.value?"收起":"查看"}${t.project.title}实现思路`,onClick:s[0]||(s[0]=y=>r.value=!r.value)},[R(h(r.value?"收起思路":"实现思路"),1),e("span",pe,h(r.value?"−":"+"),1)],8,ue)):g("",!0)]),t.project.caseStudy?M((a(),l("section",{key:0,id:`${t.project.id}-case`,class:"case-study","aria-label":`${t.project.title}实现思路`},[e("p",me,h(t.project.caseStudy.context),1),e("ol",ye,[(a(!0),l(f,null,w(t.project.caseStudy.decisions,y=>(a(),l("li",{key:y.title},[e("h4",null,h(y.title),1),e("p",null,h(y.description),1)]))),128))]),e("p",ge,h(t.project.boundary),1)],8,he)),[[V,r.value]]):g("",!0),M(e("section",{id:`${t.project.id}-demo`,class:"experience","aria-label":`${t.project.title}体验区`},[t.active?(a(),l(f,{key:0},[e("p",fe,h(t.project.experience),1),(a(),$(Q,{key:t.project.id,"project-id":t.project.id},null,8,["project-id"])),e("div",be,[e("p",null,h(t.project.boundary),1),e("button",{type:"button",onClick:m},"收起演示")])],64)):g("",!0)],8,ve),[[V,t.active]])],8,ee))}}),ke=_(_e,[["__scopeId","data-v-e8fbecec"]]),$e={class:"archive","aria-label":"项目作品时间归档"},Ae=["aria-labelledby"],we=["id"],je={class:"year-items"},xe=b({__name:"ProjectArchive",setup(t){const o=A(null);function u(c){o.value=o.value===c?null:c}return(c,r)=>(a(),l("section",$e,[r[0]||(r[0]=e("h1",{class:"visually-hidden"},"项目作品",-1)),(a(!0),l(f,null,w(k(q),i=>(a(),l("section",{key:i.year,class:"year-group","aria-labelledby":`year-${i.year}`},[e("h2",{id:`year-${i.year}`,class:"year-label"},h(i.year),9,we),e("div",je,[(a(!0),l(f,null,w(i.projects,n=>(a(),$(ke,{key:n.id,project:n,active:o.value===n.id,onToggle:d=>u(n.id)},null,8,["project","active","onToggle"]))),128))])],8,Ae))),128))]))}}),Le=_(xe,[["__scopeId","data-v-f0689850"]]),Pe=[{id:"llm",title:"大语言模型 · LLM",body:`从大量数据中学习语言规律，能根据上下文理解和生成文本的 AI 模型。

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

[Agent Skills 官方文档](https://agentskills.io/home)`,updatedAt:null}];function Ce(t){var u;const o=((u=t.split(/\n\s*\n/).find(c=>c.trim()&&!/^(#|!\[)/.test(c.trim())))==null?void 0:u.trim())||"";return o.length>90?o.slice(0,90)+"…":o}const Ie=["width","height","fill","transform"],Se={key:0},Te=e("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"},null,-1),Ee=[Te],Be={key:1},Re=e("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"},null,-1),Me=e("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"},null,-1),Ve=[Re,Me],De={key:2},Oe=e("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"},null,-1),Ze=[Oe],ze={key:3},He=e("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"},null,-1),Ge=[He],Ke={key:4},Ne=e("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"},null,-1),Ye=[Ne],qe={key:5},We=e("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"},null,-1),Xe=[We],Fe={name:"PhX"},Ue=b({...Fe,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(t){const o=t,u=I("weight","regular"),c=I("size","1em"),r=I("color","currentColor"),i=I("mirrored",!1),n=P(()=>o.weight??u),d=P(()=>o.size??c),m=P(()=>o.color??r),p=P(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:i?"scale(-1, 1)":void 0);return(s,y)=>(a(),l("svg",K({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:d.value,height:d.value,fill:m.value,transform:p.value},s.$attrs),[G(s.$slots,"default"),n.value==="bold"?(a(),l("g",Se,Ee)):n.value==="duotone"?(a(),l("g",Be,Ve)):n.value==="fill"?(a(),l("g",De,Ze)):n.value==="light"?(a(),l("g",ze,Ge)):n.value==="regular"?(a(),l("g",Ke,Ye)):n.value==="thin"?(a(),l("g",qe,Xe)):g("",!0)],16,Ie))}}),Je={class:"thought-body"},Qe={key:0,class:"figure"},et=["src","alt"],tt={key:0},nt={key:1,class:"section-title"},at={key:2,class:"paragraph"},ot=["href"],st={key:3,class:"paragraph"},lt=b({__name:"ThoughtBody",props:{body:{},imageBase:{}},setup(t){const o=t,u=/^!\[([^\]]*)\]\((thought-images\/[a-f0-9-]+\.(?:png|jpg|webp))\)$/,c=P(()=>o.body.split(/\n\s*\n/).filter(r=>r.trim()).map(r=>{const i=r.trim().match(u);if(i)return{type:"image",text:i[1],url:o.imageBase?o.imageBase+i[2].split("/")[1]:"./"+i[2]};const n=r.trim().match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);return n?{type:"link",text:n[1],url:n[2]}:r.startsWith("## ")?{type:"heading",text:r.slice(3)}:{type:"text",text:r}}));return(r,i)=>(a(),l("div",Je,[(a(!0),l(f,null,w(c.value,(n,d)=>(a(),l(f,{key:d},[n.type==="image"?(a(),l("figure",Qe,[e("img",{src:n.url,alt:n.text,loading:"lazy"},null,8,et),n.text?(a(),l("figcaption",tt,h(n.text),1)):g("",!0)])):n.type==="heading"?(a(),l("h3",nt,h(n.text),1)):n.type==="link"?(a(),l("p",at,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[R(h(n.text),1),i[0]||(i[0]=e("span",{class:"new-window"},"（新窗口）",-1))],8,ot)])):(a(),l("p",st,h(n.text),1))],64))),128))]))}}),it=_(lt,[["__scopeId","data-v-eb9b310f"]]),rt={class:"reader-toolbar"},ct={class:"reader-scroll"},dt={class:"reading-column"},ut={class:"reader-heading"},pt={key:0,class:"reader-name"},ht=b({__name:"ThoughtReader",props:{card:{}},emits:["close"],setup(t,{emit:o}){const u=o,c=S("dialog"),r=S("title");let i=0,n=null,d=!1;z(()=>{var p,s;i=window.scrollY,n=document.body.getAttribute("style"),Object.assign(document.body.style,{position:"fixed",top:`-${i}px`,width:"100%",overflow:"hidden"}),d=!0,(p=c.value)==null||p.showModal(),(s=r.value)==null||s.focus({preventScroll:!0})}),B(()=>{var p;(p=c.value)==null||p.close(),d&&(n===null?document.body.removeAttribute("style"):document.body.setAttribute("style",n),window.scrollTo({top:i,behavior:"instant"}))});function m(p){if(p.target!==c.value||!c.value)return;const s=c.value.getBoundingClientRect();(p.clientX<s.left||p.clientX>s.right||p.clientY<s.top||p.clientY>s.bottom)&&u("close")}return(p,s)=>(a(),l("dialog",{ref_key:"dialog",ref:c,class:"reader","aria-labelledby":"reader-title",onCancel:s[1]||(s[1]=N(y=>u("close"),["prevent"])),onClick:m},[e("header",rt,[s[3]||(s[3]=e("span",{class:"reader-label"},"思考",-1)),e("button",{type:"button",class:"close-button",onClick:s[0]||(s[0]=y=>u("close"))},[s[2]||(s[2]=e("span",null,"返回列表",-1)),D(k(Ue),{size:18,"aria-hidden":"true"})])]),e("div",ct,[e("article",dt,[e("header",ut,[e("h2",{id:"reader-title",ref_key:"title",ref:r,class:"reader-term",tabindex:"-1"},h(t.card.title),513),t.card.updatedAt?(a(),l("p",pt,"更新于 "+h(t.card.updatedAt.slice(0,10)),1)):g("",!0)]),D(it,{body:t.card.body},null,8,["body"])])])],544))}}),mt=_(ht,[["__scopeId","data-v-83b00d3b"]]),yt={class:"knowledge-page","aria-labelledby":"knowledge-title"},gt={class:"page-heading"},vt={class:"collection-label"},ft={class:"concept-group","aria-label":"文章列表"},bt={class:"card-grid"},_t=["aria-label","onClick"],kt={class:"concept-name"},$t={class:"card-term"},At={class:"card-summary"},wt={key:0,class:"collection-label"},jt=b({__name:"Thoughts",setup(t){const o=[...Pe].sort((n,d)=>(d.updatedAt||"").localeCompare(n.updatedAt||"")),u=A(null);let c=null;function r(n,d){c=d.currentTarget,u.value=n}async function i(){u.value=null,await E(),c!=null&&c.isConnected&&c.focus({preventScroll:!0})}return(n,d)=>(a(),l("section",yt,[e("header",gt,[d[0]||(d[0]=e("h1",{id:"knowledge-title"},"思考",-1)),e("span",vt,h(k(o).length)+" 篇",1)]),e("section",ft,[e("div",bt,[(a(!0),l(f,null,w(k(o),m=>(a(),l("button",{key:m.id,type:"button",class:"concept-card","aria-haspopup":"dialog","aria-label":"阅读："+m.title,onClick:p=>r(m,p)},[e("span",kt,[e("span",$t,h(m.title),1)]),e("span",At,h(k(Ce)(m.body)),1),d[1]||(d[1]=e("span",{class:"card-action","aria-hidden":"true"},"阅读全文",-1))],8,_t))),128))])]),k(o).length?g("",!0):(a(),l("p",wt,"还没有文章。")),u.value?(a(),$(mt,{key:1,card:u.value,onClose:i},null,8,["card"])):g("",!0)]))}}),xt=_(jt,[["__scopeId","data-v-abd2a5c0"]]),Lt={class:"site-shell"},Pt={class:"site-header","aria-label":"主导航"},Ct={class:"navigation","aria-label":"站点栏目"},It=["aria-current"],St={class:"secondary-navigation"},Tt=["aria-current"],Et=["aria-current"],Bt={id:"main-content",tabindex:"-1"},Rt={key:2,class:"content-page","aria-labelledby":"content-title"},Mt=b({__name:"App",setup(t){const o=A("demo"),u={demo:"项目作品 · 思考与实践",thoughts:"思考 · 思考与实践",skills:"Skills · 思考与实践"};function c(){const i=window.location.hash.replace(/^#\/?/,"");return i==="knowledge"?"thoughts":i==="thoughts"||i==="skills"?i:"demo"}function r(){window.location.hash!=="#main-content"&&(o.value=c(),document.title=u[o.value],window.scrollTo({top:0,behavior:"auto"}))}return z(()=>{r(),window.addEventListener("hashchange",r)}),B(()=>window.removeEventListener("hashchange",r)),(i,n)=>(a(),l("div",Lt,[e("header",Pt,[e("nav",Ct,[e("a",{class:T(["nav-link",{"nav-link--active":o.value==="demo"}]),"aria-current":o.value==="demo"?"page":void 0,href:"#/demo"},"项目作品",10,It),e("div",St,[e("a",{class:T(["nav-link nav-link--secondary",{"nav-link--active":o.value==="thoughts"}]),"aria-current":o.value==="thoughts"?"page":void 0,href:"#/thoughts"},"思考",10,Tt),e("a",{class:T(["nav-link nav-link--secondary",{"nav-link--active":o.value==="skills"}]),"aria-current":o.value==="skills"?"page":void 0,href:"#/skills"},[...n[0]||(n[0]=[R("Skills",-1),e("span",null,"整理中",-1)])],10,Et)])])]),e("main",Bt,[o.value==="demo"?(a(),$(Le,{key:0})):o.value==="thoughts"?(a(),$(xt,{key:1})):(a(),l("section",Rt,[...n[1]||(n[1]=[e("span",{class:"content-status"},"整理中",-1),e("h1",{id:"content-title"},"Skills",-1),e("p",null,"计划分享业务实践中的可复用方法，附适用场景与脱敏示例。",-1),e("a",{class:"return-link",href:"#/demo"},"查看项目作品",-1)])]))])]))}}),Vt=_(Mt,[["__scopeId","data-v-b14ac9c7"]]);Y(Vt).mount("#app");export{Ue as F};
