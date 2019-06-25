<template>
  <div id="app">
    <main class="main">
      <div class="columns has-margin-top-100">
        <div class="column is-4 has-margin-top-100">
          <h1 class="title is-1">Coming Soon</h1>
          <p>This website is under heavy development</p>
          <div class="buttons are-small">
            <a
              target="_blank"
              class="button is-medium is-primary is-outlined"
              href="https://github.com/puterakahfi"
            >
              <font-awesome :icon="github" class="has-margin-right-5"/>Github
            </a>

            <a
              target="_blank"
              class="button is-medium is-info is-outlined"
              href="https://github.com/puterakahfi"
            >
              <font-awesome :icon="facebook" class="has-margin-right-5"/>Facebook
            </a>
          </div>
        </div>
        <div class="column is-8">
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

export default {
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

<style lang="scss">
</style>
