<template>
  <section class="sidebar">
    <the-menu />
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import TheMenu from '@/components/Layout/TheMenu.vue';

@Component({
  components: {
    TheMenu,
  },
  name: 'TheSidebar',
})
export default class TheSidebar extends Vue {

}
</script>

<style scoped lang="scss">
.sidebar {
  display: none;
  position: fixed;
  width: 270px;
  padding-top: 50px;
  color: #3F4947;
  height: 100%;
  @media screen and (min-width: 769px) {
    display: block;
  }
}
</style>
