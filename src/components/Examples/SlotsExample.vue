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
          @click="previousDate"
          class="button-pagination"
          :disabled="isPreviousDisabled || loading">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
      </template>
      <template
        #button-next>
        <button
          @click="nextDate"
          :disabled="loading"
          class="button-pagination">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </template>
      <template
        #button-up="{ isDisabled }">
        <button
          @click="previousMeetings"
          class="button-pagination"
          :disabled="isDisabled">
          <font-awesome-icon :icon="['fas', 'chevron-up']" />
        </button>
      </template>
      <template
        #button-down="{ isDisabled }">
        <button
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

<script>
import VueMeetingSelector from '@/components/MeetingSelector/VueMeetingSelector.vue';
// Function used to generate slots, use your own function
import slotsGenerator from '@/helpers/slotsGenerator';

export default {
  name: 'SlotsExample',
  components: {
    VueMeetingSelector,
  },
  data() {
    return {
      date: new Date(),
      meetingsDays: [],
      meeting: undefined,
      loading: true,
      nbDaysToDisplay: 5,
    };
  },
  computed: {
    classNames() {
      // because of line-height, font-type you might need to change top value
      return {
        tabLoading: 'loading-div',
      };
    },
    isPreviousDisabled() {
      const date = new Date(this.date);
      date.setDate(date.getDate() - 1);
      return this.formatingDate(date) < this.formatingDate(new Date());
    },
  },
  methods: {
    slotsGeneratorAsync(...args) {
      // juste set async the gettings of meeting to display loading
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(slotsGenerator(...args));
        }, 1000);
      });
    },
    meetingSelectedClass(meeting) {
      if (!this.meeting) {
        return '';
      }
      const selectedDate = new Date(meeting.date);
      const date = new Date(this.meeting.date);
      if (selectedDate.getTime() === date.getTime()) {
        return 'meeting--selected';
      }
      return '';
    },
    selectMeeting(meeting) {
      if (this.meeting) {
        const selectedDate = new Date(meeting.date);
        const date = new Date(this.meeting.date);
        if (selectedDate.getTime() !== date.getTime()) {
          this.meeting = meeting;
        } else {
          this.meeting = undefined;
        }
      } else {
        this.meeting = meeting;
      }
    },
    formatingDate(dateToFormat) {
      const d = new Date(dateToFormat);
      const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      const year = d.getFullYear();
      return `${year}-${month}-${day}`;
    },
    formatingDateTitle(date) {
      const d = new Date(date);
      const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      return `${month}-${day}`;
    },
    formatingTime(date) {
      const d = new Date(date);
      const hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
      const minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
      return `${hours}:${minutes}`;
    },
    async nextDate() {
      this.loading = true;
      const start = {
        hours: 8,
        minutes: 0,
      };
      const end = {
        hours: 16,
        minutes: 0,
      };
      const date = new Date(this.date);
      const newDate = new Date(date.setDate(date.getDate() + 7));
      this.date = newDate;
      this.meetingsDays = await this.slotsGeneratorAsync(
        newDate,
        5,
        start,
        end,
        30,
      );
      this.loading = false;
    },
    async previousDate() {
      this.loading = true;
      const start = {
        hours: 8,
        minutes: 0,
      };
      const end = {
        hours: 16,
        minutes: 0,
      };
      // logic to get previous date, don't display date older than today
      const date = new Date(this.date);
      date.setDate(date.getDate() - 7);
      const newDate = this.formatingDate(new Date()) >= this.formatingDate(date)
        ? new Date()
        : new Date(date);
      this.date = newDate;
      this.meetingsDays = await this.slotsGeneratorAsync(
        newDate,
        this.nbDaysToDisplay,
        start,
        end,
        30,
      );
      this.loading = false;
    },
    nextMeetings() {
      this.$refs.meetingSelector.nextMeetings();
    },
    previousMeetings() {
      this.$refs.meetingSelector.previousMeetings();
    },
  },
  async created() {
    const start = {
      hours: 8,
      minutes: 0,
    };
    const end = {
      hours: 16,
      minutes: 0,
    };
    this.meetingsDays = await this.slotsGeneratorAsync(
      this.date,
      this.nbDaysToDisplay,
      start,
      end,
      30,
    );
    this.loading = false;
  },
};
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
::v-deep .loading-div {
  top: 32px!important;
}
</style>
