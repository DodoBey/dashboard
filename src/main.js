import { createApp } from 'vue'

import App from './App.vue'
import './assets/main.css'


const myCustomLightTheme = {
  dark: false,
  color: {
      background: '#B0BEC5',
      surface: '#B0BEC5',
      'surface-bright': '#B0BEC5',
      'surface-light': '#90A4AE',
      'surface-variant': '#78909C',
      primary: '#37474F',
      'primary-darken-1': '#263238',
  }
}

const myCustomDarkTheme = {
  dark: true,
  color: {
      background: '#263238',
      surface: '#263238',
      'surface-bright': '#263238',
      'surface-light': '#37474F',
      'surface-variant': '#455A64',
      primary: '#90A4AE',
      'primary-darken-1': '#78909C',
  }
}

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomDarkTheme,
      myCustomLightTheme
    }
  }
})


createApp(App).use(vuetify).use(router).mount('#app')