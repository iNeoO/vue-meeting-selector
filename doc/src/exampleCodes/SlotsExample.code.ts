const code: string = `
<template>
  <div class="slots-example">
    <vue-meeting-selector
      ref="meetingSelector"
      class="slots-example__meeting-selector"
      v-model="meeting"
      :date="date"
      :loading="loading"
      :class-names="classNames"
      :meetings-days="meetingsDays"
      @next-date="nextDate"
      @previous-date="previousDate">
      <template
        #header="{ meetings }">
        <div class="title">{{ formatingDateTitle(meetings.date) }}</div>
      </template>
      <template
        #meeting="{ meeting }">
        <div
          v-if="meeting.date"
          class="meeting"
          :class="meetingSelectedClass(meeting)"
          @click="selectMeeting(meeting)">
          {{ formatingTime(meeting.date) }}
        </div>
        <div v-else class="meeting--empty">
          &mdash;
        </div>
      </template>
      <template
        #loading>
        <div>Loading ...</div>
      </template>
      <template
        #button-previous>
        <button
          type="button"
          class="button-pagination"
          :disabled="isPreviousDisabled || loading"
          @click="previousDate">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
      </template>
      <template
        #button-next>
        <button
          type="button"
          @click="nextDate"
          :disabled="loading"
          class="button-pagination">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </template>
      <template
        #button-up="{ isDisabled }">
        <button
          type="button"
          @click="previousMeetings"
          class="button-pagination"
          :disabled="isDisabled">
          <font-awesome-icon :icon="['fas', 'chevron-up']" />
        </button>
      </template>
      <template
        #button-down="{ isDisabled }">
        <button
          type="button"
          @click="nextMeetings"
          class="button-pagination"
          :disabled="isDisabled">
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </button>
      </template>
    </vue-meeting-selector>
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
  name: 'SlotsExample',
  components: {
    VueMeetingSelector,
  },
  setup() {
    const date = ref(new Date());
    const meetingsDays = ref<MeetingsDay[]>([]);
    const meeting = ref<MeetingSlot | null>(null);
    const meetingSelector = ref<InstanceType<typeof VueMeetingSelector> | null>(null);
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

    const formatingDate = (dateToFormat: Date | string) => {
      const d = new Date(dateToFormat);
      const day = d.getDate() < 10 ? \`0\${d.getDate()}\` : d.getDate();
      const month = d.getMonth() + 1 < 10 ? \`0\${d.getMonth() + 1}\` : d.getMonth() + 1;
      const year = d.getFullYear();
      return \`\${year}-\${month}-\${day}\`;
    };

    const formatingDateTitle = (dateToFormat: Date | string) => {
      const d = new Date(dateToFormat);
      const day = d.getDate() < 10 ? \`0\${d.getDate()}\` : d.getDate();
      const month = d.getMonth() + 1 < 10 ? \`0\${d.getMonth() + 1}\` : d.getMonth() + 1;
      return \`\${month}-\${day}\`;
    };

    const formatingTime = (dateToFormat: Date | string) => {
      const d = new Date(dateToFormat);
      const hours = d.getHours() < 10 ? \`0\${d.getHours()}\` : d.getHours();
      const minutes = d.getMinutes() < 10 ? \`0\${d.getMinutes()}\` : d.getMinutes();
      return \`\${hours}:\${minutes}\`;
    };

    const isPreviousDisabled = computed(() => {
      const d = new Date(date.value);
      d.setDate(d.getDate() - 1);
      return formatingDate(d) < formatingDate(new Date());
    });

    const meetingSelectedClass = (m: MeetingSlot) => {
      if (!meeting.value) {
        return '';
      }
      const selectedDate = new Date(m.date);
      const d = new Date(meeting.value.date);

      if (selectedDate.getTime() === d.getTime()) {
        return 'meeting--selected';
      }
      return '';
    };

    const selectMeeting = (m: MeetingSlot) => {
      if (meeting.value) {
        const selectedDate = new Date(m.date);
        const d = new Date(meeting.value.date);
        if (selectedDate.getTime() !== d.getTime()) {
          meeting.value = m;
        } else {
          meeting.value = null;
        }
      } else {
        meeting.value = m;
      }
    };

    const nextMeetings = () => {
      meetingSelector.value?.nextMeetings();
    };

    const previousMeetings = () => {
      meetingSelector.value?.previousMeetings();
    };

    return {
      date,
      meetingsDays,
      meeting,
      meetingSelector,
      loading,
      nbDaysToDisplay,
      classNames,
      nextDate,
      previousDate,
      formatingDateTitle,
      formatingTime,
      isPreviousDisabled,
      meetingSelectedClass,
      selectMeeting,
      nextMeetings,
      previousMeetings,
    };
  },
});
</script>

<style scoped lang="scss">
.slots-example {
  &__meeting-selector {
    max-width: 542px;
  }
}
.title {
  margin: 0 5px;
}
.meeting {
  display: inline-block;
  padding: 5px;
  margin: 5px 0;
  background-color: #845EC2;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &--selected {
    background-color: #B39CD0;
  }
  &--empty {
    display: inline-block;
    padding: 5px;
    margin: 5px 0;
    cursor: not-allowed;
  }
}
.button-pagination {
  border: none;
  padding: 0;
  width: 30px;
}
// since our scss is scoped we need to use ::v-deep
:deep(.loading-div) {
  top: 32px!important;
}
</style>
`;

export default code;
