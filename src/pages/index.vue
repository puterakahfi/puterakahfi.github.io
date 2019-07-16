<template>
  <Layout :show-logo="false" :show-header="false" class="container">
    <!-- Author intro -->
    <div class="columns">
      <div class="column is-10">
        <LatestPost data-aos="fade-down" :post="latestPost" />
      </div>

      <div class="colum is-2 has-padding-5">
        <div data-aos="fade-up">
          <g-image
            class="has-margin-10"
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/buffer_wq43.svg"
            alt
          ></g-image>
          <h1 class="title is-5 has-text-left has-margin-bottom-5">Free Learning Resources</h1>
          <p
            class="has-margin-top-5 is-size-7"
          >Koleksi berbagai link, tutorial, free e-books terkait pemrograman, software development</p>
          <a
            href="https://puterakahfi.github.io/learning-source/"
            target="_blank"
            class="button is-small button is-info"
          >Menuju link</a>
        </div>

        <hr />
        <div data-aos="fade-up">
          <g-image class="has-margin-20" src="~/assets/images/undraw_web_developer.svg" alt></g-image>
          <h1
            class="title is-5 has-text-left has-margin-bottom-5"
          >Awesome Javascript Developer Indonesia</h1>
          <p
            class="has-margin-top-5 is-size-7"
          >Daftar developer/programmer javascript terkece asal Indonesia</p>
          <a
            href="https://puterakahfi.github.io/jsid"
            target="_blank"
            class="button is-small button is-info"
          >Menuju link</a>
        </div>
        <hr />

        <SmallFooter class="has-margin-top-20 is-marginless" />
      </div>
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
    title: "Blog catatan newbie"
  }
};
</script>
