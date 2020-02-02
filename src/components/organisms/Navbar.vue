<template>
  <nav class="flex flex-row border-b-2 border-gray-600">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <g-link to="/">
        <span class="font-semibold text-xl tracking-tight text-gray-800">Putera Kahfi</span>
      </g-link>
    </div>

    <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
      <a
        class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800"
        href="http://www.italiansubs.local:8081/forum/index.php?action=admin"
      >
        <span class="firstlevel">Links</span>
      </a>
      <ul
        class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block"
      >
        <svg
          class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          />
        </svg>
        <li
          class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
        >
          <a
            class="px-2 py-1"
            href="https://puterakahfi.github.io/learning-source/"
            target="_blank"
          >
            <span class>Learning Resource</span>
          </a>
        </li>
        <li
          class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
        >
          <a class="px-2 py-1" href="https://puterakahfi.github.io/jsid/" target="_blank">
            <span class>JSID Developers</span>
          </a>
        </li>
        <li
          class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
        >
          <a class="px-2 py-1" href="https://codeigniter-id.github.io/" target="_blank">
            <span class>Codeginiter Indonesia</span>
          </a>
        </li>
      </ul>
    </li>
    <li  class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" >
      <g-link
        class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800"
        to="/training"
      >
        <span class="firstlevel">Training</span>
      </g-link>
    </li>
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
      facebook: faFacebookSquare,
      open: false
    };
  },
  components: {
    ToggleTheme,
    FontAwesomeIcon
  }
};
</script>


 <style lang="postcss" scoped>
li {
  list-style: none;
}
.group:hover .group-hover\:block {
  display: block !important;
}
</style>

