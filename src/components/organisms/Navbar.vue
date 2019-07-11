<template>
  <section class>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" href="/">Puterakahfi</a>
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
          <a class="navbar-item" href="https://puterakahfi.github.io/cv" target="_blank">cv</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item"></div>
        </div>
      </div>
    </nav>
  </section>
</template>


<script>
import ToggleTheme from "~/components/ToggleTheme.vue";
import {
  faGithub,
  faFacebook,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  data() {
    return {
      github: faGithub,
      facebook: faFacebookSquare
    };
  },
  components: {
    ToggleTheme,
    FontAwesomeIcon
  }
};
</script>
