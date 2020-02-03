<template>
<div class="header header-fixed unselectable">
  <div class="header-brand">
    <div class="nav-item no-hover">
      <h6 class="title">vue-meeting-selector</h6>
    </div>
    <div class="nav-item nav-btn" id="header-btn" @click="displayBurgerMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="header-nav" id="header-menu">
      <div class="nav-left">
      </div>
      <div class="nav-right">
        <div class="nav-item text-center">
          <a href="#">
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'github']" />
            </span>
          </a>
        </div>
        <div class="nav-item text-center">
          <a href="#">
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
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'TheHeader',
})
export default class TheHeader extends Vue {
  get isBurgerMenuDisplayed():boolean {
    return this.$store.getters['actionsStore/isBurgerMenuDisplayed'];
  }

  displayBurgerMenu():void {
    this.isBurgerMenuDisplayed
      ? this.$store.dispatch('actionsStore/hideBurgerMenu')
      : this.$store.dispatch('actionsStore/displayBurgerMenu');
  }
}
</script>

<style scoped lang="scss">
.title, .icon {
  color: $--color-primary;
}
.nav-btn > span {
  background-color: $--color-primary;
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
