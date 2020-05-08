import DefaultLayout from '~/layouts/Default.vue';


import SimpleHeader from '@lkmx/flare/src/components/headers/simple/SimpleHeader';
import SimpleHero from '@lkmx/flare/src/components/heroes/SimpleHero';
import TextBanner from '@lkmx/flare/src/components/blocks/TextBanner';

import NoColumn from '@lkmx/flare/src/components/columns/NoColumn';
import SingleColumn from '@lkmx/flare/src/components/columns/SlimColumn';
import SlimColumn from '@lkmx/flare/src/components/columns/SingleColumn';

import DefaultPage from '~/layouts/pages/DefaultPage.vue';

import '~/sass/styles.scss';

require('typeface-nunito');


export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('DefaultPage', DefaultPage);
  Vue.component('SimpleHeader', SimpleHeader);
  Vue.component('SimpleHero', SimpleHero);
  Vue.component('TextBanner', TextBanner);
  
  Vue.component('NoColumn', NoColumn);
  Vue.component('SingleColumn', SingleColumn);
  Vue.component('SlimColumn', SlimColumn);
}
