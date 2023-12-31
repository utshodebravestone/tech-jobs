import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";

import "@/assets/css/tailwind.css";

import App from "@/App.vue";

library.add([faSearch, faSquareArrowUpRight]);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
