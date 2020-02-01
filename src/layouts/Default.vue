<template>
  <div id="app" class=" w-full max-w-screen-lg relative mx-auto px-6">
    <div class="header-bar"></div>

    <Navbar class="bg-transparent m-3  mx-auto  " />

    <main class="mt-8">
      <slot />
    </main>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Navbar from "~/components/organisms/Navbar.vue";

import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
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

<style lang="scss">
.header-bar {
  background: linear-gradient(
    90deg,
    var(--primary-color),
    #8ed6fb 50%,
    #d32e9d
  );
  padding: 5px;
  text-align: center;
  color: #fff;
  font-size: 1rem;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
