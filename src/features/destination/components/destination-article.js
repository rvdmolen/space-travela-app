import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';

@customElement('destination-article')
export class FeatDestinationArticle extends LitElement {
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
        <h2 class="fs-800 uppercase ff-serif">
          <slot name="header"></slot>
        </h2>

        <p>
          <slot name="content"></slot>
        </p>

        <div class="destination-meta flex">
          <div>
            <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
            <p class="ff-serif uppercase">
              <slot name="distance"></slot>
            </p>
          </div>
          <div>
            <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
            <p class="ff-serif uppercase">
              <slot name="time"></slot>
            </p>
          </div>
        </div>
      </article>
    `;
  }
}
