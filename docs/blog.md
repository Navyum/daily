---
#博客首页设置：https://theme-hope.vuejs.press/zh/guide/blog/home.html
home: true
layout: BlogHome
icon: fa6-solid:house-crack
title: PH每日热榜
#heroImage: /logo.svg
heroText: PH每日热榜
tagline: 每日整理 Product Hunt 热门产品、趋势关键词与访问入口
bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
bgImageStyle:
  background-position: center 42%
  filter: brightness(0.72) saturate(1.05)
heroFullScreen: false
projects:
  - name: 今日产品榜
    desc: 快速浏览最新 Product Hunt 热门产品与票数
    link: /blog.html
    icon: article
  - name: GitHub 榜单
    desc: 查看每日值得关注的开源项目
    link: /github
    icon: project
---

<PHDailyLanding />
