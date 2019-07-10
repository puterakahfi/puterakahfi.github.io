<template>
  <Layout :show-logo="false" :show-header="false" class="container">
    <!-- Author intro -->
    <div class="columns">
      <div class="column is-9">
        <LatestPost data-aos="fade-down" :post="$page.posts.edges" />
      </div>

      <div class="colum is-3 has-padding-5" data-aos="zoom-in">
        <img
          class="has-margin-10"
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/buffer_wq43.svg"
          alt
        />
        <h1 class="title is-6 has-text-left has-margin-bottom-5">Free Learning Resources</h1>
        <p
          class="has-margin-top-5 is-size-7"
        >Koleski berbagai link, tutorial, free e-books terkait pemrograman, software development</p>
        <a
          href="https://puterakahfi.github.io/learning-source/"
          target="_blank"
          class="button is-small button is-info"
        >Menuju link</a>
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
import LatestPost from "~/components/organisms/LatestPost.vue";

export default {
  components: {
    LatestPost
  },
  metaInfo: {
    title: "Welcome to blog catatan newbie"
  }
};
</script>
