<template>
  <div class="burger-menu">
    <section
      class="burger-menu__wrapper"
      :class="burgerMenuClass">
      <the-menu class="burger-menu__menu" />
    </section>
    <div
      class="background-menu"
      :class="backgroundMenuClass"
      @click="hideMenu" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onUnmounted,
  watch,
} from 'vue';
import TheMenu from '@/components/Layout/TheMenu.vue';

import actionsStore from '@/stores/actions';

export default defineComponent({
  name: 'TheBurgerMenu',
  components: {
    TheMenu,
  },
  setup() {
    const actions = actionsStore();
    const isBurgerMenuDisplayed = computed(() => actions.isBurgerMenuDisplayed);

    const burgerMenuClass = computed(() => ({
      'burger-menu--open': isBurgerMenuDisplayed.value,
    }));

    const backgroundMenuClass = computed(() => ({
      'background-menu--visible': isBurgerMenuDisplayed.value,
    }));

    const hideMenu = () => {
      actions.hideBurgerMenu();
    };

    const resize = () => {
      if (isBurgerMenuDisplayed.value && window.innerHeight > 769) {
        hideMenu();
      }
    };

    onMounted(() => {
      window.addEventListener('resize', resize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', resize);
    });

    watch(
      isBurgerMenuDisplayed,
      (value: boolean) => {
        document.body.style.overflow = value ? 'hidden' : 'auto';
      },
    );

    return {
      isBurgerMenuDisplayed,
      burgerMenuClass,
      backgroundMenuClass,
      hideMenu,
    };
  },
});
</script>

<style scoped lang="scss">
.burger-menu {
  height: 100%;
  &__wrapper {
    display: block;
    position: fixed;
    z-index: 102;
    width: 0;
    color: #3F4947;
    height: 100%;
    transition: 0.5s;
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
  &--open {
    width: 270px;
  }
  &__menu {
    padding-top: 10px;
  }
}
.background-menu {
  display: none;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000;
  &--visible {
    display: block;
    opacity: 0.3;
    transition: 0.5s;
  }
}
</style>
