import { css } from 'lit';
import { globalSpaceTravelStyles } from '../../styles/styles.js';

const featDestinationStyles = [
  globalSpaceTravelStyles,
  css`
        .grid-container--destination {
          --flow-space: 2rem;
          grid-template-areas:
              'title'
              'image'
              'featureDestinationTabs'
              'content';
        }

        .grid-container--destination > h1 {
          grid-area: title;
        }

        .grid-container--destination > img {
          grid-area: image;
          max-width: 60%;
        }

        .grid-container--destination > tab-bar {
          grid-area: featureDestinationTabs;
        }

        .grid-container--destination > feat-moon,
        .grid-container--destination > feat-europe,
        .grid-container--destination > feat-mars,
        .grid-container--destination > feat-titan {
          grid-area: content;
        }

        @media (min-width: 45em) {
          .grid-container--destination {
            justify-items: start;
            align-content: start;
            grid-template-areas:
            '. title title .'
            '. image featureDestinationTabs .'
            '. image content .';
          }

          .grid-container--destination > img {
            max-width: 90%;
          }
        }
      `
];

export { featDestinationStyles }
