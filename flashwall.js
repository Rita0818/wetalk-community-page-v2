const FLASH_STORAGE_KEY = "wetalk-flashwall-demo-v1";
const searchParams = new URLSearchParams(window.location.search);
const FLASH_EMPTY_MODE = searchParams.has("empty");

if (searchParams.has("reset")) {
  localStorage.removeItem(FLASH_STORAGE_KEY);
  searchParams.delete("reset");
  const query = searchParams.toString();
  window.history.replaceState({}, "", `${window.location.pathname}${query ? `?${query}` : ""}`);
}

const basePosts = [
  {
    id: "current-lunchbox",
    source: "current",
    title: "午休也发光",
    subtitle1: "番茄炒蛋饭",
    subtitle2: "妈妈教我的第一道菜",
    body:
      "今天把番茄炒蛋盖在米饭上，打开饭盒的时候整张桌子都变香了。虽然鸡蛋有一点点碎，但这是我第一次完整做完一道菜。",
    author: "今天也带饭",
    grade: "六年级",
    school: "北京市海淀区实验小学",
    image: "./assets/flashwall-food-lunchbox.png",
    flowers: 1845,
    collects: 326,
    approvedAt: "2026-06-04T09:30:00+08:00",
  },
  {
    id: "current-yogurt",
    source: "current",
    title: "体育课后的彩虹杯",
    subtitle1: "水果酸奶",
    subtitle2: "五分钟快乐补给",
    body:
      "把草莓、芒果和蓝莓一层层铺进去，再撒一点燕麦。跑完八百米之后吃到它，感觉整个人都被重新点亮。",
    author: "芒果小队长",
    grade: "初一",
    school: "上海市南洋模范初级中学",
    image: "./assets/flashwall-food-yogurt.png",
    flowers: 1228,
    collects: 214,
    approvedAt: "2026-06-04T08:42:00+08:00",
  },
  {
    id: "current-flatbread",
    source: "current",
    title: "保定金牌驴火",
    subtitle1: "酥脆冒热气",
    subtitle2: "家乡味道",
    body:
      "外皮咔嚓一声，里面的肉还带着热气。每次带到学校，旁边同学都会先问一句：今天能分我一口吗？",
    author: "申泓",
    grade: "五年级",
    school: "北京陈经纶中学嘉铭分校",
    image: "./assets/flashwall-food-flatbread.png",
    flowers: 2970,
    collects: 604,
    approvedAt: "2026-06-03T17:20:00+08:00",
  },
  {
    id: "past-breakfast",
    source: "past",
    activity: "早餐灵感交换",
    title: "十分钟元气早餐",
    subtitle1: "早起成功",
    subtitle2: "给自己加油",
    body:
      "以前总是踩点出门，这次提前十分钟把酸奶杯做好。原来早餐吃得好一点，第一节课也会更清醒。",
    author: "不迟到的阿青",
    grade: "初二",
    school: "杭州市公益中学",
    image: "",
    flowers: 2436,
    collects: 517,
    approvedAt: "2026-05-28T08:15:00+08:00",
  },
  {
    id: "past-hometown",
    source: "past",
    activity: "家乡味道图鉴",
    title: "一口回到周末",
    subtitle1: "热乎烧饼",
    subtitle2: "爷爷的推荐",
    body:
      "我给同桌讲了这个烧饼的来历，他说下次也想带一个家乡小吃来交换。食物好像真的会帮人打开话题。",
    author: "北方小麦",
    grade: "六年级",
    school: "天津市和平区中心小学",
    image: "",
    flowers: 3288,
    collects: 701,
    approvedAt: "2026-05-17T12:35:00+08:00",
  },
  {
    id: "past-lunch",
    source: "past",
    activity: "我的便当日记",
    title: "饭盒里的小胜利",
    subtitle1: "第一次掌勺",
    subtitle2: "没有翻车",
    body:
      "番茄炒蛋真的比想象中难，火候一不小心就变成汤。今天这份刚刚好，我决定给自己打九十分。",
    author: "番茄观察员",
    grade: "初一",
    school: "南京市金陵汇文学校",
    image: "",
    flowers: 1986,
    collects: 432,
    approvedAt: "2026-05-10T11:10:00+08:00",
  },
];

const defaultState = {
  tab: "current",
  sort: "latest",
  liked: [],
  collected: ["current-flatbread", "past-breakfast"],
  reports: [],
  modal: null,
  reportPostId: null,
  activityLiked: false,
  activityCollected: false,
  submittedCount: 0,
  form: {
    title: "",
    subtitle1: "",
    subtitle2: "",
    body: "",
    author: "",
    grade: "",
    school: "",
    image: "",
  },
};

const saved = localStorage.getItem(FLASH_STORAGE_KEY);
const state = saved ? { ...defaultState, ...JSON.parse(saved) } : { ...defaultState };

function save() {
  localStorage.setItem(
    FLASH_STORAGE_KEY,
    JSON.stringify({ ...state, modal: null, reportPostId: null }),
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

function initIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function compactNumber(value) {
  if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
  return String(value);
}

function getPost(id) {
  return basePosts.find((post) => post.id === id);
}

function isLiked(id) {
  return state.liked.includes(id);
}

function isCollected(id) {
  return state.collected.includes(id);
}

function flowersFor(post) {
  return post.flowers + (isLiked(post.id) ? 1 : 0);
}

function collectsFor(post) {
  return post.collects + (isCollected(post.id) ? 1 : 0);
}

function currentPosts() {
  if (FLASH_EMPTY_MODE) return [];
  return basePosts.filter((post) => post.source === "current");
}

function taskStats() {
  const posts = currentPosts();
  return {
    participants: posts.length ? 386 + posts.length + state.submittedCount : 0,
    flowers: posts.reduce((sum, post) => sum + flowersFor(post), 0) + (state.activityLiked ? 1 : 0),
    collects: posts.reduce((sum, post) => sum + collectsFor(post), 0) + (state.activityCollected ? 1 : 0),
  };
}

function postsForActiveTab() {
  let posts = [];
  if (state.tab === "current") posts = currentPosts();
  if (state.tab === "past") posts = basePosts.filter((post) => post.source === "past");
  if (state.tab === "collected") posts = state.collected.map(getPost).filter(Boolean);

  return [...posts].sort((a, b) => {
    if (state.sort === "hot") return flowersFor(b) - flowersFor(a);
    return new Date(b.approvedAt) - new Date(a.approvedAt);
  });
}

function tabCount(tab) {
  if (tab === "current") return currentPosts().length;
  if (tab === "past") return basePosts.filter((post) => post.source === "past").length;
  return state.collected.length;
}

function render() {
  const app = document.querySelector("#flash-app");
  app.innerHTML = renderApp();
  renderModal();
  initIcons();
}

function renderWithScroll(preserveScroll = true) {
  const stage = document.querySelector("#wallStage");
  const scrollTop = stage?.scrollTop || 0;
  render();
  if (preserveScroll) {
    requestAnimationFrame(() => {
      const nextStage = document.querySelector("#wallStage");
      if (nextStage) nextStage.scrollTop = scrollTop;
    });
  }
}

function renderApp() {
  return `
    <div class="flash-layout">
      <aside class="left-rail">
        <p class="rail-title">FLASH WALL</p>
        <div class="rail-tabs">${renderTabs()}</div>
        <p class="rail-note">晒出一张图，讲讲今天的生活小发现。通过审核后，作品会出现在快闪墙里。</p>
      </aside>
      <section class="flash-main">
        <div class="mobile-tabs">${renderTabs()}</div>
        ${renderSortBar()}
        <div class="wall-stage-shell">
          <div class="wall-stage" id="wallStage">
            ${renderPages()}
          </div>
          <div class="stage-tools">
            <button class="icon-button" type="button" data-action="scroll-prev" title="上一张" aria-label="上一张">${icon("chevron-up")}</button>
            <button class="icon-button" type="button" data-action="scroll-next" title="下一张" aria-label="下一张">${icon("chevron-down")}</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderTabs() {
  const tabs = [
    { id: "current", label: "本期活动", icon: "sparkles" },
    { id: "past", label: "往期活动", icon: "history" },
    { id: "collected", label: "我的收藏", icon: "bookmark" },
  ];

  return tabs
    .map(
      (tab) => `
        <button class="rail-tab ${state.tab === tab.id ? "is-active" : ""}" type="button" data-tab="${tab.id}">
          <span>${icon(tab.icon)}${tab.label}</span>
          <small>${tabCount(tab.id)}</small>
        </button>
      `,
    )
    .join("");
}

function renderSortBar() {
  const postCount = postsForActiveTab().length;
  const label = state.tab === "current" ? "本期活动" : state.tab === "past" ? "往期活动" : "我的收藏";
  return `
    <div class="sort-bar">
      <div class="wall-meta">
        <span class="notice-pill">${icon("zap")} ${label}</span>
        <span>${postCount ? `${postCount} 张投稿卡` : "暂无投稿卡"}</span>
      </div>
      <div class="sort-tabs" role="tablist" aria-label="排序">
        <button class="sort-button ${state.sort === "latest" ? "is-active" : ""}" type="button" data-sort="latest">
          ${icon("clock-3")}最新
        </button>
        <button class="sort-button ${state.sort === "hot" ? "is-active" : ""}" type="button" data-sort="hot">
          ${icon("flame")}最热
        </button>
      </div>
    </div>
  `;
}

function renderPages() {
  if (state.tab === "current") {
    const posts = postsForActiveTab();
    const stats = taskStats();
    return `
      <section class="wall-page">
        ${renderTaskCard(stats)}
        ${renderActionRail({ flowers: stats.flowers, collects: stats.collects, isActivity: true, submitLabel: "立即参与" })}
      </section>
      ${
        posts.length
          ? posts.map((post) => `
              <section class="wall-page">
                ${renderPostCard(post)}
                ${renderActionRail({ post, submitLabel: "我也来晒" })}
              </section>
            `).join("")
          : `<section class="wall-page">
              ${renderEmpty("第一批作品正在审核中，等你来投稿！")}
              ${renderActionRail({ submitLabel: "我也来晒" })}
            </section>`
      }
    `;
  }

  const posts = postsForActiveTab();
  if (!posts.length) {
    const copy =
      state.tab === "collected"
        ? "你还没有收藏快闪墙投稿。看到喜欢的作品，可以点亮收藏。"
        : "往期活动内容正在整理中。";
    return `<section class="wall-page">${renderEmpty(copy)}</section>`;
  }
  return posts.map((post) => `
    <section class="wall-page">
      ${renderPostCard(post)}
      ${renderActionRail({ post })}
    </section>
  `).join("");
}

function renderTaskCard(stats) {
  return `
    <article class="task-card">
      <div class="task-inner">
        <div class="task-eyebrow">
          <span>本期主题 · 美食发现</span>
          <span class="activity-date">6月4日-6月18日</span>
        </div>
        <h1>美食征集活动开启！</h1>
        <div class="hero-frame">
          <img src="./assets/flashwall-hero.png" alt="学生拍摄美食的卡通活动插画" />
        </div>
        <p class="task-copy">
          拍下最近让你开心的一份食物，可以是家里做的、学校附近发现的，也可以是自己动手完成的小惊喜。配上一段真实说明，把你的美食发现晒到快闪墙。
        </p>
        <div class="metric-row">
          ${stats.participants ? `<span class="metric">${icon("users")}已有${stats.participants}位同学参加</span>` : ""}
        </div>
        <div class="task-footer">
          <p class="task-hint">活动标签自动带入：#五一逛吃日记</p>
        </div>
      </div>
    </article>
  `;
}

function renderPostCard(post) {
  const meta = [post.author, post.grade, post.school].filter(Boolean).join(" · ");
  const usePlaceholder = state.tab === "past" || state.tab === "collected" || !post.image;

  return `
    <article class="post-card">
      <div class="post-image">
        ${
          usePlaceholder
            ? `<div class="placeholder-image">
                <span>${icon("image")}</span>
                <strong>${state.tab === "past" ? "往期活动占位图" : "收藏内容占位图"}</strong>
                <small>活动图片稍后开放</small>
              </div>`
            : `<img src="${post.image}" alt="${escapeHtml(post.title)}" />`
        }
      </div>
      <div class="post-body">
        <h2 class="post-title">${escapeHtml(post.title)}</h2>
        <div class="post-subtitles">
          ${post.subtitle1 ? `<span>${escapeHtml(post.subtitle1)}</span>` : ""}
          ${post.subtitle2 ? `<span>${escapeHtml(post.subtitle2)}</span>` : ""}
        </div>
        <p class="post-copy">${escapeHtml(post.body)}</p>
        <div class="post-user">
          <span><span class="user-name">${escapeHtml(post.author)}</span></span>
          <span>${escapeHtml(meta.replace(`${post.author} · `, ""))}</span>
        </div>
      </div>
    </article>
  `;
}

function renderActionRail({ post, flowers = 0, collects = 0, isActivity = false, submitLabel = "" }) {
  const liked = post ? isLiked(post.id) : state.activityLiked;
  const collected = post ? isCollected(post.id) : state.activityCollected;
  const likeAction = post ? "like" : "activity-like";
  const collectAction = post ? "collect" : "activity-collect";
  const likeId = post ? `data-id="${post.id}"` : "";
  const collectId = post ? `data-id="${post.id}"` : "";
  const flowerCount = post ? flowersFor(post) : flowers;
  const collectCount = post ? collectsFor(post) : collects;

  return `
    <div class="page-action-rail" aria-label="当前卡片操作">
      ${
        post || isActivity
          ? `
            <button class="icon-count flower ${liked ? "is-liked" : ""}" type="button" data-action="${likeAction}" ${likeId} title="送小红花" aria-label="送小红花">
              ${icon("flower")}<span>${compactNumber(flowerCount)}</span>
            </button>
            <button class="icon-count collect ${collected ? "is-collected" : ""}" type="button" data-action="${collectAction}" ${collectId} title="${collected ? "取消收藏" : "收藏"}" aria-label="${collected ? "取消收藏" : "收藏"}">
              ${icon("bookmark")}<span>${compactNumber(collectCount)}</span>
            </button>
          `
          : ""
      }
      ${
        post
          ? `<button class="icon-count" type="button" data-action="report" data-id="${post.id}" title="举报" aria-label="举报">
              ${icon("flag")}<span>举报</span>
            </button>`
          : ""
      }
      ${
        submitLabel
          ? `<button class="icon-count submit-float" type="button" data-action="open-submit" title="${submitLabel}" aria-label="${submitLabel}">
              ${icon(isActivity ? "camera" : "image-plus")}<span>${submitLabel}</span>
            </button>`
          : ""
      }
    </div>
  `;
}

function renderEmpty(copy) {
  return `
    <article class="empty-card">
      <h2>先留一块空白</h2>
      <p>${escapeHtml(copy)}</p>
    </article>
  `;
}

function renderModal() {
  const root = document.querySelector("#modal-root");
  if (state.modal === "submit") root.innerHTML = renderSubmitModal();
  else if (state.modal === "success") root.innerHTML = renderSuccessModal();
  else if (state.modal === "report") root.innerHTML = renderReportModal();
  else root.innerHTML = "";
  initIcons();
  if (state.modal === "submit") syncPreview();
}

function renderSubmitModal() {
  const form = state.form;
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="modal-panel submit-panel" role="dialog" aria-modal="true" aria-labelledby="submitTitle" data-modal-panel>
        <header class="modal-header">
          <div>
            <h2 class="modal-title" id="submitTitle">上传我的快闪卡</h2>
            <p class="modal-subtitle">活动标签会自动带入 #五一逛吃日记</p>
          </div>
          <button class="modal-close" type="button" data-action="close-modal" aria-label="关闭">${icon("x")}</button>
        </header>
        <div class="submit-grid">
          <form class="submit-form" id="submitForm">
            <div class="form-row">
              ${field("主标题", "title", "text", "2-10字", form.title, "例如：午休也发光")}
              ${field("昵称", "author", "text", "1-10字", form.author, "例如：芒果小队长")}
            </div>
            <div class="form-row">
              ${field("副标题1", "subtitle1", "text", "选填，2-12字", form.subtitle1, "例如：番茄炒蛋饭")}
              ${field("副标题2", "subtitle2", "text", "选填，2-15字", form.subtitle2, "例如：第一次掌勺")}
            </div>
            <label class="upload-box">
              ${icon("upload")}
              <span>${form.image ? "已选择 1 张图片" : "上传图片"}</span>
              <input type="file" accept="image/*" data-field="image" />
            </label>
            <div class="field">
              <label for="body">正文</label>
              <textarea id="body" data-field="body" maxlength="150" placeholder="10-150字，写写这张图片背后的故事">${escapeHtml(form.body)}</textarea>
              <small>写真实一点，会更像你的快闪卡。</small>
            </div>
            <div class="form-row">
              <div class="field">
                <label for="grade">年级</label>
                <select id="grade" data-field="grade">
                  ${["", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三"].map(
                    (grade) => `<option value="${grade}" ${form.grade === grade ? "selected" : ""}>${grade || "请选择"}</option>`,
                  ).join("")}
                </select>
                <small>选填</small>
              </div>
              ${field("学校", "school", "text", "选填，2-15字", form.school, "例如：北京市第四中学")}
            </div>
          </form>
          <aside class="preview-pane">
            <p class="preview-label">卡片预览</p>
            <article class="preview-card">
              <div class="preview-image" id="previewImage">图片预览</div>
              <div class="preview-body">
                <h3 class="preview-title" id="previewTitle">主标题</h3>
                <div class="preview-tags" id="previewTags"></div>
                <p class="preview-copy" id="previewBody">正文会显示在这里。</p>
                <p class="preview-user" id="previewUser">昵称 · 年级 · 学校</p>
              </div>
            </article>
          </aside>
        </div>
        <footer class="modal-actions">
          <button class="button secondary" type="button" data-action="close-modal">取消</button>
          <button class="button primary" type="submit" form="submitForm">${icon("send")}提交审核</button>
        </footer>
      </section>
    </div>
  `;
}

function field(label, name, type, helper, value, placeholder) {
  return `
    <div class="field">
      <label for="${name}">${label}</label>
      <input id="${name}" type="${type}" data-field="${name}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" />
      <small>${helper}</small>
    </div>
  `;
}

function renderSuccessModal() {
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="modal-panel compact" role="dialog" aria-modal="true" data-modal-panel>
        <div class="submit-success">
          <span class="success-icon">${icon("check")}</span>
          <h2>收到啦！</h2>
          <p>你的作品已提交审核，通过后就会出现在快闪墙里。先去看看其他同学的作品吧！</p>
          <button class="button primary" type="button" data-action="close-modal">${icon("sparkles")}去看作品</button>
        </div>
      </section>
    </div>
  `;
}

function renderReportModal() {
  const post = getPost(state.reportPostId);
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="modal-panel compact" role="dialog" aria-modal="true" data-modal-panel>
        <header class="modal-header">
          <div>
            <h2 class="modal-title">举报投稿</h2>
            <p class="modal-subtitle">${escapeHtml(post?.title || "快闪墙投稿")}</p>
          </div>
          <button class="modal-close" type="button" data-action="close-modal" aria-label="关闭">${icon("x")}</button>
        </header>
        <div class="report-options">
          ${["内容不适合社区", "图片与主题无关", "疑似侵权或冒用", "其他问题"].map(
            (reason, index) => `
              <label class="report-option">
                <input type="radio" name="reportReason" value="${reason}" ${index === 0 ? "checked" : ""} />
                <span>${reason}</span>
              </label>
            `,
          ).join("")}
        </div>
        <div class="report-footer">
          <button class="button secondary" type="button" data-action="close-modal">取消</button>
          <button class="button danger" type="button" data-action="submit-report">${icon("flag")}提交举报</button>
        </div>
      </section>
    </div>
  `;
}

function syncPreview() {
  const form = document.querySelector("#submitForm");
  if (!form) return;
  const read = (fieldName) => form.querySelector(`[data-field="${fieldName}"]`)?.value.trim() || "";
  const title = read("title") || "主标题";
  const subtitle1 = read("subtitle1");
  const subtitle2 = read("subtitle2");
  const body = read("body") || "正文会显示在这里。";
  const author = read("author") || "昵称";
  const grade = read("grade");
  const school = read("school");
  const user = [author, grade, school].filter(Boolean).join(" · ");
  const image = state.form.image;

  document.querySelector("#previewTitle").textContent = title;
  document.querySelector("#previewBody").textContent = body;
  document.querySelector("#previewUser").textContent = user || "昵称 · 年级 · 学校";
  document.querySelector("#previewTags").innerHTML = [subtitle1, subtitle2, "#五一逛吃日记"]
    .filter(Boolean)
    .map((tag) => `<span>${escapeHtml(tag)}</span>`)
    .join("");
  document.querySelector("#previewImage").innerHTML = image
    ? `<img src="${image}" alt="上传图片预览" />`
    : "图片预览";
}

function updateFormStateFromDom() {
  const form = document.querySelector("#submitForm");
  if (!form) return;
  ["title", "subtitle1", "subtitle2", "body", "author", "grade", "school"].forEach((fieldName) => {
    state.form[fieldName] = form.querySelector(`[data-field="${fieldName}"]`)?.value.trim() || "";
  });
}

function validateSubmission() {
  updateFormStateFromDom();
  const { title, subtitle1, subtitle2, body, author, school, image } = state.form;
  if (title.length < 2 || title.length > 10) return "主标题需要 2-10 字。";
  if (subtitle1 && (subtitle1.length < 2 || subtitle1.length > 12)) return "副标题1需要 2-12 字。";
  if (subtitle2 && (subtitle2.length < 2 || subtitle2.length > 15)) return "副标题2需要 2-15 字。";
  if (!image) return "请上传 1 张图片。";
  if (body.length < 10 || body.length > 150) return "正文需要 10-150 字。";
  if (author.length < 1 || author.length > 10) return "昵称需要 1-10 字。";
  if (school && (school.length < 2 || school.length > 15)) return "学校需要 2-15 字。";
  return "";
}

function showToast(message) {
  const root = document.querySelector("#toast-root");
  root.innerHTML = `<div class="toast">${escapeHtml(message)}</div>`;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    root.innerHTML = "";
  }, 2200);
}

function scrollStage(direction) {
  const stage = document.querySelector("#wallStage");
  if (!stage) return;
  stage.scrollBy({ top: direction * stage.clientHeight, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-tab], [data-sort], [data-action]");
  if (!target) return;

  if (target.dataset.tab) {
    state.tab = target.dataset.tab;
    save();
    renderWithScroll(false);
    return;
  }

  if (target.dataset.sort) {
    state.sort = target.dataset.sort;
    save();
    renderWithScroll(false);
    return;
  }

  const action = target.dataset.action;
  if (action === "open-submit") {
    state.modal = "submit";
    renderModal();
    return;
  }

  if (action === "close-modal") {
    if (event.target.closest("[data-modal-panel]") && !target.classList.contains("modal-close") && !target.classList.contains("button")) return;
    state.modal = null;
    state.reportPostId = null;
    renderModal();
    return;
  }

  if (action === "like") {
    const id = target.dataset.id;
    if (isLiked(id)) {
      showToast("每个用户对同一投稿只能送 1 次小红花。");
      return;
    }
    state.liked.push(id);
    save();
    renderWithScroll(true);
    showToast("已送出 1 朵小红花。");
    return;
  }

  if (action === "activity-like") {
    if (state.activityLiked) {
      showToast("你已经给本期活动送过小红花了。");
      return;
    }
    state.activityLiked = true;
    save();
    renderWithScroll(true);
    showToast("已为本期活动送出 1 朵小红花。");
    return;
  }

  if (action === "activity-collect") {
    state.activityCollected = !state.activityCollected;
    save();
    renderWithScroll(true);
    showToast(state.activityCollected ? "已收藏本期活动。" : "已取消收藏本期活动。");
    return;
  }

  if (action === "collect") {
    const id = target.dataset.id;
    if (isCollected(id)) {
      state.collected = state.collected.filter((postId) => postId !== id);
      showToast("已取消收藏。");
    } else {
      state.collected.push(id);
      showToast("已收藏到我的收藏。");
    }
    save();
    renderWithScroll(true);
    return;
  }

  if (action === "report") {
    state.modal = "report";
    state.reportPostId = target.dataset.id;
    renderModal();
    return;
  }

  if (action === "submit-report") {
    const reason = document.querySelector('input[name="reportReason"]:checked')?.value || "其他问题";
    state.reports.push({ id: state.reportPostId, reason, at: new Date().toISOString() });
    state.modal = null;
    state.reportPostId = null;
    save();
    renderModal();
    showToast("举报已收到，管理员会尽快处理。");
    return;
  }

  if (action === "scroll-prev") scrollStage(-1);
  if (action === "scroll-next") scrollStage(1);
});

document.addEventListener("input", (event) => {
  const field = event.target.closest("[data-field]");
  if (!field || field.type === "file") return;
  updateFormStateFromDom();
  syncPreview();
});

document.addEventListener("change", (event) => {
  const field = event.target.closest("[data-field]");
  if (!field) return;
  if (field.type === "file") {
    const file = field.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      state.form.image = reader.result;
      renderModal();
    };
    reader.readAsDataURL(file);
    return;
  }
  updateFormStateFromDom();
  syncPreview();
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "submitForm") return;
  event.preventDefault();
  const error = validateSubmission();
  if (error) {
    showToast(error);
    syncPreview();
    return;
  }
  state.submittedCount += 1;
  state.form = { ...defaultState.form };
  state.modal = "success";
  save();
  renderModal();
});

render();
