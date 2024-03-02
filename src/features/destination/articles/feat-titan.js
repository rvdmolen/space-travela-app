import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';
import '../components/destination-article.js';

@customElement('feat-titan')
export class FeatTitan extends LitElement {
  static styles = [globalSpaceTravelStyles];

  render() {
    return html`
      <destination-article>
        <p slot="header">Titan</p>
        <p slot="content">
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views
          of the Rings of Saturn.
        </p>
        <p slot="distance">1.6 bil. km</p>
        <p slot="time">7 years</p>
      </destination-article>
    `;
  }
}
