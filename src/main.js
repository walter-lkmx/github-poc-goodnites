import DefaultLayout from '~/layouts/Default.vue';

// components

import SimpleHeader from '@lkmx/flare/src/components/headers/simple-header/SimpleHeader';

import TextBanner from '@lkmx/flare/src/components/blocks/text-banner/TextBanner';

import SimpleNavItem from '@lkmx/flare/src/components/navigation/simple-navigation/SimpleNavItem';

import SimpleHero from '@lkmx/flare/src/components/heroes/simple-hero/SimpleHero';

import SimpleFooter from '@lkmx/flare/src/components/footers/simple-footer/SimpleFooter';


// structures columns
import NoColumn from '@lkmx/flare/src/structures/columns/no-column/NoColumn';
import SingleColumn from '@lkmx/flare/src/structures/columns/single-column/SingleColumn';
import SlimColumn from '@lkmx/flare/src/structures/columns/slim-column/SlimColumn';

// structures pages
import BasePage from '@lkmx/flare/src/structures/pages/base-page/BasePage';

// structures columns
import TwinColumns from '@lkmx/flare/src/structures/columns/twin-columns/TwinColumns';


import '~/sass/styles.scss';

require('typeface-nunito');


export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('BasePage', BasePage);
  Vue.component('SimpleHeader', SimpleHeader);
  Vue.component('SimpleNavItem', SimpleNavItem);
  Vue.component('SimpleHero', SimpleHero);
  Vue.component('TextBanner', TextBanner);
  Vue.component('SimpleFooter', SimpleFooter);

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
