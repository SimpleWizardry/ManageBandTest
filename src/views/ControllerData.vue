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
        :current-option="this.option"
        :key="rerender"
      />
    </div>
    <div class="params">
      <md-button
        class="md-raised"
        v-for="(opt, index) in options"
        :key="index"
        @click="setOption(opt)"
        v-bind:class="{ active: opt === option }"
      >
        {{ opt }}
      </md-button>
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
      }
    },
    fromDate(newDate, oldDate) {
      if (oldDate && newDate && oldDate.getDate() !== newDate.getDate()) {
        this.filterChartData()
      }
    },
  },
  data() {
    return {
      controllerImei: "",
      controllers: [],
      fromDate: null,
      toDate: null,
      chartData: [],
      options: [],
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
  beforeMount() {
    this.$material.locale = {
      startYear: 1900,
      endYear: 2099,
      dateFormat: 'dd/MM/yyyy',
      days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятница', 'Суббота'],
      shortDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      shorterDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      months: ['Январь', 'Февраль', 'Март', 'Арель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      shortMonths: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      shorterMonths: ['Я', 'Ф', 'М', 'A', 'Mай', 'Июнь', 'Июль', 'Авг', 'С', 'О', 'Н', 'Д'],
      firstDayOfAWeek: 1,
      cancel: 'Отмена',
      confirm: 'Принять'
    }
    this.toDate = new Date()
    let date = new Date()
    this.fromDate = new Date(date.setDate(date.getDate() - 1))
    this.controllerImei = this.$store.getters.ITEM
    this.controllers = this.$store.getters.LIST.filter(c => c.Imei === this.controllerImei)
    this.options = this.$store.getters.OPTIONS.filter(o => o.show).map(o => o.value)
    this.option = this.options[0]
  },
  methods: {
    filterChartData() {
      this.chartData = this.controllers.filter(c => {
        let date = new Date(c.Time)
        return (this.fromDate < date) && (date < this.toDate)
      })
      this.chartData = this.chartData.map(c => {
        return {
          value: c[this.option] ? c[this.option] : 0,
          name: c.Time
        }
      })
      this.chartData = this.chartData.sort((a, b) => {
        if (a.Time < b.Time) {
          return -1;
        }
        if (a.Time > b.Time) {
          return 1;
        }
      })
      this.rerender = !this.rerender
    },
    setOption(option) {
      this.option = option
      this.filterChartData()
    }
  }
}
</script>

<style scoped>
.chart {
  width: 80%;
}

.params {
  background: #9f9f9f;;
  width: 20%;
  border-radius: 10px;
}

.filter {
  display: flex;
}

.date {
  margin-left: 5vw;
  width: 40%;
}

.active {
  background: aqua !important;
}
</style>
