import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';
import '../components/destination-article.js';

@customElement('feat-mars')
export class FeatMars extends LitElement {
  static styles = [globalSpaceTravelStyles];

  render() {
    return html`
      <destination-article>
        <p slot="header">Mars</p>
        <p slot="content">
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of
          Everest!
        </p>
        <p slot="distance">225 mil. km</p>
        <p slot="time">9 months</p>
      </destination-article>
    `;
  }
}
