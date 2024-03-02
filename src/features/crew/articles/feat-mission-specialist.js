import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalSpaceTravelStyles } from '../../../styles/styles.js';
import '../components/crew-article.js';

@customElement('feat-mission-specialist')
export class FeatMissionSpecialist extends LitElement {
  static styles = [globalSpaceTravelStyles];

  render() {
    return html`
      <crew-article>
        <p slot="header">Mission Specialist</p>
        <p slot="title">Mark Shuttleworth</p>
        <p slot="content">
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to
          travel to space as a space tourist.
        </p>
      </crew-article>
    `;
  }
}
