interface CalendarEventDetailBase {
  id: string;
  userID: string;
  name: string;
  memo: string | null;
  shared: boolean;
}

export interface CalendarEventDetail extends CalendarEventDetailBase {
  start: string;
  end: string | null;
}

export interface CalendarEventTodayDetail extends CalendarEventDetailBase {
  startTime: string | null;
  endTime: string | null;
}
