import { html, LitElement, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { globalSpaceTravelStyles } from '../../styles/styles.js';
import './components/feat-commander.js';
import './components/feat-crew-engineer.js';
import './components/feat-pilot.js';
import './components/feat-mission-specialist.js';


const dots = [
  {
    description: 'The commander',
    image: new URL('../../../assets/crew/image-douglas-hurley.png', import.meta.url).href
  },
  {
    description: 'The mission specialist',
    image: new URL('../../../assets/crew/image-mark-shuttleworth.png', import.meta.url).href
  },
  {
    description: 'The pilot',
    image: new URL('../../../assets/crew/image-victor-glover.png', import.meta.url).href
  },
  {
    description: 'The crew engineer',
    image: new URL('../../../assets/crew/image-anousheh-ansari.png', import.meta.url).href
  }
];

@customElement('feat-crew')
export class FeatCrew extends LitElement {

  @state() selectedTab = dots[0].description;

  @state() selectedFoto = dots[0].image;

  static get styles() {
    return [
      globalSpaceTravelStyles,
      css`
        :host {
          display: grid;
        }

        .grid-container--crew {
          --flow-space: 2rem;
          grid-template-areas:
              'title'
              'image'
              'tabs'
              'content';
        }

        .grid-container--crew > h1 {
          grid-area: title;
        }

        .grid-container--crew > img {
          grid-area: image;
          max-width: 60%;
          border-bottom: 1px solid var(--clr-white-15);
        }

        .grid-container--crew > dot-bar {
          grid-area: tabs;
        }

        .grid-container--crew > feat-commander,
        .grid-container--crew > feat-mission-specialist,
        .grid-container--crew > feat-pilot,
        .grid-container--crew > feat-crew-engineer {
          grid-area: content;
        }

        @media (min-width: 35em) {
          .grid-container--crew {
            padding-bottom: 0;
            grid-template-areas:
                'title'
                'content'
                'tabs'
                'image';
          }
        }

        @media (min-width: 45em) {

          .grid-container--crew {
            grid-template-columns: minmax(1rem, 1fr) minmax(0, 37rem) minmax(0, 23rem) minmax(1rem, 1fr);
            justify-items: start;
            grid-template-areas:
                '. title title .'
                '. content image .'
                '. tabs image .';
          }

          .grid-container--crew > dot-bar {
            justify-self: start;
          }

          .grid-container--crew > img {
            grid-column: span 2;
            align-self: end;
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
      <div class="grid-container grid-container--crew flow">
        <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

        <dot-bar .dots="${dots.map(x => x.description)}" .selected="${this.selectedTab}" @dot-selected="${this.handleSelectTab}"></dot-bar>

        ${when(this.selectedTab === dots[0].description, () => html`
          <feat-commander></feat-commander>`, () => html``)}
        ${when(this.selectedTab === dots[1].description, () => html`
          <feat-mission-specialist></feat-mission-specialist>`, () => html``)}
        ${when(this.selectedTab === dots[2].description, () => html`
          <feat-pilot></feat-pilot>`, () => html``)}
        ${when(this.selectedTab === dots[3].description, () => html`
          <feat-crew-engineer></feat-crew-engineer>`, () => html``)}

        <img src="${this.selectedFoto}" alt="${this.selectedTab}}">

      </div> `;
  }
}
