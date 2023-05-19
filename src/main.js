import { createApp } from 'vue'
import App from './App.vue' 

const app = createApp(App)

import { ObserveVisibility } from 'vue-observe-visibility';
app.directive('observe-visibility', {
  beforeMount: (el, binding, vnode) => {
    vnode.context = binding.instance;
    ObserveVisibility.bind(el, binding, vnode);
  },
  update: ObserveVisibility.update,
  unmounted: ObserveVisibility.unbind,
});

import './assets/base.css'
import './assets/animation.css'
import './assets/scrollbar.css'
import './assets/about.css'
import './assets/visuals.css'

addEventListener("scroll", () => {
  //console.log(scrollY);
})

app.mount("#app")