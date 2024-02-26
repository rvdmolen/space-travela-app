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
    this.setSelectedTab();
  }

  setSelectedTab() {
    const selection = featureDestinationTabs.filter(x => x.selected === true);
    [this.selectedTab] = selection.map(x => x.description);
    [this.selectedFoto] = selection.map(x => x.image);
  }

  handleSelectTab(event) {
    this.selectedTab = event.detail;
    [this.selectedFoto] = featureDestinationTabs
      .filter(x => x.description === this.selectedTab)
      .map(x => x.image);
  }

  render() {
    return html`
      <div class="grid-container grid-container--destination flow">
        <h1 class="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>

        <img src="${this.selectedFoto}" alt="the moon">

        <tab-bar .tabs="${featureDestinationTabs}" @tab-selected="${this.handleSelectTab}"></tab-bar>

        ${when(this.selectedTab === featureDestinationTabs[0].description, () => html`
          <feat-moon></feat-moon>`, () => html``)}
        ${when(this.selectedTab === featureDestinationTabs[1].description, () => html`
          <feat-mars></feat-mars>`, () => html``)}
        ${when(this.selectedTab === featureDestinationTabs[2].description, () => html`
          <feat-europe></feat-europe>`, () => html``)}
        ${when(this.selectedTab === featureDestinationTabs[3].description, () => html`
          <feat-titan></feat-titan>`, () => html``)}
      </div> `;
  }
}
