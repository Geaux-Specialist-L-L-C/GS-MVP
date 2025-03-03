import ReactGA from 'react-ga4';

export const initGA = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);
  }
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({
      category,
      action,
    });
  }
};
