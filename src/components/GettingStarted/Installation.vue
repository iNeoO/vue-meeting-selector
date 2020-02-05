<template>
  <div id="installation" class="installation">
    <h3>
      <a href="#installation">#</a>
      Instalation
    </h3>
    <h6>Dependencies</h6>
    <ul>
      <li>
        required: Vuejs >= 2.6.x
      </li>
    </ul>
    <p>
      <highlight-code lang="bash">
        $ npm install vue-meeting-selector --save
      </highlight-code>
      or
      <highlight-code lang="bash">
        $ yarn add vue-meeting-selector
      </highlight-code>
    </p>
    <p>
      In your component
      <highlight-code lang="javascript">
        {{ imports }}
      </highlight-code>
    </p>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'Instalation',
})
export default class Instalation extends Vue {
  get imports():string {
    return `
      import VueMeetingSelector from 'vue-meeting-selector';
    `;
  }
}
</script>

<style scoped lang="scss">
.installation {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
