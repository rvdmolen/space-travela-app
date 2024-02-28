import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../styles/styles.js';

@customElement('feat-home')
export class FeatHome extends LitElement {
  static get styles() {
    return [
      globalSpaceTravelStyles,
      css`
        :host {
          display: grid;
        }

        @media (min-width: 45em) {
          .grid-container--home {
            padding-bottom: max(6rem, 20vh);
            align-items: end;
          }

          .grid-container--home > *:first-child {
            grid-column: 2;
          }

          .grid-container--home > *:last-child {
            grid-column: 3;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="grid-container grid-container--home">
        <div>
          <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to
            <span class="d-block  fs-900 ff-serif text-white">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
            give you a truly out of this world experience!
          </p>
        </div>
        <div>
          <a href="#" class="large-button uppercase ff-serif text-dark bg-white">Explore</a>
        </div>
      </div>
    `;
  }
}
