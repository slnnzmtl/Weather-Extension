import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import geo from './modules/geo.js'
import api from './modules/api.js'
import weather from './modules/weather.js'
import forecast from './modules/forecast.js'
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  plugins: [
    createPersistedState({
        paths: [
          'geo',
        ],
      })
    ],
  modules: {
    geo,
    api,
    weather,
    forecast
  },
})
