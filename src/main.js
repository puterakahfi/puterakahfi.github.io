import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Import stisla css
import '~/assets/stisla/css/style.min.css'
// Import main css
import '~/assets/style/index.scss'




// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'



// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
}