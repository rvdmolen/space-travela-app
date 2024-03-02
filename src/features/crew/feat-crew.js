import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { featureCrewDots } from './feat-crew-dots.js';
import { featCrewStyles } from './feat-crew-style.js';

@customElement('feat-crew')
export class FeatCrew extends LitElement {
  @state() selectedCrew = featureCrewDots[0].description;
  @state() selectedImage = featureCrewDots[0].image;

  static styles = [featCrewStyles];

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this._initializeDots();
  }

  handleSelectTab(event) {
    const { image, template } = event.detail;
    this._setCurrentSelection(image, template);
  }

  _initializeDots() {
    const { image, template } = featureCrewDots.find(tab => tab.selected) || {};
    if (image && template) {
      this._setCurrentSelection(image, template);
    }
  }

  _setCurrentSelection(image, template) {
    this.selectedImage = image;
    this.selectedCrew = template;
  }

  render() {
    return html`
      <div class="grid-container grid-container--crew flow">
        <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
        <dot-bar .dots="${featureCrewDots}" @dot-selected="${this.handleSelectTab}"></dot-bar>
        ${this.selectedCrew}
        <img src="${this.selectedImage}" alt="${this.selectedTab}}" />
      </div>
    `;
  }
}
