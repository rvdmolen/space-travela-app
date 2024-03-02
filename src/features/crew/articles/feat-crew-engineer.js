import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';
import '../components/crew-article.js';

@customElement('feat-crew-engineer')
export class FeatCrewEngineer extends LitElement {
  static styles = [globalSpaceTravelStyles];

  render() {
    return html`
      <crew-article>
        <p slot="header">Flight Engineer</p>
        <p slot="title">Anousheh Ansari</p>
        <p slot="content">
          Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to
          the ISS, and the first Iranian in space.
        </p>
      </crew-article>
    `;
  }
}
