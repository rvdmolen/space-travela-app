import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';


@customElement('feat-europe')
export class FeatEurope extends LitElement {
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
        <h2 class="fs-800 uppercase ff-serif">Europe</h2>

        <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.</p>

        <div class="destination-meta flex">
          <div>
            <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
            <p class="ff-serif uppercase">628 mil. km</p>
          </div>
          <div>
            <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
            <p class="ff-serif uppercase">3 years</p>
          </div>
        </div>
      </article>
    `;
  }
}
