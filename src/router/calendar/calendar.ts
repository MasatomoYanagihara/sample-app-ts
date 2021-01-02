import { RouteConfig } from 'vue-router';
import CalendarComponent from '@/views/Calendar.vue';

export const calendarRoutes: Array<RouteConfig> = [
  {
    path: '/calendar/:type',
    name: 'calendar',
    component: CalendarComponent,
    props: true,
    meta: {
      title: 'calendar',
    },
  },
];
