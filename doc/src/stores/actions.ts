import { ref } from 'vue';
import { defineStore } from 'pinia';

export default defineStore('actions', () => {
  const isBurgerMenuDisplayed = ref(false);

  function displayBurgerMenu() {
    isBurgerMenuDisplayed.value = true;
  }
  function hideBurgerMenu() {
    isBurgerMenuDisplayed.value = false;
  }

  return { isBurgerMenuDisplayed, displayBurgerMenu, hideBurgerMenu };
});
