<template>
  <Layout :show-logo="false" :show-header="false" class="container">
    <!-- Author intro -->
    <div class="columns">
      <div class="column is-9">
        <LatestPost :post="$page.posts.edges"/>
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
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";
import LatestPost from "~/components/LatestPost.vue";

export default {
  components: {
    Author,
    PostCard,
    LatestPost
  },
  metaInfo: {
    title: "Welcome"
  }
};
</script>
