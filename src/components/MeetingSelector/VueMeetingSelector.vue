<template>
  <div class="meeting-selector">
    <div
      class="tab"
      :class="cssClass.tabClass">
      <div
        class="tab__pagination"
        :class="cssClass.tabPaginationPrevious">
        <slot
          v-if="$slots['button-previous']"
          name="button-previous" />
        <button
          v-else
          :disabled="options.disabledDate(date) || loading"
          class="tab__pagination__button"
          :class="cssClass.tabPaginationPreviousButton"
          @click="previousDate">
          <arrow-icon direction="left"/>
        </button>
      </div>
      <div class="tab__days">
        <div
          class="tab__day"
          :class="tabDaysClass(index)"
          v-for="(meetingsByDay, index) in meetingsByDays"
          :key="String(meetingsByDay.date)">
          <slot
            v-if="$scopedSlots.header"
            name="header"
            :meetings="meetingsByDay" />
          <day-display
            v-else
            class="tab__days__day-display"
            :class="cssClass.tabDayDisplay"
            :meetings-day="meetingsByDay"
            :months-label="options.monthsLabel"
            :days-label="options.daysLabel"
          />
          <meetings
            class="tab__days__meetings"
            :class="cssClass.tabMeetings"
            :meeting-class="cssClass.tabMeeting"
            :meeting-button-class="cssClass.tabMeetingButton"
            :meeting-empty-class="cssClass.tabMeetingEmpty"
            :meetings-day="meetingsByDay"
            :meeting-slot-selected="meetingSlot"
            @meeting-slot-click="meetingSlotClick">
            <template #meeting="{ meeting }" v-if="$scopedSlots.meeting">
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
          v-if="$slots['button-next']"
          name="button-next" />
        <button
          v-else
          class="tab__pagination__button tab__pagination__button--right"
          :disabled="loading"
          :class="cssClass.tabPaginationNextButton"
          @click="nextDate">
          <arrow-icon direction="right"/>
        </button>
        <slot
          v-if="$scopedSlots['button-up']"
          name="button-up"
          :is-disabled="skip === 0 || loading" />
        <button
          v-else
          :class="cssClass.tabPaginationUpButton"
          :disabled="skip === 0 || loading"
          @click="previousMeetings"
          class="tab__pagination__button tab__pagination__button--up">
          <arrow-icon direction="up"/>
        </button>
        <slot
          v-if="$scopedSlots['button-down']"
          name="button-down"
          :is-disabled="(skip + options.limit >= maxNbMeetings) || loading" />
        <button
          v-else
          :class="cssClass.tabPaginationDownButton"
          :disabled="(skip + options.limit >= maxNbMeetings) || loading"
          @click="nextMeetings"
          class="tab__pagination__button tab__pagination__button--down">
          <arrow-icon direction="down"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {
  Component,
  Model,
  Prop,
  PropSync,
  Vue,
  Watch,
} from 'vue-property-decorator';

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


@Component({
  name: 'VueMeetingSelector',
  components: {
    Meetings,
    DayDisplay,
    ArrowIcon,
    Loader,
  },
})
export default class VueMeetingSelector extends Vue {
  private skip = 0

  @Model('change', { type: Object })
  meetingSlot!: MeetingSlot | undefined

  @PropSync('date', { type: Date })
  syncedDate!: Date

  @Prop({ required: true })
  readonly meetingsDays!: MeetingsDay[];

  @Prop({ default: () => ({}) })
  readonly calendarOptions!: CalendarOptions;

  @Prop({ default: () => ({}) })
  readonly classNames!: ClassNames;

  @Prop({ default: false })
  readonly loading!: boolean;

  get days(): string[] {
    const { daysLabel } = this.options;
    return this.meetingsDays.map((meetingsDay) => {
      const date = new Date(meetingsDay.date);
      return daysLabel[date.getDay()];
    });
  }

  get maxNbMeetings(): number {
    if (this.meetingsDays.length) {
      return Math.max(...this.meetingsDays.map(meetingsDay => meetingsDay.slots.length));
    }
    return 0;
  }

  get meetingsByDays(): MeetingsDay[] {
    const arrayIndex = Math.ceil(this.maxNbMeetings / this.options.limit)
      * this.options.limit;
    return this.meetingsDays.map((meetingsDay) => {
      const slots = new Array(arrayIndex).fill({ date: '' });
      slots.splice(0, meetingsDay.slots.length, ...meetingsDay.slots);
      const day = {
        ...meetingsDay,
        slots: slots.slice(this.skip, this.skip + this.options.limit),
      };
      return day;
    });
  }

  get options(): CalendarOptions {
    return {
      ...defaultCalendarOptions,
      ...this.calendarOptions,
    };
  }

  get cssClass(): ClassNames {
    return {
      ...defaultClassNames,
      ...this.classNames,
    };
  }

  tabDaysClass(index: number): string {
    return index + 1 === this.meetingsByDays.length
      ? `tab__days--last ${this.cssClass.tabMeetings}`
      : this.cssClass.tabMeetings || '';
  }

  nextMeetings(): void {
    this.skip += this.options.limit;
  }

  previousMeetings(): void {
    this.skip -= this.options.limit;
  }

  previousDate(): void {
    this.$emit('previous-date');
  }

  nextDate(): void {
    this.$emit('next-date');
  }

  meetingSlotClick(meetingSlot: MeetingsDay): void {
    if (this.meetingSlot) {
      const selectedDate = new Date(meetingSlot.date);
      const date = new Date(this.meetingSlot.date);
      if (date.getTime() === selectedDate.getTime()) {
        this.$emit('change', undefined);
        this.$emit('meeting-slot-unselected');
        return;
      }
    }
    this.$emit('change', meetingSlot);
    this.$emit('meeting-slot-selected', meetingSlot);
  }

  @Watch('date')
  onDateChanged() {
    this.skip = 0;
  }
}
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
