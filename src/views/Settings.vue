<template>
  <div class="container column">
    <h2>Настройка отображения параметров</h2>
    <div class="settings">
      <div v-for="(option, index) in options" class="option-wrapper">
        <md-checkbox
          v-model="option.show"
          :key="index"
          class="md-primary"
          @change="saveSettings"
        >
          {{option.value}}
        </md-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Settings',
    data () {
      return {
        options: []
      }
    },
    mounted() {
      this.options = this.$store.getters.OPTIONS
    },
    methods: {
      saveSettings() {
        this.$store.commit('SET_OPTIONS', this.options)
      }
    }
  }
</script>

<style scoped>
  .settings {
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    height: 50%;
    flex-wrap: wrap;
  }
  .option-wrapper {
    display: flex;
  }
</style>
