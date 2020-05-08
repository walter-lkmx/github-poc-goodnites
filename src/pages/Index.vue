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
      <simple-hero class="hero">
        <section class="message">
          <h2>Si tu hijo tiene más de 5 años y se hace pipí en la <span>cama, es posible que padezca</span></h2>
          <h1>ENURESIS</h1>
          <h5>Conoce más de este padecimiento</h5>
        </section>
      </simple-hero>
      <text-banner class="content__what-is">
        <h1>¿Qué es enuresis?</h1>
      </text-banner>
      <text-banner class="content__enuresis-is">
        <g-image src="~/assets/gota.png" alt="Goodnites"></g-image>
        <h4>Descarga completa, involuntaria e inadvertida de orina durante el sueño, también conocida como enuresis nocturna, a partir de los 5 años de edad.</h4>
      </text-banner>
      <twin-columns class="causes">
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
        <template class="" v-slot:right>
          <h4>Actualmente en México existen</h4>
          <h2>+ 1.800.000</h2>
          <h4>niños con enuresis</h4>
          <h4>la mayoría del sexo masculino</h4>
        </template>
      </twin-columns>
      <text-banner class="content__more-about">
        <g-image src="~/assets/ojo-dormido.png" alt="Goodnites"></g-image>
        <h4>Conoce más de este padecimiento en el video de la conferencia Goodnites con nuestras especialistas.</h4>
      </text-banner>
      <text-banner>
        <iframe class="embed-responsive-item pad" src="https://www.youtube.com/embed/5f23QZUUtQE?rel=0" allowfullscreen style="padding: 0 30px; width:100%; height:400px;"></iframe>
      </text-banner>
      <twin-columns class="content__help-your-son">
        <template class="left" v-slot:left>
          <h4>¿Cómo puedes ayudar a tu hijo?</h4>
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
        <p class="yellow">Solicita tu muestra gratis</p>
        <hr>
      </text-banner>
      <text-banner class="perfect-ally">
        <h4>La ropa interior Goodnites será el aliado perfecto <span class="lowercase">para mantener seca su cama</span></h4>
      </text-banner>
      <twin-columns>
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
        <h4>Elige la talla de acuerdo a la edad<br>
        y peso de tu hijo</h4>
      </text-banner>
      <twin-columns class="">
        <template class="left" v-slot:left>
          <g-image src="~/assets/goodnites.png" alt="Goodnites"></g-image>
        </template>
        <template v-slot:right>
          <g-image src="~/assets/tallas-goodnites.png" alt="Goodnites"></g-image>
          <div></div>
        </template>
      </twin-columns>
       <text-banner class="free-sample">
        <p class="light-gray">Solicita tu muestra gratis</p>
        <hr>
      </text-banner>
      <text-banner class="content__cori-morfi">
        <h1>Conoce a<br>Cori y Morfi</h1>
        <h2>los aliados de tu hijo contra la enuresis</h2>
      </text-banner>
      <text-banner>
        <iframe class="embed-responsive-item pad" src="https://www.youtube.com/embed/pHOBv1cmTk8?rel=0" allowfullscreen style="padding: 0 30px; width:100%; height:400px;"></iframe>
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
      title: 'Goodnites® ¿Qué es enuresis?'
    }
  }
</script>

<style lang="scss">

.default-page {
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
}

.header .main-nav__primary {
  display: inline-grid;
  grid-template-columns: auto;
  grid-column-gap: $gutter-xlarge;
}

.hero {
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-position: center center;
  height: rem(673px);
  padding-bottom: $gutter-large;
  .message {
    text-align: center;
    font-family: $text-font;
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
    h4 {
      color: white;
      text-transform: uppercase;
      font-weight: 900;
    }
}

.perfect-ally {
    h4 {
      color: #70c5c8;
      text-transform: uppercase;
      font-weight: 900;
      .lowercase {
        text-transform: lowercase;
      }
  }
}

.content {
  &__what-is {
    background-image: url("../assets/enuresis_portada.png");
    background-size: auto 100%;
    height: rem(320px);
    background-repeat: no-repeat;
    background-position: rem(300px);
      h1 {
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
  
  &__help-your-son {
    .left {
      width: 70%;
      justify-self: end;
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
  &__cori-morfi {
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

.how {
  h4 {
    color: #fae736;
    text-transform: uppercase;
    font-weight: 900;
  }
}

.free-sample {
  .slim-column {
    p {
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
  a {
    color: #70c5c8;
    text-decoration: none;
  }
}


</style>
