import ActionsStore from '@/interfaces/ActionsStore.interface';

const state: ActionsStore = {
  isBurgerMenuDisplayed: false,
};

const actions = {
  displayBurgerMenu({ commit }: { commit: Function }): void {
    commit('DISPLAY_BURGER_MENU');
  },
  hideBurgerMenu({ commit }: { commit: Function }): void {
    commit('HIDE_BURGER_MENU');
  },
};

const getters = {
  isBurgerMenuDisplayed: (state: ActionsStore): boolean => state.isBurgerMenuDisplayed,
};

const mutations = {
  DISPLAY_BURGER_MENU(state: ActionsStore): void {
    state.isBurgerMenuDisplayed = true;
  },
  HIDE_BURGER_MENU(state: ActionsStore): void {
    state.isBurgerMenuDisplayed = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
