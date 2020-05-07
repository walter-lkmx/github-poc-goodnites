import DefaultLayout from '~/layouts/Default.vue'

import '~/sass/styles.scss' // This doesn't not work for some reason

export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout)
}
