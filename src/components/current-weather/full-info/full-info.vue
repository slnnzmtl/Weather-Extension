<template lang="html">
  <div class="full-info">
    <span class="full-info__span full-info__summary">{{ currentWeather.weather[0].description }}</span>
    <div class="full-info__item">
      <img src="/icons/thermometer-25.png" alt="" class="full-info__img">
      <span class="full-info__span full-info__min">{{ currentWeather.main.temp_min }}°C</span>
    </div>
    <div class="full-info__item">
      <img src="/icons/thermometer-75.png" alt="" class="full-info__img">
      <span class="full-info__span full-info__max">{{ currentWeather.main.temp_max }}°C</span>
    </div>
    <div class="full-info__item">
      <img src="/icons/sun-rise.png" alt="" class="full-info__img">
      <span class="full-info__span sunrise">{{ timeFormat(currentWeather.sys.sunrise) }}</span>
    </div>
    <div class="full-info__item">
      <img src="/icons/sun-set.png" alt="" class="full-info__img">
      <span class="full-info__span sunset">{{ timeFormat(currentWeather.sys.sunset) }}</span>
    </div>
    <div class="full-info__item">
      <img src="/icons/wind.png" alt="" class="full-info__img">
      <span class="full-info__span wind">{{ currentWeather.wind.speed }} m/s</span>
    </div>
    <div class="full-info__item">
      <img src="/icons/raindrop.png" alt="" class="full-info__img">
      <span class="full-info__span humidity">{{ currentWeather.main.humidity }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    timeFormat(time) {
      var date = new Date(time * 1000)
      return date.getHours() + ':' + date.getMinutes()
    }
  },
  computed: {
    currentWeather() {
      return this.$store.getters.weather
    }
  }
}


</script>
