<template>
  <main class="bg-grey-lighter">
    <section class="sm:flex sm:flex-wrap sm:p-4 sm:pr-0">
      <div v-for="video in streams" :key="video.slug" class="mb-4 sm:w-1/2 sm:pr-4 md:w-1/3 lg:w-1/4">
        <Card class="flex flex-col h-full">
          <nuxt-link v-if="video.thumbnail" :to="'/videos/' + video.slug">
            <graphcms-image :image="video.thumbnail" :width="356" :height="200" class="w-full"/>
          </nuxt-link>
          <livestream-embed v-else :url="video.embed"/>
          <div class="p-4">
            <nuxt-link :to="'/videos/' + video.slug" class="no-underline">
              <Heading level="3" class="mb-2 text-black">{{ video.title }}</Heading>
            </nuxt-link>
            <Paragraph class="text-sm">
              {{ video.time | moment('Do MMMM YYYY') }}.
            </Paragraph>
            <Paragraph>
              {{ video.description | truncate(115, '...') }}
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

import paginatedStreamCollection from '~/apollo/queries/paginatedStreamCollection'

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
      query: paginatedStreamCollection,
      prefetch: ({ route }) => ({
        title: 'Main Archive',
        ...paginate(route)
      }),
      variables() {
        return {
          title: 'Main Archive',
          ...paginate(this.$route)
        }
      },
      update(data) {
        return data.streamCollection.streams
      }
    }
  }
}
</script>

