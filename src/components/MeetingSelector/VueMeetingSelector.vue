<template>
  <div class="meeting-selector">
    <div
      class="tab"
      :class="cssClass.tabClass">
      <div
        class="tab__pagination"
        :class="cssClass.tabPaginationPrevious">
        <slot
          name="button-previous">
          <button
            type="button"
            :disabled="options.disabledDate(date) || loading"
            class="tab__pagination__button"
            :class="cssClass.tabPaginationPreviousButton"
            @click="previousDate">
            <arrow-icon direction="left"/>
          </button>
        </slot>
      </div>
      <div class="tab__days">
        <div
          class="tab__day"
          :class="tabDaysClass(index)"
          v-for="(meetingsByDay, index) in meetingsByDays"
          :key="String(meetingsByDay.date)">
          <slot
            name="header"
            :meetings="meetingsByDay">
            <day-display
              class="tab__days__day-display"
              :class="cssClass.tabDayDisplay"
              :meetings-day="meetingsByDay"
              :months-label="options.monthsLabel"
              :days-label="options.daysLabel"
            />
          </slot>
          <meetings
            class="tab__days__meetings"
            :class="cssClass.tabMeetings"
            :meeting-class="cssClass.tabMeeting"
            :meeting-button-class="cssClass.tabMeetingButton"
            :meeting-empty-class="cssClass.tabMeetingEmpty"
            :meetings-day="meetingsByDay"
            :meeting-slot-selected="modelValue"
            @meeting-slot-click="meetingSlotClick">
            <template #meeting="{ meeting }" v-if="$slots.meeting">
              <slot
                name="meeting"
                :meeting="meeting">
              </slot>
            </template>
          </meetings>
        </div>
        <div
          v-if="loading"
          class="tab__loading"
          :class="cssClass.tabLoading">
          <slot
            v-if="$slots['loading']"
            name="loading" />
            <div
              v-else
              class="tab__loading__text">
              <loader />
              {{ options.loadingLabel }}
            </div>
        </div>
      </div>
      <div
        class="tab__pagination"
        :class="cssClass.tabPaginationNext">
        <slot
          name="button-next">
          <button
            type="button"
            class="tab__pagination__button tab__pagination__button--right"
            :disabled="loading"
            :class="cssClass.tabPaginationNextButton"
            @click="nextDate">
            <arrow-icon direction="right"/>
          </button>
        </slot>
        <slot
          name="button-up"
          :is-disabled="skip === 0 || loading">
          <button
            type="button"
            :class="cssClass.tabPaginationUpButton"
            :disabled="skip === 0 || loading"
            @click="previousMeetings"
            class="tab__pagination__button tab__pagination__button--up">
            <arrow-icon direction="up"/>
          </button>
        </slot>
        <slot
          name="button-down"
          :is-disabled="(skip + options.limit >= maxNbMeetings) || loading">
          <button
            type="button"
            :class="cssClass.tabPaginationDownButton"
            :disabled="(skip + options.limit >= maxNbMeetings) || loading"
            @click="nextMeetings"
            class="tab__pagination__button tab__pagination__button--down">
            <arrow-icon direction="down"/>
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
} from 'vue';

import '@/assets/css/icons-font.css';

import MeetingsDay from '@/interfaces/MeetingsDay.interface';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';
import CalendarOptions from '@/interfaces/CalendarOptions.interface';
import ClassNames from '@/interfaces/ClassNames.interface';

import Meetings from '@/components/MeetingSelector/Meetings.vue';
import DayDisplay from '@/components/MeetingSelector/DayDisplay.vue';
import ArrowIcon from '@/components/MeetingSelector/ArrowIcon.vue';
import Loader from '@/components/MeetingSelector/Loader.vue';

import defaultCalendarOptions from '@/defaults/calendarOptions';
import defaultClassNames from '@/defaults/classNames';

export default defineComponent({
  name: 'meetingSelector',
  components: {
    Meetings,
    DayDisplay,
    ArrowIcon,
    Loader,
  },
  props: {
    modelValue: {
      required: true,
    },
    date: {
      type: Date,
    },
    meetingsDays: {
      type: Array as () => Array<MeetingsDay>,
      requied: true,
    },
    calendarOptions: {
      type: Object as PropType<CalendarOptions>,
      default: () => ({}),
    },
    classNames: {
      type: Object as PropType<ClassNames>,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    multi: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'previous-date',
    'next-date',
    'meeting-slot-selected',
    'change',
    'meeting-slot-unselected',
    'update:modelValue',
  ],
  setup(props, context) {
    const skip = ref(0);

    const options = computed((): CalendarOptions => ({
      ...defaultCalendarOptions,
      ...props.calendarOptions,
    }));

    const cssClass = computed((): ClassNames => ({
      ...defaultClassNames,
      ...props.classNames,
    }));

    const maxNbMeetings = computed((): number => {
      if (props.meetingsDays && props.meetingsDays.length) {
        return Math.max(...props.meetingsDays.map((meetingsDay) => meetingsDay.slots.length));
      }
      return 0;
    });

    const meetingsByDays = computed((): MeetingsDay[] => {
      const arrayIndex = Math.ceil(maxNbMeetings.value / options.value.limit)
        * options.value.limit;
      if (props.meetingsDays) {
        return props.meetingsDays.map((meetingsDay) => {
          const slots = new Array(arrayIndex).fill({ date: '' });
          slots.splice(0, meetingsDay.slots.length, ...meetingsDay.slots);
          const day = {
            ...meetingsDay,
            slots: slots.slice(skip.value, skip.value + options.value.limit),
          };
          return day;
        });
      }
      return [];
    });

    const days = computed((): string[] => {
      const { daysLabel } = options.value;
      if (props.meetingsDays) {
        return props.meetingsDays.map((meetingsDay) => {
          const date = new Date(meetingsDay.date);
          return daysLabel[date.getDay()];
        });
      }
      return [];
    });

    const nextMeetings = (): void => {
      skip.value += options.value.limit;
    };

    const previousMeetings = (): void => {
      skip.value -= options.value.limit;
    };

    const previousDate = (): void => {
      context.emit('previous-date');
    };

    const nextDate = (): void => {
      context.emit('next-date');
    };

    const tabDaysClass = (index: number): string => (index + 1 === meetingsByDays.value.length
      ? `tab__days--last ${cssClass.value.tabMeetings}`
      : cssClass.value.tabMeetings || '');

    const meetingSlotClick = (meetingSlotClicked: MeetingSlot): void => {
      if (props.multi && Array.isArray(props.modelValue)) {
        const selectedDate:number = new Date(meetingSlotClicked.date).getTime();
        const index:number = props.modelValue.findIndex((s: MeetingSlot) => {
          const date = new Date(s.date);
          return date.getTime() === selectedDate;
        });
        const slots = [...props.modelValue];
        if (index !== -1) {
          slots.splice(index, 1);
          context.emit('change', slots);
          context.emit('meeting-slot-selected', slots);
          context.emit('update:modelValue', slots);
        } else {
          slots.push(meetingSlotClicked);
          context.emit('change', slots);
          context.emit('meeting-slot-selected', slots);
          context.emit('update:modelValue', slots);
        }
        return;
      }
      if (props.modelValue) {
        const selectedDate = new Date(meetingSlotClicked.date);
        const date = new Date((props.modelValue as MeetingSlot).date);
        if (date.getTime() === selectedDate.getTime()) {
          context.emit('change', undefined);
          context.emit('meeting-slot-unselected');
          context.emit('update:modelValue');
          return;
        }
      }
      context.emit('change', meetingSlotClicked);
      context.emit('meeting-slot-selected', meetingSlotClicked);
      context.emit('update:modelValue', meetingSlotClicked);
    };

    return {
      skip,
      options,
      cssClass,
      tabDaysClass,
      maxNbMeetings,
      meetingsByDays,
      days,
      nextMeetings,
      previousMeetings,
      previousDate,
      nextDate,
      meetingSlotClick,
    };
  },
});
</script>

<style scoped lang="scss">
$--color-border: #EBEEF5;
$--color-button: #39ADEE;
$--color-button-hover: #6696BB;

.meeting-selector {
  position: relative;
  .tab {
    display: flex;
    &__days {
      position: relative;
      padding: 0 5px;
      flex: 1;
      display: flex;
    }
    &__day {
      flex: 1 1 0;
      flex-wrap: nowrap;
      text-align: center;
      border-bottom: 1px solid $--color-border;
      &__day-display {
        padding: 0 5px 5px 5px;
        border-bottom: 1px solid $--color-border;
      }
    }
    &__pagination {
      width: 30px;
      &__button {
        margin-top: 8px;
        padding: 0;
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: $--color-button;
        &:hover {
          color: $--color-button-hover;
        }
        &:disabled {
          cursor: not-allowed;
          opacity: 0.4;
          &:hover {
            opacity: 0.4;
          }
        }
        &--up {
          margin-top: 20px;
        }
        &--down {
          margin-top: 10px;
        }
        &:focus {
          outline: none;
        }
      }
    }
    &__loading {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 0;
      top: 39px;
      left: 5px;
      right: 5px;
      background-color: $--color-border;
      &__text {
        font-size: 20px;
      }
    }
  }
}
</style>
