<template>
  <div id="whatsnew" class="what-s-new">
    <h3>
      <a href="#whatsnew">#</a>
      What's new
    </h3>
    <ul>
      <li>
        <h6>3.1.0</h6>
        <p>Add spacing params. When clicking next, scroll a custom number of slots</p>
        <h6>3.0.0</h6>
        <p>Upgrade to vue3, build with vite (need to update readme)</p>
        <h6>1.1.0</h6>
        <p>Set possible to have multi meetings selected</p>
      </li>
      <li>
        <h6>1.0.0</h6>
        <p>First release !!</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WhatsNew',
});
</script>

<style scoped lang="scss">
.what-s-new {
  margin-top: 3em;
  padding-top: 3em;
}
</style>
