<template>
  <main class="antialiased min-h-screen flex flex-col">
    <navbar/>
    <nuxt class="flex-1"/>
    <foot/>
  </main>
</template>

<script>
import foot from '~/components/foot'
import navbar from '~/components/navbar'

export default {
  components: {
    foot,
    navbar
  }
}
</script>
