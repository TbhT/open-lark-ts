import { CalendarRole, CalendarEventVisibility } from './Enum';
export interface Calendar {
    id: string;
    summary: string;
    description: string;
    default_access_role: CalendarRole;
    is_private: boolean;
}
export interface CalendarAttendee {
    open_id: string;
    employee_id: string;
    optional: boolean;
    display_name: string;
}
export interface CalendarEvent {
    id: string;
    description: string;
    start: number;
    end: number;
    visibility: CalendarEventVisibility;
    summary: string;
    attendees: CalendarAttendee[];
}
