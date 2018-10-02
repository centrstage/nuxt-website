<template>
  <main class="bg-grey-lighter">
    <section class="sm:flex sm:flex-wrap sm:p-4 sm:pr-0">
      <div v-for="stream in streams" :key="stream.slug" class="sm:w-1/2 sm:pr-4 md:w-1/3 mb-4">
        <Card class="flex flex-col h-full">
          <nuxt-link v-if="stream.thumbnail" :to="'/streams/' + stream.slug">
            <graphcms-image :image="stream.thumbnail" :width="356" :height="200" class="w-full"/>
          </nuxt-link>
          <livestream-embed v-else :url="stream.embed"/>
          <div class="p-4">
            <nuxt-link :to="'/streams/' + stream.slug" class="no-underline">
              <Heading class="mb-2 text-black" level="3">{{ stream.title }}</Heading>
            </nuxt-link>
            <Paragraph class="text-sm">
              Recorded {{ stream.time | moment('Do MMMM YYYY') }}.
            </Paragraph>
            <Paragraph>
              {{ stream.description | truncate(115, '...') }}
            </Paragraph>
          </div>
        </Card>
      </div>
    </section>
  </main>
</template>

<style>

</style>

<script>
import Card from '~/components/Card'
import graphcmsImage from '~/components/graphcms-image'
import Heading from '~/components/Heading'
import livestreamEmbed from '~/components/livestream-embed'
import Paragraph from '~/components/Paragraph'

import visibleStreams from '~/apollo/queries/visibleStreams'

export default {
  components: {
    Card,
    graphcmsImage,
    Heading,
    livestreamEmbed,
    Paragraph
  },
  apollo: {
    streams: {
      prefetch: true,
      query: visibleStreams
    }
  }
}
</script>

