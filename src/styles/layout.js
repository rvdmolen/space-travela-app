import { css } from 'lit';

export const layoutSpaceTravelStyles = css`
  .flex {
    display: flex;
    gap: var(--gap, 1rem);
  }

  .grid {
    display: grid;
    gap: var(--gap, 1rem);
  }

  .grid-container {
    display: grid;
    text-align: center;
    place-items: center;
    padding-inline: 1rem;
    padding-bottom: 4rem;
  }

  .grid-container p:not([class]) {
    max-width: 50ch;
  }

  .flow > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
  }

  .flow--space-small {
    --flow-space: 0.75rem;
  }

  .container {
    padding-inline: 2em;
    margin-inline: auto;
    max-width: 80rem;
  }

  @media (min-width: 45em) {
    .grid-container {
      text-align: left;
      column-gap: var(--container-gap, 2rem);
      grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(2rem, 1fr);
    }
  }

  .grid-responsive {
    grid-template-columns: 1fr !important;
  }

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    .grid-responsive {
      grid-template-columns: 1fr 1fr 1fr !important;
    }
  }
`;
