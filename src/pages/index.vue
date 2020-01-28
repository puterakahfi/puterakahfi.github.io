<template>
  <Layout :show-logo="false" :show-header="false" class="">
    <!-- Author intro -->
    <div class="columns">
      <div class="column is-9">
        <LatestPost data-aos="fade-down" :post="latestPost" />
      </div>

              <SmallFooter class="has-margin-top-20 is-marginless" />

    </div>

    <!-- List posts -->
    <div class="columns is-multiline"></div>
  </Layout>
</template>

<page-query>

query Post{
  posts: allPost (filter: { published: { eq: true }}){
    edges {
      node {
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
        cover_image
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
import LatestPost from "~/components/organisms/LatestPost";
import SmallFooter from "~/components/molecules/SmallFooter";
export default {
  data() {
    return {
      latestPost: []
    };
  },
  components: {
    LatestPost,
    SmallFooter
  },
  created() {
    this.latestPost = this.$page.posts.edges;
  },
  metaInfo: {
    title: ""
  }
};
</script>
