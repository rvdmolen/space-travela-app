import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../styles/styles.js';
import { KeyDefinitions } from '../model/key-definitions.js';
import { TabSelectedEvent } from '../events/tab-selected-event.js';


@customElement('tab-bar')
export class TabBar extends LitElement {

  /** @type {Tab[]} */
  @property({ type: Array }) tabs;

  /** @type {string} */
  @property({ type: Text }) selected = '';

  /** @type {Tab[]} */
  @state() _tabs;

  static get styles() {
    return [
      globalSpaceTravelStyles
    ];
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this._tabs = [...this.tabs];
  }

  /**
   * Select tab
   * @param {Tab} selectedTab
   */
  selectTab(selectedTab) {
    this._tabs = this._tabs.map(tab => ({
        ...tab,
        selected: tab.description === selectedTab.description
      }
    ));
    const tabSelectedEvent = new TabSelectedEvent(selectedTab);
    this.dispatchEvent(tabSelectedEvent);
  }


  /**
   * @param {KeyboardEvent} ev
   */
  handleKeyDown(ev) {
    const currentTabSelected = this.shadowRoot.querySelector('[aria-selected="true"]');
    const tabs = this.shadowRoot.querySelectorAll('[role="tab"]');
    const currentIndex = Array.from(tabs).findIndex((item) => item.innerText === currentTabSelected.innerText);

    if (ev.key === KeyDefinitions.KEY_DOWN_RIGHT) {
      this._handleMoveRightTab(currentIndex, tabs);
    }

    if (ev.key === KeyDefinitions.KEY_DOWN_LEFT) {
      this._handleMoveLeftTab(currentIndex, tabs);
    }
  }

  /**
   * @param {KeyboardEvent} ev
   * @param {Tab} tab
   */
  keyPressTab(ev, tab) {
    if (ev.key === KeyDefinitions.KEY_DOWN_ENTER) {
      this.selectTab(tab);
    }
  }

  _handleMoveRightTab(currentIndex, tabs) {
    if (currentIndex < tabs.length - 1) {
      this._setTabVisibility(tabs, currentIndex, currentIndex + 1);
    } else {
      this._setTabVisibility(tabs, currentIndex, 0);
    }
  }

  _handleMoveLeftTab(currentIndex, tabs) {
    if (currentIndex > 0) {
      this._setTabVisibility(tabs, currentIndex, currentIndex - 1);
    } else {
      this._setTabVisibility(tabs, currentIndex, tabs.length - 1);
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
        ${this._tabs.map(
          (tab =>
              html`
                <button role="tab" aria-selected="${tab.selected === true}" @click="${() => this.selectTab(tab)}" @keydown="${(e) => this.keyPressTab(e, tab)}"
                        class="uppercase ff-sans-cond text-accent letter-spacing-2">${tab.description}
                </button>
              `
          ))}
      </div>
    `;
  }


}
