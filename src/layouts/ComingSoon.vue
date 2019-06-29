<template>
  <div id="app">
    <main class="main">
      <div class="columns has-margin-top-100">
        <div class="column is-5 has-margin-top-100">
          <h1 data-aos="fade-left" class="title is-1">Coming Soon</h1>
          <p
            class="subtitle is-5 has-text-grey has-margin-top-20"
            data-aos="fade-up"
          >This website is under heavy development</p>
          <div class="buttons are-small" data-aos="fade-up">
            <a target="_blank" class="button" href="https://github.com/puterakahfi">
              <font-awesome :icon="github" class="has-margin-right-5"/>Github
            </a>

            <a target="_blank" class="button" href="https://facebook.com/puterakahfi">
              <font-awesome :icon="facebook" class="has-margin-right-5"/>Facebook
            </a>

            <g-link class="button" to="/sneakpeek">
              <font-awesome :icon="eye" class="has-margin-right-5"/>Sneak peek
            </g-link>
          </div>
        </div>
        <div class="column is-7">
          <g-image
            data-aos="fade-right"
            src="https://assets-ouch.icons8.com/preview/798/412038d2-0afb-4d0e-9453-f321927a0537.png"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Navbar from "~/components/Navbar.vue";

import ToggleTheme from "~/components/ToggleTheme.vue";
import {
  faGithub,
  faFacebook,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";

import { fas } from "@fortawesome/free-solid-svg-icons";

export default {
  metaInfo: {
    title: "Coming Soon"
  },
  data() {
    return {
      facebook: faFacebook,
      github: faGithub,
      eye: fas.faEye
    };
  },
  props: {
    showLogo: { default: true },
    showHeader: { default: true }
  },
  mounted() {
    this.$aos.init();
  },
  components: {
    Logo,
    ToggleTheme,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.title.is-1 {
  font-size: 4em;
}
</style>
