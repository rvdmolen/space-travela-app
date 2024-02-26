import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';


@customElement('feat-titan')
export class FeatTitan extends LitElement {
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
        <h2 class="fs-800 uppercase ff-serif">Titan</h2>

        <p>The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>

        <div class="destination-meta flex">
          <div>
            <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
            <p class="ff-serif uppercase">1.6 bil. km</p>
          </div>
          <div>
            <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
            <p class="ff-serif uppercase">7 years</p>
          </div>
        </div>
      </article>
    `;
  }
}
