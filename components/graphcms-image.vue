<template>
  <img :src="urlWithTransformations" alt="">
</template>

<script>
const baseUrl = 'https://media.graphcms.com/'

export default {
  props: {
    image: {
      type: Object,
      default: () => { return {} }
    },
    height: {
      type: Number,
      default: undefined
    },
    width: {
      type: Number,
      default: undefined
    }
  },
  computed: {
    urlWithTransformations: function () {
      return baseUrl + 'resize=w:' + this.width + ',h:' + this.height + ',f:crop/compress/' + this.image.handle
    } 
  }
}
</script>
