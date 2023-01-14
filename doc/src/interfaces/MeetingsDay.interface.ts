import type MeetingSlot from './MeetingSlot.interface';

interface MeetingsDay {
  date: Date | string;
  slots: MeetingSlot[];
  [key: string]: any;
}

export default MeetingsDay;
