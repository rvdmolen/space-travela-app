import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';
import '../components/crew-article.js';

@customElement('feat-commander')
export class FeatCommander extends LitElement {
  static styles = [globalSpaceTravelStyles];

  render() {
    return html`
      <crew-article>
        <p slot="header">Commander</p>
        <p slot="title">Douglas Hurley</p>
        <p slot="content">
          Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon
          Demo-2.
        </p>
      </crew-article>
    `;
  }
}
