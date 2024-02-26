import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';


@customElement('feat-commander')
export class FeatCommander extends LitElement {
  static get styles() {
    return [
      globalSpaceTravelStyles,
      css`
        h2 {
          color: var(--clr-white-5);
        }
      `
    ];
  }

  render() {
    return html`
      <article class="flow">
        <header class="flow flow--space-small">
          <h2 class="fs-600 ff-serif uppercase">Commander</h2>
          <p class="fs-700 uppercase ff-serif">Douglas Hurley</p>
        </header>
        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
          and former NASA astronaut. He launched into space for the third time as
          commander of Crew Dragon Demo-2.</p>
      </article>
    `;
  }
}
