<template>
  <main>
    <Hero class="bg-center" style="background-image: url('/hero-image.jpg');" text-align="right">
      <Heading class="text-3xl uppercase font-extrabold">Join the band.</Heading>
      <Paragraph>Live music streamed anywhere, on any device.</Paragraph>
      <Button href="/streams" type="primary" nuxt>Watch now</Button>
    </Hero>
    <section class="container p-4 mx-auto my-12">
      <Heading class="text-3xl">We're bringling live music to you!</Heading>
      <Heading class="text-3xl">Join the movement.</Heading>
      <Paragraph>Find new bands and keep up with your favourites on <Logotype/>.</Paragraph>
      <Paragraph>Watch live live concert streams for free, follow the links to voluntaily donate and support real musicians - it's like virtual busking!</Paragraph>
      <hr>
    </section>
    <section class="bg-grey-lighter">
      <div class="container p-4 mx-auto">
        <Heading class="text-3xl">Professional Music Video Features</Heading>
        <Paragraph class="mb-4">Here's a short feature on the amazing Don Baker &amp; Rob Strong.</Paragraph>
        <livestream-embed url="https://livestream.com/accounts/23488315/events/7988695/videos/170407247/player?width=640&height=360&enableInfo=true&defaultDrawer=&autoPlay=false&mute=false"/>
      </div>
    </section>
  </main>
</template>

<script>
import Button from '~/components/Button'
import Heading from '~/components/Heading'
import Hero from '~/components/Hero'
import livestreamEmbed from '~/components/livestream-embed'
import Logotype from '~/components/Logotype'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    Button,
    Heading,
    Hero,
    livestreamEmbed,
    Logotype,
    Paragraph
  }
}
</script>
