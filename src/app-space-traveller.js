import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import { globalSpaceTravelStyles } from './styles/styles.js';
import { backgroundSpaceTravelStyles } from './styles/background.js';
import './components/navigation-bar.js';
import './components/tab-bar.js';
import './components/dot-bar.js';
import { SpaceTravelRouter } from './routes/routes.js';

const logo = new URL('../assets/shared/logo.svg', import.meta.url).href;
const { routes } = SpaceTravelRouter;

@customElement('app-space-traveller')
export class AppSpaceTraveller extends LitElement {
  _router = new Router(this, routes);

  connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return [
      globalSpaceTravelStyles,
      backgroundSpaceTravelStyles,
      css`
        :host > div:nth-child(1) {
          height: 100vh;
          display: grid;
          grid-template-rows: min-content 1fr;
          background-position: bottom center;
          background-size: cover;
        }

        main {
          display: grid;
        }
      `,
    ];
  }

  pathToBackground() {
    if (this._router._currentPathname) {
      const currentPath = this._router._currentPathname.replace('/', '');
      return currentPath === '' ? 'home' : currentPath;
    }
    return '';
  }

  render() {
    return html`
      <div class="${`bg-${this.pathToBackground()}`}">
        <a class="skip-to-content" href="#main">Skip to content</a>
        <header class="primary-header flex">
          <div>
            <img src="${logo}" alt="space tourism logo" class="logo">
          </div>
          <navigation-bar
            .router="${this._router}"
            .selectedRoute="${this._router._currentPathname}"
          ></navigation-bar>
        </header>

        <main id="main">
          ${this._router.outlet()}
        </main>
      </div>
    `;
  }
}
