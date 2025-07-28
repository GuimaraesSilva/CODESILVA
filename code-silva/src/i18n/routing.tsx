import { defineRouting } from "next-intl/routing";

export const routeKeys = {
  home: "/",
};

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  pathnames: {
    [routeKeys.home]: "/",
    // [routeKeys.lastNews]: {
    //   pt: "/ultimas-noticias",
    //   en: "/latest-news",
    // },
  },
});
