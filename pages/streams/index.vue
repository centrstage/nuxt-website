<template>
  <main class="bg-grey-lighter">
    <section class="sm:flex sm:flex-wrap sm:p-4 sm:pr-0">
      <div v-for="stream in streams" :key="stream.slug" class="mb-4 sm:w-1/2 sm:pr-4 md:w-1/3 lg:w-1/4">
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
    <section v-show="streams" class="flex justify-center mb-4">
      <nuxt-link to="" class="mr-2">Page 1</nuxt-link>
      <nuxt-link to="?page=2">Page 2</nuxt-link>
    </section>
  </main>
</template>

<script>
import Card from '~/components/Card'
import graphcmsImage from '~/components/graphcms-image'
import Heading from '~/components/Heading'
import livestreamEmbed from '~/components/livestream-embed'
import Paragraph from '~/components/Paragraph'

import paginatedStreams from '~/apollo/queries/paginatedStreams'

const paginate = route => {
  const perPage = route.query.perPage || 24
  const pageNumber = route.query.page || 1

  if (pageNumber) {
    return {
      first: perPage,
      skip: perPage * (pageNumber - 1)
    }
  }
  return {
    first: perPage
  }
}

export default {
  scrollToTop: true,
  components: {
    Card,
    graphcmsImage,
    Heading,
    livestreamEmbed,
    Paragraph
  },
  apollo: {
    streams: {
      query: paginatedStreams,
      prefetch: ({ route }) => {
        paginate(route)
      },
      variables() {
        return paginate(this.$route)
      }
    }
  }
}
</script>

