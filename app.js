const STORAGE_KEY = "wetalk-community-demo-v3";

if (new URLSearchParams(window.location.search).has("reset")) {
  localStorage.removeItem(STORAGE_KEY);
  window.history.replaceState({}, "", window.location.pathname);
}

const seed = {
  view: "home",
  filter: "全部",
  debate: {
    title: "不再依赖父母算长大吗？",
    intro:
      "回想一下，你有没有哪一瞬间觉得自己“长大”了？是第一次自己背着包去陌生的城市？是第一次用攒下的零花钱买到了心仪的物品？还是在遇到委屈时，没有立刻给妈妈打电话，而是选择自己一个人默默消化？\n\n在青春期的字典里，“长大”往往和一个词紧密相连——独立。我们急切地想要摆脱父母的唠叨，想要自己决定穿什么衣服、交什么朋友、走什么样的路。很多同学认为，只要我能自己照顾自己，不再事事依赖父母，我就真正长大了。\n\n但真的是这样吗？有的人虽然生活能自理，但在遇到挫折时依然会情绪失控、逃避责任；有的人为了证明自己“长大了”，刻意疏远父母，拒绝一切帮助。\n\n那么你是如何定义“依赖”，又是如何理解“长大”的呢？",
    prompt:
      "评论区你可以聊聊：1. 现在的你，觉得自己长大了吗？ 2. 你还有哪些事是必须要依赖父母才能完成的？让你瞬间觉得自己“长大了”的事是什么？",
    source: "本期灵感来自 @慢慢长大同学 的许愿",
    participants: 26356,
    week: "2026 · 第 22 周",
    votes: { pro: 16000, con: 11000 },
    comments: [
      {
        id: "d1",
        stance: "pro",
        author: "小陈",
        school: "北京市第四中学",
        time: "18 分钟前",
        body: "其实我们说的不依赖，是指不给父母添麻烦。当我们能够自己处理好学业、人际关系，让父母不再为我们操心吊胆的时候，在他们眼里，我们就是真的长大了。",
        likes: 3915,
        replies: [],
      },
      {
        id: "d2",
        stance: "pro",
        author: "追风少年小宇",
        school: "济南市实验初级中学",
        time: "34 分钟前",
        body: "我觉得我已经长大了！上个月我用自己攒的钱报了绘画班，没让爸妈操心缴费和接送。当我自己坐在教室里的那一刻，感觉自己终于不再是那个什么都要问家长的小尾巴了。能掌控自己的生活，就是长大！",
        likes: 2025,
        replies: [],
      },
      {
        id: "d3",
        stance: "pro",
        author: "代芯瑜",
        school: "郑州龙门实验学校（小学部）",
        time: "1 小时前",
        body: "当我第一次自己一个人睡觉的时候，我感觉我长大了！！所以我正在算长大的一边！！！！",
        likes: 1786,
        replies: [],
      },
      {
        id: "d4",
        stance: "con",
        author: "AA",
        school: "深圳中学",
        time: "12 分钟前",
        body: "我觉得“不再依赖”分层次吧。生活起居不依赖父母是“自理”，经济不依赖是“自立”，但精神上完全不依赖那叫“孤单”！我站反方，长大的标志应该是：我能搞定生活，但也敢向父母展露脆弱。",
        likes: 2895,
        replies: [],
      },
      {
        id: "d5",
        stance: "con",
        author: "十七",
        school: "苏州外国语学校",
        time: "48 分钟前",
        body: "我觉得我已经长大了，但我依然依赖父母！难道长大了就不能当爸妈的小棉袄了吗？就算我以后当了科学家、当了 CEO，我在我妈面前还是会想撒个娇，遇到难过的事还是会想吃她做的菜。这叫情感寄托，不叫没长大。",
        likes: 2611,
        replies: [],
      },
      {
        id: "d6",
        stance: "con",
        author: "小松果",
        school: "初二年级",
        time: "2 小时前",
        body: "真正长大不是逞强。有时候我明明很难过，还装作不需要爸妈，其实心里更乱。能坦然说“我需要你帮我一下”，也是成熟的一种吧。",
        likes: 988,
        replies: [],
      },
    ],
  },
  topics: [
    {
      id: "t1",
      badge: "热",
      origin: "@官方发起",
      title: "让你瞬间觉得自己“长大了”的事是什么？",
      body: "是第一次独自解决麻烦，还是第一次反过来照顾父母？选一个最接近你的瞬间，再说说为什么。",
      type: "vote",
      participants: 2501,
      options: [
        { label: "独自出门或完成任务", count: 636 },
        { label: "用自己的钱做决定", count: 517 },
        { label: "遇到委屈先自己消化", count: 421 },
        { label: "开始照顾父母情绪", count: 566 },
        { label: "愿意承担后果", count: 361 },
      ],
      comments: [
        { id: "tc1", author: "慢慢长大", body: "我第一次自己坐地铁去参加比赛，虽然很紧张，但没有一直打电话问爸妈，回家那一刻真的觉得自己长大了一点。", likes: 207 },
        { id: "tc2", author: "快乐不打烊", body: "我选愿意承担后果。以前做错事只会哭，现在会先想怎么补救。", likes: 224 },
      ],
    },
    {
      id: "t2",
      badge: "新",
      origin: "@小宇同学许愿",
      title: "遇到难过的事，你会自己消化还是找父母聊？",
      body: "独立不一定等于沉默。你更习惯先把情绪收起来，还是愿意向父母求助？",
      type: "pk",
      participants: 1948,
      options: [
        { label: "先自己消化", count: 944 },
        { label: "找父母聊聊", count: 1004 },
      ],
      comments: [{ id: "tc3", author: "小雨", body: "我会先自己冷静一会儿，但如果还是难过，就会告诉妈妈。能求助不代表没长大。", likes: 89 }],
    },
    {
      id: "t3",
      badge: "热",
      origin: "@七七同学许愿",
      title: "长大以后，还能不能继续依赖家的温暖？",
      body: "很多人觉得长大就是离家更远，也有人觉得长大是换一种方式和家连接。你怎么看？",
      type: "discussion",
      participants: 3217,
      options: [],
      comments: [{ id: "tc4", author: "七七", body: "我觉得当然可以。长大不是变冷漠，而是我也能给家里一点力量。", likes: 167 }],
    },
    {
      id: "t4",
      badge: "新",
      origin: "@官方发起",
      title: "哪些事你现在还必须依赖父母？",
      body: "接送、缴费、重要决定、情绪安慰……写下你暂时还离不开父母的一件事。",
      type: "discussion",
      participants: 1492,
      options: [],
      comments: [{ id: "tc5", author: "今天也要开心呀", body: "我还需要父母帮我处理一些复杂手续，但我会努力先自己查清楚。", likes: 114 }],
    },
    {
      id: "t5",
      badge: "热",
      origin: "@小满同学许愿",
      title: "你觉得“不依赖父母”最先应该从哪里开始？",
      body: "从生活自理、时间管理到情绪处理，独立可以有很多小台阶。你最想先练哪一个？",
      type: "vote",
      participants: 1806,
      options: [
        { label: "生活自理", count: 548 },
        { label: "时间规划", count: 386 },
        { label: "学习安排", count: 276 },
        { label: "情绪处理", count: 596 },
      ],
      comments: [{ id: "tc6", author: "学霸桐桐", body: "我想先练时间规划。能安排好自己的作业和休息，爸妈就不用一直提醒我了。", likes: 76 }],
    },
  ],
  wishes: [
    { id: "w1", author: "桃子", body: "好朋友有了新朋友，我该怎么不胡思乱想？", likes: 146 },
    { id: "w2", author: "星星", body: "兴趣爱好一定要变成特长才有意义吗？", likes: 118 },
    { id: "w3", author: "小画笔", body: "被同学误会时，解释还是等待更好？", likes: 96 },
    { id: "w4", author: "青团", body: "上课举手前总紧张，怎么勇敢一点？", likes: 83 },
    { id: "w5", author: "不晚", body: "如果不喜欢比赛，还要逼自己争第一吗？", likes: 72 },
  ],
  pastDebates: [
    {
      id: "p1",
      title: "人类应不应该“彻底消灭”蚊子？",
      participants: 108175,
      featuredComment: "我支持减少蚊子带来的疾病，但“彻底消灭”听起来像是在改写生态作业本，至少要先知道会不会影响别的生命。",
    },
    {
      id: "p2",
      title: "年久失修的古城，你支持维持原貌，还是斥巨资重建？",
      participants: 60682,
      featuredComment: "我更支持修旧如旧。古城的裂纹也是历史，重建得再漂亮，也很难把时间的味道复原。",
    },
    {
      id: "p3",
      title: "如果把“防灾求生”设为有学分的必修课，你支持吗？",
      participants: 94473,
      featuredComment: "我支持。会判断逃生路线、会做基础急救，可能比多背一道题更能在关键时刻保护自己和别人。",
    },
    {
      id: "p4",
      title: "如果未来医学能实现“长生不老”，是好事吗？",
      participants: 77024,
      featuredComment: "如果只有少数人能长生不老，那它不是礼物，而可能变成新的不公平；如果人人都能拥有，也要想想世界能不能承受。",
    },
  ],
  user: {
    debateCommentId: null,
    topicComments: {},
    topicChoices: {},
    wishSubmitted: false,
    liked: [],
    hidden: [],
  },
  ui: {
    modal: null,
    selectedStance: null,
    activeTopicId: null,
    activePastDebateId: null,
    selectedTopicOption: null,
    error: "",
  },
};

const stored = localStorage.getItem(STORAGE_KEY);
const state = stored ? hydrate(JSON.parse(stored)) : seed;

function hydrate(saved) {
  return {
    ...seed,
    ...saved,
    debate: { ...seed.debate, ...saved.debate },
    user: { ...seed.user, ...saved.user, topicChoices: saved.user?.topicChoices || {} },
    ui: { ...seed.ui, ...saved.ui, modal: null, error: "" },
  };
}

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...state,
      ui: { ...state.ui, modal: null, error: "" },
    }),
  );
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function renderParagraphs(value = "") {
  return escapeHtml(value)
    .split("\n")
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

function debateTotal() {
  return state.debate.votes.pro + state.debate.votes.con;
}

function debatePercent(stance) {
  return Math.round((state.debate.votes[stance] / debateTotal()) * 100);
}

function compactNumber(value) {
  if (value > 9999) return `${(value / 10000).toFixed(1)} 万`;
  if (value > 999) return `${(value / 1000).toFixed(1)}k`;
  return String(value);
}

function compactVoteNumber(value) {
  if (value > 9999) return `${(value / 10000).toFixed(1)}w`;
  if (value > 999) return `${(value / 1000).toFixed(1)}k`;
  return String(value);
}

function initIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function render() {
  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.nav === state.view);
  });

  const app = document.querySelector("#app");
  if (state.view === "wish") app.innerHTML = renderWishPage();
  else app.innerHTML = renderHome();

  document.querySelector("#modal-root").innerHTML = renderModal();
  initIcons();
}

function renderHome() {
  return `
    <div class="page-grid">
      <section class="main-column">
        ${renderDebate()}
        ${renderComments()}
      </section>
      <aside class="side-column">
        ${renderPastHotRail()}
        ${renderWishRail()}
      </aside>
    </div>
  `;
}

function renderDebate() {
  const pro = debatePercent("pro");
  const con = debatePercent("con");
  const userVoted = Boolean(state.user.debateCommentId);
  return `
    <article class="surface debate-card">
      <div class="debate-hero">
        <div class="debate-copy">
          <p class="page-kicker">说观点 · 本周辩题</p>
          <h1>${escapeHtml(state.debate.title)}</h1>
          <div class="debate-intro">${renderParagraphs(state.debate.intro)}</div>
          <div class="debate-source">
            ${icon("sparkles")}
            <span>${escapeHtml(state.debate.source)}</span>
          </div>
        </div>
        <div class="debate-art">
          ${renderGrowthIllustration()}
          <span class="week-stamp">${escapeHtml(state.debate.week)}</span>
        </div>
      </div>
      <div class="debate-prompt">${escapeHtml(state.debate.prompt)}</div>
      <div class="stat-strip">
        <div class="stat-item"><strong class="stat-value">${state.debate.participants}</strong><span class="stat-label">位同学已参与</span></div>
      </div>
      ${renderGuidancePanel()}
      <section class="pk-section">
        <div class="section-heading-row">
          <h2 class="section-heading">${icon("messages-square")}选择你的观点</h2>
          <span class="section-note">${userVoted ? "你已经完成本期表达" : "发布观点后，才会计入投票"}</span>
        </div>
        ${userVoted ? renderPkResults(pro, con) : renderPkChoice()}
        <div class="rules-panel">
          每位同学每期仅可发布 1 条观点。评论会经过内容安全检查，绿色内容即时展示；被举报内容将对举报者单向隐藏并进入后台复审。
        </div>
      </section>
    </article>
  `;
}

function renderGrowthIllustration() {
  return `
    <div class="growth-illustration" role="img" aria-label="父母陪孩子成长，以及孩子背包独自出门的插画">
      <div class="photo-card family-card">
        <div class="parent parent-mom"></div>
        <div class="parent parent-dad"></div>
        <div class="child child-small"></div>
      </div>
      <div class="photo-card doorway-card">
        <div class="doorway"></div>
        <div class="elder elder-left"></div>
        <div class="school-child"></div>
      </div>
    </div>
  `;
}

function renderGuidancePanel() {
  const proPoints = [
    ["生活上的不依赖，标志着“生存能力”的达标。", "小时候，饭来张口衣来伸手；长大后，学会了做饭、洗衣、规划时间。这种生活上的“不依赖”，不仅是掌握了生存技能的标志，更意味着我们不再是家庭里的“消耗者”，而是能够自我运转的独立个体。这是长大的最基础的指标。"],
    ["思想上的不依赖，标志着“独立人格”的成型。", "一个人如果没有自己的主见，哪怕年龄再大也只能算个“巨婴”。不再事事问“妈妈，我该怎么办”，而是敢于说“我想这么做”，能基于自己的判断去思考问题，这种精神上的“断奶”，是心智成熟的证明。"],
    ["行为后果上的不依赖，标志着“责任感”的建立。", "“长大”的同义词是“为自己的选择买单”。当你遇到麻烦，第一反应不再是躲在父母身后依赖他们来解决，而是自己去面对挫折、弥补过失；当你搞砸了事情，不再依赖父母的安慰来逃避，而是自己咽下委屈。这种“能自己承担后果，不让父母兜底”的状态，就是长大。"],
  ];
  const conPoints = [
    ["生活上的“不依赖”只是表象，内心的责任感才是关键。", "一个人可能自己住、自己赚钱，完全不依赖父母，但他可能自私、冷漠、甚至没有同理心，你能说他“长大”了吗？真正的长大不仅是能管好自己，更是拥有包容他人的心胸、控制情绪的能力以及对社会的责任感。"],
    ["刻意拒绝依赖，反而是不成熟的表现。", "很多同学为了证明自己长大了，故意凡事都和父母对着干，或者遇到天大的困难也扛着不说。但人与人之间本就是互相依赖的。知道自己的能力边界，在遇到困难时，坦然地向父母、向有经验的人求助，这是一种大智慧，而不是没长大。"],
    ["真正的长大，是把“单向依赖”变成了“双向支撑”。", "长大不是切断与父母的连接，而是改变连接的方式。我们可能不再依赖父母为我们洗衣做饭，但在情感上，我们依然会依赖那个温暖的家；同时，父母开始慢慢变老，他们开始依赖我们，能在互相依赖中给彼此力量，才是最高级的成熟。"],
  ];
  return `
    <section class="guidance-section">
      <div class="section-heading-row">
        <h2 class="section-heading">${icon("lightbulb")}观点引导</h2>
        <span class="section-note">先看两边怎么说，再写下你的判断</span>
      </div>
      <div class="guidance-grid">
        ${renderGuidanceCard("pro", "正方：算长大", "无论是生活上的自理，还是精神上的自主，不再依赖父母，意味着你剪断了那根“心理脐带”。", proPoints)}
        ${renderGuidanceCard("con", "反方：不等于长大", "真正的长大，不应该是变成一座孤岛，而是懂得在需要时寻求帮助。", conPoints)}
      </div>
    </section>
  `;
}

function renderGuidanceCard(stance, title, subtitle, points) {
  return `
    <article class="guidance-card is-${stance}">
      <div class="guidance-card-head">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(subtitle)}</p>
      </div>
      <ol class="guidance-list">
        ${points
          .map(
            ([pointTitle, pointCopy]) => `
              <li>
                <strong>${escapeHtml(pointTitle)}</strong>
                <span>${escapeHtml(pointCopy)}</span>
              </li>
            `,
          )
          .join("")}
      </ol>
    </article>
  `;
}

function renderPkChoice() {
  return `
    <div class="pk-choice-stage">
      <div class="pk-arena">
        <div class="pk-side pk-side-pro"><span>算长大</span></div>
        <div class="pk-emblem">PK</div>
        <div class="pk-side pk-side-con"><span>不等于长大</span></div>
      </div>
      <div class="pk-choice-actions">
        <button class="pk-choice-button is-pro" data-action="open-debate-compose" data-stance="pro">算长大</button>
        <button class="pk-choice-button is-con" data-action="open-debate-compose" data-stance="con">不等于长大</button>
      </div>
    </div>
  `;
}

function renderPkResults(pro, con) {
  const userComment = state.debate.comments.find((item) => item.id === state.user.debateCommentId);
  return `
    <div class="pk-result-stage">
      <div class="pk-result-labels">
        <span>算长大</span>
        <span>不等于长大</span>
      </div>
      <div class="pk-result-bars">
        <div class="pk-result-bar is-pro" style="width:${pro}%">
          <strong>正方</strong>
          ${userComment?.stance === "pro" ? "<span>已投票</span>" : ""}
        </div>
        <div class="pk-result-bar is-con" style="width:${con}%">
          ${userComment?.stance === "con" ? "<span>已投票</span>" : ""}
          <strong>反方</strong>
        </div>
      </div>
      <div class="pk-result-numbers">
        <div class="is-pro"><strong>${pro}%</strong><span>${compactVoteNumber(state.debate.votes.pro)} 人投票</span></div>
        <div class="is-con"><span>${compactVoteNumber(state.debate.votes.con)} 人投票</span><strong>${con}%</strong></div>
      </div>
    </div>
  `;
}

function renderComments() {
  return `
    <section class="surface comments-section">
      <div class="section-heading-row">
        <h2 class="section-heading">${icon("message-circle-more")}同学们正在说</h2>
        <span class="section-note">评论按最新互动持续更新</span>
      </div>
      <div class="comments-grid">
        ${renderCommentColumn("pro", "正方：算长大")}
        ${renderCommentColumn("con", "反方：不等于长大")}
      </div>
    </section>
  `;
}

function renderCommentColumn(stance, title) {
  const comments = state.debate.comments.filter((comment) => comment.stance === stance);
  return `
    <div class="comment-column">
      <h3 class="comment-column-title">${escapeHtml(title)}</h3>
      <div class="comment-list">
        ${comments.map((comment) => renderComment(comment, "debate")).join("")}
      </div>
    </div>
  `;
}

function renderComment(comment, scope) {
  const key = `${scope}:${comment.id}`;
  if (state.user.hidden.includes(key)) {
    return `<div class="hidden-comment">这条内容已按你的举报隐藏，后台会继续复审。</div>`;
  }
  const liked = state.user.liked.includes(key);
  return `
    <article class="comment-card">
      <div class="comment-author">
        <span class="avatar ${comment.stance === "con" ? "teal" : "copper"}">${escapeHtml(comment.author.slice(0, 1))}</span>
        <strong class="comment-name">${escapeHtml(comment.author)}</strong>
        ${comment.school ? `<span class="comment-school">${escapeHtml(comment.school)}</span>` : ""}
        ${comment.time ? `<span class="comment-time">${escapeHtml(comment.time)}</span>` : ""}
      </div>
      <p class="comment-body">${escapeHtml(comment.body)}</p>
      <div class="comment-actions">
        <button class="small-action ${liked ? "is-liked" : ""}" data-action="like-comment" data-scope="${scope}" data-id="${comment.id}">
          ${icon("heart")} <span>${comment.likes}</span>
        </button>
        <button class="small-action" data-action="report-comment" data-scope="${scope}" data-id="${comment.id}">${icon("flag")} 举报</button>
      </div>
    </article>
  `;
}

function renderPastHotRail() {
  const debates = [...state.pastDebates].sort((a, b) => b.participants - a.participants);
  return `
    <section class="surface side-card">
      <div class="section-heading-row">
        <div>
          <p class="section-label">PAST BUZZ</p>
          <h2 class="section-heading">${icon("flame")}往期热议</h2>
        </div>
        <span class="tag">按参与人数</span>
      </div>
      <div class="topic-list">
        ${debates.map(renderPastDebateItem).join("")}
      </div>
    </section>
  `;
}

function renderTopicListItem(topic) {
  return `
    <article class="topic-list-item">
      <span class="tag ${topic.badge === "热" ? "is-hot" : ""}">${topic.badge}</span>
      <button class="topic-title-button" data-action="open-topic" data-id="${topic.id}">
        <h3 class="topic-title">${escapeHtml(topic.title)}</h3>
      </button>
      <div class="topic-meta">
        <span class="topic-source">${escapeHtml(topic.origin)}</span>
        <span class="topic-participants">${compactNumber(topic.participants)} 人参与</span>
      </div>
    </article>
  `;
}

function renderWishRail() {
  const doubled = [...state.wishes, ...state.wishes];
  return `
    <section class="surface side-card">
      <div class="section-heading-row">
        <div>
          <p class="section-label">WISH WALL</p>
          <h2 class="section-heading">${icon("sparkles")}许愿墙</h2>
        </div>
      </div>
      <p class="wish-wall-intro">这一次，听你说。把想聊的问题丢进许愿池，热度高的灵感有机会成为后续讨论主题。</p>
      <div class="wall-window">
        <div class="wall-track">
          ${doubled.map(renderWishTickerItem).join("")}
        </div>
      </div>
      <button class="button subtle full" data-action="open-wish-compose">${icon("pen-line")} 我要许愿</button>
    </section>
  `;
}

function renderWishTickerItem(wish) {
  const key = `wish:${wish.id}`;
  const liked = state.user.liked.includes(key);
  return `
    <div class="wall-item">
      <p class="wall-copy">${escapeHtml(wish.body)}</p>
      <button class="small-action ${liked ? "is-liked" : ""}" data-action="like-wish" data-id="${wish.id}">
        ${icon("heart")} ${wish.likes}
      </button>
    </div>
  `;
}

function renderPastDebateItem(debate) {
  return `
    <article class="topic-list-item">
      <button class="topic-title-button" data-action="open-past-debate" data-id="${debate.id}">
        <h3 class="topic-title">${escapeHtml(debate.title)}</h3>
      </button>
      <p class="featured-comment"><strong>精彩评论：</strong>${escapeHtml(debate.featuredComment)}</p>
      <div class="topic-meta">
        <span class="topic-source">往期开放讨论</span>
        <span class="topic-participants">${debate.participants} 人正在说</span>
      </div>
    </article>
  `;
}

function renderHotPage() {
  const filters = ["全部", "PK", "投票", "讨论"];
  const topics = state.topics.filter((topic) => {
    if (state.filter === "全部") return true;
    if (state.filter === "PK") return topic.type === "pk";
    if (state.filter === "投票") return topic.type === "vote";
    return topic.type === "discussion";
  });
  return `
    <section class="wide-page">
      <div class="surface page-banner">
        <div>
          <p class="page-kicker">TRENDING NOW</p>
          <h1>往期热议</h1>
          <p>围绕本周辩题继续聊，也为值得被听见的新问题留一张桌子。热议话题由官方配置或从许愿墙中打捞，持续滚动更新。</p>
        </div>
        <button class="button" data-nav="wish">${icon("sparkles")} 我也想许愿一个话题</button>
      </div>
      <div class="subnav">
        ${filters.map((filter) => `<button class="filter-button ${state.filter === filter ? "is-active" : ""}" data-action="filter-hot" data-filter="${filter}">${filter}</button>`).join("")}
      </div>
      <div class="hot-page-list">
        ${topics.map(renderHotPageCard).join("")}
      </div>
    </section>
  `;
}

function renderHotPageCard(topic) {
  const labels = { pk: "PK 对决", vote: "投票选择", discussion: "自由讨论" };
  return `
    <article class="surface hot-page-card">
      <div>
        <span class="tag ${topic.badge === "热" ? "is-hot" : ""}">${topic.badge}</span>
        <span class="tag is-official">${labels[topic.type]}</span>
      </div>
      <button class="topic-title-button" data-action="open-topic" data-id="${topic.id}">
        <h2 class="topic-title">${escapeHtml(topic.title)}</h2>
      </button>
      <p>${escapeHtml(topic.body)}</p>
      <div class="topic-meta">
        <span class="topic-source">${escapeHtml(topic.origin)}</span>
        <span class="topic-participants">${compactNumber(topic.participants)} 人参与</span>
      </div>
    </article>
  `;
}

function renderWishPage() {
  return `
    <section class="wide-page">
      <div class="wish-page-grid">
        <div class="surface wish-intro-card">
          <p class="eyebrow">WISH WALL · 许愿墙</p>
          <h1>这一次，听你说。</h1>
          <p>本期辩题还没说够？还有新的脑洞或小困惑想说？写下你的衍生话题或全新脑洞！被更多同学许愿的内容，有机会被官方选中成为后续讨论主题，让大家陪你一起说。</p>
          <button class="button" data-action="open-wish-compose">${icon("pen-line")} 我要许愿</button>
        </div>
        <div class="surface community-note">
          <h3>许愿小提示</h3>
          <ul>
            <li>每天可以提交 1 个话题灵感。</li>
            <li>可以聊学习、朋友、家庭、兴趣和生活里的小困惑。</li>
            <li>不要写真实姓名、学校班级，也不要攻击别人。</li>
            <li>投稿会先经过审核，通过后才可能出现在墙上。</li>
          </ul>
        </div>
      </div>
      <section class="surface wish-board">
        <div class="section-heading-row">
          <h2 class="section-heading">${icon("sparkles")}大家正在许愿</h2>
          <span class="section-note">每条许愿每人可点赞 1 次</span>
        </div>
        <div class="wish-list">
          ${state.wishes.map(renderWishBoardItem).join("")}
        </div>
      </section>
    </section>
  `;
}

function renderWishBoardItem(wish) {
  const key = `wish:${wish.id}`;
  const liked = state.user.liked.includes(key);
  return `
    <article class="wish-board-item">
      <h3 class="wish-board-title">${escapeHtml(wish.body)}</h3>
      <div class="wish-meta">
        <span>@${escapeHtml(wish.author)}同学 的许愿</span>
        <button class="small-action ${liked ? "is-liked" : ""}" data-action="like-wish" data-id="${wish.id}">
          ${icon("heart")} ${wish.likes}
        </button>
      </div>
    </article>
  `;
}

function renderModal() {
  if (!state.ui.modal) return "";
  if (state.ui.modal === "debate-compose") return renderDebateCompose();
  if (state.ui.modal === "wish-compose") return renderWishCompose();
  if (state.ui.modal === "topic") return renderTopicDetail();
  if (state.ui.modal === "topic-compose") return renderTopicCompose();
  if (state.ui.modal === "past-debate") return renderPastDebatePlaceholder();
  if (state.ui.modal === "notice") return renderNotice();
  return "";
}

function modalFrame(content, className = "") {
  return `
    <div class="modal-backdrop" data-action="close-modal-background">
      <section class="modal ${className}" role="dialog" aria-modal="true">
        ${content}
      </section>
    </div>
  `;
}

function renderDebateCompose() {
  const label = state.ui.selectedStance === "pro" ? "算长大" : "不等于长大";
  return modalFrame(`
    <div class="modal-header">
      <div>
        <h2 class="modal-title">说说你的想法</h2>
        <p class="modal-subtitle">你的选择：${label}。发布观点后将同步计入投票并展示 PK 结果。</p>
      </div>
      <button class="close-button" data-action="close-modal" aria-label="关闭">×</button>
    </div>
    <div class="notice-line">${icon("shield-check")}观点会先经过内容安全检查，绿色内容即时展示。</div>
    <div class="form-group">
      <label class="form-label" for="debate-comment">我的观点</label>
      <textarea id="debate-comment" class="textarea" rows="6" maxlength="400" placeholder="写下你的理由，最少 5 字，最多 400 字。"></textarea>
      <div class="form-meta"><span class="helper-text">认真表达，也尊重不同意见。</span><span class="counter" data-counter-for="debate-comment">0 / 400</span></div>
    </div>
    <label class="agreement"><input id="debate-agreement" type="checkbox" /> <span>我已阅读并同意《社区活动协议》，确认内容不包含真实姓名、班级或攻击性表达。</span></label>
    <p class="form-error">${escapeHtml(state.ui.error)}</p>
    <div class="form-footer">
      <button class="button" data-action="close-modal">再想想</button>
      <button class="button primary" data-action="publish-debate">发布并投票</button>
    </div>
  `);
}

function renderWishCompose() {
  return modalFrame(`
    <div class="modal-header">
      <div>
        <h2 class="modal-title">我要许愿</h2>
        <p class="modal-subtitle">把你想讨论的问题交给许愿池。每天可以许愿 1 次。</p>
      </div>
      <button class="close-button" data-action="close-modal" aria-label="关闭">×</button>
    </div>
    <div class="form-group">
      <label class="form-label" for="wish-question">我想讨论的问题 <span class="muted">· 必填</span></label>
      <input id="wish-question" class="input" maxlength="30" placeholder="5-30 字，例如：兴趣一定要变成特长吗？" />
      <div class="form-meta"><span class="helper-text">请不要写真实姓名或学校班级。</span><span class="counter" data-counter-for="wish-question">0 / 30</span></div>
    </div>
    <div class="form-group">
      <label class="form-label" for="wish-reason">为什么想聊这个 <span class="muted">· 选填</span></label>
      <textarea id="wish-reason" class="textarea" rows="4" maxlength="100" placeholder="如果愿意，可以多说一点。填写时请写 5-100 字。"></textarea>
      <div class="form-meta"><span class="helper-text">通过审核后，可能进入待展示池。</span><span class="counter" data-counter-for="wish-reason">0 / 100</span></div>
    </div>
    <p class="form-error">${escapeHtml(state.ui.error)}</p>
    <div class="form-footer">
      <button class="button" data-action="close-modal">取消</button>
      <button class="button copper" data-action="publish-wish">提交许愿</button>
    </div>
  `);
}

function renderTopicDetail() {
  const topic = getActiveTopic();
  const labels = { pk: "PK 对决", vote: "投票选择", discussion: "自由讨论" };
  const userCommented = Boolean(state.user.topicComments[topic.id]);
  const hasOptions = topic.options.length > 0;
  const selectedChoice = state.user.topicChoices[topic.id];
  const showResults = !hasOptions || userCommented;
  const total = topic.options.reduce((sum, option) => sum + option.count, 0);
  return modalFrame(`
    <div class="modal-header">
      <div>
        <span class="tag ${topic.badge === "热" ? "is-hot" : ""}">${topic.badge}</span>
        <span class="tag is-official">${labels[topic.type]}</span>
      </div>
      <button class="close-button" data-action="close-modal" aria-label="关闭">×</button>
    </div>
    <h2 class="modal-title">${escapeHtml(topic.title)}</h2>
    <p class="topic-detail-copy">${escapeHtml(topic.body)}</p>
    <div class="source-line">
      <span class="topic-source">${escapeHtml(topic.origin)}</span>
      <span class="topic-participants">${showResults ? `${compactNumber(topic.participants)} 人参与` : "参与后查看实时结果"}</span>
    </div>
    ${
      hasOptions
        ? `<div class="topic-options">${topic.options
            .map((option, index) => {
              const percent = Math.round((option.count / total) * 100);
              return `<button class="topic-option is-${index % 2 === 0 ? "pro" : "con"} ${showResults ? "has-result" : ""}" data-action="choose-topic-option" data-index="${index}" ${userCommented ? "disabled" : ""}>
                ${showResults ? `<span class="option-fill" style="width:${percent}%"></span>` : ""}
                <span class="option-meta">
                  <span>${escapeHtml(option.label)}</span>
                  ${showResults ? `<strong>${selectedChoice === index ? "已投票 · " : ""}占比${percent}%</strong>` : ""}
                </span>
              </button>`;
            })
            .join("")}</div>`
        : `<div class="button-row"><button class="button primary" data-action="open-topic-compose" ${userCommented ? "disabled" : ""}>${icon("pen-line")} ${userCommented ? "你已参与讨论" : "发表一条评论"}</button></div>`
    }
    <div class="section-heading-row">
      <h3 class="section-heading">${icon("messages-square")}讨论区</h3>
      <span class="section-note">每人每个话题限 1 条评论</span>
    </div>
    <div class="topic-comments">
      ${topic.comments.map((comment) => renderTopicComment(comment, topic.id)).join("")}
    </div>
    <div class="topic-detail-footer">
      <button class="button subtle full" data-action="go-wish">${icon("sparkles")} 我也想许愿一个话题</button>
    </div>
  `, "wide");
}

function renderTopicComment(comment, topicId) {
  const key = `topic:${topicId}:${comment.id}`;
  if (state.user.hidden.includes(key)) return `<div class="hidden-comment">这条内容已按你的举报隐藏，后台会继续复审。</div>`;
  const liked = state.user.liked.includes(key);
  return `
    <article class="topic-comment-row">
      <div class="comment-author"><span class="avatar teal">${escapeHtml(comment.author.slice(0, 1))}</span><strong class="comment-name">${escapeHtml(comment.author)}</strong></div>
      <p class="comment-body">${escapeHtml(comment.body)}</p>
      <div class="comment-actions">
        <button class="small-action ${liked ? "is-liked" : ""}" data-action="like-topic-comment" data-id="${comment.id}">${icon("heart")} ${comment.likes}</button>
        <button class="small-action" data-action="report-topic-comment" data-id="${comment.id}">${icon("flag")} 举报</button>
      </div>
    </article>
  `;
}

function renderTopicCompose() {
  const topic = getActiveTopic();
  const option = Number.isInteger(state.ui.selectedTopicOption) ? topic.options[state.ui.selectedTopicOption] : null;
  return modalFrame(`
    <div class="modal-header">
      <div>
        <h2 class="modal-title">说说你的想法</h2>
        <p class="modal-subtitle">${option ? `你的选择：${escapeHtml(option.label)} 已记录。` : "发布一条评论参与讨论。"}每个话题每人仅可发布 1 条评论。</p>
      </div>
      <button class="close-button" data-action="back-to-topic" aria-label="返回">×</button>
    </div>
    <div class="notice-line">${icon("shield-check")}评论会经过敏感词库与内容安全检查，绿色内容即时展示。</div>
    <div class="form-group">
      <label class="form-label" for="topic-comment">我的评论</label>
      <textarea id="topic-comment" class="textarea" rows="5" maxlength="200" placeholder="写下你的理由，最少 5 字，最多 200 字。"></textarea>
      <div class="form-meta"><span class="helper-text">不同意见也值得被认真听见。</span><span class="counter" data-counter-for="topic-comment">0 / 200</span></div>
    </div>
    <p class="form-error">${escapeHtml(state.ui.error)}</p>
    <div class="form-footer">
      <button class="button" data-action="back-to-topic">返回</button>
      <button class="button primary" data-action="publish-topic">发布评论</button>
    </div>
  `);
}

function renderPastDebatePlaceholder() {
  const debate = state.pastDebates.find((item) => item.id === state.ui.activePastDebateId);
  return modalFrame(`
    <div class="modal-header">
      <div>
        <span class="tag">往期辩题</span>
        <h2 class="modal-title">${escapeHtml(debate?.title || "往期辩题")}</h2>
        <p class="modal-subtitle">${debate?.participants || 0} 人正在说</p>
      </div>
      <button class="close-button" data-action="close-modal" aria-label="关闭">×</button>
    </div>
    <div class="notice-line">${icon("message-circle-more")}这里是往期辩题讨论详情页入口示意，后续可接入该辩题的观点、投票结果与评论沉淀。</div>
    <div class="form-footer">
      <button class="button primary" data-action="close-modal">知道了</button>
    </div>
  `);
}

function renderNotice() {
  return modalFrame(`
    <div class="modal-header">
      <div>
        <h2 class="modal-title">消息中心</h2>
        <p class="modal-subtitle">及时告诉你，哪些表达正在被听见。</p>
      </div>
      <button class="close-button" data-action="close-modal" aria-label="关闭">×</button>
    </div>
    <div class="notice-line">${icon("bell")}本周辩题已更新：不再依赖父母算长大吗？</div>
    <div class="notice-line" style="margin-top:9px">${icon("sparkles")}你点赞过的许愿正在升温，已有更多同学加入。</div>
  `);
}

function getActiveTopic() {
  return state.topics.find((topic) => topic.id === state.ui.activeTopicId);
}

function hasUnsafeText(value) {
  return ["真实姓名", "学校班级", "联系方式", "微信", "攻击别人", "暴力"].some((word) => value.includes(word));
}

function validateText(value, min, max) {
  const text = value.trim();
  if (text.length < min || text.length > max) return `请输入 ${min}-${max} 字内容。`;
  if (hasUnsafeText(text)) return "这段内容可能包含不适合公开的信息，请调整后再发布。";
  return "";
}

function updateCounter(input) {
  const target = document.querySelector(`[data-counter-for="${input.id}"]`);
  if (target) target.textContent = `${input.value.length} / ${input.maxLength}`;
}

function openModal(modal, extra = {}) {
  state.ui = { ...state.ui, modal, error: "", ...extra };
  render();
}

function closeModal() {
  state.ui.modal = null;
  state.ui.error = "";
  render();
}

let toastTimer;
function toast(message) {
  const root = document.querySelector("#toast-root");
  root.innerHTML = `<div class="toast">${escapeHtml(message)}</div>`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    root.innerHTML = "";
  }, 3200);
}

document.addEventListener("input", (event) => {
  if (event.target.matches("textarea, input[maxlength]")) updateCounter(event.target);
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action], [data-nav]");
  if (!trigger) return;

  const { action, nav } = trigger.dataset;
  if (nav) {
    state.view = nav;
    state.ui.modal = null;
    save();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "open-debate-compose") openModal("debate-compose", { selectedStance: trigger.dataset.stance });
  if (action === "close-modal") closeModal();
  if (action === "close-modal-background" && event.target === trigger) closeModal();
  if (action === "show-notice") openModal("notice");
  if (action === "open-wish-compose") {
    if (state.user.wishSubmitted) toast("你今天已经许过愿啦，明天再带一个新脑洞来吧。");
    else openModal("wish-compose");
  }
  if (action === "filter-hot") {
    state.filter = trigger.dataset.filter;
    save();
    render();
  }
  if (action === "open-topic") {
    openModal("topic", { activeTopicId: trigger.dataset.id, selectedTopicOption: null });
  }
  if (action === "open-past-debate") {
    openModal("past-debate", { activePastDebateId: trigger.dataset.id });
  }
  if (action === "choose-topic-option") {
    openModal("topic-compose", { selectedTopicOption: Number(trigger.dataset.index) });
  }
  if (action === "open-topic-compose") openModal("topic-compose", { selectedTopicOption: null });
  if (action === "back-to-topic") openModal("topic");
  if (action === "go-wish") {
    state.view = "wish";
    state.ui.modal = null;
    save();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (action === "publish-debate") publishDebate();
  if (action === "publish-wish") publishWish();
  if (action === "publish-topic") publishTopic();
  if (action === "like-comment") likeDebateComment(trigger.dataset.id);
  if (action === "report-comment") reportDebateComment(trigger.dataset.id);
  if (action === "like-topic-comment") likeTopicComment(trigger.dataset.id);
  if (action === "report-topic-comment") reportTopicComment(trigger.dataset.id);
  if (action === "like-wish") likeWish(trigger.dataset.id);
});

function publishDebate() {
  const input = document.querySelector("#debate-comment");
  const agreement = document.querySelector("#debate-agreement");
  const error = validateText(input.value, 5, 400);
  if (error || !agreement.checked) {
    state.ui.error = error || "请先确认已阅读并同意社区活动协议。";
    render();
    return;
  }
  const id = `d-${Date.now()}`;
  state.debate.comments.unshift({
    id,
    stance: state.ui.selectedStance,
    author: "林同学",
    school: "八年级",
    time: "刚刚",
    body: input.value.trim(),
    likes: 0,
  });
  state.debate.votes[state.ui.selectedStance] += 1;
  state.debate.participants += 1;
  state.user.debateCommentId = id;
  save();
  closeModal();
  toast("观点已通过初审并即时展示，谢谢你的认真表达。");
}

function publishWish() {
  const question = document.querySelector("#wish-question").value.trim();
  const reason = document.querySelector("#wish-reason").value.trim();
  const questionError = validateText(question, 5, 30);
  const reasonError = reason ? validateText(reason, 5, 100) : "";
  if (questionError || reasonError) {
    state.ui.error = questionError || reasonError;
    render();
    return;
  }
  state.user.wishSubmitted = true;
  save();
  closeModal();
  toast("收到啦！你的脑洞已进入许愿池审核，审核通过后可能被大家看到。");
}

function publishTopic() {
  const input = document.querySelector("#topic-comment");
  const error = validateText(input.value, 5, 200);
  if (error) {
    state.ui.error = error;
    render();
    return;
  }
  const topic = getActiveTopic();
  const id = `tc-${Date.now()}`;
  topic.comments.unshift({ id, author: "林同学", body: input.value.trim(), likes: 0 });
  topic.participants += 1;
  if (Number.isInteger(state.ui.selectedTopicOption)) topic.options[state.ui.selectedTopicOption].count += 1;
  state.user.topicComments[topic.id] = id;
  if (Number.isInteger(state.ui.selectedTopicOption)) state.user.topicChoices[topic.id] = state.ui.selectedTopicOption;
  save();
  openModal("topic");
  toast("评论已通过初审并即时展示。");
}

function toggleLike(key, target) {
  if (state.user.liked.includes(key)) {
    state.user.liked = state.user.liked.filter((item) => item !== key);
    target.likes -= 1;
  } else {
    state.user.liked.push(key);
    target.likes += 1;
  }
  save();
  render();
}

function likeDebateComment(id) {
  toggleLike(`debate:${id}`, state.debate.comments.find((comment) => comment.id === id));
}

function reportDebateComment(id) {
  state.user.hidden.push(`debate:${id}`);
  save();
  render();
  toast("已为你隐藏这条内容，并提交后台复审。");
}

function likeTopicComment(id) {
  const topic = getActiveTopic();
  toggleLike(`topic:${topic.id}:${id}`, topic.comments.find((comment) => comment.id === id));
}

function reportTopicComment(id) {
  const topic = getActiveTopic();
  state.user.hidden.push(`topic:${topic.id}:${id}`);
  save();
  render();
  toast("已为你隐藏这条内容，并提交后台复审。");
}

function likeWish(id) {
  const wish = state.wishes.find((item) => item.id === id);
  const key = `wish:${id}`;
  if (state.user.liked.includes(key)) {
    toast("每条许愿每人只能点赞 1 次。");
    return;
  }
  state.user.liked.push(key);
  wish.likes += 1;
  save();
  render();
  toast("已为这个灵感加热。");
}

render();
