<template>
  <nav class="flex items-center justify-between flex-wrap border-b-2 border-gray-600">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <g-link to="/">
        <span class="font-semibold text-xl tracking-tight text-gray-800"
          >Putera Kahfi</span
        >
      </g-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="https://puterakahfi.github.io/learning-source/"
          target="_blank"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >Learning Resource</a
        >
        <a
          href="https://puterakahfi.github.io/jsid/"
          target="_blank"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >JSID Developers</a
        >
        <a
          href="https://codeigniter-id.github.io/"
          target="_blank"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >Codeigniter Indonesia</a
        >

        <g-link to="/training" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"> Training Schedule</g-link>
      </div>
      <div>
        <a
          href="https://www.facebook.com/codejunior"
          class="w-5inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          <i class="fab fa-facebook fa-2x fill-current  "></i
        ></a>
        <a
          href="https://github.com/puterakahfi"
          class="inline-block text-sm leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          <i class="fab fa-github fa-2x fill-current  "></i
        ></a>
      </div>
    </div>
  </nav>
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
