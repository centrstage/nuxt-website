<template>
  <p data-component="Paragraph" class="grey-darkest">
    <slot/>
  </p>
</template>

<style>
[data-component="Heading"] + [data-component="Paragraph"] {
  @apply mt-2;
}

[data-component="Paragraph"] + [data-component="Paragraph"] {
  @apply mt-2;
}
</style>

