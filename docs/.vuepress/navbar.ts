import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  {
    text: "PH Daily",
    icon: "simple-icons:producthunt",
    link: "/blog",
  },
  {
    text: "最新榜单",
    icon: "fa6-solid:bolt",
    link: "/_posts/PH-daily-2026-06-03"
  },
  {
    text: "月份归档",
    icon: "fa6-solid:calendar-days",
    link: "/ph-archive",
  },
  {
    text: "Github Daily",
    icon: "fa6-brands:github",
    link: "/github",
  },
]);
