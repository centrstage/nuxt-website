<template>
  <nuxt-link
    v-if="nuxt"
    :to="href"
    :class="{
      'bg-white text-grey-darkest': type === 'standard',
      'bg-red text-white': type === 'primary'
    }"
    class="inline-block w-auto font-brand uppercase no-underline tracking-wide p-2 my-2 rounded shadow-md"
  >
    <slot/>
  </nuxt-link>
  <a
    v-else-if="href"
    :href="href"
    :class="{
      'bg-white text-grey-darkest': type === 'standard',
      'bg-red text-white': type === 'primary'
    }"
    class="inline-block w-auto font-brand uppercase no-underline tracking-wide p-2 my-2 rounded shadow-md"
  >
    <slot/>
  </a>
  <button
    v-else-if="!href"
    :class="{
      'bg-white text-grey-darkest': type === 'standard',
      'bg-red text-white': type === 'primary'
    }"
    class="font-brand uppercase no-underline tracking-wide p-2 my-2 rounded shadow-md"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    nuxt: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'standard',
      required: true
    }
  }
}
</script>

