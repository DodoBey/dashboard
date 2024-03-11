/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { myCustomDarkTheme, myCustomLightTheme } from "@/styles/theme";
import { VCalendar } from "vuetify/labs/VCalendar";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VCalendar,
  },
  directives,
  theme: {
    defaultTheme: "myCustomDarkTheme",
    themes: {
      myCustomDarkTheme,
      myCustomLightTheme,
    },
  },
});
