import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import 'vue-highlight.js/lib/allLanguages';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'cirrus-ui/dist/cirrus.min.css';
import '@/assets/scss/style.scss';
import 'highlight.js/styles/default.css';

import Doc from './Doc.vue';
import store from './store';

Vue.use(VueHighlightJS);

library.add(faGithub);
library.add(faNpm);
library.add(faChevronUp);
library.add(faChevronDown);
library.add(faChevronLeft);
library.add(faChevronRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Doc),
}).$mount('#app');
