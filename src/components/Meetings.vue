<template>
  <div class="meetings">
    <template v-if="$slots.meeting">
      <div
        v-for="(slot, index) in meetingsDay.slots"
        :key="index">
        <slot name="meeting" :meeting="slot" />
      </div>
    </template>
    <meeting-display
      v-else
      v-for="(slot, index) in meetingsDay.slots"
      :class="meetingClass"
      :meeting-button-class="meetingButtonClass"
      :meeting-empty-class="meetingEmptyClass"
      :meeting-slot="slot"
      :meeting-slot-selected="meetingSlotSelected"
      @meeting-slot-click="meetingSlotClick"
      :key="index" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import MeetingDisplay from './MeetingDisplay.vue';

import type MeetingsDay from '../interfaces/MeetingsDay.interface';
import type MeetingSlot from '../interfaces/MeetingSlot.interface';

export default defineComponent({
  name: 'MeetingsList',
  components: {
    MeetingDisplay,
  },
  props: {
    meetingsDay: {
      type: Object as PropType<MeetingsDay>,
      default: null,
    },
    meetingSlotSelected: {
      type: [Array, Object, null] as PropType<MeetingSlot[] | MeetingSlot | null>,
      required: true,
    },
    meetingClass: {
      type: String,
      default: '',
    },
    meetingButtonClass: {
      type: String,
      default: '',
    },
    meetingEmptyClass: {
      type: String,
      default: '',
    },
  },
  emits: ['meeting-slot-click'],
  setup(props, context) {
    const meetingSlotClick = (meetingSlot: MeetingSlot): void => {
      context.emit('meeting-slot-click', meetingSlot);
    };
    return {
      meetingSlotClick,
    };
  },
});
</script>

<style scoped lang="scss">
.meetings {
  display: flex;
  flex-direction: column;
}
</style>
