<template>
  <div id="app">
    <the-layout>
      <introduction />
      <installation />
      <what-s-new />
      <props />
      <events />
      <slots-and-scoped-slots />
      <simple-example-wrapper />
      <simple-multi-example-wrapper />
      <slots-example-wrapper />
    </the-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TheLayout from '@/components/Layout/TheLayout.vue';

import Introduction from '@/components/GettingStarted/Introduction.vue';
import Installation from '@/components/GettingStarted/Installation.vue';
import WhatSNew from '@/components/GettingStarted/WhatSNew.vue';

import Events from '@/components/Doc/Events.vue';
import Props from '@/components/Doc/Props.vue';
import SlotsAndScopedSlots from '@/components/Doc/SlotsAndScopedSlots.vue';

import SimpleExampleWrapper from '@/components/Examples/SimpleExampleWrapper.vue';
import SimpleMultiExampleWrapper from '@/components/Examples/SimpleMultiExampleWrapper.vue';
import SlotsExampleWrapper from '@/components/Examples/SlotsExampleWrapper.vue';

@Component({
  components: {
    TheLayout,
    Introduction,
    Installation,
    WhatSNew,
    Events,
    Props,
    SlotsAndScopedSlots,
    SimpleExampleWrapper,
    SimpleMultiExampleWrapper,
    SlotsExampleWrapper,
  },
})
export default class Doc extends Vue {

}
</script>

<style lang="scss">
html, body, #app {
  margin: 0;
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
}
</style>
