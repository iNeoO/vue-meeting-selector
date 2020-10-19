<template>
  <div id="simplemultiexample" class="simple-multi-example-wrapper">
    <h3>
      <a href="#simplemultiexample">#</a>
      Simple multi example
    </h3>
    <p>Full code is available on
      <a
        target="_blank"
        href="https://github.com/IneoO/vue-meeting-selector/blob/master/src/components/Examples/SimpleMultiExample.vue">
        src/components/Examples/SimpleMultiExample.vue
      </a>
    </p>
    <simple-Example />
    <h5>Code</h5>
    <highlight-code lang="vue">
      {{ code }}
    </highlight-code>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import SimpleExample from '@/components/Examples/SimpleMultiExample.vue';
import code from '@/exampleCodes/SimpleExample.code';

@Component({
  name: 'SimpleExampleWrapper',
  components: {
    SimpleExample,
  },
})
export default class SimpleExampleWrapper extends Vue {
  get code() {
    return code;
  }
}
</script>

<style scoped lang="scss">
.simple-example-multi-wrapper {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
