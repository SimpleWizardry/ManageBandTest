<template>
  <div>
<!--    <h2>Список контроллеров</h2>-->
    <div class="header">
      <div>
        Заголовок
      </div>
    </div>
    <div class="scroll-panel">
<!--      <div-->
<!--        -->
<!--        class="container"-->
<!--      >-->
        <div
          v-for="controller in controllers"
          class="controller-wrapper">
          <div style="height: 100px;width: 50%">
            {{controller.Id}}
          </div>
          <div style="height: 100px;;width: 50%">
            {{controller.Imei}}
          </div>
        </div>
<!--      </div>-->
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
      let json = this.$store.getters.LIST
      // this.controllers = JSON.parse(json)
      this.controllers = Array.from(json)
      console.log(json,this.controllers)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .controller-wrapper {
    width: 100%;
    height: 200px;
    background: red;
    display: flex;
  }
  .scroll-panel {
    margin-left: 5vw;
    width: 90vw;
    height: 90vh;
    display: flex;
    border: 1px solid gray;
    overflow: scroll;
    flex-direction: column;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
