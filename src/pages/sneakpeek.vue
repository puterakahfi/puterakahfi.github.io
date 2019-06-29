<template>
  <Layout :show-logo="false" :show-header="false" class="container">
    <!-- Author intro -->
    <div class="columns">
      <div class="column is-9">
        <LatestPost data-aos="fade-up" :post="$page.posts.edges"/>
      </div>
    </div>

    <!-- List posts -->

    <div class="columns is-multiline"></div>
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
        coverImage (width: 770, height: 380, blur: 10)
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

import LatestPost from "~/components/organisms/LatestPost.vue";

export default {

  components: {
    LatestPost
  },
  metaInfo: {
    title: "Sneak peek"
  }
};
</script>
