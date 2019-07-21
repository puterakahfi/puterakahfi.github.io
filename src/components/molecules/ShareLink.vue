<template>
  <div>
    <social-sharing
      :url="url + item.path"
      :title="item.title"
      :description="item.description"
      :quote="item.description"
      :hashtags="item.tags.join(',')"
      inline-template
      class
    >
      <div>
        <network network="facebook" class="tag is-white">
          <i class="fab fa-facebook fa-2x"></i>
        </network>
        <network network="line" class="tag is-white">
          <i class="fab fa-line fa-2x"></i>
        </network>
        <network network="linkedin" class="tag is-white">
          <i class="fab fa-linkedin fa-2x"></i>
        </network>
        <network network="skype" class="tag is-white">
          <i class="fab fa-skype fa-2x"></i>
        </network>
        <network network="telegram" class="tag is-white">
          <i class="fab fa-telegram fa-2x"></i>
        </network>
        <network network="whatsapp" class="tag is-white">
          <i class="fab fa-whatsapp fa-2x"></i>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data(){
    return {
      url :  window.location
    }
  }
};
</script>


<style lang="scss">
.tag {
  cursor: pointer !important;
  color: red;
}
</style>
