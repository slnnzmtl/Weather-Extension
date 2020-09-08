export default {
  state: {
    coordinates: {
      lat: '',
      lon: '',
    },
  },
  getters: {
    coordinates: state => {
      return state.coordinates
    }
  },
  actions: {
    getCoordinates({commit}) {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
         var lat = "lat=" + position.coords.latitude;
         var lon = "lon=" + position.coords.longitude;
         commit('setCoordinates', { lat, lon})
       });
      }
    },
  },
  mutations: {
    setCoordinates(state, coordinates) {
      state.coordinates.lat = coordinates.lat
      state.coordinates.lon = coordinates.lon
    }
  }
}
