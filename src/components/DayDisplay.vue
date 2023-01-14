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
import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue';

import type MeetingsDay from '../interfaces/MeetingsDay.interface';

export default defineComponent({
  name: 'DayDisplay',
  props: {
    meetingsDay: {
      type: Object as PropType<MeetingsDay>,
      required: true,
    },
    daysLabel: {
      type: Array,
      required: true,
    },
    monthsLabel: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const title = computed(() => {
      const date = new Date(props.meetingsDay.date);
      return props.daysLabel[date.getDay()];
    });

    const subtitle = computed(() => {
      const date = new Date(props.meetingsDay.date);
      return `${date.getDate()} ${props.monthsLabel[date.getMonth()]}`;
    });

    return {
      title,
      subtitle,
    };
  },
});
</script>

<style scoped lang="scss">
$color-font: #131516;

.day {
  color: $color-font;
  &__title {
    font-size: 16px;
    font-weight: 700;
  }
  &__subtitle {
    font-size: 14px;
  }
}
</style>
