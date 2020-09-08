import axios from 'axios'

export default {
  state: {
    forecast: {},
  },
  getters: {
    forecast: state => {
      return state.forecast
    }
  },
  actions: {
    getForecast({commit}) {
      var geo = this.state.geo
      if (geo.coordinates.lat != 'undefined'){
        var urlString = this.state.api.forecastApi + this.state.geo.coordinates.lat + "&" + this.state.geo.coordinates.lon;
        axios.get(urlString).then(resp => {
          commit('setForecast', resp.data)
          console.log(resp.data)
        });
      }
    },
  },
  mutations: {
    setForecast(state, forecast) {
        state.forecast = forecast
    }
  }
}
