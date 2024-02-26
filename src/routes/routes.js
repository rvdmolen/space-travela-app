import { html } from 'lit';

const _routes = [
  {
    path: '/',
    render: () => html`<feat-home></feat-home>`,
    title: '00 Home',
    enter: async () => {
       await import('../features/home/feat-home.js');
    },
  },
  {
    path: '/destination',
    render: () => html`<feat-destination></feat-destination>`,
    title: '01 Destination',
    enter: async () => {
      await import('../features/destination/feat-destination.js');
    },
  },
  {
    path: '/crew',
    render: () => html`<feat-crew></feat-crew>`,
    title: '02 Crew',
    enter: async () => {
      await import('../features/crew/feat-crew.js');
    },
  },
  {
    path: '/technology',
    render: () => html`<feat-technology></feat-technology>`,
    title: '03 Technology',
    enter: async () => {
      await import('../features/technology/feat-technology.js');
    },
  },
];

export const SpaceTravelRouter = {
  routes: _routes
}
