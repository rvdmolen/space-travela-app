import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';


@customElement('feat-crew-engineer')
export class FeatCrewEngineer extends LitElement {
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
          <h2 class="fs-600 ff-serif uppercase">Flight Engineer</h2>
          <p class="fs-700 uppercase ff-serif">Anousheh Ansari</p>
        </header>
        <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
          Ansari was the fourth self-funded space tourist, the first self-funded woman to
          fly to the ISS, and the first Iranian in space.</p>
      </article>
    `;
  }
}
