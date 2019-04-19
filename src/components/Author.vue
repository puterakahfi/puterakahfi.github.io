<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      src="~/assets/images/author.jpg"
      width="180"
      height="180"
      blur="5"
    />

    <h1 v-if="showTitle" class="author__site-title">{{ $static.metaData.siteName }}</h1>

    <p class="author__intro">Backend / Frontend Developer</p>

    <div>
      <b-button size="sm" variant="outline-primary" class="mr-1" href="https://github.com/puterakahfi" target="_blank">
        <font-awesome :icon="['fab', 'github']" class="mr-1" />GitHub
      </b-button>
      <b-button size="sm" variant="outline-primary" href="https:puterakahfi.github.io/nuxt-cv" target="_blank">
        <font-awesome :icon="['fas', 'file']" class="mr-1"/>CV
      </b-button>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"]
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
    font-size: 1em;
  }

  &__site-title {
    font-size: 4em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>