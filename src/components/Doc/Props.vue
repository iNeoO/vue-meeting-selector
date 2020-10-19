<template>
  <div id="props" class="props">
    <h3>
      <a href="#props">#</a>
      Props
    </h3>
    <table class="table striped">
      <thead>
        <tr>
          <th>Params</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>v-model</td>
          <td>Object (MeetingSlot) | MeetingSlot[] (if multi)</td>
        </tr>
        <tr>
          <td>date</td>
          <td>Date | string</td>
        </tr>
        <tr>
          <td>meetingsDays</td>
          <td>Array (MeetingsDays[])</td>
        </tr>
        <tr>
          <td>calendarOptions</td>
          <td>Object (CalendarOptions)</td>
        </tr>
        <tr>
          <td>classNames</td>
          <td>Object (ClassNames)</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>boolean</td>
        </tr>
        <tr>
          <td>multi</td>
          <td>boolean</td>
        </tr>
      </tbody>
    </table>
    <h5>MeetingSlot</h5>
    <highlight-code lang="typescript">
      {{ meetingSlot }}
    </highlight-code>
    <h5>MeetingsDay</h5>
    <highlight-code lang="typescript">
      {{ meetingsDay }}
    </highlight-code>
    <h5>ClassNames</h5>
    <highlight-code lang="typescript">
      {{ classNames }}
    </highlight-code>
    <h5>CalendarOptions</h5>
    <p>
      defaults value are available in
      <a
        target="_blank"
        href="https://github.com/IneoO/vue-meeting-selector/blob/master/src/defaults/calendarOptions.ts">
        src/defaults/calendarOptions.ts
      </a>
    </p>
    <highlight-code lang="typescript">
      {{ calendarOptions }}
    </highlight-code>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'Props',
})
export default class Props extends Vue {
  get calendarOptions() {
    return `
      interface CalendarOptions {
        daysLabel: string[]; // Labels for days in title, start by sunday
        monthsLabel: string[]; // labels for months in title, start by january
        limit: number, // max nb meetings to display on a same column
        loadingLabel: string; // label to display when loading
        disabledDate: Function; // function to disable left button (date is passed as params)
      }
    `;
  }

  get classNames() {
    return `
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
        tabEmpty?: string,
      }
    `;
  }

  get meetingsDay() {
    return `
      interface MeetingsDay {
        date: Date | string;
        slots: MeetingSlot[];
        [key: string]: any;
      }
    `;
  }

  get meetingSlot() {
    return `
      interface MeetingSlot {
        date: Date | string;
        [key: string]: any;
      }
    `;
  }
}
</script>

<style scoped lang="scss">
.props {
  margin-top: 3em;
  padding-top: 3em;
  .table {
    text-align: left;
    & thead tr th {
      width: 50%;
    }
  }
}
</style>
