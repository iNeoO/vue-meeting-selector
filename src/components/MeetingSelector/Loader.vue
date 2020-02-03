<template>
  <i class="icon-loader" />
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'Loader',
})
export default class VueMeetingSelector extends Vue {}
</script>

<style scoped lang="scss">
.icon-loader::before {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% {
    transform:rotate(360deg);
  }
}
</style>
