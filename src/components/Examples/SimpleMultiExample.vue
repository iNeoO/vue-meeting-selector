<template>
  <div class="simple-example">
    <vue-meeting-selector
      class="simple-example__meeting-selector"
      v-model="meeting"
      :date="date"
      :loading="loading"
      :class-names="classNames"
      :meetings-days="meetingsDays"
      :multi="true"
      @next-date="nextDate"
      @previous-date="previousDate"
    />
    <p>meeting Selected: {{ meeting.length ? meeting : 'No Meeting selected' }}</p>
  </div>
</template>

<script>
import VueMeetingSelector from '@/components/MeetingSelector/VueMeetingSelector.vue';
// Function used to generate slots, use your own function
import slotsGenerator from '@/helpers/slotsGenerator';

export default {
  name: 'SimpleExample',
  components: {
    VueMeetingSelector,
  },
  data() {
    return {
      date: new Date(),
      meetingsDays: [],
      meeting: [],
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
      const formatingDate = (dateToFormat) => {
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
      this.meetingsDays = await this.slotsGeneratorAsync(
        newDate,
        this.nbDaysToDisplay,
        start,
        end,
        30,
      );
      this.loading = false;
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
.simple-example {
  &__meeting-selector {
    max-width: 542px;
  }
}
// since our scss is scoped we need to use ::v-deep
::v-deep .loading-div {
  top: 58px!important;
}
</style>
