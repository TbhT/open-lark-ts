import { CalendarRole, CalendarEventVisibility } from './Enum'

// 日历对象
export interface Calendar {
  id: string
  summary: string
  description: string
  default_access_role: CalendarRole
  is_private: boolean
}

// 日历的参与人对象
export interface CalendarAttendee {
  open_id: string
  employee_id: string
  optional: boolean
  display_name: string
}

// 日历的日程对象
export interface CalendarEvent {
  id: string
  description: string
  start: number
  end: number
  visibility: CalendarEventVisibility
  summary: string
  attendees: CalendarAttendee[]
}
