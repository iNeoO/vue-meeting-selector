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
import VueMeetingSelector from 'vue-meeting-selector';

export default {
  name: 'SlotsExample',
  components: {
    VueMeetingSelector,
  },
  data() {
    return {
      date: new Date(),
      meetingsDays: [],
      meeting: null,
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
    // disable passed date
    isPreviousDisabled() {
      const date = new Date(this.date);
      date.setDate(date.getDate() - 1);
      return this.formatingDate(date) < this.formatingDate(new Date());
    },
  },
  methods: {
    // display meeting selected diferently
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
    // @click on meeting
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
      const day = d.getDate() < 10 ? \`0\${d.getDate()}\` : d.getDate();
      const month = d.getMonth() + 1 < 10 ? \`0\${d.getMonth() + 1}\` : d.getMonth() + 1;
      const year = d.getFullYear();
      return \`\${year}-\${month}-\${day}\`;
    },
    // header display
    formatingDateTitle(date) {
      const d = new Date(date);
      const day = d.getDate() < 10 ? \`0\${d.getDate()}\` : d.getDate();
      const month = d.getMonth() + 1 < 10 ? \`0\${d.getMonth() + 1}\` : d.getMonth() + 1;
      return \`\${month}-\${day}\`;
    },
    formatingTime(date) {
      const d = new Date(date);
      const hours = d.getHours() < 10 ? \`0\${d.getHours()}\` : d.getHours();
      const minutes = d.getMinutes() < 10 ? \`0\${d.getMinutes()}\` : d.getMinutes();
      return \`\${hours}:\${minutes}\`;
    },
    // @click on button-right
    async nextDate() {
      // display loading
      this.loading = true;
      // calcul new Date and change actual
      this.date = newDate;
      // get meetings with async function
      this.meetingsDays = await getNewDates(this.date);
      // hide loading
      this.loading = false;
    },
      this.loading = false;
    },
    // @click on button-left
    async previousDate() {
      // display loading
      this.loading = true;
      // calcul new Date and change actual
      // you might need to handle the fact you can't go in past
      this.date = newDate;
      // get meetings with async function
      this.meetingsDays = await getNewDates(this.date);
      // hide loading
      this.loading = false;
    },
    // @click get more meetings
    nextMeetings() {
      this.$refs.meetingSelector.nextMeetings();
    },
    // @click get previous meetings
    previousMeetings() {
      this.$refs.meetingSelector.previousMeetings();
    },
  },
  async created() {
    // get meetings
    this.meetingsDays = await getNewDates(this.date);
    // hide loading
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
`;

export default code;
