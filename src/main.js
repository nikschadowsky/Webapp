import { createApp } from 'vue'
import App from './App.vue' 

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
import './assets/visuals.css'

gsap.registerPlugin(ScrollTrigger);

app.config.globalProperties.$gsap = gsap;
app.config.globalProperties.$scrolltrigger = ScrollTrigger;
app.config.globalProperties.$contact = "mailto:info@nikschadowsky.de";

app.mount("#app")