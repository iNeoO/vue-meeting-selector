<template>
  <i class="vms-icon" :class="iconDirectionClass" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class DayDisplay extends Vue {
  @Prop({ default: 'right' })
  readonly direction!: string;

  get iconDirectionClass() {
    return `vms-icon-${this.direction}`;
  }
}
</script>

<style scoped lang="scss">
.vms-icon {
  font-size: 25px;
}
</style>
