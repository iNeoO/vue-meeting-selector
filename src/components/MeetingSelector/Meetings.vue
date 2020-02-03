<template>
  <div class="meetings">
    <template v-if="$scopedSlots.meeting">
      <div
        v-for="(slot, index) in meetingsDay.slots"
        :key="index">
      <slot
        name="meeting"
        :meeting="slot" />
      </div>
    </template>
    <component
      :is="meetingDisplayComponent"
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
import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';

import MeetingsDay from '@/interfaces/MeetingsDay.interface';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';

@Component({
  name: 'meetings',
})
export default class DayDisplay extends Vue {
  @Prop({ default: () => [] })
  readonly meetingsDay!: MeetingsDay;

  @Prop({ default: () => ({}) })
  readonly meetingSlotSelected!: MeetingSlot;

  @Prop({ default: '' })
  readonly meetingClass!: string;

  @Prop({ default: '' })
  readonly meetingButtonClass!: string;

  @Prop({ default: '' })
  readonly meetingEmptyClass!: string;

  get meetingDisplayComponent() {
    return () => import('./MeetingDisplay.vue');
  }

  meetingSlotClick(meetingSlot: MeetingsDay): void {
    this.$emit('meeting-slot-click', meetingSlot);
  }
}
</script>

<style scoped lang="scss">
.meetings {
  display: flex;
  flex-direction: column;
}
</style>
