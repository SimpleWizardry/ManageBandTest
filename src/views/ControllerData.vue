<template>
  <div class="container">
    <div class="chart">
      <div class="filter date">
        <md-datepicker
          v-model="fromDate"
          md-immediately
          :md-model-type="Date"
          :md-disabled-dates="maxDate"
          v-on:change="filterChartData"
        >
          <label>От</label>
        </md-datepicker>
        <md-datepicker
          v-model="toDate"
          md-immediately
          :md-model-type="Date"
          :md-disabled-dates="minDate"
          v-on:change="filterChartData"
        >
          <label>До</label>
        </md-datepicker>
      </div>
      <Chart
        :chartData="chartData"
        :start="new Date(fromDate)"
        :end="new Date(toDate)"
        :key="rerender"
      />
    </div>
    <div class="params">

    </div>
  </div>
</template>

<script>
  import Chart from "../components/Chart";
  export default {
    name: 'ControllerData',
    components: {
      Chart
    },
    watch: {
      toDate(newDate, oldDate) {
        if (oldDate && newDate && oldDate.getDate() !== newDate.getDate()) {
          this.filterChartData()
          this.rerender = !this.rerender
        }
      },
      fromDate(newDate, oldDate) {
        if (oldDate && newDate && oldDate.getDate() !== newDate.getDate()) {
          this.filterChartData()
          this.rerender = !this.rerender
        }
      },
      // chartData(newData, oldData) {
      //   if (newData.length !== oldData.length) {
      //     this.rerender = !this.rerender
      //   }
      // }
    },
    data () {
      return {
        controllerImei: "",
        controllers: [],
        fromDate: null,
        toDate: null,
        chartData: [],
        option: "Height",
        rerender: true,
        maxDate: date => {
          return date > this.toDate
        },
        minDate: date => {
          return date < this.fromDate
        }
      }
    },
    mounted() {
      this.$material.locale.dateFormat = "dd/MM/yyyy"
      this.toDate = new Date()
      let date = new Date()
      this.fromDate = new Date(date.setDate(date.getDate() - 1))
      this.controllerImei = this.$store.getters.ITEM
      this.controllers = this.$store.getters.LIST.filter(c => c.Imei === this.controllerImei)
    },
    methods: {
      filterChartData() {
        this.chartData = this.controllers.filter(c => {
          let date = new Date(c.Time)
          return (this.fromDate < date) && (date < this.toDate)
        })
        // this.chartData = this.chartData.map(c => c[this.option])
        this.chartData = this.chartData.map(c => {return { value: c[this.option], name: c.Time }})
        this.chartData = this.chartData.sort((a, b) => {
          if (a.Time < b.Time) {
            return -1;
          }
          if (a.Time > b.Time) {
            return 1;
          }
        })
        console.log(this.controllers, this.controllerImei, this.toDate, this.fromDate, this.chartData)
      }

    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    height: 94vh;
  }
  .chart {
    width: 80%;
  }
  .params {
    background: yellow;
    width: 20%;
  }
  .filter {
    display: flex;
  }
  .date {
    margin-left: 5vw;
    width: 40%;
  }
</style>
