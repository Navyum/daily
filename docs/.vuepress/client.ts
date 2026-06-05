import SocialLink from "./components/SocialLink.js";
import PHDailyLanding from "./components/PHDailyLanding.js";
import PHDailyRoot from "./components/PHDailyRoot.js";
import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("PHDailyLanding", PHDailyLanding);
    app.component("SocialLink", SocialLink);
  },
  rootComponents: [PHDailyRoot],
});
