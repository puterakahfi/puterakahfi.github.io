<template>
  <Layout>
    <b-container>
      <b-row class="mt-5">
        <b-col>
          <b-img
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/code_review_l1q9.svg"
            fluid
            alt="Fluid image"
          ></b-img>
        </b-col>
        <b-col class="mt-5 pt-3">
          <h1>Under Construction</h1>
        
        </b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Blank.vue";
export default {
  components: {
    Layout
  },
  metaInfo: {
    title: "Under Construction!"
  }
};
</script>

<style lang="scss">
h1 {
  font-weight: bold;
  font-size: 4rem;
  color: #3f3d56;
}
.home-links a {
  margin-right: 1rem;
}
</style>
