<template>
  <Layout  :show-logo="false" :show-header="false" class="container">
  </Layout>
</template>

<page-query>
{
  posts: allPost (filter: { published: { eq: true }}){
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

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
