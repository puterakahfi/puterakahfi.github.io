<template>
  <div id="app">
    <main class="main">
      <div class="columns has-margin-top-100">
        <div class="column is-5 has-margin-top-100">
          <h1 class="title is-1">Coming Soon</h1>
          <p class="subtitle is-4 has-text-grey">This website is under heavy development</p>
          <div class="buttons are-small">
            <a
              target="_blank"
              class="button is-medium is-white"
              href="https://github.com/puterakahfi"
            >
              <font-awesome :icon="github" class="has-margin-right-5"/>Github
            </a>

            <a
              target="_blank"
              class="button is-medium is-white"
              href="https://facebook.com/puterakahfi"
            >
              <font-awesome :icon="facebook" class="has-margin-right-5"/>Facebook
            </a>

            <g-link class="button is-medium is-white" to="/sneakpeek">Sneak peek</g-link>
          </div>
        </div>
        <div class="column is-7">
          <g-image
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

export default {
  metaInfo: {
    title: "Coming Soon"
  },
  data() {
    return {
      facebook: faFacebook,
      github: faGithub
    };
  },
  props: {
    showLogo: { default: true },
    showHeader: { default: true }
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
