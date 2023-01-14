import type MeetingsDay from '../interfaces/MeetingsDay.interface';
import type MeetingSlot from '../interfaces/MeetingSlot.interface';
import type Time from '../interfaces/Time.interface';

function formatingDate(date: Date | string):string {
  const d = new Date(date);
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
}

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function setTime(date: Date, time: Time): Date {
  const d: Date = new Date(date);
  d.setHours(time.hours);
  d.setMinutes(time.minutes);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}

function roundToClosestTime(date: Date, interval: number): Date {
  const d: Date = new Date(date);
  const minutes: number = d.getMinutes();
  const minutesToAdd: number = minutes % interval;
  d.setMinutes(minutes + (interval - minutesToAdd));
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}

// function roundDate(date: Date): Date {
//   const tz = -date.getTimezoneOffset();
//   const time: Time = {
//     hours: Math.floor(tz / 60),
//     minutes: tz % 60,
//   };
//   return setTime(date, time);
// }

function generateSlots(
  start: Date,
  end: Date,
  interval: number,
  randomSlotsToDelete = 0,
): MeetingSlot[] {
  let startStamp: number = start.getTime();
  const endStamp: number = end.getTime();
  const slots: MeetingSlot[] = [];
  for (;startStamp <= endStamp; startStamp += interval * 60000) {
    const slot: MeetingSlot = {
      date: new Date(startStamp),
    };
    slots.push(slot);
  }
  for (let i = 0; i < randomSlotsToDelete; i += 1) {
    const indexToDelete = randomNumber(0, slots.length);
    slots.splice(indexToDelete, 1);
  }
  return slots;
}

function generateFirstDate(
  date: Date,
  interval: number,
  startTime: Time,
  endTime: Time,
):MeetingsDay {
  let start: Date;
  if (formatingDate(date) <= formatingDate(new Date())) {
    start = roundToClosestTime(date, interval);
  } else {
    start = setTime(date, startTime);
  }
  const end: Date = setTime(date, endTime);
  const slots: MeetingSlot[] = generateSlots(start, end, interval);
  return {
    date,
    slots,
  };
}

function generateDays(
  date: Date,
  nbDays: number,
  startTime: Time,
  endTime: Time,
  interval: number,
  randomSlotsToDelete = 0,
): MeetingsDay[] {
  const days: MeetingsDay[] = [];
  days.push(generateFirstDate(date, interval, startTime, endTime));
  // Set to second Day
  const startingDay: Date = new Date(date);
  for (let i = 1; i < nbDays; i += 1) {
    const slotsDate: Date = new Date(startingDay.setDate(startingDay.getDate() + 1));
    if (slotsDate.getDay() === 0 || slotsDate.getDay() === 6) {
      i -= 1;
    } else {
      const startDate: Date = setTime(slotsDate, startTime);
      const endDate: Date = setTime(slotsDate, endTime);
      const slots: MeetingSlot[] = generateSlots(
        startDate,
        endDate,
        interval,
        randomSlotsToDelete,
      );
      const meetingsDay: MeetingsDay = {
        date: new Date(startingDay),
        slots,
      };
      days.push(meetingsDay);
    }
  }
  return days;
}

export default generateDays;
