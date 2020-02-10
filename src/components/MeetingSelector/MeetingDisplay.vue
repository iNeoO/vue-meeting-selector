<template>
  <div class="meeting">
    <button
      v-if="meetingSlot.date"
      class="meeting__button"
      :class="meetingClass"
      :disabled="!meetingSlot.date"
      @click="meetingSlotClick">
      {{ time }}
    </button>
    <div
      v-else
      class="meeting__empty"
      :class="meetingEmptyClass">
      &mdash;
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';

import MeetingSlot from '@/interfaces/MeetingSlot.interface';

@Component
export default class MeetingsDisplay extends Vue {
  @Prop({ required: true })
  readonly meetingSlot!: MeetingSlot;

  @Prop({ default: () => ({}) })
  readonly meetingSlotSelected!: MeetingSlot;

  @Prop({ default: '' })
  readonly meetingButtonClass!: string;

  @Prop({ default: '' })
  readonly meetingEmptyClass!: string;

  get meetingClass() {
    return {
      [this.meetingButtonClass]: true,
      'meeting__button--selected': this.isMeetingSelected,
    };
  }

  get time() {
    const date = new Date(this.meetingSlot.date);
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hours}:${minutes}`;
  }

  get isMeetingSelected(): boolean {
    if (this.meetingSlotSelected && this.meetingSlotSelected.date) {
      const meetingSelectedDate = new Date(this.meetingSlotSelected.date);
      const meetingDate = new Date(this.meetingSlot.date);
      return meetingSelectedDate.getTime() === meetingDate.getTime();
    }
    return false;
  }

  @Emit()
  meetingSlotClick() {
    return this.meetingSlot;
  }
}
</script>

<style scoped lang="scss">
$--color-primary: #DFF1FF;
$--color-hover: #B0D7F4;
$--color-focus: #B0D7F4;
$--color-font: #131516;
$--color-empty: #c0c4cc;

.meeting {
  margin-left: auto;
  margin-right: auto;
  &__button {
    background-color: $--color-primary;
    color: $--color-font;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    font-weight: 700;
    margin: 5px 0;
    padding: 10px;
    padding: 10px 12px;
    font-size: 16px;
    &--selected {
      background-color: $--color-focus;
    }
    &:hover {
      background-color: $--color-hover;
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      &:hover {
        background-color: $--color-primary;
      }
    }
  }
  &__empty {
    font-size: 18px;
    margin: 5px 0;
    border-radius: 3px;
    padding: 10px 12px;
    font-weight: 700;
    color: $--color-empty;
  }
}
</style>
