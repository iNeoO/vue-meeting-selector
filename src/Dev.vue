<template>
  <div id="app">
    <vue-meeting-selector
       ref="meetingSelector"
      class="meeting-selector"
      v-model="meeting"
      :date="date"
      :loading="false"
      :meetings-days="meetingsDays"
      @next-date="nextDate"
      @previous-date="previousDate">
      <!-- <template
        #header="{ meetings }">
        <div>{{ meetings.date }}</div>
      </template> -->
      <!-- <template #button-up="{ isDisabled }">
        <button
          :disabled="isDisabled"
          @click="up">
          up</button>
      </template> -->
      <!-- <template
        #button-down="{ isDisabled }">
        <button
          :disabled="isDisabled"
          @click="down"
          >down</button>
      </template> -->
      <!-- <template
        #meeting="{ meeting }">
        <div>{{ meeting.date }}</div>
      </template> -->
      </vue-meeting-selector>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueMeetingSelector from './components/MeetingSelector/VueMeetingSelector.vue';
import slotsGenerator from '@/helpers/slotsGenerator';
import Time from '@/interfaces/Time.interface';
import MeetingsDay from '@/interfaces/MeetingsDay.interface';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';


@Component({
  components: {
    VueMeetingSelector,
  },
})
export default class Dev extends Vue {
  meeting: MeetingSlot | null = null;

  meetingsDays: MeetingsDay[] = [];

  date = new Date();

  nbDaysToDisplay = 5;

  up(): void {
    (this.$refs.meetingSelector as Vue & { previousMeetings: () => void }).previousMeetings();
  }

  down(): void {
    (this.$refs.meetingSelector as Vue & { nextMeetings: () => void }).nextMeetings();
  }

  nextDate(): void {
    const start: Time = {
      hours: 8,
      minutes: 0,
    };
    const end: Time = {
      hours: 16,
      minutes: 0,
    };
    const date = new Date(this.date);
    const newDate = new Date(date.setDate(date.getDate() + 7));
    this.date = newDate;
    this.meetingsDays = slotsGenerator(
      newDate,
      5,
      start,
      end,
      30,
    );
  }

  previousDate(): void {
    const start: Time = {
      hours: 8,
      minutes: 0,
    };
    const end: Time = {
      hours: 16,
      minutes: 0,
    };
    const date = new Date(this.date);
    date.setDate(date.getDate() - 7);
    const formatingDate = (dateToFormat: Date | string):string => {
      const d = new Date(dateToFormat);
      const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      const year = d.getFullYear();
      return `${year}-${month}-${day}`;
    };
    const newDate = formatingDate(new Date()) >= formatingDate(date)
      ? new Date()
      : new Date(date);
    this.date = newDate;
    this.meetingsDays = slotsGenerator(
      newDate,
      this.nbDaysToDisplay,
      start,
      end,
      30,
    );
  }

  created(): void {
    const start: Time = {
      hours: 8,
      minutes: 0,
    };
    const end: Time = {
      hours: 16,
      minutes: 0,
    };
    this.meetingsDays = slotsGenerator(
      new Date(),
      this.nbDaysToDisplay,
      start,
      end,
      30,
    );
  }
}
</script>

<style lang="scss">
html, body, {
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
}
.meeting-selector {
  width: 542px;
}
</style>
