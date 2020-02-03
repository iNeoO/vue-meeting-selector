<template>
  <div id="simpleexample" class="simple-example-wrapper">
    <h3>
      <a href="#simpleexample">#</a>
      Simple example
    </h3>
    <p>Full code is available on
      <a
        target="_blank"
        href="https://github.com/IneoO/vue-meeting-selector/blob/master/src/components/Examples/SimpleExample.vue">
        src/components/Examples/SimpleExample.vue
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
import SimpleExample from '@/components/Examples/SimpleExample.vue';
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
.simple-example-wrapper {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
