<template>
  <div id="app">
    <Current></Current>
    <Forecast></Forecast>
  </div>
</template>

<script>
import Current from "@/components/current-weather/current-weather.vue"
import Forecast from "@/components/forecast/forecast.vue"

export default {
  name: 'App',
  components: {
    Current,
    Forecast
  },
  created() {
    this.$store.dispatch('getCoordinates')
  }
}
</script>
