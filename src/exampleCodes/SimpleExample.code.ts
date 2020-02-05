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

<script>
import VueMeetingSelector from 'vue-meeting-selector';

export default {
  name: 'SimpleExample',
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
    // because of line-height, font-type you might need to change top value
    classNames() {
      return {
        tabLoading: 'loading-div',
      };
    },
  },
  methods: {
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
.simple-example {
  margin-top: 3em;
  &__meeting-selector {
    max-width: 542px;
  }
}
// since our scss is scoped we need to use ::v-deep
::v-deep .loading-div {
  top: 58px!important;
}
</style>
`;

export default code;
