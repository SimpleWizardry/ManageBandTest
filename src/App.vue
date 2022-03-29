<template>
  <div id="app">
    <div class="nav-bar">
      <h1><router-link to="/">Телеметрия</router-link></h1>
      <div>
        <md-button
          class="md-raised md-primary"
          to="/controllers-list"
          @click.native="log"

        >
          Список контроллеров
        </md-button>

        <md-button
          class="md-raised md-primary"
          to="/settings"
        >
          Настройка отображения параметров
        </md-button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import json from '../frontend-test.json'
  export default {
    name: 'App',
    data() {
      return {
        response: json
      }
    },
    methods: {
      log() {
        this.$store.commit('SET_LIST', this.response)
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .nav-bar {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
  }
</style>
