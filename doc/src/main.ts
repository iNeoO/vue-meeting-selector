import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import hljsVuePlugin from '@highlightjs/vue-plugin';

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

import Doc from '@/App.vue';

library.add(faGithub);
library.add(faNpm);
library.add(faChevronUp);
library.add(faChevronDown);
library.add(faChevronLeft);
library.add(faChevronRight);

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('xml', xml);

const app = createApp(Doc);
app.use(createPinia());
app.use(hljsVuePlugin);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
