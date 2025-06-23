import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r

export default sidebar({
 
  "": [
    {
      text: "PH每日热榜",
      icon: "fa6-solid:feather-pointed",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Github每日热榜",
      icon: "fa6-solid:feather-pointed",
      prefix: "/github/",
      link: "/github",
      collapsible: true,
      children: "structure",
    }
  ]
});
