<template>
  <div class="meetings">
    <template v-if="$slots.meeting">
      <div
        v-for="(slot, index) in meetingsDay.slots"
        :key="index">
      <slot
        name="meeting"
        :meeting="slot" />
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
import { defineComponent, PropType } from 'vue';

import MeetingsDay from '@/interfaces/MeetingsDay.interface';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';

import MeetingDisplay from '@/components/MeetingSelector/MeetingDisplay.vue';

export default defineComponent({
  name: 'meetings',
  components: {
    MeetingDisplay,
  },
  props: {
    meetingsDay: {
      type: Object as PropType<MeetingsDay>,
      default: null,
    },
    meetingSlotSelected: {
      type: [Array, Object],
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
