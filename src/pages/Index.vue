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
        <g-link :to="item.link" v-for="item in navigation.main" :key="item.key">
          {{item.name}}
        </g-link>
      </template>
      <template v-slot:actions>

      </template>
    </simple-header>
    <base-page>
      <simple-hero class="hero">
        <section class="message">
          <h2>Si tu hijo tiene más de 5 años y se hace pipí en la <span>cama, es posible que padezca</span></h2>
          <h1>ENURESIS</h1>
          <h5>Conoce más de este padecimiento</h5>
        </section>
      </simple-hero>
      <text-banner class="content__what-is">
        <h1 class="title">¿Qué es enuresis? </h1>
      </text-banner>
      <text-banner class="content__enuresis-is">
        <g-image src="~/assets/gota.png" alt="Goodnites"></g-image>
        <h4>Descarga completa, involuntaria e inadvertida de orina durante el sueño, también conocida como enuresis nocturna, a partir de los 5 años de edad.</h4>
      </text-banner>
      <twin-columns class="content__causes">
        <template class="left" v-slot:left>
          <h4>Las causas pueden ser:</h4>
          <ul class="list__causes">
            <li><span>±</span> Factores psicológicos</li>
            <li><span>±</span> Factores genéticos</li>
            <li><span>±</span> Factores hormonales</li>
            <li><span>±</span> Alteraciones del sueño</li>
            <li><span>±</span> Enfermedades del tracto</li>
          </ul>
        </template>
        <template v-slot:right>
          <h4>Actualmente en México existen</h4>
          <h2 class="statistics-number">+ 1.800.000</h2>
          <h4 class="lowercase__orange">niños con enuresis</h4>
          <h4 class="lowercase">la mayoría del sexo masculino</h4>
        </template>
      </twin-columns>
      <text-banner class="content__more-about">
        <g-image src="~/assets/ojo-dormido.png" alt="Goodnites"></g-image>
        <h4>Conoce más de este padecimiento en el video de la conferencia Goodnites con nuestras especialistas.</h4>
      </text-banner>
      <text-banner>
        <iframe title="Qué es la enuresis" class="embed-responsive-item pad" src="https://www.youtube.com/embed/5f23QZUUtQE?rel=0" allowfullscreen style="padding: 0; width:100%; height:400px;"></iframe>
      </text-banner>
      <twin-columns class="content__help-your-son">
        <template class="left" v-slot:left>
          <h4 class="title">¿Cómo puedes ayudar a tu hijo?</h4>
          <ul class="list__how-to-help">
            <li><span>✓ Consulta</span> a tu médico</li>
            <li><span>✓ Conoce Goodnites</span> tu aliado para mantener su cama seca</li>
            <li><span>✓ Con la ayuda de Cori</span>, tu pequeño aprenderá a vencer a la enuresis</li>
          </ul>
        </template>
        <template v-slot:right>
          <g-image src="~/assets/Cori_lampara.png" alt="Goodnites"></g-image>
        </template>
      </twin-columns>
      <text-banner class="free-sample">
        <button class="yellow" aria-label="Solicita muestra gratis">Solicita tu muestra gratis</button>
        <hr>
      </text-banner>
      <text-banner class="perfect-ally">
        <h4 class="title">La ropa interior Goodnites será el aliado perfecto <span class="lowercase">para mantener seca su cama</span></h4>
      </text-banner>
      <twin-columns class="features">
        <template class="left" v-slot:left>
          <g-image src="~/assets/calzones-goodnites.png" alt="Goodnites"></g-image>
        </template>
        <template v-slot:right>
          <ul class="list__features">
            <li><span>●</span> Discreto</li>
            <li><span>●</span> Máxima absorción</li>
            <li><span>●</span> No escurre</li>
            <li><span>●</span> Se ajusta perfecto a la cintura</li>
            <li><span>●</span> No contiene látex</li>
          </ul>
        </template>
      </twin-columns>
      <text-banner class="choose-size">
        <h4 class="title">Elige la talla de acuerdo a la edad<br>
        y peso de tu hijo</h4>
      </text-banner>
      <twin-columns class="content__sizes">
        <template class="left" v-slot:left>
          <g-image src="~/assets/goodnites.png" alt="Goodnites"></g-image>
        </template>
        <template v-slot:right>
          <g-image src="~/assets/tallas-goodnites.png" alt="Goodnites"></g-image>
          <div></div>
        </template>
      </twin-columns>
       <text-banner class="free-sample">
        <button class="light-gray" aria-label="Solicita muestra gratis">Solicita tu muestra gratis</button>
        <hr>
      </text-banner>
      <text-banner class="content__cori-morfi">
        <h1 class="title">Conoce a<br>Cori y Morfi</h1>
        <h2 class="subtitle">los aliados de tu hijo contra la enuresis</h2>
      </text-banner>
      <text-banner>
        <iframe title="Conoce a Cori" class="embed-responsive-item pad" src="https://www.youtube.com/embed/pHOBv1cmTk8?rel=0" allowfullscreen style="padding: 0; width:100%; height:400px;"></iframe>
      </text-banner>
      <text-banner class="footer">
        <g-image src="~/assets/kimberly-clark-logo.png" alt="Goodnites"></g-image>
        <p>*Pañal tipo calzoncito desechable.<br>El desarrollo de este sitio es propiedad de Kimberly-Clark de México, S.A.B. de C.V., sus subsidiarias o afiliadas. Las marcas son propiedad de Kimberly-Clark Worldwide, Inc. <br>Tu visita a este sitio y el subsecuente uso de la información contenida en él están sujetos a los términos de nuestra <a href="https://www.kimberly-clark.com.mx/legal.htm" target="_blank" rel="noreferrer">Declaración Legal</a>. Por favor revisa nuestro <a href="https://www.kimberly-clark.com.mx/politica.htm" target="_blank" rel="noreferrer">Aviso de Privacidad</a>. <br>Este sitio contiene enlaces a otras páginas operadas por terceras empresas, Kimberly-Clark de México S.A.B. de C.V. no se hace responsable por el contenido de las mismas ni por las fallas en su funcionamiento.
		Contáctanos vía telefónica desde la <strong>Ciudad de México <a href="tel:52827328" rel="noreferrer">5282-7328</a> y del interior de la República
	<a href="tel:8004001300" rel="noreferrer">800-400-1300</a></strong></p>
      </text-banner>
      <!-- no pasar de esta línea -->
    </base-page>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Goodnites® ¿Qué es enuresis?'
    },
    data() {
      return {
        navigation: {
          "main": [
            {
              "key":  "que-es-enuresis",
              "name": "¿Qué es enuresis?",
              "link": "/que-es-enuresis"
            },
            {
              "key":  "ropa-interior-goodnites",
              "name": "Ropa Interior Goodnites®",
              "link": "/ropa-interior-goodnites"
            },
            {
              "key":  "cori-y-morfi",
              "name": "Cori y Morfi",
              "link": "/cori-y-morfi"
            },
            {
              "key":  "solicita-tu--muestra-gratis",
              "name": "Solicita tu muestra gratis",
              "link": "/solicita-tu--muestra-gratis"
            }
          ]
        }
      }
    }
  }
</script>



<style lang="scss">
.grid {
  // color: white;
  background: green;
}
.base-page {
  background: $page-background-image;
  background-size: contain;
}

.header {
  height: rem(88px);
  &__logo {
    img {
      height: rem(60px);
    }
  }
  &__actions {
    display: none;
  }
}

.header .main-nav__primary {
  display: inline-grid;
  grid-template-columns: auto;
  grid-column-gap: $gutter-xlarge;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #70c5c8;
    }
  }
}

.hero {
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-position: center center;
  height: rem(673px);
  padding-bottom: $gutter-large;
  display: grid;
  .single-column {
    align-items: end;
    @media only screen and (max-width: 768px) {
      grid-auto-rows: initial;
    }
  }
  .message {
    text-align: center;
    font-family: $text-font;
    width: 100%;
    margin-top: 400px;
    h2 {
      color: white;
      font-weight: 600;
      font-size: 2.5rem;
      span {
        display: block;
      }
    }
    h1 {
      color: #70c5c8;
      font-weight: 900;
    }
    h5 {
      color: white;
    }
  }
}


  .content__causes .twins-section--start {
    @media only screen and (max-width: 768px) {
      width: 90% !important;
    }  
  }


.causes {
  .twins-section {
    .twins-column {
      h4 {
        color: #70c5c8;
        text-transform: uppercase;
        font-weight: 900;
      }
    }
  }
}

.choose-size {
    .title {
      color: white;
      text-transform: uppercase;
      font-weight: 900;
    }
}

.perfect-ally {
    .title {
      color: #70c5c8;
      text-transform: uppercase;
      font-weight: 900;
      .lowercase {
        text-transform: lowercase;
      }
  }
}

.features {
  align-items: center;
}

.content {
  &__what-is {
    background-image: url("../assets/enuresis_portada.png");
    background-size: auto 100%;
    height: rem(320px);
    background-repeat: no-repeat;
    background-position: rem(300px);
      .title {
        color: #70c5c8;
        text-transform: uppercase;
        font-weight: 900;
        text-align: left;
      }
  }
  &__enuresis-is, &__more-about {
    .slim-column {
      grid-template-columns: auto auto;
      grid-column-gap: rem(16px);
      h4 {
        color: white;
        text-align: left;
      }
    }
  }

  &__causes {
    .twins-section {
      .twins-column {
        @media only screen and (max-width: 768px) {
          padding-left: 1rem;
        }
        h4 {
          text-align: center;
          color: #70c5c8;
          text-transform: uppercase;
          font-weight: 900;

          @media only screen and (max-width: 768px) {
            width: 90%;
            text-align: left;
          }
          &.lowercase {
            text-transform: lowercase;
            &__orange {
              color: #f18b6c;
              text-transform: lowercase;
            }
          }
        }
        h2 {
          text-align: center;

          &.statistics-number {
            color: #f18b6c;
            font-weight: 900;
          }
        }
      }
    }
    .twins-section--start {

      justify-self: end;
    }
  }

  &__help-your-son {
    .twins-section--start {

      justify-self: end;
      @media only screen and (max-width: 768px) {
        width: 90%;
      }
      h4 {
        font-size: 2.1rem;
        font-weight: 800;
        line-height: 1.5;
        text-transform: uppercase;
        color: #fae736;
      }
      li {
        font-size: $normal-size;
      }
    }
  }

  &__sizes {
    .twins-section--start {

      justify-self: end;
    }
  }

  &__cori-morfi {
      .title {
        color: #f18b6c;
        text-transform: uppercase;
        font-weight: 900;
      }
      .subtitle {
        color: #f18b6c;
        font-weight: bold;
      }
  }
}

.how {
  h4 {
    color: #fae736;
    text-transform: uppercase;
    font-weight: 900;
  }
}

.free-sample {
  .slim-column {
    button {
      display: block;
      padding: 0.5rem 1rem;
      margin: 0;
      text-transform: uppercase;
      border-radius: rem(21px);
      &.yellow {
        background-color: #ffc107;
      }
      &.light-gray {
        background-color: #f8f9fa;
      }
    }
    hr {
      display: block;
      border: 0;
      border-top: 4px dotted #FAE736;
      width: 30%;
      margin: 3rem auto;
      text-align: center;
      height: 0;
    }
  }
}

.list {
  li {
    color: white;
  }
  &__causes {
    li {
      font-size: rem(32px);
      span {
        color: #fae736;
      }
    }
  }
  &__how-to-help {
    li {
      color: white;
      span {
        color: #70c5c8;
      }
    }
  }
  &__features {
    li {
      color: white;
      font-size: rem(32px);
      span {
        color: #fae736;
      }
    }
  }
}

ul {
    li {
      color: white;
      span {
        color: #70c5c8;
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
  p {
      a {
      color: #70c5c8;
      text-decoration: none;
    }
  }
}


</style>
