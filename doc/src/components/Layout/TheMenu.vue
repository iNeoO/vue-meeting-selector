<template>
  <div class="menu">
    <ul class="menu__items">
      <li
        class="menu__items__item"
        v-for="{ name, submenus } in menu"
        :key="name">
        {{ name }}
        <ul class="menu__items__item__submenus">
          <li
            class="menu__items__item__submenus__submenu"
            v-for="{ name, href } in submenus"
            :key="name">
            <a
              class="menu__items__item__submenus__submenu__link"
              :href="href">{{ name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheMenu',
  setup() {
    const menu = [
      {
        name: 'Getting started',
        submenus: [{
          name: 'Introduction',
          href: '#introduction',
        }, {
          name: 'Installation',
          href: '#installation',
        }, {
          name: 'What\'s new',
          href: '#whatsnew',
        }],
      }, {
        name: 'Doc',
        submenus: [{
          name: 'Props',
          href: '#props',
        }, {
          name: 'Events',
          href: '#events',
        }, {
          name: 'Slots and ScopedSlots',
          href: '#slots',
        }],
      }, {
        name: 'Examples',
        submenus: [{
          name: 'Simple example',
          href: '#simpleexample',
        }, {
          name: 'Simple multi example',
          href: '#simplemultiexample',
        }, {
          name: 'Slots and ScopedSlots',
          href: '#slotsexample',
        }],
      },
    ];
    return {
      menu,
    };
  },
});
</script>

<style scoped lang="scss">
.menu {
  padding-top: 20px;
  height: 100%;
  background-color: $color-background;
  overflow-y: auto;
  overflow-x: hidden;
  &__items {
    list-style: none;
    margin: 0;
    padding-left: 20px;
    &__item {
      white-space: nowrap;
      font-weight: 700;
      color: $color-font;
      &__submenus {
        list-style: none;
        margin: 0;
        padding: 0 0 0 10px;
        &__submenu {
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          padding: 5px 0 5px 20px;
          box-shadow: none;
          &:focus {
            box-shadow: none;
          }
          &__link {
            white-space: nowrap;
            color: $color-primary;
            &:focus {
              box-shadow: none;
            }
          }
          &:hover {
            background-color: #fff;
            border-right: $color-primary 2px solid;
          }
        }
      }
    }
  }
}
</style>
