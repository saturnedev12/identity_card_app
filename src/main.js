import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import WebCam from "vue-web-cam";
import { loadFonts } from './plugins/webfontloader'

import router from './router';

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(WebCam)
  .mount('#app')
