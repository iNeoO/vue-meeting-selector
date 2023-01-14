<template>
  <div class="header header-fixed unselectable">
    <div class="header-brand">
      <div class="nav-item no-hover">
        <h6 class="title">vue-meeting-selector</h6>
      </div>
      <div class="nav-item nav-btn" id="header-btn" @click="displayBurgerMenu">
        <span />
        <span />
        <span />
      </div>
      <div class="header-nav" id="header-menu">
        <div class="nav-left" />
        <div class="nav-right">
          <div class="nav-item text-center">
            <a href="https://github.com/IneoO/vue-meeting-selector" target="_blank">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'github']" />
              </span>
            </a>
          </div>
          <div class="nav-item text-center">
            <a href="https://www.npmjs.com/package/vue-meeting-selector" target="_blank">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'npm']" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import actionsStore from '@/stores/actions';

export default defineComponent({
  name: 'TheHeader',
  setup() {
    const actions = actionsStore();

    const isBurgerMenuDisplayed = computed(() => actions.isBurgerMenuDisplayed);

    const displayBurgerMenu = () => {
      if (isBurgerMenuDisplayed.value) {
        actions.hideBurgerMenu();
      } else {
        actions.displayBurgerMenu();
      }
    };

    return {
      displayBurgerMenu,
    };
  },
});
</script>

<style scoped lang="scss">
.title, .icon {
  color: $color-primary;
}
.nav-btn > span {
  background-color: $color-primary;
}
.nav-item {
  &:focus {
    box-shadow: none;
  }
  & a:focus {
    box-shadow: none;
  }
}
@media screen and (max-width: 768px) {
  .header-nav {
    height: 0;
    width: 0;
  }
}
@media screen and (min-width: 769px) {
  .nav-right {
    display: flex;
  }
}
</style>
