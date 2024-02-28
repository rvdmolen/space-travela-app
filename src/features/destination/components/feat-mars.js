import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';

@customElement('feat-mars')
export class FeatMars extends LitElement {
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
      `,
    ];
  }

  render() {
    return html`
      <article class="flow">
        <h2 class="fs-800 uppercase ff-serif">Mars</h2>

        <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of
          Everest!
        </p>

        <div class="destination-meta flex">
          <div>
            <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
            <p class="ff-serif uppercase">225 mil. km</p>
          </div>
          <div>
            <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
            <p class="ff-serif uppercase">9 months</p>
          </div>
        </div>
      </article>
    `;
  }
}
