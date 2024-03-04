import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';
import '../components/crew-article.js';

@customElement('feat-pilot')
export class FeatPilot extends LitElement {
  static styles = [globalSpaceTravelStyles];

  render() {
    return html`
      <crew-article>
        <p slot="header">Pilot</p>
        <p slot="title">Victor Glover</p>
        <p slot="content">
          Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He
          was a crew member of Expedition 64, and served as a station systems flight engineer.
        </p>
      </crew-article>
    `;
  }
}
