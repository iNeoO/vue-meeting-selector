<template>
  <div id="simpleexample" class="simple-example-wrapper">
    <h3>
      <a href="#simpleexample">#</a>
      Simple example
    </h3>
    <p>Full code is available on
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/IneoO/vue-meeting-selector/blob/master/src/components/Examples/SimpleExample.vue">
        src/components/Examples/SimpleExample.vue
      </a>
    </p>
    <simple-example />
    <h5>Code</h5>
    <highlightjs lang="xml" :code="code" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SimpleExample from '@/components/Examples/SimpleExample.vue';

import code from '@/exampleCodes/SimpleExample.code';

export default defineComponent({
  name: 'SimpleExampleWrapper',
  components: {
    SimpleExample,
  },
  setup() {
    return {
      code,
    };
  },
});
</script>

<style scoped lang="scss">
.simple-example-wrapper {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
