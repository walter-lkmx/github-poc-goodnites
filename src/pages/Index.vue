<template>
  <Layout>
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
    <default-page>
      <simple-hero>
        <g-image src="~/assets/logo.png" alt="Goodnites"></g-image>
        <section class="message">
          <h1>Hola esto es un mensaje</h1>
        </section>
      </simple-hero>
      <!-- no pasar de esta línea -->
    </default-page>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Hello, world!'
    }
  }
</script>

<style lang="stylus">

</style>
