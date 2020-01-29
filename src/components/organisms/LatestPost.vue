<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-10">
        <span
          class="tag is-size-6 is-medium has-margin-bottom-10 has-text-weight-semibold"
        >Posting Terbaru</span>
        <h1 class="title is-3 has-margin-bottom-10">
          <g-link :to="post[0].node.path">{{post[0].node.title}}</g-link>
        </h1>

        <PostMeta class="post-card__meta" :post="post[0].node" />

        <p class="subtitle is-6 has-margin-top-20">{{post[0].node.description}}</p>
        <g-link class="" :to="post[0].node.path"><button class="bg-transparent hover:bg-grey text-grey-dark font-semibold hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2">selengkapnya</button></g-link>
      </div>
      <div class="column is-10 mt-20">
        <div class="">
          <div data-aos="slide-up" class="box" v-for="item in post.slice(1)" :key="item.node.id">
            <article class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img :src="item.node.cover_image" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong class="title is-5 has-text-weight-bold">
                      <g-link :to="item.node.path">{{item.node.title }}</g-link>
                    </strong>
                    <PostMeta class="post-card__meta has-margin-top-5" :post="post[0].node" />
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PostCard from "~/components/PostCard";
import PostMeta from "~/components/molecules/PostMeta";

export default {
  props: ["post"],
  components: {
    PostCard,
    PostMeta
  }
};
</script>

<style lang="scss" scoped>
.box {
  border-radius: 0 !important;
  border: 0;
  box-shadow: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
}
</style>

