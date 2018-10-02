<template>
  <span v-if="light">
    <span class="logotype-white">CENTR</span><span class="logotype-red">STAGE</span>
  </span>
  <span v-else>
    <span class="logotype-black">CENTR</span><span class="logotype-red">STAGE</span>
  </span>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>
