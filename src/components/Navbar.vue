<template>
  <section class>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">PuteraKahfi</a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://puterakahfi.github.io/nuxt-cv" target="_blank">CV</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a target="_blank" class="button is-light" href="https://github.com/puterakahfi">
                <font-awesome :icon="github"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>


<script>
import ToggleTheme from "~/components/ToggleTheme.vue";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  data() {
    return {
      github: faGithub
    };
  },
  components: {
    ToggleTheme,
    FontAwesomeIcon
  }
};
</script>
