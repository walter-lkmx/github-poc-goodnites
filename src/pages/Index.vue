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
          <h2>Si tu hijo tiene más de 5 años y se hace pipí en la cama, es posible que padezca</h2>
          <h1>ENDURESIS</h1>
          <h6>Conoce más de este padecimiento</h6>
        </section>
      </simple-hero>
      <text-banner class="title__what">
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
      <text-banner class="title__how">
        <h2>¿Cómo puedes ayudar a tu hijo?</h2>
      </text-banner>
      <twin-columns class="contact">
        <template v-slot:left>

        </template>
        <template v-slot:right>

        </template>
      </twin-columns>
      <text-banner-no-column>
        <h2>Solicita tu muestra gratis</h2>
      </text-banner-no-column>
      <text-banner>
        <h2>La ropa interior Goodnites será el aliado perfecto</h2>
        <h3>para mantener seca su cama</h3>
      </text-banner>
      <twin-columns class="contact">
        <template v-slot:left>

        </template>
        <template v-slot:right>

        </template>
      </twin-columns>
      <text-banner>
        <h2>Elige la talla de acuerdo a la edad<br>
        y peso de tu hijo</h2>
      </text-banner>
      <twin-columns class="contact">
        <template v-slot:left>

        </template>
        <template v-slot:right>

        </template>
      </twin-columns>
       <text-banner-no-column>
        <h2>Solicita tu muestra gratis</h2>
      </text-banner-no-column>
      <text-banner>
        <h2>Conoce a<br>Cori y Morfi</h2>
        <h3>los aliados de tu hijo contra la enuresis</h3>
      </text-banner>
      <text-banner>
        <h2>Video</h2>
      </text-banner>
      <text-banner class="footer">
        <h2>Video</h2>
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
    h2 {
      color: white;
      font-weight: bold;
    }
    h1 {
      color: #70c5c8;
      font-weight: bold;
    }
    h6 {
      color: white;
    }
  }
}

.title {
  &__what {
    slim-column {
      h2 {
        color: #70c5c8;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
  &__how {
    slim-column {
      h2 {
        color: #fae736;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
}


</style>
