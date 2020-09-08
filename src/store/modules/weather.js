import axios from 'axios'

export default {
  state: {
    weather: {},
  },
  getters: {
    weather: state => {
      return state.weather
    }
  },
  actions: {
    getWeather({commit}) {
      var geo = this.state.geo
      if (geo.coordinates.lat != 'undefined'){
        var urlString = this.state.api.weatherApi + this.state.geo.coordinates.lat + "&" + this.state.geo.coordinates.lon;
        console.log(urlString)
        axios.get(urlString).then(resp => {
          commit('setWeather', resp.data)
          console.log(resp.data)
        });
      }
    }
  },
  mutations: {
    setWeather(state, weather) {
        state.weather = weather
    }
  }
}
