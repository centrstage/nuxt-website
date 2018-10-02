<template>
  <main class="artist">
    <Card class="artist-title" title="artist.name"/>

    <section class="artist-details">
      <artist-details :artist="artist"/>
    </section>

    <section class="artist-feed">
      <Card/>
    </section>
  </main>
</template>

<style lang="scss">
.artist {
  background-color: lightgrey;
  display: grid;
  grid-row-gap: 1em;
  grid-template-areas:
      "title"
      "details"
      "feed";
  grid-template-columns: 1fr;
  margin: auto;

  &-title {
    grid-area: title;
    text-align: left;
  }
  
  &-details {
    grid-area: details;
  }

  &-feed {
    grid-area: feed;
  }

  &-media {
    margin-bottom: 1em;
  }
}

@media screen and (min-width: 1008px) {
  .artist {
    grid-gap: 1em;
    grid-template-areas:
      "title details"
      "feed details";
    grid-template-columns: 2fr 1fr;
    padding: 2rem;
  }
}
</style>

<script>
// import artistDetails from '~/components/artist-details'
import Card from '~/components/Card'

import artist from '~/apollo/queries/artist.gql'

export default {
  components: {
    artistDetails,
    Card
  },
  apollo: {
    post: {
      query: post,
      prefetch: ({ route }) => ({ username: route.params.username }),
      variables() {
        return { username: this.$route.params.username }
      }
    }
  }
}
</script>
