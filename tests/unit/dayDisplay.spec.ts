import { shallowMount } from '@vue/test-utils';
import DayDisplay from '@/components/MeetingSelector/DayDisplay.vue';
import MeetingsDay from '@/interfaces/MeetingsDay.interface';
import calendarOptions from '@/defaults/calendarOptions';

describe('DayDisplay.vue', () => {
  describe('props', () => {
  });

  describe('computed', () => {
    it('title', () => {
      const date: Date = new Date('2020-01-01');
      const meetingsDay:MeetingsDay = {
        date,
        slots: [],
      };
      const wrapper = shallowMount(DayDisplay, {
        propsData: {
          meetingsDay,
          daysLabel: calendarOptions.daysLabel,
          monthsLabel: calendarOptions.monthsLabel,
        },
      });
      expect((wrapper.vm as Vue & { title: string }).title).toBe('wednesday');
    });
    it('subtitle', () => {
      const date: Date = new Date('2020-01-01');
      const meetingsDay:MeetingsDay = {
        date,
        slots: [],
      };
      const wrapper = shallowMount(DayDisplay, {
        propsData: {
          meetingsDay,
          daysLabel: calendarOptions.daysLabel,
          monthsLabel: calendarOptions.monthsLabel,
        },
      });
      expect((wrapper.vm as Vue & { subtitle: string }).subtitle).toBe(
        '1 jan.',
      );
    });
  });
});
