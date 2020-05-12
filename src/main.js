import DefaultLayout from '~/layouts/Default.vue';

import SimpleHeader from '@lkmx/flare/src/components/headers/simple/SimpleHeader';
import SimpleNavItem from '@lkmx/flare/src/components/navigation/simple/SimpleNavItem';
import SimpleHero from '@lkmx/flare/src/components/heroes/SimpleHero';
import TextBanner from '@lkmx/flare/src/components/blocks/TextBanner';

import TwinColumns from '~/components/columns/TwinColumns.vue';

import NoColumn from '@lkmx/flare/src/components/columns/NoColumn';
import SingleColumn from '@lkmx/flare/src/components/columns/SingleColumn';
import SlimColumn from '@lkmx/flare/src/components/columns/SlimColumn';

import DefaultPage from '~/layouts/pages/DefaultPage.vue';

import '~/sass/styles.scss';

require('typeface-nunito');


export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('DefaultPage', DefaultPage);
  Vue.component('SimpleHeader', SimpleHeader);
  Vue.component('SimpleNavItem', SimpleNavItem);
  Vue.component('SimpleHero', SimpleHero);
  Vue.component('TextBanner', TextBanner);

  Vue.component('TwinColumns', TwinColumns);
  
  Vue.component('NoColumn', NoColumn);
  Vue.component('SingleColumn', SingleColumn);
  Vue.component('SlimColumn', SlimColumn);

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
