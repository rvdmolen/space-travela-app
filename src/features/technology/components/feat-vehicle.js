import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';

@customElement('feat-vehicle')
export class FeatVehicle extends LitElement {
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
          <h2 class="fs-600 ff-serif uppercase">Launch vehicle</h2>
        </header>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X
          carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
        </p>
      </article>
    `;
  }
}
