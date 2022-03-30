<template>
  <div>
    <div class="header-row">
      <div class="cell">
        Imei
      </div>
      <div class="cell">
        TruckId
      </div>
    </div>
    <div class="scroll-panel" v-if="!loading">
      <div
        v-for="(controller, index) in controllers"
        class="controller-wrapper"
        :key="controller.Id"
        v-bind:class="{ odd: index%2 }"
      >
        <div class="cell" style="border-right: 1px solid gray">
          <router-link
            to="/controller-data"
            @click.native="setItem(controller)"
          >
            {{controller.Imei}}
          </router-link>
        </div>
        <div class="cell">
          {{controller.TruckId}}
        </div>
      </div>
    </div>
    <div v-else style="display: flex; justify-content: center; align-items: center; height: 80vh">
      <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        controllers: [],
        loading: true
      }
    },
    beforeCreate() {
      this.loading = true
    },
    beforeMount() {
      this.controllers = this.$store.getters.LIST
      this.loading = false
    },
    methods: {
      setItem(controller) {
        this.$store.commit('SET_ITEM', controller.Imei)
      }
    }
  }
</script>

<style scoped>
  .controller-wrapper {
    width: 100%;
    height: 10vh !important;
    border: 1px solid gray;
    display: flex;
  }

  .scroll-panel {
    margin-left: 5vw;
    width: 90vw;
    height: 85vh;
    display: flex;
    border: 1px solid gray;
    overflow-y: scroll;
    flex-direction: column;
  }

  .header-row {
    display: flex;
    margin-left: 5vw;
    width: 90vw;
    border: 1px solid gray;
    align-items: stretch;
    height: 5vh;
    background: lightgray;
    font-size: 18px;
  }

  .cell {
    flex-grow: 1;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .odd {
    background: #e7e7e7;
  }
</style>
