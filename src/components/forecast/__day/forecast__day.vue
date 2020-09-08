<template lang="html">
  <div class="forecast__day">
    <p class="forecast__field forecast__date">{{ dateFormat(Day.dt_txt) }}</p>
    <img :src="icon" alt="" class="forecast__field forecast__icon">
    <p class="forecast__field forecast__summary">{{ Day.weather[0].description }}</p>
    <p class="forecast__field forecast__temp">{{ tempFormat(Day.main.temp) }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'Day'
  ],
  methods: {
    dateFormat(date){
      var now = new Date(date)

      const daysNames = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
      ];

      return daysNames[now.getDay()] + ', ' + now.getHours() + 'H'
    },
    tempFormat(temp){
      return Math.round(temp)
    }
  },
  computed: {
    icon() {
      var path = './icons/' + this.Day.weather[0].icon + '.png'
      return path
    },
  }
}
</script>
