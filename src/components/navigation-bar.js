import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../styles/styles.js';

@customElement('navigation-bar')
export class NavigationBar extends LitElement {

  @property({ type: Object }) router;

  @property({ type: String }) selectedRoute;

  @state() active = false;

  static get styles() {
    return [
      globalSpaceTravelStyles
    ];
  }

  getRouteTitle(title) {
    return title.split(' ')[1];
  }

  getRouteIndex(title) {
    return title.split(' ')[0];
  }

  toggleMenu() {
    this.active = !this.active;
  }

  render() {
    return html`
      <button class="mobile-nav-toggle ${classMap({ active: this.active })}" aria-controls="primary-navigation" aria-expanded="${this.active}" @click="${() => this.toggleMenu()}">
        <span class="sr-only">Menu</span>
      </button>
      <nav>
        <ul id="primary-navigation"  class="primary-navigation underline-indicators flex ${classMap({ active: this.active })}">
          ${this.router.routes.map(
            route =>
              html`
                <li
                  class="${classMap({
                    active: this.selectedRoute === route.path
                  })}"
                >
                  <a class="ff-sans-cond uppercase text-white letter-spacing-2"
                     href="${route.path}"><span aria-hidden="true">${this.getRouteIndex(route.title)}</span>${this.getRouteTitle(route.title)}</a>
                </li>
              `
          )}
        </ul>
      </nav>
    `;
  }
}
