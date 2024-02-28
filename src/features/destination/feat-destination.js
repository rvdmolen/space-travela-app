import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { featureDestinationTabs } from './feat-destination-tabs.js';
import { featDestinationStyles } from './feat-destination-style.js';
import './components/index.js';

@customElement('feat-destination')
export class FeatDestination extends LitElement {
  @state() selectedTab;

  @state() selectedFoto;

  static get styles() {
    return featDestinationStyles;
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this.initializeTabs();
  }

  initializeTabs() {
    const selectedTab = featureDestinationTabs.filter(x => x.selected === true);
    [this.selectedTab] = selectedTab.map(x => x.description);
    [this.selectedFoto] = selectedTab.map(x => x.image);
  }

  handleSelectTab(event) {
    const { detail: tab } = event;
    this.selectedTab = tab.description;
    this.selectedFoto = tab.image;
  }

  render() {
    return html`
      <div class="grid-container grid-container--destination flow">
        <h1 class="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
        <img src="${this.selectedFoto}" alt="the moon" />
        <tab-bar .tabs="${featureDestinationTabs}" @tab-selected="${this.handleSelectTab}"></tab-bar>
        ${this.renderImage()}
      </div>
    `;
  }

  renderImage() {
    return html`
      ${when(
        this.selectedTab === featureDestinationTabs[0].description,
        () => html`
          <feat-moon></feat-moon>`,
        () => html``
      )}
      ${when(
        this.selectedTab === featureDestinationTabs[1].description,
        () => html`
          <feat-mars></feat-mars>`,
        () => html``
      )}
      ${when(
        this.selectedTab === featureDestinationTabs[2].description,
        () => html`
          <feat-europe></feat-europe>`,
        () => html``
      )}
      ${when(
        this.selectedTab === featureDestinationTabs[3].description,
        () => html`
          <feat-titan></feat-titan>`,
        () => html``
      )}
    `;
  }
}
