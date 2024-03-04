import { css } from 'lit';
import { globalSpaceTravelStyles } from '../../styles/styles.js';

const featCrewStyles = [
  globalSpaceTravelStyles,
  css`
    :host {
      display: grid;
    }

    .grid-container--crew {
      --flow-space: 2rem;
      grid-template-areas:
        'title'
        'image'
        'tabs'
        'content';
    }

    .grid-container--crew > h1 {
      grid-area: title;
    }

    .grid-container--crew > img {
      grid-area: image;
      max-width: 60%;
      border-bottom: 1px solid var(--clr-white-15);
    }

    .grid-container--crew > dot-bar {
      grid-area: tabs;
    }

    .grid-container--crew > feat-commander,
    .grid-container--crew > feat-mission-specialist,
    .grid-container--crew > feat-pilot,
    .grid-container--crew > feat-crew-engineer {
      grid-area: content;
    }

    @media (min-width: 35em) {
      .grid-container--crew {
        padding-bottom: 0;
        grid-template-areas:
          'title'
          'content'
          'tabs'
          'image';
      }
    }

    @media (min-width: 45em) {
      .grid-container--crew {
        grid-template-columns: minmax(1rem, 1fr) minmax(0, 37rem) minmax(0, 23rem) minmax(1rem, 1fr);
        grid-template-rows: 10rem 1fr 20rem;
        justify-items: start;
        grid-template-areas:
          '. title title .'
          '. content image .'
          '. tabs image .';
      }

      .grid-container--crew > dot-bar {
        justify-self: start;
      }

      .grid-container--crew > img {
        grid-column: span 2;
        align-self: end;
        max-width: 90%;
      }
    }
  `
];

export { featCrewStyles };
