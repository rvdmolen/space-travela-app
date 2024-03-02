import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { featureDestinationTabs } from './feat-destination-tabs.js';
import { featDestinationStyles } from './feat-destination-style.js';

@customElement('feat-destination')
export class FeatDestination extends LitElement {
  @state() selectedImage;
  @state() selectedArticle;

  static styles = [featDestinationStyles];

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this._initializeTabs();
  }

  handleSelectTab(event) {
    const { image, template } = event.detail;
    this._setCurrentSelection(image, template);
  }

  _initializeTabs() {
    const { image, template } = featureDestinationTabs.find(tab => tab.selected) || {};
    if (image && template) {
      this._setCurrentSelection(image, template);
    }
  }

  _setCurrentSelection(image, template) {
    this.selectedImage = image;
    this.selectedArticle = template;
  }

  render() {
    return html`
      <div class="grid-container grid-container--destination flow">
        <h1 class="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
        <img src="${this.selectedImage}" alt="the moon" />
        <tab-bar .tabs="${featureDestinationTabs}" @tab-selected="${this.handleSelectTab}"></tab-bar>
        ${this.selectedArticle}
      </div>
    `;
  }
}
