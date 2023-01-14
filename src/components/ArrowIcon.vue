<template>
  <i class="vms-icon" :class="iconDirectionClass" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'ArrowIcon',
  props: {
    direction: {
      type: String,
      default: 'right',
    },
  },
  setup(props) {
    const iconDirectionClass = computed(() => `vms-icon-${props.direction}`);

    return {
      iconDirectionClass,
    };
  },
});
</script>

<style scoped lang="scss">
.vms-icon {
  font-size: 25px;
}
</style>
