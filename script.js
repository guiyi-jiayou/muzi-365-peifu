/* =========================================================
   母子365佩服 · Interactions
   No framework, no dependencies. All data is local demo data.
   ========================================================= */

const activities = [
  {
    id: "admire-today",
    title: "今天，我佩服你",
    category: "佩服打卡",
    audience: "亲子",
    duration: "10 分钟",
    schedule: "随时开始",
    price: "免费",
    priceUnit: "自由参与",
    image: "https://guiyi-jiayou.github.io/muzi-365-assets/images/growth/image5.jpeg",
    alt: "珈由不同成长阶段的笑容特写",
    description: "不写“你真棒”，只写今天具体看见的三件小事。",
    intro: "每天留 10 分钟，把“你应该”换成“我佩服”。可以从孩子的一个选择、一句回应或一个小动作开始。写得具体，孩子才知道自己被真正看见。",
    highlights: ["一张三句佩服卡", "一个具体观察的视角", "一段可以回看的家庭记录"],
    note: "线上打卡 · 建议睡前完成"
  },
  {
    id: "unexpected-moment",
    title: "今天，有什么意想不到？",
    category: "意想不到打卡",
    audience: "亲子",
    duration: "5 分钟",
    schedule: "随时开始",
    price: "免费",
    priceUnit: "自由参与",
    image: "https://guiyi-jiayou.github.io/muzi-365-assets/images/growth/image7.jpeg",
    alt: "珈由在家中和庭院里玩耍的成长记录",
    description: "记下今天最没按计划发生的一件事，先不急着评价。",
    intro: "成长经常藏在计划之外。今天只说发生了什么，不急着总结对错。可以写一句话、画一幅小图，也可以只拍下一张照片。",
    highlights: ["一个今天的“没想到”", "一张可选的照片或小画", "一句不评价的原始记录"],
    note: "线上打卡 · 一句话也可以"
  },
  {
    id: "admire-nine",
    title: "9 个佩服：把爱说具体",
    category: "佩服打卡",
    audience: "家庭",
    duration: "15 分钟",
    schedule: "随时开始",
    price: "免费",
    priceUnit: "自由参与",
    image: "https://guiyi-jiayou.github.io/muzi-365-assets/images/growth/image9.jpeg",
    alt: "珈由和桂仪一起自拍的成长记录",
    description: "每人说出 3 个具体佩服，三个人就是 9 次认真看见。",
    intro: "如果不知道从哪里开始，就轮流说出 3 个具体的佩服。不要用“很好”“很棒”结尾，试着补上“因为发生了什么”。最后把 9 句话一起保存下来。",
    highlights: ["每人 3 句具体表达", "一次轮流倾听", "一张九宫格家庭佩服卡"],
    note: "线上打卡 · 适合全家一起完成"
  },
  {
    id: "unexpected-perspective",
    title: "换个位置看今天",
    category: "意想不到打卡",
    audience: "个人",
    duration: "10 分钟",
    schedule: "随时开始",
    price: "免费",
    priceUnit: "自由参与",
    image: "https://guiyi-jiayou.github.io/muzi-365-assets/images/growth/image2.jpeg",
    alt: "珈由在家里学习、玩耍和与家人合影的记录",
    description: "选同一件小事，分别写下你看见的、孩子看见的、第三种可能。",
    intro: "很多“意想不到”来自位置不同。挑今天一个让你起情绪的小瞬间，先不判断谁对谁错，只分别写下三个版本：我看到的、孩子可能看到的、如果换一个更柔软的角度会看到什么。",
    highlights: ["同一件事的三个版本", "一次暂时放下判断的练习", "一个可以复盘的情绪切片"],
    note: "线上打卡 · 建议一个人安静完成"
  },
  {
    id: "admire-self",
    title: "也佩服一下自己",
    category: "佩服打卡",
    audience: "个人",
    duration: "5 分钟",
    schedule: "随时开始",
    price: "免费",
    priceUnit: "自由参与",
    image: "https://guiyi-jiayou.github.io/muzi-365-assets/images/growth/image4.jpeg",
    alt: "桂仪和珈由跨越成长阶段的合影",
    description: "今天不必完美，只找出一个愿意为自己点赞的瞬间。",
    intro: "佩服孩子之前，也别忘了看见自己。想想今天有哪一刻，你多等了一会儿、少说了一句、认真做了一顿饭，或者只是终于允许自己休息。把那一句写给自己。",
    highlights: ["一句送给自己的佩服", "一个被看见的努力", "一次把目光转回自己的练习"],
    note: "线上打卡 · 妈妈也值得被看见"
  },
  {
    id: "unexpected-observation",
    title: "十分钟观察实验",
    category: "意想不到打卡",
    audience: "亲子",
    duration: "10 分钟",
    schedule: "随时开始",
    price: "免费",
    priceUnit: "自由参与",
    image: "https://guiyi-jiayou.github.io/muzi-365-assets/images/growth/image3.jpeg",
    alt: "珈由和家人一起游戏与玩耍的成长记录",
    description: "不打断、不提问，只观察孩子正在做什么，记录一个新发现。",
    intro: "找十分钟坐在旁边，不指导、不纠正，也不急着拍照。观察孩子怎么开始、怎么改变玩法、遇到困难时怎么处理。结束后只记录一个此前没注意到的细节。",
    highlights: ["一个全新的观察细节", "一次不打断的陪伴", "一句从具体行为出发的记录"],
    note: "线上打卡 · 安静地看十分钟"
  }
];

const sparkPrompts = [
  { text: "让孩子带路 5 分钟，你只负责跟着。", tag: "户外 · 10 分钟" },
  { text: "一起找出家里 3 种不同形状的叶子。", tag: "观察 · 15 分钟" },
  { text: "问孩子：“今天有什么事让你偷偷开心？”", tag: "对话 · 10 分钟" },
  { text: "关掉屏幕 20 分钟，搭一个谁都没想到的家。", tag: "创意 · 20 分钟" },
  { text: "用一个旧纸盒，做一枚给未来的时间胶囊。", tag: "手作 · 25 分钟" },
  { text: "和孩子交换一个今天的小秘密。", tag: "对话 · 5 分钟" },
  { text: "把一顿饭变成颜色测验：谁找到了最多颜色？", tag: "餐桌 · 20 分钟" },
  { text: "做一次无目的散步，走到哪儿算哪儿。", tag: "户外 · 30 分钟" },
  { text: "一起给未来的自己写三句话。", tag: "书写 · 15 分钟" },
  { text: "今晚由孩子决定睡前故事的最后一页。", tag: "睡前 · 10 分钟" },
  { text: "用三种声音，给窗外的世界配一段音乐。", tag: "想象 · 10 分钟" },
  { text: "拥抱十秒，说出一件“谢谢你”的事。", tag: "连接 · 1 分钟" }
];

const articles = {
  weekend: {
    kicker: "GROWING NOTES · 成长手记",
    title: "一场没有打卡的周末，反而被孩子记住了。",
    deck: "我们清空了行程表，只留下三件小事。孩子第一次主动讲起了“今天最开心的时候”。",
    body: `
      <p>那个周六，我们本来要去两个展览、一家新开的亲子餐厅，再顺路拍一组照片。出门前，孩子坐在地上系鞋带，系了三遍都没有成功。我下意识地伸手想帮忙，他忽然说：“你每次都很快，我就来不及了。”</p>
      <p>我们最后没有出门。我在地图软件里把三个目的地一个个删掉，屏幕变得很干净。孩子问：“那今天做什么？”我说：“你想做什么就做什么，我陪你。”</p>
      <h3>第一件事：一起把早餐吃完</h3>
      <p>他负责煎蛋，我负责在旁边忍住不提醒。蛋边有一些焦，形状也不是圆的。他把它端上桌时特别骄傲，说这是“有太阳味道的蛋”。那顿饭吃了很久，没有人看手机。</p>
      <h3>第二件事：去楼下的公园找风</h3>
      <p>没有任务卡，也没有自然课。我们在长椅上坐了一会儿。风把树叶吹得沙沙响，他问我树叶会不会也听得见风。我不知道答案，就说“也许吧”。于是他闭上眼睛，很认真地听了五分钟。</p>
      <h3>第三件事：把今天画下来</h3>
      <p>晚上，他画了一个歪歪扭扭的煎蛋、一把长椅和两个牵着手的小人。我问他今天最开心的是什么时候。他说：“你等我系鞋带的时候。”</p>
      <p>我没有把这句话立刻记录下来，怕自己又急着把它变成某种育儿心得。只是在那时突然明白，孩子记住的常常不是我们安排了什么，而是我们有没有真的在场。</p>
    `,
    sign: "写于一个没有出门的星期六。"
  },
  choice: {
    kicker: "GROWING NOTES · 沟通方法",
    title: "孩子说“随便”时，我们可以怎么问？",
    deck: "“随便”有时不是没有想法，而是担心自己的选择会让别人失望。",
    body: `
      <p>“晚饭想吃什么？”<br>“随便。”<br>“周末想去哪里？”<br>“都可以。”</p>
      <p>这类简短的回答很容易让大人失去耐心。我们常以为孩子是不配合，但“随便”背后往往藏着几种可能：不知道选项是什么、懒得组织语言、怕选错，或者只是想把决定交还给大人。</p>
      <h3>先把无限选项缩成两个</h3>
      <p>把“你想吃什么”换成“今天吃面，还是吃饭？”把“你想去哪儿”换成“去有滑梯的公园，还是去看鱼？”有限的选择会让孩子更容易进入决定的过程。</p>
      <h3>允许他说“我来想想”</h3>
      <p>有时孩子需要一点缓冲。可以约定一个信号，比如把手放在下巴上说“我在想”。大人看到这个动作，就等十秒，不追加问题。这个小约定能减少很多催促。</p>
      <h3>也允许答案里没有我们</h3>
      <p>如果孩子说“我想自己去房间待一会儿”，那也是一个真实的选择。我们不必把每一次拒绝都理解为疏远。尊重边界，本身就是亲近的一部分。</p>
    `,
    sign: "选择权，是孩子练习做自己的第一块小肌肉。"
  },
  emotion: {
    kicker: "GROWING NOTES · 情绪陪伴",
    title: "不急着纠正，先接住那点难过。",
    deck: "当眼泪先于道理到达，最有用的一句话也许只是：“我知道你很难过。”",
    body: `
      <p>积木塔倒了。孩子大哭。我们很容易脱口而出：“没关系，再搭一次就好了。”这句话没有恶意，但在那一刻，它可能像在告诉孩子：这件让你难过的事，不值得难过。</p>
      <h3>先把事情放一放</h3>
      <p>蹲下来，和他保持在差不多的高度。不急着分析原因，也不急着讲解决办法。可以说：“积木倒了，你一定很失望。”被准确地说出来，情绪往往就有了出口。</p>
      <h3>允许情绪有身体的形状</h3>
      <p>有的孩子需要抱一抱，有的孩子需要捶枕头，有的只想安静坐一会儿。我们可以在旁边说：“我在这里，你准备好了再叫我。”陪伴不是要求立刻平静，而是让他知道，情绪不会把我们吓跑。</p>
      <h3>等情绪过去，再一起想办法</h3>
      <p>等哭声慢下来，再问：“你想重新搭一次，还是先把积木收起来？”没有哪一种选择更勇敢。重要的是，孩子会慢慢明白：难过会来，也会走，而我在这个过程中被好好接住。</p>
    `,
    sign: "接住情绪，不等于同意所有行为。"
  }
};

const quizQuestions = [
  {
    question: "今天，什么时候最想开始打卡？",
    options: [
      { value: "slow", icon: "☁", title: "睡醒以后", hint: "安静一点，慢慢写下今天" },
      { value: "full", icon: "☀", title: "晚饭以后", hint: "一家人都在，正好一起说" },
      { value: "flow", icon: "↝", title: "想起来就写", hint: "不用准备，发生时就记录" }
    ]
  },
  {
    question: "哪一类打卡最容易吸引你？",
    options: [
      { value: "admire", icon: "♡", title: "写一句佩服", hint: "认真看见彼此做得好的地方" },
      { value: "unexpected", icon: "✦", title: "记一个意想不到", hint: "留下计划之外发生的小事" },
      { value: "perspective", icon: "◎", title: "换个位置看看", hint: "从不同视角理解同一个瞬间" }
    ]
  },
  {
    question: "打卡以后，你最想留下什么？",
    options: [
      { value: "space", icon: "○", title: "一句真心话", hint: "让今天被好好说出来" },
      { value: "create", icon: "◇", title: "一张小卡", hint: "把平凡的瞬间做成记录" },
      { value: "fresh", icon: "↗", title: "一个新发现", hint: "重新认识孩子，也认识自己" }
    ]
  }
];

const state = {
  category: "全部",
  search: "",
  audience: "全部",
  showAll: false
};

const quizState = {
  step: 0,
  answers: [],
  recommendationId: null
};

let favorites = loadJSON("banya-favorites", []);
if (!Array.isArray(favorites)) favorites = [];
favorites = favorites.filter((id) => activities.some((activity) => activity.id === id));

let completedSparks = loadJSON("banya-completed-sparks", []);
if (!Array.isArray(completedSparks)) completedSparks = [];

let sparkIndex = getDayOfYear() % sparkPrompts.length;
let toastTimer;
let modalTransitionTimer;
let drawerTransitionTimer;
let lastFocus = null;
let drawerLastFocus = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const activityGrid = $("#activityGrid");
const emptyState = $("#emptyState");
const resultsSummary = $("#resultsSummary");
const showAllButton = $("#showAllActivities");
const favoritesCount = $("#favoritesCount");
const favoritesDrawer = $("#favoritesDrawer");
const favoritesBackdrop = $("#favoritesBackdrop");
const favoritesList = $("#favoritesList");
const drawerEmpty = $("#drawerEmpty");
const modal = $("#modal");
const modalContent = $("#modalContent");
const modalBackdrop = $("#modalBackdrop");
const toast = $("#toast");
const toastText = $("#toastText");

init();

function init() {
  bindNavigation();
  bindActivities();
  bindFavorites();
  bindModal();
  bindSpark();
  bindJournal();
  bindNewsletter();
  bindQuiz();
  bindUtility();
  setupReveal();
  setupActiveNavigation();
  renderActivities();
  renderFavorites();
  renderSpark();
  handleStoredAnnouncement();
}

function bindNavigation() {
  const header = $("#siteHeader");
  const menuToggle = $("#menuToggle");
  const mainNav = $("#mainNav");

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "打开导航菜单" : "关闭导航菜单");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  $$(".nav-link", mainNav).forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "打开导航菜单");
      mainNav.classList.remove("is-open");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      mainNav.classList.contains("is-open") &&
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "打开导航菜单");
      mainNav.classList.remove("is-open");
    }
  });
}

function bindActivities() {
  $("#planner").addEventListener("submit", (event) => {
    event.preventDefault();
    state.search = $("#quickSearch").value.trim();
    state.category = $("#quickType").value;
    state.audience = $("#quickAudience").value;
    state.showAll = true;
    $$(".filter-chip").forEach((chip) => {
      const active = chip.dataset.category === state.category;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    renderActivities();

    const section = $("#discover");
    const headerOffset = 84;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  });

  $$(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.category = chip.dataset.category;
      state.showAll = false;
      $("#quickType").value = state.category;
      $$(".filter-chip").forEach((item) => {
        const active = item === chip;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderActivities();
    });
  });

  showAllButton.addEventListener("click", () => {
    state.showAll = !state.showAll;
    renderActivities();
  });

  $("#resetFilters").addEventListener("click", () => {
    state.category = "全部";
    state.search = "";
    state.audience = "全部";
    state.showAll = true;
    $("#quickSearch").value = "";
    $("#quickType").value = "全部";
    $("#quickAudience").value = "全部";
    $$(".filter-chip").forEach((chip) => {
      const active = chip.dataset.category === "全部";
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    renderActivities();
  });

  activityGrid.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest("[data-favorite]");
    if (favoriteButton) {
      toggleFavorite(favoriteButton.dataset.favorite);
      return;
    }

    const openButton = event.target.closest("[data-open-activity]");
    if (openButton) openActivity(openButton.dataset.openActivity);
  });
}

function renderActivities() {
  const filtered = getFilteredActivities();
  const visible = state.showAll ? filtered : filtered.slice(0, 3);

  activityGrid.innerHTML = visible.map(activityCardTemplate).join("");
  emptyState.hidden = filtered.length > 0;
  activityGrid.hidden = filtered.length === 0;

  const audienceText = state.audience === "全部" ? "" : `${state.audience} · `;
  if (filtered.length === 0) {
    resultsSummary.textContent = "没有找到匹配的打卡";
  } else if (state.category !== "全部") {
    resultsSummary.textContent = `${audienceText}${state.category} · ${filtered.length} 个打卡`;
  } else if (state.search) {
    resultsSummary.textContent = `${audienceText}“${state.search}” · ${filtered.length} 个结果`;
  } else {
    resultsSummary.textContent = `${audienceText}${filtered.length} 个打卡`;
  }

  const canExpand = filtered.length > 3;
  showAllButton.hidden = !canExpand;
  showAllButton.setAttribute("aria-expanded", String(state.showAll));
  $("span", showAllButton).textContent = state.showAll ? "收起打卡" : "查看全部";
  updateFavoriteButtons();
}

function getFilteredActivities() {
  const query = state.search.toLowerCase();

  return activities.filter((activity) => {
    const matchesCategory = state.category === "全部" || activity.category === state.category;
    const matchesAudience = state.audience === "全部" || activity.audience === state.audience;
    const haystack = [
      activity.title,
      activity.category,
      activity.audience,
      activity.description,
      activity.intro
    ].join(" ").toLowerCase();
    const matchesSearch = !query || haystack.includes(query);

    return matchesCategory && matchesAudience && matchesSearch;
  });
}

function activityCardTemplate(activity) {
  const isFavorite = favorites.includes(activity.id);
  return `
    <article class="activity-card">
      <div class="card-media">
        <img src="${escapeHTML(activity.image)}" alt="${escapeHTML(activity.alt)}" loading="lazy" width="1100" height="800">
        <span class="card-type">${escapeHTML(activity.category)}</span>
        <button class="favorite-button" type="button" data-favorite="${escapeHTML(activity.id)}" aria-label="收藏${escapeHTML(activity.title)}" aria-pressed="${isFavorite}">
          <svg class="icon"><use href="#icon-heart"></use></svg>
        </button>
        <span class="card-date">
          <svg class="icon"><use href="#icon-calendar"></use></svg>
          线上 · ${escapeHTML(activity.schedule)}
        </span>
      </div>
      <div class="card-body">
        <div class="card-meta-row">
          <span><svg class="icon"><use href="#icon-sparkle"></use></svg>约 ${escapeHTML(activity.duration)}</span>
          <span>${escapeHTML(activity.audience)}</span>
        </div>
        <h3><button type="button" data-open-activity="${escapeHTML(activity.id)}">${escapeHTML(activity.title)}</button></h3>
        <p class="card-description">${escapeHTML(activity.description)}</p>
        <div class="card-footer">
          <span class="card-price">${escapeHTML(activity.price)}<small>${escapeHTML(activity.priceUnit)}</small></span>
          <button class="card-arrow" type="button" data-open-activity="${escapeHTML(activity.id)}" aria-label="查看${escapeHTML(activity.title)}详情">
            <svg class="icon"><use href="#icon-arrow"></use></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function bindFavorites() {
  $("#favoritesTrigger").addEventListener("click", openDrawer);
  $("#closeFavorites").addEventListener("click", closeDrawer);
  favoritesBackdrop.addEventListener("click", closeDrawer);
  $("#drawerBrowse").addEventListener("click", () => closeDrawer(true, true));

  favoritesList.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-drawer-open]");
    if (openButton) {
      closeDrawer(false);
      window.setTimeout(() => openActivity(openButton.dataset.drawerOpen), 80);
      return;
    }

    const removeButton = event.target.closest("[data-drawer-remove]");
    if (removeButton) toggleFavorite(removeButton.dataset.drawerRemove);
  });
}

function toggleFavorite(id, options = {}) {
  const activity = activities.find((item) => item.id === id);
  if (!activity) return;

  const wasFavorite = favorites.includes(id);
  favorites = wasFavorite ? favorites.filter((item) => item !== id) : [...favorites, id];
  saveJSON("banya-favorites", favorites);
  updateFavoriteButtons();
  renderFavorites();

  if (!options.silent) {
    showToast(wasFavorite ? "已从打卡清单中移除" : `已把「${activity.title}」放进打卡清单`);
  }
}

function updateFavoriteButtons() {
  favoritesCount.textContent = String(favorites.length);
  $$("[data-favorite]").forEach((button) => {
    const isFavorite = favorites.includes(button.dataset.favorite);
    button.setAttribute("aria-pressed", String(isFavorite));
    const activity = activities.find((item) => item.id === button.dataset.favorite);
    button.setAttribute("aria-label", `${isFavorite ? "取消收藏" : "收藏"}${activity ? activity.title : "活动"}`);
  });
  $$("[data-detail-save]").forEach((button) => {
    const isFavorite = favorites.includes(button.dataset.detailSave);
    button.setAttribute("aria-pressed", String(isFavorite));
    button.innerHTML = `
      <svg class="icon"><use href="#icon-heart"></use></svg>
      ${isFavorite ? "已在清单中" : "收藏"}
    `;
  });
}

function renderFavorites() {
  const savedActivities = favorites
    .map((id) => activities.find((activity) => activity.id === id))
    .filter(Boolean);

  favoritesList.innerHTML = savedActivities.map((activity) => `
    <article class="favorite-mini">
      <img src="${escapeHTML(activity.image)}" alt="" loading="lazy">
      <div>
        <h3>${escapeHTML(activity.title)}</h3>
        <p>线上 · ${escapeHTML(activity.duration)} · ${escapeHTML(activity.audience)}</p>
      </div>
      <div class="favorite-mini-actions">
        <button class="mini-open" type="button" data-drawer-open="${escapeHTML(activity.id)}" aria-label="查看${escapeHTML(activity.title)}">
          <svg class="icon"><use href="#icon-arrow"></use></svg>
        </button>
        <button class="mini-remove" type="button" data-drawer-remove="${escapeHTML(activity.id)}" aria-label="移除${escapeHTML(activity.title)}">
          <svg class="icon"><use href="#icon-close"></use></svg>
        </button>
      </div>
    </article>
  `).join("");

  drawerEmpty.hidden = savedActivities.length > 0;
  favoritesList.hidden = savedActivities.length === 0;
  favoritesCount.textContent = String(savedActivities.length);
}

function openDrawer() {
  drawerLastFocus = document.activeElement;
  window.clearTimeout(drawerTransitionTimer);
  favoritesDrawer.hidden = false;
  favoritesBackdrop.hidden = false;
  favoritesDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  requestAnimationFrame(() => {
    favoritesDrawer.classList.add("is-open");
    favoritesBackdrop.classList.add("is-visible");
  });
  window.setTimeout(() => $("#closeFavorites").focus(), 100);
}

function closeDrawer(returnFocus = true, scrollToActivities = false) {
  favoritesDrawer.classList.remove("is-open");
  favoritesBackdrop.classList.remove("is-visible");
  favoritesDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");

  drawerTransitionTimer = window.setTimeout(() => {
    favoritesDrawer.hidden = true;
    favoritesBackdrop.hidden = true;
  }, 300);

  if (returnFocus && drawerLastFocus) drawerLastFocus.focus();
  if (scrollToActivities) {
    window.setTimeout(() => {
      $("#discover").scrollIntoView({ behavior: "smooth" });
    }, 120);
  }
}

function bindModal() {
  $("#modalClose").addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    const detailSave = event.target.closest("[data-detail-save]");
    if (detailSave) {
      toggleFavorite(detailSave.dataset.detailSave);
      return;
    }

    const quizOption = event.target.closest("[data-quiz-option]");
    if (quizOption) {
      answerQuiz(quizOption.dataset.quizOption);
      return;
    }

    const quizBack = event.target.closest("[data-quiz-back]");
    if (quizBack) {
      goBackQuiz();
      return;
    }

    const quizRestart = event.target.closest("[data-quiz-restart]");
    if (quizRestart) {
      startQuiz();
      return;
    }

    const quizExplore = event.target.closest("[data-quiz-explore]");
    if (quizExplore && quizState.recommendationId) {
      const id = quizState.recommendationId;
      closeModal();
      window.setTimeout(() => openActivity(id), 120);
    }
  });
}

function openActivity(id) {
  const activity = activities.find((item) => item.id === id);
  if (!activity) return;

  if (favoritesDrawer.classList.contains("is-open")) closeDrawer(false);

  const isFavorite = favorites.includes(activity.id);
  modalContent.innerHTML = `
    <article class="activity-detail">
      <div class="detail-media">
        <img src="${escapeHTML(activity.image)}" alt="${escapeHTML(activity.alt)}" width="1100" height="900">
        <div class="detail-media-note">
          <strong>${escapeHTML(activity.note)}</strong>
          ${escapeHTML(activity.schedule)} · ${escapeHTML(activity.duration)}
        </div>
      </div>
      <div class="detail-info">
        <div class="detail-tags">
          <span class="detail-tag">${escapeHTML(activity.category)}</span>
          <span class="detail-tag">${escapeHTML(activity.audience)}</span>
          <span class="detail-tag">线上打卡</span>
        </div>
        <h2 id="modalTitle">${escapeHTML(activity.title)}</h2>
        <p class="detail-intro">${escapeHTML(activity.intro)}</p>
        <div class="detail-meta-grid">
          <div class="detail-meta-item">
            <svg class="icon"><use href="#icon-calendar"></use></svg>
            <div><strong>打卡形式</strong>线上 · ${escapeHTML(activity.schedule)}</div>
          </div>
          <div class="detail-meta-item">
            <svg class="icon"><use href="#icon-clock"></use></svg>
            <div><strong>预计用时</strong>${escapeHTML(activity.duration)}</div>
          </div>
          <div class="detail-meta-item">
            <svg class="icon"><use href="#icon-pin"></use></svg>
            <div><strong>参与对象</strong>${escapeHTML(activity.audience)}</div>
          </div>
          <div class="detail-meta-item">
            <svg class="icon"><use href="#icon-sparkle"></use></svg>
            <div><strong>参与费用</strong>${escapeHTML(activity.price)} · ${escapeHTML(activity.priceUnit)}</div>
          </div>
        </div>
        <div class="detail-includes">
          <h3>打卡完成后，你会留下</h3>
          <ul>${activity.highlights.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
        </div>
        <div class="detail-actions">
          <button class="button button-primary" type="button" data-detail-save="${escapeHTML(activity.id)}" aria-pressed="${isFavorite}">
            <svg class="icon"><use href="#icon-heart"></use></svg>
            ${isFavorite ? "已在打卡清单中" : "加入打卡清单"}
          </button>
          <span class="detail-save" style="pointer-events:none; border-style:dashed;">线上打卡</span>
        </div>
      </div>
    </article>
  `;
  openModal();
}

function openArticle(key) {
  const article = articles[key];
  if (!article) return;
  modalContent.innerHTML = `
    <article class="article-modal">
      <p class="article-kicker">${escapeHTML(article.kicker)}</p>
      <h2 id="modalTitle">${escapeHTML(article.title)}</h2>
      <p class="article-deck">${escapeHTML(article.deck)}</p>
      <div class="article-body">${article.body}</div>
      <p class="article-sign">${escapeHTML(article.sign)}</p>
    </article>
  `;
  openModal();
}

function openModal() {
  lastFocus = document.activeElement;
  window.clearTimeout(modalTransitionTimer);
  modal.hidden = false;
  modalBackdrop.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.scrollTop = 0;
  requestAnimationFrame(() => {
    modal.classList.add("is-visible");
    modalBackdrop.classList.add("is-visible");
  });
  window.setTimeout(() => $("#modalClose").focus(), 80);
}

function closeModal() {
  modal.classList.remove("is-visible");
  modalBackdrop.classList.remove("is-visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  modalTransitionTimer = window.setTimeout(() => {
    modal.hidden = true;
    modalBackdrop.hidden = true;
  }, 220);

  if (lastFocus && typeof lastFocus.focus === "function") {
    window.setTimeout(() => lastFocus.focus(), 80);
  }
}

function bindQuiz() {
  $("#openQuiz").addEventListener("click", () => {
    startQuiz();
    openModal();
  });
}

function startQuiz() {
  quizState.step = 0;
  quizState.answers = [];
  quizState.recommendationId = null;
  renderQuiz();
}

function renderQuiz() {
  if (quizState.step >= quizQuestions.length) {
    renderQuizResult();
    return;
  }

  const question = quizQuestions[quizState.step];
  modalContent.innerHTML = `
    <section class="quiz-shell">
      <div class="quiz-header">
        <p class="eyebrow">CHECK-IN PERSONALITY <span></span> 3 个小问题</p>
        <h2 id="modalTitle">你们的打卡，是什么颜色？</h2>
        <p>没有标准答案，按你们最自然的状态选就好。</p>
        <div class="quiz-progress" aria-label="答题进度">
          ${quizQuestions.map((_, index) => `<span class="${index <= quizState.step ? "is-done" : ""}"></span>`).join("")}
        </div>
      </div>
      <h3 class="quiz-question">${quizState.step + 1}. ${escapeHTML(question.question)}</h3>
      <div class="quiz-options">
        ${question.options.map((option) => `
          <button class="quiz-option" type="button" data-quiz-option="${escapeHTML(option.value)}">
            <span class="quiz-option-icon">${escapeHTML(option.icon)}</span>
            <strong>${escapeHTML(option.title)}</strong>
            <small>${escapeHTML(option.hint)}</small>
          </button>
        `).join("")}
      </div>
      ${quizState.step > 0 ? `<button class="quiz-back" type="button" data-quiz-back>← 返回上一题</button>` : ""}
    </section>
  `;
}

function answerQuiz(value) {
  quizState.answers[quizState.step] = value;
  quizState.step += 1;
  renderQuiz();
}

function goBackQuiz() {
  if (quizState.step === 0) return;
  quizState.step -= 1;
  quizState.answers = quizState.answers.slice(0, quizState.step);
  renderQuiz();
}

function renderQuizResult() {
  const preference = quizState.answers[1] || "admire";
  const rhythm = quizState.answers[0] || "flow";
  const profiles = {
    admire: {
      name: rhythm === "slow" ? "温柔看见家" : "具体表达派",
      description: "你们擅长把爱说成具体的细节。比起一句笼统的“很好”，一句“我佩服你刚才那样做”更容易被记住。",
      activityId: "admire-today",
      stamp: "佩"
    },
    unexpected: {
      name: rhythm === "full" ? "日常发现家" : "意外收藏派",
      description: "你们愿意给计划外的事留位置。那些没有被安排的瞬间，往往藏着最真实的成长。",
      activityId: "unexpected-moment",
      stamp: "料"
    },
    perspective: {
      name: rhythm === "full" ? "换位观察家" : "多角度记录者",
      description: "你们愿意在判断之前多看一眼。换个位置，同一件小事就会长出完全不同的理解。",
      activityId: "unexpected-perspective",
      stamp: "看"
    }
  };
  const profile = profiles[preference] || profiles.admire;
  const recommendation = activities.find((activity) => activity.id === profile.activityId) || activities[0];
  quizState.recommendationId = recommendation.id;

  modalContent.innerHTML = `
    <section class="quiz-result">
      <div class="quiz-result-ticket">
        <span>YOUR CHECK-IN TYPE · 2026</span>
        <h2 id="modalTitle">${escapeHTML(profile.name)}</h2>
        <p>${escapeHTML(profile.description)}</p>
        <span class="quiz-result-stamp">${escapeHTML(profile.stamp)}</span>
      </div>
      <div class="quiz-result-copy">
        <p class="eyebrow">为你推荐 <span></span></p>
        <h3>今天，<br>从这张打卡开始。</h3>
        <div class="quiz-recommendation">
          <img src="${escapeHTML(recommendation.image)}" alt="" loading="lazy">
          <div>
            <small>${escapeHTML(recommendation.category)} · ${escapeHTML(recommendation.audience)}</small>
            <strong>${escapeHTML(recommendation.title)}</strong>
          </div>
        </div>
        <div class="quiz-result-actions">
          <button class="button button-primary" type="button" data-quiz-explore>看看这张打卡 <svg class="icon"><use href="#icon-arrow"></use></svg></button>
          <button class="button button-outline" type="button" data-quiz-restart>再测一次</button>
        </div>
      </div>
    </section>
  `;
}

function bindSpark() {
  $("#shuffleSpark").addEventListener("click", () => {
    let nextIndex = sparkIndex;
    while (nextIndex === sparkIndex && sparkPrompts.length > 1) {
      nextIndex = Math.floor(Math.random() * sparkPrompts.length);
    }
    sparkIndex = nextIndex;
    renderSpark();
  });

  $("#completeSpark").addEventListener("click", () => {
    const key = getDateKey();
    if (completedSparks.includes(key)) {
      showToast("今天的陪伴瞬间已经收藏过了");
      return;
    }
    completedSparks.push(key);
    saveJSON("banya-completed-sparks", completedSparks);
    renderSpark();
    showToast("今天的陪伴瞬间已收藏");
  });
}

function renderSpark() {
  const prompt = sparkPrompts[sparkIndex];
  const paddedIndex = String(sparkIndex + 1).padStart(2, "0");
  $("#sparkPromptIndex").textContent = `灵感 ${paddedIndex} / ${String(sparkPrompts.length).padStart(2, "0")}`;
  $("#sparkPromptText").textContent = prompt.text;
  $("#sparkPromptTag").textContent = prompt.tag;
  $(".spark-card-front strong").textContent = prompt.text;
  $(".spark-card-front strong").style.whiteSpace = "normal";

  const completedToday = completedSparks.includes(getDateKey());
  const completeButton = $("#completeSpark");
  completeButton.innerHTML = `
    <svg class="icon"><use href="#icon-check"></use></svg>
    ${completedToday ? "今天已收藏" : "今天做到了"}
  `;
  completeButton.disabled = completedToday;
  completeButton.style.opacity = completedToday ? "0.65" : "";
  completeButton.style.cursor = completedToday ? "default" : "";
  $("#sparkProgress").textContent = completedToday
    ? `今天已留下一个陪伴瞬间 · 累计 ${completedSparks.length} 个`
    : "从今天开始，收藏一个陪伴瞬间";
}

function bindJournal() {
  $$("[data-article]").forEach((button) => {
    button.addEventListener("click", () => openArticle(button.dataset.article));
  });

  $("#downloadPlan").addEventListener("click", () => {
    const content = [
      "母子365佩服 · 本周打卡卡",
      "========================",
      "",
      "这周，我想完成：",
      "□ 一次佩服打卡：________________________",
      "□ 一次意想不到打卡：____________________",
      "",
      "今天想认真佩服的人：",
      "______________________________________",
      "",
      "本周留给自己的时间：",
      "______ 月 ______ 日  ______:______",
      "",
      "今天想对孩子说：",
      "______________________________________",
      "",
      "今天想对自己说：",
      "______________________________________",
      "",
      "不用每天完美，只要认真看见一次。",
      "— 母子365佩服"
    ].join("\r\n");

    const blob = new Blob(["\ufeff", content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "母子365佩服-本周打卡卡.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("本周打卡卡已下载");
  });
}

function bindNewsletter() {
  const form = $("#newsletterForm");
  const email = $("#newsletterEmail");
  const success = $("#newsletterSuccess");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!email.validity.valid) {
      email.setAttribute("aria-invalid", "true");
      email.focus();
      showToast("请输入有效的邮箱地址");
      return;
    }

    email.removeAttribute("aria-invalid");
    success.hidden = false;
    form.reset();
    showToast("订阅成功，周五来信见");
  });

  email.addEventListener("input", () => email.removeAttribute("aria-invalid"));
}

function bindUtility() {
  const announcement = $("#announcement");
  $("#announcementClose").addEventListener("click", () => {
    announcement.hidden = true;
    try {
      sessionStorage.setItem("banya-announcement-closed", "true");
    } catch (error) {
      // The close action still works when storage is unavailable.
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!modal.hidden) closeModal();
      else if (favoritesDrawer.classList.contains("is-open")) closeDrawer();
    }

    if (event.key === "Tab" && !modal.hidden) trapFocus(modal, event);
    if (event.key === "Tab" && favoritesDrawer.classList.contains("is-open")) trapFocus(favoritesDrawer, event);
  });
}

function handleStoredAnnouncement() {
  try {
    if (sessionStorage.getItem("banya-announcement-closed") === "true") {
      $("#announcement").hidden = true;
    }
  } catch (error) {
    // No action needed when session storage is unavailable.
  }
}

function setupReveal() {
  const revealItems = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  revealItems.forEach((item) => observer.observe(item));
}

function setupActiveNavigation() {
  if (!("IntersectionObserver" in window)) return;
  const sections = ["home", "discover", "compass", "journal"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = $$(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { threshold: [0.15, 0.35, 0.55], rootMargin: "-20% 0px -55% 0px" });

  sections.forEach((section) => observer.observe(section));
}

function trapFocus(container, event) {
  const focusable = $$(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    container
  ).filter((element) => !element.hidden && element.offsetParent !== null);

  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toastText.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

function getDateKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Interactions remain usable when storage is unavailable.
  }
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
