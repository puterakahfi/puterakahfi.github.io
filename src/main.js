import BootstrapVue from "bootstrap-vue";
import Buefy from "buefy";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Import stisla css
// Import main css
import "buefy/dist/buefy.css";
import "bulma-helpers/css/bulma-helpers.min.css";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "~/assets/style/index.scss";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
  })

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);

  Vue.use(BootstrapVue);

  Vue.use(Buefy, {
    defaultIconPack: "fas"
  });

  Vue.prototype.$aos = AOS;
}
