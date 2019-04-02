<template>
  <main>
    <Hero class="bg-center" style="background-image: url('/hero-image.jpg');" text-align="right">
      <Heading class="text-3xl uppercase font-extrabold">Join the band.</Heading>
      <Button href="/videos" type="primary" nuxt>Watch now</Button>
    </Hero>
    <section class="container p-4 mx-auto my-12">
      <Heading class="text-3xl">Stand out from the crowd.</Heading>
      <Paragraph>Create innovative music videos with CENTRSTAGE.</Paragraph>
      <Paragraph>Email <a href="mailto:finbarrpyne@centrstage.com" class="text-red">finbarrpyne@centrstage.com</a> to get in touch.</Paragraph>
      <hr>
    </section>
    <section class="bg-grey-lighter">
      <div class="container p-4 mx-auto">
        <Heading class="text-3xl">Professional Music Video Features</Heading>
        <Paragraph class="mb-4">Here's a short feature on the amazing Don Baker &amp; Rob Strong.</Paragraph>
        <livestream-embed url="https://player.vimeo.com/video/325480777"/>
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
