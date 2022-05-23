interface CalendarOptions {
  daysLabel: string[];
  monthsLabel: string[];
  limit: number,
  loadingLabel: string;
  disabledDate: (date: Date) => boolean;
}

export default CalendarOptions;
