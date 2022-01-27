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
      </template>
      <template #button-up="{ isDisabled }">
        <button
          :disabled="isDisabled"
          @click="up">
          up</button>
      </template>
      <template
        #button-down="{ isDisabled }">
        <button
          :disabled="isDisabled"
          @click="down"
          >down</button>
      </template>
      <template
        #meeting="{ meeting }">
        <div>{{ meeting.date }}</div>
      </template> -->
    </vue-meeting-selector>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
} from 'vue';
import VueMeetingSelector from '@/components/MeetingSelector/VueMeetingSelector.vue';
import slotsGenerator from '@/helpers/slotsGenerator';
import MeetingsDay from '@/interfaces/MeetingsDay.interface';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';
import Time from '@/interfaces/Time.interface';

export default defineComponent({
  components: {
    VueMeetingSelector,
  },
  setup() {
    const meeting: Ref<null | MeetingSlot> = ref(null);
    const meetingsDays: Ref<MeetingsDay[]> = ref([]);
    const nbDaysToDisplay = ref(5);
    const date = ref(new Date());

    const initMeetingsDays = () => {
      const start: Time = {
        hours: 8,
        minutes: 0,
      };
      const end: Time = {
        hours: 16,
        minutes: 0,
      };
      meetingsDays.value = slotsGenerator(
        new Date(),
        nbDaysToDisplay.value,
        start,
        end,
        30,
      );
    };

    initMeetingsDays();

    const meetingSelector:Ref<unknown> = ref(null);

    const up = (): void => {
      (
        meetingSelector.value as { previousMeetings: () => void }
      ).previousMeetings();
    };

    const down = (): void => {
      (
        meetingSelector.value as { nextMeetings: () => void }
      ).nextMeetings();
    };

    const nextDate = (): void => {
      const start: Time = {
        hours: 8,
        minutes: 0,
      };
      const end: Time = {
        hours: 16,
        minutes: 0,
      };
      const d = new Date(date.value as Date);
      const newDate = new Date(d.setDate(d.getDate() + 7));
      date.value = newDate;
      meetingsDays.value = slotsGenerator(
        newDate,
        nbDaysToDisplay.value,
        start,
        end,
        30,
      );
    };

    const previousDate = (): void => {
      const start: Time = {
        hours: 8,
        minutes: 0,
      };
      const end: Time = {
        hours: 16,
        minutes: 0,
      };
      const d = new Date(date.value as Date);
      d.setDate(d.getDate() - 7);
      const formatingDate = (dateToFormat: Date | string):string => {
        const dateParsed = new Date(dateToFormat);
        const day = dateParsed.getDate() < 10 ? `0${dateParsed.getDate()}` : dateParsed.getDate();
        const month = dateParsed.getMonth() + 1 < 10 ? `0${dateParsed.getMonth() + 1}` : dateParsed.getMonth() + 1;
        const year = dateParsed.getFullYear();
        return `${year}-${month}-${day}`;
      };
      const newDate = formatingDate(new Date()) >= formatingDate(d)
        ? new Date()
        : new Date(d);
      date.value = newDate;
      meetingsDays.value = slotsGenerator(
        newDate,
        nbDaysToDisplay.value,
        start,
        end,
        30,
      );
    };

    return {
      meeting,
      meetingsDays,
      date,
      meetingSelector,
      up,
      down,
      nextDate,
      previousDate,
    };
  },
});
</script>

<style lang="scss">
html, body {
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
