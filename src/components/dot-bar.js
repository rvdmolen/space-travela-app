import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../styles/styles.js';
import { DotSelectedEvent } from '../events/dot-selected-event.js';

@customElement('dot-bar')
export class DotBar extends LitElement {
  @property({ type: Array }) dots;
  @state() _dots;

  static styles = [globalSpaceTravelStyles];

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this._dots = [...this.dots];
  }

  selectDot(selectedDot) {
    this._dots = this._dots.map(dot => ({
      ...dot,
      selected: dot.description === selectedDot.description
    }));
    const tabSelectedEvent = new DotSelectedEvent(selectedDot);
    this.dispatchEvent(tabSelectedEvent);
  }

  render() {
    return html`
      <div class="dot-indicators flex">
        ${this._dots.map(dot => html`
          <button aria-selected="${dot.selected === true}" @click="${() => this.selectDot(dot)}"><span class="sr-only">${dot}</span></button> `)}
      </div>
    `;
  }
}
