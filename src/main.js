import { createApp } from 'vue'
import App from './App.vue' 
import VueObserveVisibility from 'vue-observe-visibility'

import './assets/base.css'

const app = createApp(App)
app.use(VueObserveVisibility)
app.mount("#app")