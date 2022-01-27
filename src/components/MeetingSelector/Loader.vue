<template>
  <i class="vms-icon-loader" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'loader',
});
</script>

<style scoped lang="scss">
.vms-icon-loader::before {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% {
    transform:rotate(360deg);
  }
}
</style>
