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
    <highlightjs lang="xml" :code="header" />
    <h5>Next and previous</h5>
    <p>
      To change the previous/next button. (date selector)
    </p>
    <highlightjs lang="xml" :code="nextAndPrevious" />
    <h5>top and down</h5>
    <p>
      To change up/down button to change hours of meetings,
      you will have to trigger methods with refs
      disabled is passed.<br>
      It returns true when you are at top of meetings for button-up.<br>
      It returns true when you are at bottom of meetings for button-down.
    </p>
    <highlightjs lang="xml" :code="nextAndPrevious" />
    <h5>meeting</h5>
    <p>
      To change the display of a meeting. (you will have to manually change the v-model)
      if the meeting don't have date, it's because the is no meeting.
      (you will have to handle a different display)
    </p>
    <highlightjs lang="xml" :code="meeting" />
    <h5>loading</h5>
    <p>To change the display of loading</p>
    <highlightjs lang="xml" :code="loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
  header,
  nextAndPrevious,
  upAndDown,
  meeting,
  loading,
} from './text';

export default defineComponent({
  name: 'SlotsAndScopedSlots',
  setup() {
    return {
      header,
      nextAndPrevious,
      upAndDown,
      meeting,
      loading,
    };
  },
});
</script>

<style scoped lang="scss">
.slots {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
