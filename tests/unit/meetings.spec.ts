import { shallowMount } from '@vue/test-utils';
import Meetings from '@/components/MeetingSelector/Meetings.vue';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';
import MeetingsDay from '@/interfaces/MeetingsDay.interface';

describe('Meetings.vue', () => {
  describe('props', () => {
    it('meetingsDay', () => {
      const date: Date = new Date('2020-01-01');
      const meetingsDay:MeetingsDay = {
        date,
        slots: [],
      };
      const meetingSlotSelected: MeetingSlot = {
        date: new Date('2020-01-01'),
      };
      const wrapper = shallowMount(Meetings, {
        propsData: {
          meetingsDay,
          meetingSlotSelected,
          meetingButtonClass: '',
          meetingEmptyClass: '',
          meetingClass: '',
        },
      });
      expect((wrapper.vm as Vue & { meetingsDay: MeetingsDay }).meetingsDay)
        .toMatchObject(meetingsDay);
    });
    it('meetingSlotSelected', () => {
      const date: Date = new Date('2020-01-01');
      const meetingsDay:MeetingsDay = {
        date,
        slots: [],
      };
      const meetingSlotSelected: MeetingSlot = {
        date: new Date('2020-01-01'),
      };
      const wrapper = shallowMount(Meetings, {
        propsData: {
          meetingsDay,
          meetingSlotSelected,
          meetingButtonClass: '',
          meetingEmptyClass: '',
          meetingClass: '',
        },
      });
      expect((wrapper.vm as Vue & { meetingSlotSelected: MeetingSlot })
        .meetingSlotSelected).toMatchObject(meetingSlotSelected);
    });
    it('meetingSlotSelected, undefined', () => {
      const date: Date = new Date('2020-01-01');
      const meetingsDay:MeetingsDay = {
        date,
        slots: [],
      };
      const wrapper = shallowMount(Meetings, {
        propsData: {
          meetingsDay,
          meetingButtonClass: '',
          meetingEmptyClass: '',
          meetingClass: '',
        },
      });
      expect((wrapper.vm as Vue & { meetingSlotSelected: MeetingSlot })
        .meetingSlotSelected).toMatchObject({});
    });
  });

  describe('events', () => {
    it('emit meeting-slot-click', () => {
      const date: Date = new Date();
      const meetingsDay:MeetingsDay = {
        date,
        slots: [],
      };
      const meetingSlotSelected: MeetingSlot = {
        date,
      };
      const wrapper = shallowMount(Meetings, {
        propsData: {
          meetingsDay,
          meetingSlotSelected,
        },
      });
      const stub = jest.fn();
      wrapper.vm.$on('meeting-slot-click', stub);
      (wrapper.vm as Vue & { meetingSlotClick: (meetingSlotSelected: MeetingSlot) => void })
        .meetingSlotClick(meetingSlotSelected);
      expect(stub).toBeCalledWith({ date });
    });
  });
});
