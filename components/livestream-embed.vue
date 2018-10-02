<template>
  <div class="is-16x9">
    <iframe :src="fullUrl" frameborder="0" class="absolute pin-t pin-l w-full h-full"/>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    fullUrl: function () {
      let queryString = '?enableInfo=true&mute=false'
      if (this.autoplay) {
        queryString += '&autoPlay=true'
      } else {
        queryString += '&autoPlay=false'
      }
      return this.url + queryString
    }
  }
}
</script>
