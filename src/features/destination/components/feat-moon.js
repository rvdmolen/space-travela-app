import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';


@customElement('feat-moon')
export class FeatMoon extends LitElement {
  static get styles() {
    return [
      globalSpaceTravelStyles,
      css`
        .destination-meta {
          flex-direction: column;
          border-top: 1px solid var(--clr-white-15);
          padding-top: 2.5rem;
          margin-top: 2.5rem;
        }

        .destination-meta p {
          font-size: 1.75rem;
        }

        @media (min-width: 35em) {
          .destination-meta {
            flex-direction: row;
            justify-content: space-evenly;
          }
        }

        @media (min-width: 45em) {
          .destination-meta {
            --gap: min(5vw, 6rem);
            justify-content: start;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <article class="flow">
        <h2 class="fs-800 uppercase ff-serif">Moon</h2>

        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help
          regain perspective and come back refreshed. While you’re there, take in some history
          by visiting the Luna 2 and Apollo 11 landing sites.</p>

        <div class="destination-meta flex">
          <div>
            <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
            <p class="ff-serif uppercase">384,400 km</p>
          </div>
          <div>
            <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
            <p class="ff-serif uppercase">3 days</p>
          </div>
        </div>
      </article>
    `;
  }
}
