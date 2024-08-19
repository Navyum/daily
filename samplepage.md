---
# 文章标题
title: 页面配置样例
# 页面图标，默认为 [Fontawesome 图标](https://fontawesome.com/search?m=free&o=r)
# 假设希望设定图标为 <i class="fa-solid fa-hashtag"></i>，则是 icon: fa-solid fa-hashtag
icon: fa-solid fa-hashtag
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
# 是否为长文章，会被放置于博客页
article: false

# 不希望页面被侧边栏收录时
index: false
# 禁用指定页面的侧边栏
sidebar: false
# 右侧目录栏会自动地显示由当前页面的标题 (headers) 组成的链接，默认提取 h2 和 h3。设置成 0 将会禁用标题 (headers) 链接。
headerDepth: 2

# 设置作者
author: LearnData
# 设置写作时间
date: 2022-09-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true

# 你可以自定义页脚
footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: 无版权
---

页面内容，支持 Markdown 和 HTML 语言。
