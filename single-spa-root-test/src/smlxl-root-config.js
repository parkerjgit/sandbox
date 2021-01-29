import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@smlxl/navbar",
//   app: () => System.import("@smlxl/navbar"),
//   activeWhen: ["/"]
// });

registerApplication(
  '@smlxl/single-spa-poc',
  () => System.import('@smlxl/single-spa-poc'),
  location => location.pathname.startsWith('/')
);

start();

start({
  urlRerouteOnly: true,
});
