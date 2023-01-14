<template>
  <div class="layout">
    <the-burger-menu />
    <the-header />
    <div class="layout__main">
      <the-sidebar />
      <the-content>
        <slot />
      </the-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheBurgerMenu from '@/components/Layout/TheBurgerMenu.vue';
import TheContent from '@/components/Layout/TheContent.vue';
import TheHeader from '@/components/Layout/TheHeader.vue';
import TheSidebar from '@/components/Layout/TheSidebar.vue';

export default defineComponent({
  name: 'TheLayout',
  components: {
    TheBurgerMenu,
    TheContent,
    TheHeader,
    TheSidebar,
  },
});
</script>

<style lang="scss">
.layout {
  &__main {
    display: flex;
    height: 100%;
  }
}
</style>
