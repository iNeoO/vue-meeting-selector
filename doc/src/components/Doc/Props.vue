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
    <highlightjs lang="typescript" :code="meetingSlot" />
    <h5>MeetingsDay</h5>
    <highlightjs lang="typescript" :code="meetingsDay" />
    <h5>ClassNames</h5>
    <highlightjs lang="typescript" :code="classNames" />
    <h5>CalendarOptions</h5>
    <p>
      defaults value are available in
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/IneoO/vue-meeting-selector/blob/master/src/defaults/calendarOptions.ts">
        src/defaults/calendarOptions.ts
      </a>
    </p>
    <highlightjs lang="typescript" :code="calendarOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
  calendarOptions,
  classNames,
  meetingsDay,
  meetingSlot,
} from './text';

export default defineComponent({
  name: 'Props',
  setup() {
    return {
      calendarOptions,
      classNames,
      meetingsDay,
      meetingSlot,
    };
  },
});
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
