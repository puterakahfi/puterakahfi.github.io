<template>
  <Layout :show-logo="false" :show-header="false" class="container">
    <!-- Author intro -->
    <!-- List posts -->
    <div class="columns is-multiline">
      <h1 class="column is-12 title is-6">Posting Terbaru</h1>
      <hr>
      <PostCard
        class="column is-4"
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
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

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: "Welcome"
  }
};
</script>
