import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';


@customElement('feat-pilot')
export class FeatPilot extends LitElement {
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
          <h2 class="fs-600 ff-serif uppercase">Pilot</h2>
          <p class="fs-700 uppercase ff-serif">Victor Glover</p>
        </header>
        <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy where
          he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
          station systems flight engineer.</p>
      </article>
    `;
  }
}
