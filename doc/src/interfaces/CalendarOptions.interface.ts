interface CalendarOptions {
  daysLabel: string[];
  monthsLabel: string[];
  limit: number,
  loadingLabel: string;
  // eslint-disable-next-line no-unused-vars
  disabledDate:(date: string | Date) => boolean;
}

export default CalendarOptions;
