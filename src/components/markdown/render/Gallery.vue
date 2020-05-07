<template>
  <div class="image-gallery">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
  };
</script>

<style lang="scss" scoped>
  .image-gallery {
    background-color: black;
    overflow-x: auto;
    line-height: 0;


    p {
      margin: 0;
      padding: 0;
    }

    column-count:         2;
    column-gap:           0;

    img {
      width: 100%;
      vertical-align: bottom;
    }

    margin-bottom: rem($gutter-xlarge);
  }
</style>
