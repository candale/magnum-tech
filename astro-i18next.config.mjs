export default {
  defaultLocale: "en",
  locales: ["en", "ro"],
  routes: {
    ro: {
      about: "despre-noi",
      portfolio: "portofoliu"
    }
  },
  showDefaultLocale: false,
  i18nextServer: {
    debug: false,
  },
  i18nextClientPlugins: {
    fsBackend: "i18next-fs-backend",
  },
  i18nextServerPlugins: {
    fsBackend: "i18next-fs-backend",
  },
};