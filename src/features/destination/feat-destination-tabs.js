/**
 * @typedef {Object} Tab
 * @property {string} description - The description of the Tab
 * @property {string} image - The image of the Tab
 * @property {boolean} selected - The selected
 */


/**
 * @type {Tab[]} Tabs
 */
const featureDestinationTabs = [
  {
    description: 'Moon',
    image: new URL('../../../assets/destination/image-moon.png', import.meta.url).href,
    selected: true
  },
  {
    description: 'Mars',
    image: new URL('../../../assets/destination/image-mars.png', import.meta.url).href,
    selected: false
  },
  {
    description: 'Europe',
    image: new URL('../../../assets/destination/image-europa.png', import.meta.url).href,
    selected: false
  },
  {
    description: 'Titan',
    image: new URL('../../../assets/destination/image-titan.png', import.meta.url).href,
    selected: false
  }
];


export { featureDestinationTabs };
