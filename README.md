# 邓洁 · 产品经理作品集

个人作品集网站，展示产品项目经历与能力。纯静态站点，无需后端、无需数据库。

🔗 **在线访问**：<https://djie168dd-cyber.github.io/portfolio/>

## 简介

3 年产品经验，覆盖 AI 系统、电商平台、智能硬件等多元业务场景，累计主导 15+ 项目全流程交付。

## 本地运行

项目自带便携版 Node.js（位于 `tools/`，已被 `.gitignore` 排除，不入库），在 Windows 下双击 `启动网站.cmd` 即可；或：

```bash
node server.js
```

然后浏览器打开 <http://localhost:8080>。

> 也可以直接双击 `index.html` 在浏览器中查看，但使用本地服务器兼容性最佳。

## 目录结构

```
.
├── index.html          # 首页
├── case-study.html     # 项目案例详情
├── styles.css          # 样式
├── script.js           # 交互（主题切换、项目详情、滚动动效等）
├── server.js           # 本地静态服务器（零依赖）
├── package.json        # 启动脚本
└── .github/workflows/  # GitHub Pages 自动部署
```

## 技术栈

- 原生 HTML / CSS / JavaScript，无任何前端框架与第三方依赖
- 已移除外部字体依赖，支持完全离线展示
- 通过 GitHub Pages + GitHub Actions 自动部署：推送 `main` 分支即自动发布
