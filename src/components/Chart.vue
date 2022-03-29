<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
  import { use } from "echarts/core";
  import { CanvasRenderer } from "echarts/renderers";
  import { LineChart } from "echarts/charts";
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent
  } from "echarts/components";
  import VChart, { THEME_KEY } from "vue-echarts";

  use([
    CanvasRenderer,
    LineChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent
  ]);

  export default {
    name: "Chart",
    props: {
      chartData: Array,
      start: Number | Date,
      end: Number | Date
    },
    components: {
      VChart
    },
    provide: {
      [THEME_KEY]: "light"
    },
    data() {
      return {
        option: {
          title: {
            text: "Данные по контроллеру",
            left: "center"
          },
          tooltip: {
            trigger: "item",
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          xAxis: {
            type: 'category',
            data: ['A', 'B', 'C']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: "Дефолтное значение",
              type: "line",
              center: ["50%", "60%"],
              data: this.chartData,
              // data: this.props.chartData,
              // data: [
              //   { value: 335, name: "Direct" },
              //   { value: 310, name: "Email" },
              //   { value: 234, name: "Ad Networks" },
              // ],
              // emphasis: {
              //   itemStyle: {
              //     shadowBlur: 10,
              //     shadowOffsetX: 0,
              //     shadowColor: "rgba(0, 0, 0, 0.5)"
              //   }
              // }
            }
          ]
        }
      };
    },
    mounted() {
      console.log(this.props)
      function pad(s){ return ('00' + s).slice(-2)}
      let length = []
      let start = new Date(this.start)
      let end = new Date(this.end)

      //console.log(start.getTime(),end.getTime(),start.getTime() < end.getTime())

      length.push('' + pad(start.getDate()) + '/' + pad(start.getMonth()) + '/' + start.getFullYear());
      while(start.getTime() < end.getTime()) {
        length.push('' + pad(start.getDate()+ 1) + '/' + pad(start.getMonth()) + '/' + start.getFullYear());
        start.setDate( start.getDate()+1);
      }
      this.option.xAxis.data = length
      this.option.series.data = this.chartData
      console.log(this.option)
      //setTimeout(() => console.log(this.props), 2000)
    },
    // method: {
    //   log() {
    //     console.log(this.props)
    //   }
    // }
  };
</script>

<style scoped>
  .chart {
    height: 80vh;
    width: 80vw;
  }
</style>

<!--<script>-->
<!--  import { Line } from 'vue-chartjs'-->
<!--  export default {-->
<!--    //components: { Line },-->
<!--    name: 'Chart',-->
<!--    extends: Line,-->
<!--    props: {-->
<!--      chartData: {-->
<!--        type: Object,-->
<!--        default: null-->
<!--      },-->
<!--      options: {-->
<!--        type: Object,-->
<!--        default: null-->
<!--      }-->
<!--    },-->
<!--    mounted () {-->
<!--      this.renderChart(this.chartData, this.options)-->
<!--    }-->
<!--  }-->
<!--</script>-->
