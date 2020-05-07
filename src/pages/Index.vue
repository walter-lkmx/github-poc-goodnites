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
        <section class="message">
          <h2>Si tu hijo tiene más de 5 años y se hace pipí en la cama, es posible que padezva</h2>
          <h1>ENDURESIS</h1>
          <h6>Conoce más de este padecimiento</h6>
        </section>
      </simple-hero>
      <text-banner>
        <h2>¿Qué es enduresis?</h2>
      </text-banner>
      <text-banner>
        <h2>Descarga completa, involuntaria e inadvertida de orina durante el sueño, también conocida como enduresis nocturna, a partir de los 5 años de edad.</h2>
      </text-banner>
      <text-banner>
        <h2>Conoce más de este padecimiento en el video de la conferencia Goodnites con nuestras especialistas.</h2>
      </text-banner>
      <text-banner>
        <h2>Video</h2>
      </text-banner>
      <text-banner>
        <h2>¿Cómo puedes ayudar a tu hijo?</h2>
      </text-banner>
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

<style lang="scss" scoped>
.simple-hero {
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-position: center center;
  .message {
    text-align: center;
  }
}

</style>
