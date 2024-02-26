import { html, LitElement, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { globalSpaceTravelStyles } from '../../styles/styles.js';
import './components/index.js'

const dots = [
  {
    description: 'Space capsule',
    image: new URL('../../../assets/technology/image-launch-vehicle-portrait.jpg', import.meta.url).href
  },
  {
    description: 'Spaceport',
    image: new URL('../../../assets/technology/image-spaceport-portrait.jpg', import.meta.url).href
  },
  {
    description: 'Launch vehicle',
    image: new URL('../../../assets/technology/image-launch-vehicle-portrait.jpg', import.meta.url).href
  }
];

@customElement('feat-technology')
export class FeatTechnology extends LitElement {

  @state() selectedTab = dots[0].description;

  @state() selectedFoto = dots[0].image;

  static get styles() {
    return [
      globalSpaceTravelStyles,
      css`
        :host {
          display: grid;
        }

        .grid-container--technology {
          --flow-space: 2rem;
          grid-template-areas:
              'title'
              'image'
              'tabs'
              'content';
        }

        .grid-container--technology > h1 {
          grid-area: title;
        }

        .grid-container--technology > img {
          grid-area: image;
          max-width: 60%;
          border-bottom: 1px solid var(--clr-white-15);
        }

        .grid-container--technology > dot-bar {
          grid-area: tabs;
        }

        .grid-container--technology > feat-capsule,
        .grid-container--technology > feat-spaceport,
        .grid-container--technology > feat-vehicle  {
          grid-area: content;
        }

        @media (min-width: 35em) {
          .grid-container--technology {
            padding-bottom: 0;
            grid-template-areas:
                'title'
                'content'
                'tabs'
                'image';
          }
        }

        @media (min-width: 45em) {

          .grid-container--technology {
            grid-template-columns: minmax(1rem, 1fr) minmax(0, 37rem) minmax(0, 23rem) minmax(1rem, 1fr);
            justify-items: start;
            grid-template-areas:
                '. title title .'
                '. content image .'
                '. tabs image .';
          }

          .grid-container--technology > dot-bar {
            justify-self: start;
          }

          .grid-container--technology > img {
            grid-column: span 2;
            max-width: 90%;
          }
        }
      `
    ];
  }

  handleSelectTab(event) {
    this.selectedTab = event.detail;
    this.selectedFoto = dots
      .filter(x => x.description === event.detail)
      .map(x => x.image);
  }

  render() {
    return html`
      <div class="grid-container grid-container--technology flow">
        <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your technology</h1>

        <dot-bar .dots="${dots.map(x => x.description)}" .selected="${this.selectedTab}" @dot-selected="${this.handleSelectTab}"></dot-bar>

        ${when(this.selectedTab === dots[0].description, () => html`
          <feat-capsule></feat-capsule>`, () => html``)}
        ${when(this.selectedTab === dots[1].description, () => html`
          <feat-spaceport></feat-spaceport>`, () => html``)}
        ${when(this.selectedTab === dots[2].description, () => html`
          <feat-vehicle></feat-vehicle>`, () => html``)}

        <img src="${this.selectedFoto}" alt="${this.selectedTab}}">

      </div> `;
  }
}
