<template>
  <div id="events" class="events">
    <h3>
      <a href="#events">#</a>
      Events
    </h3>
    <table class="table striped">
      <thead>
        <tr>
          <th>name</th>
          <th>params</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>meeting-slot-selected</td>
          <td>Object (MeetingSlot) | MeetingSlot[] (if multi)</td>
        </tr>
        <tr>
          <td>meeting-slot-unselected</td>
          <td>-</td>
        </tr>
        <tr>
          <td>change</td>
          <td>Object (MeetingSlot) | MeetingSlot[] (if multi)</td>
        </tr>
        <tr>
          <td>next-date</td>
          <td>-</td>
        </tr>
        <tr>
          <td>previous-date</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <h5></h5>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Events',
});
</script>

<style scoped lang="scss">
.events {
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
