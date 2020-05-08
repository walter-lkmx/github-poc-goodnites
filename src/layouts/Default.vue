<template>
  <div class="default-layout">
    <simple-header class="header">
      <template v-slot:nav-toggle>
        <!-- <g-image src="~/assets/images/nav-icon.svg" alt="Nav Toggle"></g-image> -->
      </template>
      <template v-slot:logo>
        <g-image src="~/assets/logo.png" alt="Goodnites"></g-image>
      </template>
      <template v-slot:navigation>
        <simple-nav-item :to="item.link" v-for="item in navigation.main" :key="item.key">
          {{item.name}}
        </simple-nav-item>
      </template>
      <template v-slot:actions>

      </template>
    </simple-header>
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