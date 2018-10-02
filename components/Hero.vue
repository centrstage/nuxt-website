<template>
  <section
    :class="{
      'flex justify-start': textAlign === 'left',
      'flex justify-center': textAlign === 'center',
      'flex justify-end': textAlign === 'right'
    }"
    class="text-white bg-cover bg-black-50 bg-multiply">
    <div class="py-16 md:py-32 px-4 md:px-8">
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    textAlign: {
      type: String,
      default: 'left'
    }
  }
}
</script>
