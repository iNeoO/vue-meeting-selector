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
      @click="hideMenu">
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import TheMenu from '@/components/Layout/TheMenu.vue';

import BurgerMenuClass from '@/interfaces/BurgerMenuClass.interface';
import BackgroundMenuClass from '@/interfaces/BackgroundMenuClass.interface';

@Component({
  components: {
    TheMenu,
  },
  name: 'TheBurgerMenu',
})
export default class TheBurgerMenu extends Vue {
  get isBurgerMenuDisplayed():boolean {
    return this.$store.getters['actionsStore/isBurgerMenuDisplayed'];
  }

  get burgerMenuClass():BurgerMenuClass {
    return {
      'burger-menu--open': this.isBurgerMenuDisplayed,
    };
  }

  get backgroundMenuClass():BackgroundMenuClass {
    return {
      'background-menu--visible': this.isBurgerMenuDisplayed,
    };
  }

  hideMenu():void {
    this.$store.dispatch('actionsStore/hideBurgerMenu');
  }
}
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
