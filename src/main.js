import DefaultLayout from '~/layouts/DefaultLayout.vue';
import Flare from '@lkmx/flare/src/main'

import '~/sass/styles.scss';

require('typeface-nunito');


export default function (Vue, {router, head, isClient}) {
  Vue.use(Flare)
  Vue.component('Layout', DefaultLayout)
  

  // Add a meta tag
  head.meta.push({
    name: 'description',
    content: 'PoC using Jamstack'
  })

  head.meta.push(
    {
      key: 'og:title',
      property: 'og:title',
      content: 'Goodnites® ¿Qué es enuresis?'
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: 'Si tu hijo tiene más de 5 años y se hace pipí en la cama, es posible que padezca Enuresis. ¡No te asustes! La ropa interior desechable para niños Goodnites® es tu aliado para mantener seca su cama.'
    },
    {
      key: 'og:image',
      property: 'og:image',
      content: 'https://gallant-leakey-56ab2c.netlify.app/assets/img/hero.0dbe11b4.jpg'
    }
  )
  
}
