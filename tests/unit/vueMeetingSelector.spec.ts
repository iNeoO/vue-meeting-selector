import { shallowMount } from '@vue/test-utils';
import VueMeetingSelector from '@/components/MeetingSelector/VueMeetingSelector.vue';
import Meetings from '@/components/MeetingSelector/Meetings.vue';
import MeetingsDay from '@/interfaces/MeetingsDay.interface';
import MeetingSlot from '@/interfaces/MeetingSlot.interface';
import calendarOptions from '@/defaults/calendarOptions';
import classNames from '@/defaults/classNames';
import ClassNames from '@/interfaces/ClassNames.interface';

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
      expect((wrapper.vm as Vue & { days: string[] })
        .days).toEqual(['saturday', 'sunday']);
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
      expect((wrapper.vm as Vue & { maxNbMeetings: number })
        .maxNbMeetings).toEqual(1);
    });
    it('maxNbMeetings, empty', () => {
      const meetingsDays: MeetingsDay[] = [];
      const wrapper = shallowMount(VueMeetingSelector, {
        propsData: {
          meetingsDays,
          meetingSlot: null,
          date: new Date('2020-02-01:10:00'),
        },
      });
      expect((wrapper.vm as Vue & { maxNbMeetings: number })
        .maxNbMeetings).toEqual(0);
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
      expect((wrapper.vm as Vue & { maxNbMeetings: number })
        .maxNbMeetings).toEqual(1);
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
        date: '',
      };
      expect((wrapper.vm as Vue & { meetingsByDays: MeetingsDay[] })
        .meetingsByDays).toEqual([
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
        },
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
      expect((wrapper.vm as Vue & { cssClass: ClassNames })
        .cssClass).toEqual(classNames);
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
      (wrapper.vm as Vue & { meetingSlotClick: (slot: MeetingSlot) => void })
        .meetingSlotClick(slot1);
      expect(stub).toBeCalledWith({
        date: new Date('2020-02-01:10:00'),
      });
    });
    it('meetingSlotClick, no selected multi', () => {
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
          meetingSlot: [],
          multi: true,
          date: new Date('2020-02-01:10:00'),
        },
      });
      const stub = jest.fn();
      wrapper.vm.$on('change', stub);
      (wrapper.vm as Vue & { meetingSlotClick: (slot: MeetingSlot) => void })
        .meetingSlotClick(slot1);
      expect(stub).toBeCalledWith([{
        date: new Date('2020-02-01:10:00'),
      }]);
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
      (wrapper.vm as Vue & { meetingSlotClick: (slot: MeetingSlot) => void })
        .meetingSlotClick({
          date: new Date('2020-02-01:10:00'),
        });

      expect(stub).toBeCalled();
    });
    it('meetingSlotClick, already same slot selected multi', () => {
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
          meetingSlot: [slot1],
          multi: true,
          date: new Date('2020-02-01:10:00'),
        },
      });
      const stub = jest.fn();
      wrapper.vm.$on('change', stub);
      (wrapper.vm as Vue & { meetingSlotClick: (slot: MeetingSlot) => void })
        .meetingSlotClick({
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
      (wrapper.vm as Vue & { meetingSlotClick: (slot: MeetingSlot) => void })
        .meetingSlotClick({
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
      (wrapper.vm as Vue & { nextMeetings: () => void }).nextMeetings();
      expect((wrapper.vm as Vue & { skip: number }).skip).toEqual(4);
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
      (wrapper.vm as Vue & { nextMeetings: () => void }).nextMeetings();
      (wrapper.vm as Vue & { previousMeetings: () => void }).previousMeetings();
      expect((wrapper.vm as Vue & { skip: number }).skip).toEqual(0);
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
      (wrapper.vm as Vue & { previousDate: () => void }).previousDate();
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
      (wrapper.vm as Vue & { nextDate: () => void }).nextDate();
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
      (wrapper.vm as Vue & { nextMeetings: () => void }).nextMeetings();
      wrapper.setProps({ date: new Date('2020-02-02:10:00') });
      expect((wrapper.vm as Vue & { skip: number }).skip).toEqual(0);
    });
  });
});
