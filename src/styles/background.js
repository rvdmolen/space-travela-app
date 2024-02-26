import { css, unsafeCSS } from 'lit';

const BG_HOME_MOBILE = new URL('../../assets/home/background-home-mobile.jpg', import.meta.url).href;
const BG_HOME_TABLET = new URL('../../assets/home/background-home-tablet.jpg', import.meta.url).href;
const BG_HOME_DESKTOP = new URL('../../assets/home/background-home-desktop.jpg', import.meta.url).href;

const BG_DESTINATION_MOBILE = new URL('../../assets/destination/background-destination-mobile.jpg', import.meta.url).href;
const BG_DESTINATION_TABLET = new URL('../../assets/destination/background-destination-tablet.jpg', import.meta.url).href;
const BG_DESTINATION_DESKTOP = new URL('../../assets/destination/background-destination-desktop.jpg', import.meta.url).href;

const BG_CREW_MOBILE = new URL('../../assets/crew/background-crew-mobile.jpg', import.meta.url).href;
const BG_CREW_TABLET = new URL('../../assets/crew/background-crew-tablet.jpg', import.meta.url).href;
const BG_CREW_DESKTOP = new URL('../../assets/crew/background-crew-desktop.jpg', import.meta.url).href;

const BG_TECHNOLOGY_MOBILE = new URL('../../assets/technology/background-technology-mobile.jpg', import.meta.url).href;
const BG_TECHNOLOGY_TABLET = new URL('../../assets/technology/background-technology-tablet.jpg', import.meta.url).href;
const BG_TECHNOLOGY_DESKTOP = new URL('../../assets/technology/background-technology-desktop.jpg', import.meta.url).href;

export const backgroundSpaceTravelStyles = css`
  .bg-home {
    background-image: url(${unsafeCSS(BG_HOME_MOBILE)});
  }

  .bg-destination {
    background-image: url(${unsafeCSS(BG_DESTINATION_MOBILE)});
  }

  .bg-crew {
    background-image: url(${unsafeCSS(BG_CREW_MOBILE)});
  }

  .bg-technology {
    background-image: url(${unsafeCSS(BG_TECHNOLOGY_MOBILE)});
  }

  @media (min-width: 35rem) {
    .bg-home {
      background-position: center center;
      background-image: url(${unsafeCSS(BG_HOME_TABLET)});
    }

    .bg-destination {
      background-position: center center;
      background-image: url(${unsafeCSS(BG_DESTINATION_TABLET)});
    }

    .bg-crew {
      background-position: center center;
      background-image: url(${unsafeCSS(BG_CREW_TABLET)});
    }

    .bg-technology {
      background-position: center center;
      background-image: url(${unsafeCSS(BG_TECHNOLOGY_TABLET)});
    }
  }

  @media (min-width: 45rem) {
    .bg-home {
      background-image: url(${unsafeCSS(BG_HOME_DESKTOP)});
    }

    .bg-destination {
      background-image: url(${unsafeCSS(BG_DESTINATION_DESKTOP)});
    }

    .bg-crew {
      background-image: url(${unsafeCSS(BG_CREW_DESKTOP)});
    }

    .bg-technology {
      background-image: url(${unsafeCSS(BG_TECHNOLOGY_DESKTOP)});
    }
  }
`;
