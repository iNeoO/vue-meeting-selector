<template>
  <div id="simplemultiexample" class="simple-multi-example-wrapper">
    <h3>
      <a href="#simplemultiexample">#</a>
      Simple multi example
    </h3>
    <p>Full code is available on
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/IneoO/vue-meeting-selector/blob/master/src/components/Examples/SimpleMultiExample.vue">
        src/components/Examples/SimpleMultiExample.vue
      </a>
    </p>
    <simple-multi-example />
    <h5>Code</h5>
    <highlightjs lang="xml" :code="code" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SimpleMultiExample from '@/components/Examples/SimpleMultiExample.vue';

import code from '@/exampleCodes/SimpleMultiExample.code';

export default defineComponent({
  name: 'SimpleMultiExampleWrapper',
  components: {
    SimpleMultiExample,
  },
  setup() {
    return {
      code,
    };
  },
});
</script>

<style scoped lang="scss">
.simple-multi-example-wrapper {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
