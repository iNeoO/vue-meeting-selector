import { shallowMount } from '@vue/test-utils';
import VueMeetingSelector from '@/components/MeetingSelector/VueMeetingSelector.vue';
import Meetings from '@/components/MeetingSelector/Meetings.vue';
import MeetingsDay from '@/interfaces/MeetingsDay.interface';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';
import calendarOptions from '@/defaults/calendarOptions';
import classNames from '@/defaults/classNames';

describe('VueMeetingSelector.vue', () => {
  describe('props', () => {
  });

  describe('computed', () => {
    it('days', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      expect((wrapper.vm as any).days).toEqual(['saturday', 'sunday']);
    });
    it('maxNbMeetings', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      expect((wrapper.vm as any).maxNbMeetings).toEqual(1);
    });
    it('maxNbMeetings, empty', () => {
      const meetingsDays: MeetingsDay[] = []
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      expect((wrapper.vm as any).maxNbMeetings).toEqual(0);
    });
    it('meetingsByDays', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      expect((wrapper.vm as any).maxNbMeetings).toEqual(1);
    });
    it('meetingsByDays', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      const emptyDate: MeetingSlot = {
        date: ''
      }
      expect((wrapper.vm as any).meetingsByDays).toEqual([
        {
          date: new Date('2020-02-01:10:00'),
          slots: [
            {
              date: new Date('2020-02-01:10:00'),
            },
            emptyDate,
            emptyDate,
            emptyDate,
          ],
        }, {
          date: new Date('2020-02-02:10:00'),
          slots: [
            {
              date: new Date('2020-02-02:10:00'),
            },
            emptyDate,
            emptyDate,
            emptyDate,
          ],
        }
      ]);
    });
    it('cssClass', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      expect((wrapper.vm as any).cssClass).toEqual(classNames);
    });
  });
  describe('events', () => {
    it('meetingSlotClick, no selected', () => {
      const slot1: MeetingSlot = {
        date: new Date('2020-02-01:10:00'),
      };
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      const stub = jest.fn();
      wrapper.vm.$on('change', stub);
      (wrapper.vm as any).meetingSlotClick(slot1);

      expect(stub).toBeCalledWith({
        date: new Date('2020-02-01:10:00'),
      });
    });
    it('meetingSlotClick, already same slot selected', () => {
      const slot1: MeetingSlot = {
        date: new Date('2020-02-01:10:00'),
      };
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: slot1,
          date: new Date('2020-02-01:10:00'),
        },
      });
      const stub = jest.fn();
      wrapper.vm.$on('change', stub);
      (wrapper.vm as any).meetingSlotClick({
        date: new Date('2020-02-01:10:00'),
      });

      expect(stub).toBeCalled();
    });
    it('meetingSlotClick, already other slot selected', () => {
      const slot1: MeetingSlot = {
        date: new Date('2020-02-01:10:00'),
      };
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: slot1,
          date: new Date('2020-02-01:10:00'),
        },
      });
      const stub = jest.fn();
      wrapper.vm.$on('change', stub);
      (wrapper.vm as any).meetingSlotClick({
        date: new Date('2020-02-02:10:00'),
      });

      expect(stub).toBeCalled();
    });
    it('nextMeetings', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      (wrapper.vm as any).nextMeetings();
      expect((wrapper.vm as any).skip).toEqual(4);
    });
    it('previousMeetings', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      (wrapper.vm as any).nextMeetings();
      (wrapper.vm as any).previousMeetings();
      expect((wrapper.vm as any).skip).toEqual(0);
    });
    it('previousDate', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      const stub = jest.fn();
      wrapper.vm.$on('previous-date', stub);
      (wrapper.vm as any).previousDate();
      expect(stub).toBeCalled();
    });
    it('nextDate', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      const stub = jest.fn();
      wrapper.vm.$on('next-date', stub);
      (wrapper.vm as any).nextDate();
      expect(stub).toBeCalled();
    });
  });
  describe('watch', () => {
    it('date', () => {
      const meetingsDays: MeetingsDay[] = (():MeetingsDay[] => {
        const slot1: MeetingSlot = {
          date: new Date('2020-02-01:10:00'),
        };
        const meetingDay1: MeetingsDay = {
          date: new Date('2020-02-01:10:00'),
          slots: [slot1],
        };
        const slot2: MeetingSlot = {
          date: new Date('2020-02-02:10:00'),
        };
        const meetingDay2: MeetingsDay = {
          date: new Date('2020-02-02:10:00'),
          slots: [slot2],
        };
        return [meetingDay1, meetingDay2];
      })();
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      (wrapper.vm as any).nextMeetings();
      wrapper.setProps({ date: new Date('2020-02-02:10:00') });
      expect((wrapper.vm as any).skip).toEqual(0);
    });
  });
});
