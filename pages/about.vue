<template>
  <main>
    <Hero class="bg-bottom" style="background-image: url('/crowd.jpg');" text-align="center">
      <Heading class="uppercase font-extrabold">About <Logotype light/>.</Heading>
    </Hero>
    <section class="max-w-xl mx-auto p-4 text-xl">
      <Paragraph class="mb-4">
        <Logotype/> is an online platform for viewing live music performances in real-time from the comfort of your own home. Each performance is professionally captured and broadcasted in real-time via live streaming.
      </Paragraph>
      <Paragraph class="mb-4">
        You can watch live performances as they happen, or access previously captured material from the site’s library. Think Netflix for live performances.
      </Paragraph>
      <Paragraph class="mb-4">
        For live music fans it’s not possible to attend every performance in person – money, geography, family etc. mean you can’t always be there. <Logotype/> aims to provide the next best thing, bringing its users as close to the live experience as possible. <Logotype/> performances are professionally captured and soon we aim to incorporate Virtual Reality and other technologies into our developing shows.
      </Paragraph>
      <Paragraph class="mb-4">
        <Logotype/> will provide a platform for musical artists to showcase their talent, while also giving the opportunity to earn extra revenue from the site’s payment services. Think of it as virtual busking!
      </Paragraph>
      <Paragraph class="mb-4">
        We’re building a company based on a community of great people with different skills, who are passionate and committed to the idea. Our mission is to become the primary outlet for viewing unique, professionally captured, live music performances online. We aim to establish ourselves as a brand that truly champions music, stands up for artistry and nurtures connectivity, whilst providing an exciting platform for musical discovery.
      </Paragraph>
      <Paragraph>
        Our first streams are now available and we’re building our offering every day.
      </Paragraph>
    </section>
  </main>
</template>

<script>
import Heading from '~/components/Heading'
import Hero from '~/components/Hero'
import Logotype from '~/components/Logotype'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    Heading,
    Hero,
    Logotype,
    Paragraph
  }
}
</script>
