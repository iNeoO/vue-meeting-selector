import { shallowMount } from '@vue/test-utils';
import Loader from '@/components/MeetingSelector/Loader.vue';

describe('Loader.vue', () => {
  it('mount', () => {
    const wrapper = shallowMount(Loader);
    expect(wrapper.findAll('.vms-icon-loader').exists()).toBe(true);
  });
});
