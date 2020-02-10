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
import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';

import MeetingsDay from '@/interfaces/MeetingsDay.interface';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';

import MeetingDisplay from '@/components/MeetingSelector/MeetingDisplay.vue';

@Component({
  name: 'meetings',
  components: {
    MeetingDisplay,
  },
})
export default class DayDisplay extends Vue {
  @Prop({ required: true })
  readonly meetingsDay!: MeetingsDay;

  @Prop({ default: () => ({}) })
  readonly meetingSlotSelected!: MeetingSlot;

  @Prop({ default: '' })
  readonly meetingClass!: string;

  @Prop({ default: '' })
  readonly meetingButtonClass!: string;

  @Prop({ default: '' })
  readonly meetingEmptyClass!: string;

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
