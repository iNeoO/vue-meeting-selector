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
import { defineComponent, PropType, computed } from 'vue';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';

export default defineComponent({
  name: 'meetingsDisplay',
  props: {
    meetingSlot: {
      type: Object as PropType<MeetingSlot>,
      required: true,
    },
    meetingSlotSelected: {
      type: [Array, Object],
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
    const time = computed((): string => {
      const date = new Date((props.meetingSlotSelected as MeetingSlot).date);
      const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
      const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
      return `${hours}:${minutes}`;
    });

    const isMeetingSelected = computed(():boolean => {
      if (Array.isArray(props.meetingSlotSelected)) {
        const date:number = new Date(props.meetingSlot.date).getTime();
        for (const slot of props.meetingSlotSelected) {
          const d = new Date((slot as MeetingSlot).date);
          if (d.getTime() === date) {
            return true;
          }
        }
        return false;
      }
      if (props.meetingSlotSelected && (props.meetingSlotSelected as MeetingSlot).date) {
        const meetingSelectedDate = new Date((props.meetingSlotSelected as MeetingSlot).date);
        const meetingDate = new Date(props.meetingSlot.date);
        return meetingSelectedDate.getTime() === meetingDate.getTime();
      }
      return false;
    });

    const meetingClass = computed((): {[x: string]: boolean; 'meeting__button--selected': boolean;} => ({
      [props.meetingButtonClass]: true,
      'meeting__button--selected': isMeetingSelected.value,
    }));

    const meetingSlotClick = (): void => {
      context.emit('meeting-slot-click', props.meetingSlot);
    };

    return {
      meetingClass,
      time,
      meetingSlotClick,
    };
  },
});

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
