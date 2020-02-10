<template>
  <div class="day">
    <div class="day__title">
      {{ title }}
    </div>
    <div class="day__subtitle">
      {{ subtitle }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MeetingsDay from '@/interfaces/MeetingsDay.interface';

@Component
export default class DayDisplay extends Vue {
  @Prop({ required: true })
  readonly meetingsDay!: MeetingsDay;

  @Prop({ required: true })
  readonly daysLabel!: string[];

  @Prop({ required: true })
  readonly monthsLabel!: string[];

  get title(): string {
    const date = new Date(this.meetingsDay.date);
    return this.daysLabel[date.getDay()];
  }

  get subtitle(): string {
    const date = new Date(this.meetingsDay.date);
    return `${date.getDate()} ${this.monthsLabel[date.getMonth()]}`;
  }
}
</script>

<style scoped lang="scss">
$--color-font: #131516;

.day {
  color: $--color-font;
  &__title {
    font-size: 16px;
    font-weight: 700;
  }
  &__subtitle {
    font-size: 14px;
  }
}
</style>
