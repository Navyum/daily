import type { VNode } from "vue";
import { defineComponent, h, onMounted, ref } from "vue";

import PHDailyLanding from "./PHDailyLanding.js";

const isDailyEntryPath = (pathname: string): boolean => {
  const normalized = pathname.replace(/^\/daily/, "") || "/";

  return ["/", "/blog", "/blog.html"].includes(normalized);
};

export default defineComponent({
  name: "PHDailyRoot",

  setup() {
    const shouldRender = ref(false);

    onMounted(() => {
      shouldRender.value =
        isDailyEntryPath(window.location.pathname) &&
        !document.querySelector(".ph-daily-panel");
    });

    return (): VNode | null =>
      shouldRender.value
        ? h("div", { class: "ph-daily-root" }, h(PHDailyLanding))
        : null;
  },
});
