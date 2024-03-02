import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';

@customElement('crew-article')
export class FeatCommander extends LitElement {
  static get styles() {
    return [
      globalSpaceTravelStyles,
      css`
        h2 {
          color: var(--clr-white-5);
        }
      `,
    ];
  }

  render() {
    return html`
      <article class="flow">
        <header class="flow flow--space-small">
          <h2 class="fs-600 ff-serif uppercase">
            <slot name="header"></slot>
          </h2>
          <p class="fs-700 uppercase ff-serif">
            <slot name="title"></slot>
          </p>
        </header>
        <p>
          <slot name="content"></slot>
        </p>
      </article>
    `;
  }
}
