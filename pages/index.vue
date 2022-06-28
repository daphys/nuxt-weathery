<template>
  <div>
    <a-row class="weather-inputs" type="flex">
      <a-col :flex="2">
        <a-input
          @keyup.enter="fetchWeather"
          v-model="cityValue"
          placeholder=""
        />
      </a-col>
      <a-col>
        <a-button @click="fetchWeather">Find</a-button>
      </a-col>
    </a-row>
    <div v-if="fetchResponse" class="weather">
      <div></div>
      <img
        v-if="fetchResponse.weather[0].main === 'Clear'"
        src="/img/cloud.png"
        alt=""
      />
      <h1>{{ fetchResponse.name }}</h1>
      <a-divider class="weather-devider">Main info</a-divider>
      <h1>Right now : {{ fetchResponse.main.temp }}°с</h1>
      <h1>Feels like : {{ fetchResponse.main.feels_like }}°с</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityValue: '',
      fetchResponse: '',
    }
  },
  methods: {
    async fetchWeather() {
      try {
        const ip = await this.$axios.$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityValue}&units=metric&appid=599c3ac16baaa0223e348843860f7603`
        )
        this.fetchResponse = ip
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped >
.weather {
  text-align: center;
  margin-top: 50px;
  animation: 1s show ease;
}
.weather-devider {
  max-width: 100px;
}
.weather-inputs {
  padding-top: 30px;
  max-width: 500px;
  margin: 0 auto;
}
@keyframes show {
  from { opacity: 0; margin-top: 30px; }
  to { opacity: 1; margin-top: 50px; }
}
</style>