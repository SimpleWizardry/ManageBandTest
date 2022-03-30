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
      end: Number | Date,
      currentOption: String
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
          },
          xAxis: {
            type: 'category',
            data: []
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: this.currentOption,
              type: "line",
              center: ["50%", "60%"],
              data: this.chartData,
            }
          ]
        }
      };
    },
    beforeMount() {
      function pad(s){ return ('00' + s).slice(-2)}
      let length = []
      let start = new Date(this.start)
      let end = new Date(this.end)

      length.push('' + pad(start.getDate()) + '/' + pad(start.getMonth()) + '/' + start.getFullYear());
      while(start.getTime() < end.getTime()) {
        length.push('' + pad(start.getDate()+ 1) + '/' + pad(start.getMonth()) + '/' + start.getFullYear());
        start.setDate( start.getDate()+1);
      }

      this.option.xAxis.data = length
      this.option.series.data = this.chartData

    },
  };
</script>

<style scoped>
  .chart {
    height: 80vh;
    width: 80vw;
  }
</style>
