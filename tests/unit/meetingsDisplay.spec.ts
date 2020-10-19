import { shallowMount } from '@vue/test-utils';
import MeetingDisplay from '@/components/MeetingSelector/MeetingDisplay.vue';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';

describe('MeetingDisplay.vue', () => {
  describe('props', () => {
    it('meetingButtonClass', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: {
          meetingSlot,
          meetingButtonClass: 'meetingButtonClass',
        },
      });
      expect(wrapper.find('.meetingButtonClass').exists()).toBe(true);
    });

    it('meetingEmptyClass', () => {
      const meetingSlot: MeetingSlot = {
        date: '',
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: {
          meetingSlot,
          meetingEmptyClass: 'meetingEmptyClass',
        },
      });
      expect(wrapper.find('.meetingEmptyClass').exists()).toBe(true);
    });
  });

  describe('computed', () => {
    it('time < 10', () => {
      const date: Date = new Date('2020-02-02:02:02');
      const meetingSlot: MeetingSlot = {
        date,
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: { meetingSlot },
      });
      const hours:string = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
      const minutes:string = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
      const time:string = `${hours}:${minutes}`;
      expect((wrapper.vm as Vue & { time: string }).time).toBe(time);
    });

    it('time > 10', () => {
      const date: Date = new Date('2020-02-02:20:20');
      const meetingSlot: MeetingSlot = {
        date,
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: { meetingSlot },
      });
      const hours: string = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
      const minutes: string = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
      const time: string = `${hours}:${minutes}`;
      expect((wrapper.vm as Vue & { time: string }).time).toBe(time);
    });

    it('isMeetingSelected, true', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: {
          meetingSlot,
          meetingSlotSelected: meetingSlot,
        },
      });
      expect((wrapper.vm as Vue & { isMeetingSelected: boolean })
        .isMeetingSelected).toBe(true);
    });

    it('isMeetingSelected no meeting selected, false', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: {
          meetingSlot,
        },
      });
      expect((wrapper.vm as Vue & { isMeetingSelected: boolean })
        .isMeetingSelected).toBe(false);
    });
    it('isMeetingSelected no meeting null, false', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: {
          meetingSlot,
          meetingSlotSelected: null,
        },
      });
      expect((wrapper.vm as Vue & { isMeetingSelected: boolean })
        .isMeetingSelected).toBe(false);
    });
  });

  describe('events', () => {
    it('calls meetingSlotClick when click on meeting', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: { meetingSlot },
      });
      const stub = jest.fn();
      wrapper.setMethods({ meetingSlotClick: stub });
      wrapper.find('.meeting__button').trigger('click');
      expect((wrapper.vm as Vue & { meetingSlotClick: () => void })
        .meetingSlotClick).toBeCalled();
    });

    it('emit meeting-slot-click', () => {
      const date: Date = new Date();
      const meetingSlot: MeetingSlot = {
        date,
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: { meetingSlot },
      });
      const stub = jest.fn();
      wrapper.vm.$on('meeting-slot-click', stub);
      (wrapper.vm as Vue & { meetingSlotClick: () => void }).meetingSlotClick();

      expect(stub).toBeCalledWith(meetingSlot);
    });
  });

  describe('class displayed', () => {
    it('render .empty__date, date = \'\'', () => {
      const meetingSlot: MeetingSlot = {
        date: '',
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: { meetingSlot },
      });
      expect(wrapper.find('.meeting__empty').exists()).toBe(true);
    });

    it('!render .empty__date, date = new Date()', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: { meetingSlot },
      });
      expect(wrapper.find('.meeting__empty').exists()).toBe(false);
    });

    it('render .meeting__button--selected, date = new Date()', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: {
          meetingSlot,
          meetingSlotSelected: meetingSlot,
        },
      });
      expect(wrapper.find('.meeting__button--selected').exists()).toBe(true);
    });

    it('!render .meeting__button--selected, date = new Date(1)', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const meetingSlotSelected: MeetingSlot = {
        date: new Date(1),
      };
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: {
          meetingSlot,
          meetingSlotSelected,
        },
      });
      expect(wrapper.find('.meeting__button--selected').exists()).toBe(false);
    });

    it('render .meeting__button--selected, date = new Date() multi', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const meetingSlotSelected: MeetingSlot[] = [{
        date: new Date(),
      }];
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: {
          meetingSlot,
          meetingSlotSelected,
        },
      });
      expect(wrapper.find('.meeting__button--selected').exists()).toBe(true);
    });

    it('!render .meeting__button--selected, date = new Date(1) multi', () => {
      const meetingSlot: MeetingSlot = {
        date: new Date(),
      };
      const meetingSlotSelected: MeetingSlot[] = [{
        date: new Date(1),
      }];
      const wrapper = shallowMount(MeetingDisplay, {
        propsData: {
          meetingSlot,
          meetingSlotSelected,
        },
      });
      expect(wrapper.find('.meeting__button--selected').exists()).toBe(false);
    });
  });
});
