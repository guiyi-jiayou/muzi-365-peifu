# 母子365佩服

一个无需构建工具即可运行的亲子生活方式网站。页面以《母子365佩服》一书为标题与品牌参照，包含“佩服打卡”与“意想不到打卡”筛选、打卡清单、亲子灵感盲盒、打卡风格测试、成长手记弹窗和可下载的打卡卡。

## 线上部署

- GitHub Pages：https://guiyi-jiayou.github.io/muzi-365-peifu/
- 用于代码部署的独立构建目录：`F:\codex\muzi-365-peifu-deploy`
- 外置图片、PDF 与 Word 资源：https://guiyi-jiayou.github.io/muzi-365-assets/

上线版本只将网页代码部署到 `muzi-365-peifu`，图片与书稿位于独立的 `muzi-365-assets` 资源站点。

书页入口：

- `book.html`：《母子365佩服》95 页完整 PDF 在线阅读与下载
- `book-12.html`：《珈由12岁成长密码》170 页 PDF 在线阅读，同时提供 PDF 和 Word 原稿下载
- `book-unexpected.html`：《365天 珈由的意想不到》370 页网页阅读版
- `shop.html`：《母子365佩服》纸书预订页，A5、115页、¥39.9、首批100本、全国包邮、微信确认付款，客服微信号 `guiyi881841`

## 本地打开

直接双击 `index.html` 即可浏览。也可以在当前目录启动一个本地静态服务器：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 文件结构

- `index.html`：页面结构与主要内容
- `styles.css`：视觉样式、响应式布局与动效
- `script.js`：活动数据与全部前端交互
- `assets/images/`：本地图片资源
- `https://guiyi-jiayou.github.io/muzi-365-assets/images/book-cover.png`：《母子365佩服》一周年纪念封面
- `https://guiyi-jiayou.github.io/muzi-365-assets/books/book-mother-son-365.pdf`：《母子365佩服》完整电子书
- `https://guiyi-jiayou.github.io/muzi-365-assets/books/book-growth-code-12.pdf`：《珈由12岁成长密码》PDF 阅读版
- `https://guiyi-jiayou.github.io/muzi-365-assets/books/book-growth-code-12.docx`：《珈由12岁成长密码》Word 原稿
- `favicon.svg`：站点图标

## 说明

- 活动、价格、地点和订阅流程均为演示内容，不连接真实预约、支付或邮件服务。
- 收藏与灵感完成记录保存在浏览器 `localStorage` 中。
- 页面使用本地图片和系统字体，不依赖在线字体服务。
- 首页主视觉与内容图片选自《珈由12岁成长密码》原稿，书籍封面来自《母子365佩服》一周年纪念版。
