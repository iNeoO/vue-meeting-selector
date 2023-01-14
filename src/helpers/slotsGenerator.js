/**
 * @typedef {Object} MeetingSlot
 * @property {Date} date - Date of the meeting
 * any other props
 */

/**
 * @typedef {Object} Time
 * @property {number} hours - Hours
 * @property {number} minutes - Minutes
 */

/**
 * used to format a date, to compare with other date without time
 * @param {Date} date - Date to decompose
 * @return {String} YYYYMMDD
 */
function formatingDate(date) {
  const d = new Date(date);
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
}

/**
 * Function to random a number between min and max
 * @param {Number} min - A date
 * @param {Number} max - time of the date
 * @return {number}
  */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Set a time to a date
 * @param {Date} date - A date
 * @param {Time} time - time of the date
 * @return {Date} date with the good time
  */
function setTime(date, time) {
  const d = new Date(date);
  d.setHours(time.hours);
  d.setMinutes(time.minutes);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}

function roundToClosestTime(date, interval) {
  const d = new Date(date);
  const minutes = d.getMinutes();
  const minutesToAdd = minutes % interval;
  d.setMinutes(minutes + (interval - minutesToAdd));
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}

/**
 * Round a date with tz
 * @param {Date} date - date used to disable
 */
// function roundDate(date) {
//   const tz = -date.getTimezoneOffset();
//   const time = {
//     hours: Math.floor(tz / 60),
//     minutes: tz % 60,
//   };
//   return setTime(date, time);
// }

/**
 * Function to generate the first slot of the week used
 * @param {Date} date - date used to disable
 * @param {Number} interval - Interval between two meetings (minutes)
 * @param {Time} startTime - startTime of the meetings
 * @param {Time} endTime - endTime of the meetings
 * @param {number} randomSlotsToDelete - Number of slots to delete randomly
 * @return {MeetingSlot[]} - A list of meetings
 */
function generateSlots(start, end, interval, randomSlotsToDelete) {
  let startStamp = start.getTime();
  const endStamp = end.getTime();
  const slots = [];
  for (;startStamp <= endStamp; startStamp += interval * 60000) {
    const slot = {
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

/**
 * Function to generate the first slot of the week used
 * @param {Date} date - date used to disable
 * @param {Number} interval - Interval between two meetings (minutes)
 * @param {Time} startTime - startTime of the meetings
 * @param {Time} endTime - endTime of the meetings
 * @return {MeetingSlot} - A meetingSlot returned
 */
function generateFirstDate(date, interval, startTime, endTime) {
  let start;
  if (formatingDate(date) <= formatingDate(new Date())) {
    start = roundToClosestTime(date, interval);
    if (start.getTime() < setTime(date, startTime)) {
      start = setTime(date, startTime);
    }
  } else {
    start = setTime(date, startTime);
  }
  const end = setTime(date, endTime);
  const slots = generateSlots(start, end, interval);
  return {
    date,
    slots,
  };
}

/**
 * Function applicated to the button previous to disable it
 * @param {Date} date - date used to start
 * @param {Number} nbDays - number of days to generate
 * @param {Time} startTime - startTime of the meetings
 * @param {Time} endTime - endTime of the meetings
 * @param {Number} interval - Interval between two meetings (minutes)
 * @param {number} randomSlotsToDelete - Number of slots to delete randomly
 * @return {MeetingSlot[]} - list of slots
 */
function generateDays(date, nbDays, startTime, endTime, interval, randomSlotsToDelete = 0) {
  const days = [];
  days.push(generateFirstDate(date, interval, startTime, endTime));
  // Set to second Day
  const startingDay = new Date(date);
  for (let i = 1; i < nbDays; i += 1) {
    startingDay.setDate(startingDay.getDate() + 1);
    const slotsDate = new Date(startingDay);
    /**
     * Use this to not display sunday and saturday
     * if (slotsDate.getDay() === 0 || slotsDate.getDay() === 6) {
     *   i -= 1;
     * } else {
     */
    const startDate = setTime(slotsDate, startTime);
    const endDate = setTime(slotsDate, endTime);
    const slots = generateSlots(
      startDate,
      endDate,
      interval,
      randomSlotsToDelete,
    );
    const meetingsDay = {
      date: new Date(startingDay),
      slots,
    };
    days.push(meetingsDay);
    // }
  }
  return days;
}

export default generateDays;
