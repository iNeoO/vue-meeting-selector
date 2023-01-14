export const calendarOptions = `interface CalendarOptions {
  daysLabel: string[]; // Labels for days in title, start by sunday
  monthsLabel: string[]; // labels for months in title, start by january
  limit: number, // max nb meetings to display on a same column
  loadingLabel: string; // label to display when loading
  disabledDate: Function; // function to disable left button (date is passed as params)
}`;

export const classNames = `interface ClassNames {
  tabClass?: string,
  tabPaginationleft?: string,
  tabPaginationPreviousButton?: string,
  tabPaginationRight?: string,
  tabPaginationNextButton?: string,
  tabPaginationUpButton?: string,
  tabPaginationDownButton?: string,
  tabDays?: string,
  tabDayDisplay?: string,
  tabMeetings?: string,
  tabMeeting?: string,
  tabMeetingButton?: string,
  tabMeetingEmpty?: string,
  tabEmpty?: string,
}`;

export const meetingsDay = `interface MeetingsDay {
  date: Date | string;
  slots: MeetingSlot[];
  [key: string]: any;
}`;

export const meetingSlot = `interface MeetingSlot {
  date: Date | string;
  [key: string]: any;
}`;

export const header = `<template #header="{ meetings }">
  <div>{{ meetings.date }}</div>
</template>`;

export const nextAndPrevious = `<template #button-previous>
  <button
    @click="previous">
    previous
  </button>
  </template>
  <template #button-next>
  <button
    @click="next">
    next
  </button>
</template>`;

export const upAndDown = `<template #button-up="{ isDisabled }">
  <button
    :disabled="isDisabled"
    @click="up">
    up
  </button>
</template>
<template
  #button-down="{ isDisabled }">
  <button
    :disabled="isDisabled"
    @click="down">
    down
  </button>
</template>

<${''}script>
  export default {
  methods: {
    up() {
      this.$refs.meetingSelector.previousMeetings();
      // (this.$refs.meetingSelector as Vue & { previousMeetings: () => void }).previousMeetings();
    },
    down() {
      this.$refs.meetingSelector.nextMeetings();
      // (this.$refs.meetingSelector as Vue & { nextMeetings: () => void }).nextMeetings();
    },
  },
};
</${''}script>`;

export const meeting = `<template #meeting="{ meeting }">
  <div>{{ meeting.date }}</div>
</template>`;

export const loading = `<template #loading>
  Loading ...
</template>`;
