import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';
import '../components/destination-article.js';

@customElement('feat-europe')
export class FeatEurope extends LitElement {
  static styles = [globalSpaceTravelStyles];

  render() {
    return html`
      <destination-article>
        <p slot="header">Europe</p>
        <p slot="content">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey,
          or simple relaxation in your snug wintery cabin.
        </p>
        <p slot="distance">628 mil. km</p>
        <p slot="time">3 years</p>
      </destination-article>
    `;
  }
}
