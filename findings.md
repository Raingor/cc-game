# 调研发现

## love-project 项目分析

### 项目结构
- [`index.html`](file:///Users/raingor_ye/wwwroot/CC/love-project/index.html) — 哆啦A梦主题纪念时间轴
- [`css/style.css`](file:///Users/raingor_ye/wwwroot/CC/love-project/css/style.css) — 完善的 CSS 变量体系 (哆啦蓝 `#06B6D4`、红 `#E53935`)
- [`js/main.js`](file:///Users/raingor_ye/wwwroot/CC/love-project/js/main.js) — 52 条时间轴条目，丰富的故事文本
- [`images/`](file:///Users/raingor_ye/wwwroot/CC/love-project/images) — 大量情侣照片 (webp/jpg)

### 故事时间线摘要
- **3月24日** — 相遇
- **3月28日** — 第一次见面、夜聊、宵夜
- **4月4日** — 顺德寻味
- **4月11日** — ❤️ 表白 (special)
- **4月18日** — 花卉世界、哆啦A梦时光街
- **4月25日** — 摩天轮、第一次合照
- **4月26日** — 接下班、糖水
- **5月2-3日** — 江门、暴雨1.5km、见家长
- **5月20日** — 520 惊喜时间轴
- **5月30-31日** — 小酒馆、送见面礼

### 关键设计元素
- 字体: ZCOOL KuaiLe (标题) + Noto Sans SC (正文)
- 阴影体系: `--shadow-xs` ~ `--shadow-xl`
- 圆角体系: `--radius-sm` ~ `--radius-xl`
- 动画: `cubic-bezier(0.22, 1, 0.36, 1)` 缓出曲线
- 弹簧动画: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- 噪声纹理: SVG 噪声覆盖层

### 特别纪念日 (special: true)
- id 9: 表白 (4月11日)
- id 20b: 四月总结
- id 37: 520 / 五月总结 (5月20日)
- id 52: 五月总结

## GitHub Pages 注意事项
- 项目在 root 或 docs/ 目录
- 需要 `index.html` 作为入口
- 纯静态，无服务端依赖
- 图片路径需正确，大小写敏感
