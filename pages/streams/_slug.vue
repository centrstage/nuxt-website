<template>
  <main class="bg-grey-lighter lg:p-4 font-sans lg:flex">
    <section class="mb-4 lg:mb-0 lg:mr-4">
      <Card>
        <livestream-embed :url="stream.embed" autoplay/>
        <main class="p-4">
          <Heading class="font-brand">{{ stream.title }}</Heading>
          <Paragraph>
            Recorded live on {{ stream.time | moment('Do MMMM YYYY') }} at <a :href="stream.venueUrl">{{ stream.venue }}</a>.
          </Paragraph>
          <Paragraph>
            {{ stream.description }}
          </Paragraph>
        </main>
      </Card>
    </section>
    <section v-if="stream.artists.length" class="min-w-100 max-w-sm">
      <Card class="p-4 lg:mb-4 border-b-2 lg:border-0">
        <Heading>Featured Artists</Heading>
      </Card>
      <artist-details
        v-for="artist in stream.artists"
        :key="artist.slug"
        :artist="artist"
        class="flex-1"
      />
    </section>
  </main>
</template>

<script>
import artistDetails from '~/components/artist-details'
import Card from '~/components/Card'
import Heading from '~/components/Heading'
import livestreamEmbed from '~/components/livestream-embed'
import Paragraph from '~/components/Paragraph'

import streamBySlug from '~/apollo/queries/streamBySlug'

export default {
  components: {
    artistDetails,
    Card,
    Heading,
    Paragraph,
    livestreamEmbed
  },
  apollo: {
    stream: {
      query: streamBySlug,
      prefetch: ({ route }) => ({
        slug: route.params.slug
      }),
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  }
}
</script>
