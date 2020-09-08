import FullInfo from './full-info/full-info.vue'

export default {
  components: {
    FullInfo
  },
  data() {
    return {
      weather: '',
      fullInfo: false,
    }
  },
  created() {
    if (this.coordinates)
    this.$store.dispatch('getWeather')
  },
  methods: {
    tempFormat(temp) {
      return Math.round(temp)
    },
    pressureFormat(pressure) {
      return Math.round(pressure * 0.75006375541921)
    },
    background(type) {
      var link = 'https://source.unsplash.com/500x300/daily?' + type + '%20weather'
      return link
    },
    showFullInfo(value) {
      this.fullInfo = value
    }
  },
  computed: {
    currentWeather() {
      return this.$store.getters.weather.name ? this.$store.getters.weather : false
    },
    coordinates() {
      return this.$store.getters.coordinates.lat != '' ? true : false
    },
    icon() {
      var path = './icons/' + this.currentWeather.weather[0].icon + '.png'
      return path
    },
    date() {
      var now = new Date()
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      const daysNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ];

      return daysNames[now.getDay()] + ', ' + monthNames[now.getMonth()] + '. ' + now.getDate()
    }
  }
}
