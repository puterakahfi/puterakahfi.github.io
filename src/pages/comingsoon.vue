<template>
  <Layout :show-logo="false" :show-header="false" class="container"></Layout>
</template>


<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
import Layout from "../layouts/ComingSoon.vue";
import LatestPost from "~/components/organisms/LatestPost.vue";

export default {
  layouts: Layout,
  components: {
    Author,
    PostCard,
    Layout,
    LatestPost
  },
  metaInfo: {
    title: "Welcome"
  }
};
</script>
