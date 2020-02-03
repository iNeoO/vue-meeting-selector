<template>
  <div id="introduction" class="introduction">
    <h3>
      <a href="#introduction">#</a>
      Introduction
    </h3>
    <p>
      <span class="bold">Vue meeting selector</span>
      is a lightweight, meeting selector fast and fully custom.
    </p>
    <p>
      Vue meeting selector is inspired by the
      <a target="_blank" href="https://www.doctolib.fr/medecin-generaliste/paris">doctolib</a>
      component. It allows you to easily select an appointment from a list sort
      by days. It provides different tools such as a loading, a pagination, ...
    </p>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'Introduction',
})
export default class Introduction extends Vue {

}
</script>

<style scoped lang="scss">
.introduction {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
