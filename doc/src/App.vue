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
import { defineComponent } from 'vue';

import TheLayout from '@/components/Layout/TheLayout.vue';

import Introduction from '@/components/GettingStarted/Introduction.vue';
import Installation from '@/components/GettingStarted/Installation.vue';
import WhatSNew from '@/components/GettingStarted/WhatSNew.vue';

import Events from '@/components/Doc/Events.vue';
import Props from '@/components/Doc/Props.vue';
import SlotsAndScopedSlots from '@/components/Doc/SlotsAndScopedSlots.vue';

import SimpleExampleWrapper from '@/components/Examples/SimpleExampleWrapper.vue';
import SlotsExampleWrapper from '@/components/Examples/SlotsExampleWrapper.vue';
import SimpleMultiExampleWrapper from '@/components/Examples/SimpleMultiExampleWrapper.vue';

export default defineComponent({
  name: 'Doc',
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
});
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
