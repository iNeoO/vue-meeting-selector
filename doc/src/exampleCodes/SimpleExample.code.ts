const code: string = `
<template>
  <div class="simple-example">
    <vue-meeting-selector
      class="simple-example__meeting-selector"
      v-model="meeting"
      :date="date"
      :loading="loading"
      :class-names="classNames"
      :meetings-days="meetingsDays"
      @next-date="nextDate"
      @previous-date="previousDate"
    />
    <p>meeting Selected: {{ meeting ? meeting : 'No Meeting selected' }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  computed,
} from 'vue';

import VueMeetingSelector from 'vue-meeting-selector';
import 'vue-meeting-selector/dist/style.css';
// Function used to generate slots, use your own function
import slotsGenerator from 'vue-meeting-selector/src/helpers/slotsGenerator';

import type MeetingsDay from 'vue-meeting-selector/src/interfaces/MeetingsDay.interface';
import type MeetingSlot from 'vue-meeting-selector/src/interfaces/MeetingSlot.interface';
import type Time from 'vue-meeting-selector/src/interfaces/Time.interface';

export default defineComponent({
  name: 'SimpleExample',
  components: {
    VueMeetingSelector,
  },
  setup() {
    const date = ref(new Date());
    const meetingsDays = ref<MeetingsDay[]>([]);
    const meeting = ref<MeetingSlot | null>(null);
    const loading = ref(true);

    const nbDaysToDisplay = computed(() => 5);

    // because of line-height, font-type you might need to change top value
    const classNames = computed(() => ({
      tabLoading: 'loading-div',
    }));

    // juste set async the gettings of meeting to display loading
    const slotsGeneratorAsync = (
      d: Date, // date
      n: number, // nbDaysToDisplay
      start: Time,
      end: Time,
      timesBetween: number,
    ):Promise<MeetingsDay[]> => new Promise((resolve) => {
      setTimeout(() => {
        resolve(slotsGenerator(d, n, start, end, timesBetween));
      }, 1000);
    });

    const nextDate = async () => {
      loading.value = true;
      const start: Time = {
        hours: 8,
        minutes: 0,
      };
      const end: Time = {
        hours: 16,
        minutes: 0,
      };
      const dateCopy = new Date(date.value);
      const newDate = new Date(dateCopy.setDate(dateCopy.getDate() + 7));
      date.value = newDate;
      meetingsDays.value = await slotsGeneratorAsync(
        newDate,
        nbDaysToDisplay.value,
        start,
        end,
        30,
      );
      loading.value = false;
    };

    const previousDate = async () => {
      loading.value = true;
      const start: Time = {
        hours: 8,
        minutes: 0,
      };
      const end: Time = {
        hours: 16,
        minutes: 0,
      };
      const dateCopy = new Date(date.value);
      dateCopy.setDate(dateCopy.getDate() - 7);
      const formatingDate = (dateToFormat: Date): String => {
        const d = new Date(dateToFormat);
        const day = d.getDate() < 10 ? \`0\${d.getDate()}\` : d.getDate();
        const month = d.getMonth() + 1 < 10 ? \`0\${d.getMonth() + 1}\` : d.getMonth() + 1;
        const year = d.getFullYear();
        return \`\${year}-\${month}-\${day}\`;
      };
      const newDate = formatingDate(new Date()) >= formatingDate(dateCopy)
        ? new Date()
        : new Date(dateCopy);
      date.value = newDate;
      meetingsDays.value = await slotsGeneratorAsync(
        newDate,
        nbDaysToDisplay.value,
        start,
        end,
        30,
      );
      loading.value = false;
    };

    onMounted(async () => {
      const start: Time = {
        hours: 8,
        minutes: 0,
      };
      const end: Time = {
        hours: 16,
        minutes: 0,
      };
      meetingsDays.value = await slotsGeneratorAsync(
        date.value,
        nbDaysToDisplay.value,
        start,
        end,
        30,
      );
      loading.value = false;
    });

    return {
      date,
      meetingsDays,
      loading,
      nbDaysToDisplay,
      classNames,
      nextDate,
      previousDate,
    };
  },
});
</script>

<style scoped lang="scss">
.simple-example {
  &__meeting-selector {
    max-width: 542px;
  }
}
// since our scss is scoped we need to use ::v-deep
:deep(.loading-div) {
  top: 58px!important;
  meeting,
}
</style>
`;

export default code;
