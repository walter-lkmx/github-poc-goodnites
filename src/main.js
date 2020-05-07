import DefaultLayout from '~/layouts/Default.vue';


import SimpleHeader from '@lkmx/flare/src/components/headers/simple/SimpleHeader';

import DefaultPage from '~/layouts/pages/DefaultPage.vue';


export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('DefaultPage', DefaultPage);
  Vue.component('SimpleHeader', SimpleHeader);
}
