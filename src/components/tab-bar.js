import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../styles/styles.js';


/** @type {string} */
const KEY_DOWN_ENTER = 'KeyDownEnter';

/** @type {string} */
const KEY_DOWN_LEFT = 'ArrowLeft';

/** @type {string} */
const KEY_DOWN_RIGHT = 'ArrowRight';


@customElement('tab-bar')
export class TabBar extends LitElement {

  @property({ type: Array }) tabs;

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
    [this.selected] = this.tabs.filter(x => x.selected === true).map(x => x.description);
  }

  selectTab(tab) {
    const myEvent = new CustomEvent('tab-selected', {
      detail: tab.description,
      bubbles: true,
      composed: true });

    this.selected = tab.description;
    this.dispatchEvent(myEvent);
  }

  /**
   * @param {KeyboardEvent} ev
   */
  handleKeyDown(ev) {
    const currentTabSelected = this.shadowRoot.querySelector('[aria-selected="true"]');
    const tabs = this.shadowRoot.querySelectorAll('[role="tab"]');
    const currentIndex = Array.from(tabs).findIndex((item)=> item.innerText === currentTabSelected.innerText);

    if (ev.key === KEY_DOWN_RIGHT) {
      this._handleMoveRightTab(currentIndex, tabs);
    }

    if (ev.key === KEY_DOWN_LEFT) {
      this._handleMoveLeftTab(currentIndex, tabs);

    }
  }

  /**
   * @param {KeyboardEvent} ev
   */
  keyPressTab(ev, tab) {
    if (ev.key === KEY_DOWN_ENTER) {
      this.selectTab(tab);
    }
  }

  _handleMoveRightTab(currentIndex, tabs) {
    if (currentIndex < tabs.length-1) {
      this._setTabVisibility(tabs, currentIndex, currentIndex+1);
    } else {
      this._setTabVisibility(tabs, currentIndex, 0);
    }
  }

  _handleMoveLeftTab(currentIndex, tabs) {
    if (currentIndex > 0) {
      this._setTabVisibility(tabs, currentIndex, currentIndex-1);
    } else {
      this._setTabVisibility(tabs, currentIndex, tabs.length-1);
    }
  }

  _setTabVisibility(tabs, currentTabIndex, newTabIndex) {
    tabs[currentTabIndex].setAttribute('aria-selected', 'false');
    tabs[newTabIndex].setAttribute('aria-selected', 'true');
    tabs[newTabIndex].focus();
  }

  render() {
    return html`
      <div class="tab-list underline-indicators flex" role="tablist" aria-label="destination list" @keydown="${(e) => this.handleKeyDown(e)}">
        ${this.tabs.map(
          (tab =>
            html`
              <button role="tab" aria-selected="${this.selected === tab.description}" @click="${() => this.selectTab(tab)}" @keydown="${(e) => this.keyPressTab(e, tab)}" class="uppercase ff-sans-cond text-accent letter-spacing-2">${tab.description}</button>
            `
        ))}
      </div>
    `;
  }




}
