<template>
  <div class="content">
    <div class="content__main">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheContent',
});
</script>

<style scoped lang="scss">
.content {
  flex: 1 1 auto;
  padding-top: 50px;
  @media screen and (min-width: 769px) {
    margin-left: 270px;
    max-width: none;
  }
  &__main {
    max-width: 60em;
    padding: 0 20px;
    margin: 0 auto;
  }
}
</style>
