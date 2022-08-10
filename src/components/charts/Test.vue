<template>
  
  <v-chart id="chart-test" class="chart" :autoresize="true" :option="option" />
</template>

<script>


import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Test",
  components: {
    VChart,
  },
  setup: () => {
    const option = ref({

      title: {
        text: "高等级自动驾驶对芯片的算力要求(TOPS)",
        left: "center",
      },

      tooltip: {
 
             formatter: function(param) {  
                        var value = param.value;  
                        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px;"> ' + value[2] + '(' + value[1] + ')' +  
                            '</div>';  
                    }  
   },

      xAxis: {
          type: 'time',
          name: '时间轴',
          max: '2016-07-04',
          min: '2012-01-01',
      },
      yAxis: {
          type: 'value',
          name: '次数值',
          
      },
      series: [
        {
          name: '',
          data:[
                    ['2012-03-01',
                        1,
                        "翻身"
                    ],
                    [
                        '2013-06-01',
                        2,
                        "没翻身"
                    ],
                    [
                        '2014-03-02',
                       3,
                        "翻身"
                    ],
                    [
                        '2015-03-03',
                       5,
                        "翻身"
                    ],[
                        '2016-03-04',
                       7,
                        "翻身"
                    ]
              ],
          type: "scatter",
          symbolSize: 10,
        }
      ],
    });

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
