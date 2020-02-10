import { shallowMount } from '@vue/test-utils';
import ArrowIcon from '@/components/MeetingSelector/ArrowIcon.vue';

describe('ArrowIcon.vue', () => {
  describe('class displayed', () => {
    it('render icon, left', () => {
      const wrapper = shallowMount(ArrowIcon, {
        propsData: {
          direction: 'left',
        },
      });
      expect(wrapper.find('.icon-left').exists()).toBe(true);
    });
    it('render icon, default', () => {
      const wrapper = shallowMount(ArrowIcon, {
        propsData: {},
      });
      expect(wrapper.find('.icon-right').exists()).toBe(true);
    });
  });
});
