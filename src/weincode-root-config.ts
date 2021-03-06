import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@weincode/mf-header",
  app: () => System.import("@weincode/mf-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@weincode/mf-main",
  app: () => System.import("@weincode/mf-main"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@weincode/mf-footer",
  app: () => System.import("@weincode/mf-footer"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@weincode/mf-login",
  app: () => System.import("@weincode/mf-login"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
