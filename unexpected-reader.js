const PAGE_BASE = "https://guiyi-jiayou.github.io/muzi-365-assets/readers/unexpected/page-";
const PAGE_EXTENSION = ".jpg";
const TOTAL_PAGES = 370;

const pageImage = document.querySelector("#pageImage");
const loading = document.querySelector("#readerLoading");
const pageInput = document.querySelector("#pageNumber");
const pageCount = document.querySelector("#pageCount");
const previousButton = document.querySelector("#prevPage");
const nextButton = document.querySelector("#nextPage");

let currentPage = 1;
let loadSequence = 0;

pageCount.textContent = TOTAL_PAGES;
pageInput.max = TOTAL_PAGES;

function pageUrl(pageNumber) {
  return `${PAGE_BASE}${String(pageNumber).padStart(3, "0")}${PAGE_EXTENSION}`;
}

function preload(pageNumber) {
  if (pageNumber < 1 || pageNumber > TOTAL_PAGES) return;
  const image = new Image();
  image.src = pageUrl(pageNumber);
}

function showPage(pageNumber) {
  const safePage = Math.min(TOTAL_PAGES, Math.max(1, pageNumber));
  currentPage = safePage;
  pageInput.value = String(safePage);
  previousButton.disabled = safePage === 1;
  nextButton.disabled = safePage === TOTAL_PAGES;
  loading.hidden = false;
  loading.querySelector("p").textContent = `正在打开第 ${safePage} 页…`;
  pageImage.classList.add("is-loading");
  const sequence = ++loadSequence;
  const nextSource = pageUrl(safePage);

  const loader = new Image();
  loader.onload = () => {
    if (sequence !== loadSequence) return;
    pageImage.src = nextSource;
    pageImage.alt = `365天 珈由的意想不到，第${safePage}页`;
    pageImage.onload = () => {
      pageImage.classList.remove("is-loading");
      loading.hidden = true;
      preload(safePage + 1);
      preload(safePage + 2);
      if (safePage > 1) preload(safePage - 1);
    };
  };
  loader.onerror = () => {
    if (sequence !== loadSequence) return;
    loading.innerHTML = `
      <p>这一页暂时无法载入，请刷新页面或下载 PDF。</p>
      <a class="button button-outline" href="https://guiyi-jiayou.github.io/muzi-365-assets/books/book-unexpected-web.pdf" target="_blank" rel="noopener">打开 PDF</a>
    `;
  };
  loader.src = nextSource;
}

previousButton.addEventListener("click", () => showPage(currentPage - 1));
nextButton.addEventListener("click", () => showPage(currentPage + 1));
pageInput.addEventListener("change", () => showPage(Number(pageInput.value)));
pageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") showPage(Number(pageInput.value));
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, textarea")) return;
  if (event.key === "ArrowLeft" && currentPage > 1) showPage(currentPage - 1);
  if (event.key === "ArrowRight" && currentPage < TOTAL_PAGES) showPage(currentPage + 1);
});

showPage(1);
