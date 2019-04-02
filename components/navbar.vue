<template>
  <header class="bg-black text-white">
    <nav class="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 ">
      <div class="w-32 h-auto m-2">
        <nuxt-link to="/">
          <img src="/centrstage-logo-light.png" alt="CENTRSTAGE logo">
        </nuxt-link>
      </div>
      <div class="pb-2 sm:pb-0">
        <nuxt-link to="/videos" class="font-brand text-white hover:text-grey-light uppercase no-underline">Video Library</nuxt-link>
      </div>
    </nav>
  </header>
</template>
