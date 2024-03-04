import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';

@customElement('feat-spaceport')
export class FeatSpaceport extends LitElement {
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
          <h2 class="fs-600 ff-serif uppercase">Spaceport</h2>
        </header>
        <p>
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape
          Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
        </p>
      </article>
    `;
  }
}
