import { html } from 'lit';
import './articles/index-crew-articles.js';

/**
 * @typedef {Object} Tab
 * @property {string} description - The description of the Tab
 * @property {string} image - The image of the Tab
 * @property {boolean} selected - The selected
 * @property {string} template - The html to render
 */

const featureCrewDots = [
  {
    description: 'The commander',
    image: new URL('../../../assets/crew/image-douglas-hurley.png', import.meta.url).href,
    template: html`
      <feat-commander></feat-commander>`,
    selected: true
  },
  {
    description: 'The mission specialist',
    image: new URL('../../../assets/crew/image-mark-shuttleworth.png', import.meta.url).href,
    template: html`
      <feat-mission-specialist></feat-mission-specialist>`,
    selected: false
  },
  {
    description: 'The pilot',
    image: new URL('../../../assets/crew/image-victor-glover.png', import.meta.url).href,
    template: html`
      <feat-pilot></feat-pilot>`,
    selected: false
  },
  {
    description: 'The crew engineer',
    image: new URL('../../../assets/crew/image-anousheh-ansari.png', import.meta.url).href,
    template: html`
      <feat-crew-engineer></feat-crew-engineer>`,
    selected: false
  }
];

export { featureCrewDots };
