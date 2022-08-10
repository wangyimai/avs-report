<template>
  <div class="NumberPapers3">
    <div class="Chart" :id='id' ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'NumberPapers3',
  data () {
    return {
      id: 'NumberPapers3'
    }
  },
  mounted () {
    this.myChart()
  },
  methods: {
    myChart () {
      // 获取节点
      const myChart = echarts.init(document.getElementById(this.id))
      // 获取到当前容器的的宽高而后赋值加载至图列节点中从而达到自适应容器大小
      myChart.resize(
        {
          width: document.getElementById(this.id).offsetWidth,
          height: document.getElementById(this.id).offsetHeight
        }
      )
      // 配置项
      var option = {
           animationDuration: 5000,
      dataset: [
        {
          source: [
            ['年', 'RL&AVS', 'DL&AVS'],
            [2013, 192, 93], [2014, 175, 117], [2015,248, 224], [2016, 298, 378], [2017, 573, 900],[2018,1060,1950],[2019,1740,3150],[2020,2080,3850],[2021,2810,4870],[2022,1510,2600]

          ]
        }
      ],
      title: {
        text: 'RL&AVS与DL&AVS论文发表数量对比',
        left: "center"
      },
      grid: {
        left: "1%",
        containLabel: true
      },
      legend: {
        "bottom": "10%"
      },
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis',
      },
      xAxis: {
        name: "年",
        type: 'category',
        // nameLocation: 'middle'
      },
      yAxis: {
        name: '论文数量',
        type: "value",
      },
      series: [
        {type: "bar"},
        {type: "bar"},
      ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
  .NumberPapers3{
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
