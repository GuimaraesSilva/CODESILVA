import { defineRouting } from "next-intl/routing";

export const routeKeys = {
  home: "/",
  services: "/services",
  about: "/about",
  work: "/work",
  contact: "/contact",
  hire: "/hire",
};

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "en",
  pathnames: {
    [routeKeys.home]: {
      pt: "/",
      en: "/",
    },
    [routeKeys.services]: {
      pt: "/servicos",
      en: "/services",
    },
    [routeKeys.about]: {
      pt: "/sobre",
      en: "/about",
    },
    [routeKeys.work]: {
      pt: "/trabalhos",
      en: "/work",
    },
    [routeKeys.contact]: {
      pt: "/contato",
      en: "/contact",
    },
    [routeKeys.hire]: {
      pt: "/contratar",
      en: "/hire",
    },
  },
});
