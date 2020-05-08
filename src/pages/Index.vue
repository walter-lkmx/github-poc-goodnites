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
          <h1>ENURESIS</h1>
          <h6>Conoce más de este padecimiento</h6>
        </section>
      </simple-hero>
      <text-banner class="title__what">
        <h1>¿Qué es enuresis?</h1>
      </text-banner>
      <text-banner>
        <h2>Descarga completa, involuntaria e inadvertida de orina durante el sueño, también conocida como enuresis nocturna, a partir de los 5 años de edad.</h2>
      </text-banner>
      <text-banner>
        <h2>Conoce más de este padecimiento en el video de la conferencia Goodnites con nuestras especialistas.</h2>
      </text-banner>
      <text-banner>
        <h2>Video</h2>
      </text-banner>
      <text-banner class="title__how">
        <h1>¿Cómo puedes ayudar a tu hijo?</h1>
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
      <text-banner class="title__cori-morfi">
        <h1>Conoce a<br>Cori y Morfi</h1>
        <h2>los aliados de tu hijo contra la enuresis</h2>
      </text-banner>
      <text-banner>
        <h2>Video</h2>
      </text-banner>
      <text-banner class="footer">
        <g-image src="~/assets/kimberly-clark-logo.png" alt="Goodnites"></g-image>
        <p>*Pañal tipo calzoncito desechable.<br>El desarrollo de este sitio es propiedad de Kimberly-Clark de México, S.A.B. de C.V., sus subsidiarias o afiliadas. Las marcas son propiedad de Kimberly-Clark Worldwide, Inc. <br>Tu visita a este sitio y el subsecuente uso de la información contenida en él están sujetos a los términos de nuestra <a href="https://www.kimberly-clark.com.mx/legal.htm" target="_blank">Declaración Legal</a>. Por favor revisa nuestro <a href="https://www.kimberly-clark.com.mx/politica.htm" target="_blank">Aviso de Privacidad</a>. <br>Este sitio contiene enlaces a otras páginas operadas por terceras empresas, Kimberly-Clark de México S.A.B. de C.V. no se hace responsable por el contenido de las mismas ni por las fallas en su funcionamiento.
		Contáctanos vía telefónica desde la <strong>Ciudad de México <a href="tel:52827328">5282-7328</a> y del interior de la República 
	<a href="tel:8004001300">800-400-1300</a></strong></p>
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
    font-family: $text-font;
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
    background-image: url("../assets/enuresis_portada.png");
    height: 100%;
    background-repeat: no-repeat;
    .slim-column {
      h1 {
        color: #70c5c8;
        text-transform: uppercase;
        font-weight: 900;
      }
    }
  }
  &__how {
    .slim-column {
      h1 {
        color: #fae736;
        text-transform: uppercase;
        font-weight: 900;
      }
    }
  }
  &__cori-morfi {
    .slim-column {
      h1 {
        color: #f18b6c;
        text-transform: uppercase;
        font-weight: 900;
      }
      h2 {
        color: #f18b6c;
        font-weight: bold;
      }
    }
  }
}

.footer {
  background-color: #00263a;
  color: white;
  text-align: center;
  img {
    margin: 0 auto;
  }
  a {
    color: #70c5c8;
    text-decoration: none;
  }
}


</style>
