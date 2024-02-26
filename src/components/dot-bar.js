import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../styles/styles.js';

@customElement('dot-bar')
export class DotBar extends LitElement {

  @property({ type: Array }) dots;

  @property({type: Text}) selected = '';


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
    const myEvent = new CustomEvent('dot-selected', {
      detail: dot,
      bubbles: true,
      composed: true });
    this.dispatchEvent(myEvent);
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
