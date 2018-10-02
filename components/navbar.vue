<template>
  <nav class="bg-black text-white px-4 flex items-center justify-between">
    <div class="w-32 h-auto m-2">
      <nuxt-link to="/">
        <img src="/centrstage-logo-light.png" alt="CENTRSTAGE logo">
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/about" class="font-brand text-white hover:text-grey-light uppercase no-underline mr-4">About</nuxt-link>
      <nuxt-link to="/streams" class="font-brand text-white hover:text-grey-light uppercase no-underline">Live Concert Streams</nuxt-link>
    </div>
  </nav>
</template>
