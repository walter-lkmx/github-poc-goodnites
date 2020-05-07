<template>
  <main class="default-page">
    <slot></slot>
  </main>
</template>

<style lang="scss">
  .default-page {
    background-color: $page-background-color;
    display: grid;
    grid-auto-flow: row;
    min-height: 100%;

    @include respond-to("small and down") {
      margin-top: $page-mobile-margin-top;
    }
    @include respond-to("medium") {
      margin-top: $page-tablet-margin-top;
    }
    @include respond-to("large and up") {
      margin-top: $page-desktop-margin-top;
    }
  }
</style>
