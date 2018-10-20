<template>
  <Card data-component="artist-details" class="p-4">
    <Heading level="2">{{ artist.name }}</Heading>
    <Paragraph>{{ artist.description }}</Paragraph>
    <Paragraph v-if="artist.website">Website: <a :href="artist.website" target="_blank">{{ artist.website }}</a></Paragraph>

    <hr v-if="hasAnySocialMedia">
    <Paragraph v-if="hasAnySocialMedia" class="subtitle mb-2">Find them on social media:</Paragraph>
    <social-media-icon :data="artist.facebook" class="mr-2"/>
    <social-media-icon :data="artist.twitter" class="mr-2"/>
    <social-media-icon :data="artist.snapchat" class="mr-2"/>
    <social-media-icon :data="artist.instagram" class="mr-2"/>
  </Card>
</template>

<script>
import Card from '~/components/Card'
import Heading from '~/components/Heading'
import Paragraph from '~/components/Paragraph'
import socialMediaIcon from '~/components/social-media-icon'

export default {
  components: {
    Card,
    Heading,
    Paragraph,
    socialMediaIcon
  },
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasAnySocialMedia: function () {
      return this.artist.facebook || this.artist.twitter || this.artist.snapchat || this.artist.instagram
    }
  }
}
</script>