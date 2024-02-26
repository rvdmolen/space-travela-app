import { css } from 'lit';
import { utilitySpaceTravelStyles } from './utilty.js';
import { typographySpaceTravelStyles } from './typography.js';
import { layoutSpaceTravelStyles } from './layout.js';

export const globalSpaceTravelStyles = [
  layoutSpaceTravelStyles,
  utilitySpaceTravelStyles,
  typographySpaceTravelStyles,
  css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    figure,
    picture {
      margin: 0;
    }

    ul,
    ol {
      list-style: none;
    }

    /* make form elements easier to work with */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    img,
    picutre {
      max-width: 100%;
      display: block;
    }

    nav {
      display: flex;
    }

    /* remove animations for people who've turned them off */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    .bg-dark {
      background-color: var(--clr-dark);
    }

    .bg-accent {
      background-color: var(--clr-light);
    }

    .bg-white {
      background-color: var(--clr-white);
    }

    .text-dark {
      color: var(--clr-dark);
    }

    .text-accent {
      color: var(--clr-light);
    }

    .text-white {
      color: var(--clr-white);
    }
  `,
];
