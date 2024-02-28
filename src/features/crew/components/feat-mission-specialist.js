import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';

@customElement('feat-mission-specialist')
export class FeatMissionSpecialist extends LitElement {
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
          <h2 class="fs-600 ff-serif uppercase">Mission Specialist</h2>
          <p class="fs-700 uppercase ff-serif">Mark Shuttleworth</p>
        </header>
        <p>
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to
          travel to space as a space tourist.
        </p>
      </article>
    `;
  }
}
