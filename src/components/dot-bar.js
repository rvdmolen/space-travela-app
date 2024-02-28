import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../styles/styles.js';
import { DotSelectedEvent } from '../events/dot-selected-event.js';

@customElement('dot-bar')
export class DotBar extends LitElement {

  @property({ type: Array }) dots;

  @property({ type: Text }) selected = '';

  static get styles() {
    return [
      globalSpaceTravelStyles
    ];
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
  }

  selectDot(dot) {
    const dotSelectedEvent = new DotSelectedEvent(dot);
    this.dispatchEvent(dotSelectedEvent);
  }

  render() {
    return html`
      <div class="dot-indicators flex">
        ${this.dots.map(
          dot =>
            html`
              <button aria-selected="${this.selected === dot}" @click="${() => this.selectDot(dot)}"><span class="sr-only">${dot}</span></button>
            `
        )}
      </div>
    `;
  }
}
