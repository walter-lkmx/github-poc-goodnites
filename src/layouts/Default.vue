<template>
  <div class="default-layout">

    <slot/>
  </div>
</template>

<script>  
  import navigation from '../../pages/nav.json';

  export default {
    data() {
      return {
        navigation,
      };
    },
  }
</script>  

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
  .default-layout {
    background: $page-background-color;
    display: grid;
    grid-template-rows: 1fr min-content;
  }
</style>