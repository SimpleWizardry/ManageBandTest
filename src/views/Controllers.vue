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
    <div class="scroll-panel">
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

    <!--    <md-table v-model="controllers"  md-card md-fixed-header>-->
    <!--      <md-table-row v-slot="controller">-->
    <!--        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ controller.Id }}</md-table-cell>-->
    <!--      </md-table-row>-->
    <!--    </md-table>-->
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        controllers: []
      }
    },
    mounted() {
      this.controllers = this.$store.getters.LIST
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
  //border-right: 1px solid gray;
    justify-content: center;
    align-items: center;
  }

  .odd {
    background: aliceblue;
  }
</style>
