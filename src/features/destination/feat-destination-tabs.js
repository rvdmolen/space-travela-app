import { html } from 'lit';
import './articles/index-destionation-articles.js';

/**
 * @typedef {Object} Tab
 * @property {string} description - The description of the Tab
 * @property {string} image - The image of the Tab
 * @property {boolean} selected - The selected
 * @property {string} template - The html to render
 */

/**
 * @type {Tab[]} Tabs
 */
const featureDestinationTabs = [
  {
    description: 'Moon',
    image: new URL('../../../assets/destination/image-moon.png', import.meta.url).href,
    template: html`
      <feat-moon></feat-moon>`,
    selected: true
  },
  {
    description: 'Mars',
    image: new URL('../../../assets/destination/image-mars.png', import.meta.url).href,
    template: html`
      <feat-mars></feat-mars>`,
    selected: false
  },
  {
    description: 'Europe',
    image: new URL('../../../assets/destination/image-europa.png', import.meta.url).href,
    template: html`
      <feat-europe></feat-europe>`,
    selected: false
  },
  {
    description: 'Titan',
    image: new URL('../../../assets/destination/image-titan.png', import.meta.url).href,
    template: html`
      <feat-titan></feat-titan>`,
    selected: false
  },
];

export { featureDestinationTabs };
