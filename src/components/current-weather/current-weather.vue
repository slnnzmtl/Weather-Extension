<template lang="html">
  <div v-if="currentWeather" @mouseover="showFullInfo(true)" @mouseleave="showFullInfo(false)" class="current-weather current-weather_dark_theme" >
    <img class="current-weather__background" :src="background(currentWeather.weather[0].main)" alt="">
      <div class="current-weather__top">
        <p class="current-weather__city"> {{ currentWeather.name }}, {{ currentWeather.sys.country }}</p>
        <p class="current-weather__date">{{ date }}</p>
      </div>
      <div class="current-weather__degree">
        <div class="current-weather__degree-left">
          <img class="current-weather__icon" :src="icon" alt="">
        </div>
        <div class="current-weather__degree-right">
          <p class="current-weather__temp">{{ tempFormat(currentWeather.main.temp) }}</p>
          <p class="current-weather__type">{{ currentWeather.weather[0].main }}</p>
        </div>
      </div>
      <FullInfo v-if="fullInfo"></FullInfo>
  </div>
</template>

<script src="./current-weather.js"></script>
