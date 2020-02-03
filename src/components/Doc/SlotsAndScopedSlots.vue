<template>
  <div id="slots" class="slots">
    <h3>
      <a href="#slots">#</a>
      Slots and ScopedSlots
    </h3>
    <h5>Header</h5>
    <p>
      To change head of every column, a `meetings` (MeetingsDay)
      is passed as slot-scope.
    </p>
    <highlight-code lang="html">
      {{ header }}
    </highlight-code>
    <h5>Next and previous</h5>
    <p>
      To change the previous/next button. (date selector)
    </p>
    <highlight-code lang="html">
      {{ nextAndPrevious }}
    </highlight-code>
    <h5>top and down</h5>
    <p>
      To change up/down button to change hours of meetings,
      you will have to trigger methods with refs
      disabled is passed.<br>
      It returns true when you are at top of meetings for button-up.<br>
      It returns true when you are at bottom of meetings for button-down.
    </p>
    <highlight-code lang="html">
      {{ upAndDown }}
    </highlight-code>
    <h5>meeting</h5>
    <p>
      To change the display of a meeting. (you will have to manually change the v-model)
      if the meeting don't have date, it's because the is no meeting.
      (you will have to handle a different display)</p>
    <highlight-code lang="html">
      {{ meeting }}
    </highlight-code>
    <h5>loading</h5>
    <p>To change the display of loading</p>
    <highlight-code lang="html">
      {{ loading }}
    </highlight-code>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'Slots',
})
export default class Slots extends Vue {
  get header() {
    return `
        <template
          #header="{ meetings }">
          <div>{{ meetings.date }}</div>
        </template>
      `;
  }

  get nextAndPrevious() {
    return `
        <template #button-previous>
          <button
            @click="previous">
            previous
          </button>
        </template>
        <template #button-next>
          <button
            @click="next">
            next
          </button>
        </template>
      `;
  }

  get upAndDown() {
    return `
        <template #button-up="{ isDisabled }">
          <button
            :disabled="isDisabled"
            @click="up">
            up
          </button>
        </template>
        <template
          #button-down="{ isDisabled }">
          <button
            :disabled="isDisabled"
            @click="down">
            down
          </button>
        </template>

        <${''}script>
        export default {
          methods: {
            up() {
              this.$refs.meetingSelector.previousMeetings();
              // (this.$refs.meetingSelector as Vue & { previousMeetings: () => void }).previousMeetings();
            },
            down() {
              this.$refs.meetingSelector.nextMeetings();
              // (this.$refs.meetingSelector as Vue & { nextMeetings: () => void }).nextMeetings();
            },
          },
        };
        </${''}script>
      `;
  }

  get meeting() {
    return `
        <template
          #meeting="{ meeting }">
          <div>{{ meeting.date }}</div>
        </template>
      `;
  }

  get loading() {
    return `
        <template
          #loading>
          Loading ...
        </template>
      `;
  }
}
</script>

<style scoped lang="scss">
.slots {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
