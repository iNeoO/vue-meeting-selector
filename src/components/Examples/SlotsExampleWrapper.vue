<template>
  <div id="slotsexample" class="slots-example-wrapper">
    <h3>
      <a href="#slotsexample">#</a>
      Slots and scopedSlots example
    </h3>
    <p>full code is available on
      <a
        target="_blank"
        href="https://github.com/IneoO/vue-meeting-selector/blob/master/src/components/Examples/SlotsExample.vue">
        src/components/Examples/SlotsExample.vue
      </a>
    </p>
    <slots-Example />
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
import SlotsExample from '@/components/Examples/SlotsExample.vue';
import code from '@/exampleCodes/SlotsExample.code';

@Component({
  name: 'SimpleExampleWrapper',
  components: {
    SlotsExample,
  },
})
export default class SimpleExampleWrapper extends Vue {
  get code() {
    return code;
  }
}
</script>

<style scoped lang="scss">
.slots-example-wrapper {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
