---
title: Menambahkan AOS(Animation On Scroll) effect pada gridsome
date: 2019-07-11
published: true
tags: ["gridsome", "Vue Plugins", "animation"]
canonical_url: false
description: "tutorial singkat tentang bagaimana menambahkan AOS library pada gridsome"
---

Kali ini saya akan sharing tentang tutorial singkat menambahkan AOS library di gridsome, AOS sendiri singkatan dari Animation On Scroll, dari namanya sudah tahu bahwa fungsinya adalah memberikan effect animasi ketika kita scroll halaman website tersebut, dan animasinya juga bermacam-macam, untuk demonya bisa di lihat di [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)

untuk menambahkan AOS di gridsome cukup mudah, kita tinggal registerkan plugin di file main.js, sebelumnya install dulu _library_ dengan perintah :

```bash
yarn add ios@next
```

kemudian registerkan aos dan css nya di file main.js, saya meregisterkan aos ke vue prototype, karena ada issue ketika saya langsung menggunakan AOS.init, yaitu animasi nggak jalan ketika di generate, namun tidak ada masalah jika di mode development

```js
//file main.js
import AOS from "aos";
import "aos/dist/aos.css";
import DefaultLayout from "~/layouts/Default.vue";
export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  Vue.prototype.$aos = AOS;
}
```

selanjutnya adalah meregisterkan animasi ini di vue _component_ menggunakan AOS.ini, cara paling gampang adalah registerkan di layout (daripada register satu-satu di component) sehingga _component_ yang berada di dalam _component_ layout akan otomatis bisa menggunakan aos ini, misalnya saya init di layout Default, letak komponent layout ini sendiri berada di _directory_(folder) layouts, tinggal ini AOS ketika komponent layout di _mounted_

```js
// file layouts/Default.vue
<script>
import  Navbar  from  "~/components/organisms/Navbar.vue"
export  default {
mounted()
{
this.$aos.init();
}

};
</script>
```

langkah terakhir adalah menambahkan attribut data-aos='animasi' di _component_, tag html yang ingin kena effect animasi
misalnya saya mau menambahkan animasi slide-up ( element akan slide ke atas) pada Footer _component_ maka tinggal tambahan attribut data-aos="slide-up" pada _component_ tsb

```js

<template>

<Layout :show-logo="false" :show-header="false"  class="container">
	<Footer  data-aos="slide-up" />
</Layout>
</template>

<script>

import  Header  from  "~/components/Header.vue";

export  default {
components: {
Footer
}
};

</script>

```

maka jika berhasil, animasi slide up akan muncul ketika scrool berada di posisi footer.

Sekian tutorial singkat tentang bagaimna menambahkan AOS animasi di gridsome, jika menemukan kesalahan dan kekeliruan di artikel ini silahkan edit di [sini](https://github.com/puterakahfi/puterakahfi.github.io/edit/stable/content/posts/menambahkan-aos-pada-gridsome.md) dan pull request. :)
