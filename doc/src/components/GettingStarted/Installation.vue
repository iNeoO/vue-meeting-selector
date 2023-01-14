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
      <highlightjs lang="bash" :code="install" />
    </p>
    <p>
      In your component
      <highlightjs lang="javascript" :code="imports" />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Installation',
  setup() {
    const imports = 'import VueMeetingSelector from \'vue-meeting-selector\';';
    const install = '$ npm install vue-meeting-selector --save';

    return {
      imports,
      install,
    };
  },
});
</script>

<style scoped lang="scss">
.installation {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
