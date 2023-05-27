import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  ssr: true
});

export default defineNuxtPlugin(nuxtApp => {
  // Vue.js で Vuetify を使用する
  nuxtApp.vueApp.use(vuetify)
});
