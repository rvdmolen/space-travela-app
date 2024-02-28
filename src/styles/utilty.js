import { css, unsafeCSS } from 'lit';

const iconHamburger = new URL('../../assets/shared/icon-hamburger.svg', import.meta.url).href;
const iconClose = new URL('../../assets/shared/icon-close.svg', import.meta.url).href;

export const utilitySpaceTravelStyles = css`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
  }

  .skip-to-content {
    position: absolute;
    z-index: 9999;
    background: var(--clr-white);
    color: var(--clr-dark);
    padding: 0.5em 1em;
    margin-inline: auto;
    transform: translateY(-101%);
    transition: transform 250ms ease-in;
  }

  .skip-to-content:focus {
    transform: translateY(0);
  }

  .box {
    background: lightblue;
    padding: 3rem;
  }

  .d-block {
    display: block;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .numbered-title {
    font-family: var(--ff-sans-cond);
    font-size: var(--fs-500);
    text-transform: uppercase;
    letter-spacing: 4.72px;
  }

  .numbered-title span {
    margin-right: 0.5em;
    font-weight: 700;
    color: var(--clr-white-25);
  }

  @media (min-width: 35em) {
    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }
  }

  .large-button {
    position: relative;
    display: inline-grid;
    place-items: center;
    padding: 2em 2em;
    border-radius: 50%;
    aspect-ratio: 1;
    text-decoration: none;
    z-index: 1;
    font-size: 2rem;
  }

  .large-button::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: var(--clr-white-15);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  .large-button:hover::after,
  .large-button:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }

  .logo {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }

  .primary-header {
    justify-content: space-between;
    align-items: center;
  }

  .primary-navigation {
    --gap: clamp(1.5rem, 5vw, 3.5rem);
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    background: var(--clr-dark-095);
  }

  .primary-navigation a {
    text-decoration: none;
  }

  .primary-navigation a > span {
    font-weight: 700;
    margin-right: 0.5em;
  }

  .mobile-nav-toggle {
    display: none;
  }

  @supports (backdrop-filter: blur(1rem)) {
    .primary-navigation {
      background: var(--clr-white-005);
      backdrop-filter: blur(1.5rem);
    }
  }

  @media (max-width: 35em) {
    .primary-navigation {
      --underline-gap: 0.5rem;
      position: fixed;
      z-index: 1000;
      inset: 0 0 0 30%;
      list-style: none;
      padding: min(20rem, 15vh) 2rem;
      margin: 0;
      flex-direction: column;
      transform: translateX(100%);
      transition: transform 500ms ease-in-out;
    }

    .primary-navigation.underline-indicators > .active {
      border: 0;
    }

    .mobile-nav-toggle {
      display: block;
      position: absolute;
      z-index: 2000;
      right: 1rem;
      top: 2rem;
      background: transparent url(${unsafeCSS(iconHamburger)}) no-repeat center center;
      width: 1.5rem;
      aspect-ratio: 1;
      border: 0;
    }

    .primary-navigation.active {
      transform: translateX(0%);
    }

    .mobile-nav-toggle.active {
      background: transparent url(${unsafeCSS(iconClose)}) no-repeat;
    }

    .mobile-nav-toggle:focus-visible {
      outline: 5px solid white;
      outline-offset: 5px;
    }
  }

  @media (min-width: 35em) {
    .primary-navigation {
      padding-inline: clamp(3rem, 7vh, 7rem);
    }
  }

  @media (min-width: 35em) and (max-width: 44.9999em) {
    .primary-navigation a > span {
      display: none;
    }
  }

  @media (min-width: 45em) {
    .primary-header::after {
      content: '';
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      margin-right: -2.5rem;
      background: var(--clr-white-25);
      order: 1;
    }

    navigation-bar {
      order: 2;
    }

    .primary-navigation {
      margin-block: 2rem;
    }
  }

  .underline-indicators > * {
    cursor: pointer;
    padding: var(--underline-gap, 0.5rem) 0;
    border: 0;
    border-bottom: 0.2rem solid var(--clr-white-0);
    background-color: transparent;
  }

  .underline-indicators > *:hover,
  .underline-indicators > *:focus {
    border-color: var(--clr-white-5);
  }

  .underline-indicators > .active,
  .underline-indicators > [aria-selected='true'] {
    color: var(--clr-white-1);
    border-color: 0.2rem solid var(--clr-white-1);
  }

  .tab-list {
    --gap: 2rem;
  }

  .dot-indicators > button {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    aspect-ratio: 1;
    padding: 0.5rem;
    background-color: var(--clr-white-25);
  }

  .dot-indicators > button:hover,
  .dot-indicators > button:focus {
    background-color: var(--clr-white-50);
  }

  .dot-indicators > button[aria-selected='true'] {
    background-color: var(--clr-white);
  }

  .number-indicators {
    grid-template-columns: 33%;
  }

  .number-indicators > button {
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--clr-dark);
    color: var(--clr-white);
    border: 0.1rem solid var(--clr-white-50);
    aspect-ratio: 1;
  }

  .number-indicators > button:hover,
  .number-indicators > button:focus {
    border: 0.1rem solid var(--clr-white);
  }

  .number-indicators > button[aria-selected='true'] {
    background-color: var(--clr-white);
    color: var(--clr-dark);
    border: 0;
  }
`;
