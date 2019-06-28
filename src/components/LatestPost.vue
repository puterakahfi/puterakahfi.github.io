<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-7">
        <span class="tag has-margin-bottom-5">Posting Terbaru</span>
        <h1 class="title is-3">
          <g-link :to="post[0].node.path">{{post[0].node.title}}</g-link>
        </h1>

        <PostMeta class="post-card__meta" :post="post[0].node"/>

        <p class="subtitle is-6 has-margin-top-20">{{post[0].node.description}}</p>
      </div>
      <div class="column is-5">
        <div class="columns is-multiline">
          <div class="box" v-for="item in post.slice(1)" :key="item.node.id">
            <article class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img
                    src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/chore_list_iof3.svg"
                    alt="Image"
                  >
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong class="title is-6">
                      <g-link :to="item.node.path">{{item.node.title }}</g-link>
                    </strong>
                    <PostMeta class="post-card__meta" :post="post[0].node"/>
                  </p>
                </div>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item" aria-label="reply">
                      <span class="icon is-small">
                        <i class="fas fa-reply" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a class="level-item" aria-label="retweet">
                      <span class="icon is-small">
                        <i class="fas fa-retweet" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a class="level-item" aria-label="like">
                      <span class="icon is-small">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </nav>
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
import PostMeta from "~/components/PostMeta";

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

