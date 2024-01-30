export interface CalendarOptions {
  daysLabel?: string[];
  monthsLabel?: string[];
  limit?: number,
  spacing?: number,
  loadingLabel?: string;
  // eslint-disable-next-line no-unused-vars
  disabledDate?:(date: string | Date) => boolean;
}

type Required<T> = {
  [P in keyof T]-?: T[P]
}

export type RequiredCalendarOptions = Required<CalendarOptions>;
