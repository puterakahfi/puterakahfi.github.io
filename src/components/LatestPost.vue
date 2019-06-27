<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-5">
        <span class="tag has-margin-bottom-5">Posting Terbaru</span>
        <h1 class="title is-3">
          <g-link :to="post[0].node.path">  {{post[0].node.title}}</g-link></h1>

        <PostMeta class="post-card__meta" :post="post[0].node"/>

        <h1 class="subtitle is-6 has-margin-top-20">{{post[0].node.description}}</h1>
      </div>
      <div class="column is-7">
        <div class="columns is-multiline">
          <PostCard
            class="column is-6"
            v-for="item in post.slice(1)"
            :key="item.node.id"
            :post="item.node"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PostCard from "~/components/PostCard";
import PostMeta from "~/components/PostMeta";

export default {
  props: ["post"],
  components: {
    PostCard,
    PostMeta
  }
};
</script>
