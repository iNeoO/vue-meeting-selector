This component is inspired from the meeting selector from [doctolib](https://www.doctolib.fr/medecin-generaliste/paris) with the power of Vuejs components.

[![Build status](https://travis-ci.org/IneoO/vue-meeting-selector.svg?branch=master)](https://travis-ci.org/IneoO/vue-meeting-selector)
[![Coverage Status](https://coveralls.io/repos/github/iNeoO/vue-meeting-selector/badge.svg?branch=master)](https://coveralls.io/github/iNeoO/vue-meeting-selector?branch=master)

# vue-meeting-selector
- [github](https://github.com/IneoO/vue-meeting-selector)
- [site](https://vue-meeting-selector.tuturu.io)


## Dependencies
- required: Vuejs >= 2.6.x

## Install
```bash
npm install vue-meeting-selector --save
yarn add vue-meeting-selector
```

Include the file in your app
```javascript
import VueMeetingSelector from 'vue-meeting-selector';
```

## Contributing
Issues and PR's are much appreciated.
When you create a new PR please make it against the develop branch when adding new features and to the fix branch when fixing small issues instead of master.

## Usage and Documentation

### Fast exemple
```html
<template>
  <vue-meeting-selector
    v-model="meeting"
    :date="date"
    :loading="loading"
    :meetings-days="meetingsDays"
    @next-date="nextDate"
    @previous-date="previousDate" />
</template>

<script>
import VueMeetingSelector from 'vueMeetingSelector';

export default {
  components: {
    VueMeetingSelector,
  },
  data() {
    return {
      date: new Date('2020-01-01:01:00'),
      meeting: null,
      loading: false,
      meetingsDays: [],
    };
  },
  methods: {
    getMeetings(date) {
      // methods who return the meetings
    },
    async nextDate() {
      this.loading = true;
      const date = new Date(this.date);
      date.setDate(date.getDate() + 7);
      this.meetingsDays = await this.getMeetings(date);
      this.date = date;
      this.loading = false;
    },
    async previousDate() {
      this.loading = true;
      const date = new Date(this.date);
      date.setDate(date.getDate() - 7);
      this.meetingsDays = await this.getMeetings(date);
      this.date = date;
      this.loading = false;
    },
  },
  async created() {
    this.loading = true;
    this.meetingsDays = await this.getMeetings(this.date);
    this.loading = false;
  },
};
</script>
```

### Types

```typescript
interface MeetingSlot {
  date: Date | string;
  [key: string]: any;
}
interface MeetingsDay {
  date: Date | string;
  slots: MeetingSlot[];
  [key: string]: any;
}
interface ClassNames {
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
  tabLoading?: string,
}
// defaults value are available in src/defaults/calendarOptions.ts
interface CalendarOptions {
  daysLabel: string[]; // Labels for days in title, start by sunday
  monthsLabel: string[]; // labels for months in title, start by january
  limit: number, // max nb meetings to display on a same column
  loadingLabel: string; // label to display when loading
  disabledDate: Function; // function to disable left button (date is passed as params)
}
```

### Props

| Params          | Type                           |
| --------------- | ------------------------------ |
| v-model         | MeetingSlot \| MeetingSlot[]   |
| date            | Date \| string                 |
| meetingsDays    | MeetingsDays[]                 |
| calendarOptions | Object                         |
| classNames      | Object                         |
| multi           | boolean                        |
| loading         | boolean                        |

### Events

| Name                    | Params         |
| ----------------------- | ------------------------------ |
| meeting-slot-selected   | MeetingSlot \| MeetingSlot[]   |
| meeting-slot-unselected | -                              |
| change                  | MeetingSlot                    |
| next-date               | -                              |
| previous-date           | -                              |

### Slots/ScopedSlots available

To change head of every column, a `meetings` (MeetingsDay) is passed as slot-scope.
```html
<template
  #header="{ meetings }">
  <div>{{ meetings.date }}</div>
</template>
```

To change the previous/next button.
```html
<template #button-previous>
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
</template>
```

To change up/down button to change hours of meetings, you will have to trigger methods with refs
```html
<template #button-up="{ isDisabled }">
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


<script>
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
</script>
```

To change the display of a meeting. (you will have to manually change the v-model)
if the meeting don't have date, it's because the is no meeting. (you will have to handle a different display)
```html
<template
  #meeting="{ meeting }">
  <div>{{ meeting.date }}</div>
</template>
```

To change the display of loading
```
<template
  #loading>
  Loading ...
</template>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development component
```
npm run dev
```

### Compiles and hot-reloads for development doc
```
npm run doc
```

### Compiles and minifies for production the lib
```
npm run build:lib
```

### Compiles and minifies for production the doc
```
npm run build:doc
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
