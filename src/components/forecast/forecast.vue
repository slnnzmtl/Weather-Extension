<template lang="html">
  <div class="forecast">
    <input type="submit" class="forecast__button forecast__prev" @click="prev()" value="<">
    <input type="submit" class="forecast__button forecast__next" @click="next()" value=">">
    <div class="forecast__slider" v-bind:style='{left: slider.sliderOffsetLeft + "px"}'>
      <Day v-for="(day, idx) in forecast.list" :key="idx" :Day="day"></Day>
    </div>
  </div>
</template>

<script>
import Day from './__day/forecast__day.vue'
export default {
  components: {
    Day
  },
  data(){
      return {
        slider: {
          sliderActive: 0,
          sliderOffsetLeft: 0,
        }
      }
  },
  methods: {
    next() {
      if (this.slider.sliderActive < this.forecast.list.length-4) {
        this.slider.sliderOffsetLeft -= 500;
        this.slider.sliderActive += 4
      }
    },
    prev() {
      if (this.slider.sliderActive > 0) {
        this.slider.sliderOffsetLeft += 500;
        this.slider.sliderActive -= 4
      }
    }
  },
  created() {
    this.$store.dispatch('getForecast')
  },
  computed: {
    forecast() {
      return this.$store.getters.forecast
    }
  }
}
</script>
