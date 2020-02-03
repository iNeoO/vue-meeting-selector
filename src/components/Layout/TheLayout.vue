<template>
  <div class="layout">
    <the-burger-menu />
    <the-header />
    <div class="layout__main">
      <the-sidebar />
      <the-content >
        <slot></slot>
      </the-content>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheBurgerMenu from '@/components/Layout/TheBurgerMenu.vue';
import TheContent from '@/components/Layout/TheContent.vue';
import TheHeader from '@/components/Layout/TheHeader.vue';
import TheSidebar from '@/components/Layout/TheSidebar.vue';

@Component({
  name: 'TheLayout',
  components: {
    TheBurgerMenu,
    TheContent,
    TheHeader,
    TheSidebar,
  },
})
export default class TheLayout extends Vue {

}
</script>

<style lang="scss">
.layout {
  &__main {
    display: flex;
    height: 100%;
  }
}
</style>
