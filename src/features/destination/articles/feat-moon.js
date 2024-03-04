import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';
import '../components/destination-article.js';

@customElement('feat-moon')
export class FeatMoon extends LitElement {
  static styles = [globalSpaceTravelStyles];

  render() {
    return html`
      <destination-article>
        <p slot="header">Moon</p>
        <p slot="content">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history
          by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <p slot="distance">384,400 km</p>
        <p slot="time">3 days</p>
      </destination-article>
    `;
  }
}
