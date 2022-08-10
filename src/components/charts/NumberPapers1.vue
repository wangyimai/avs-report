<template>
  <div class="NumberPapers" >
    <div class="Chart" :id='id' ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'NumberPapers',
  data () {
    return {
      id: 'NumberPapers'
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
            ['年', 'CARLA', 'TORCS'],
            [2018, 20, 10], [2019, 73, 11], [2020, 131, 8], [2021, 197, 10], [2022, 147, 3]

          ]
        }
      ],
      title: {
        text: 'CARLA和TORCS模拟器相关论文发表数量',
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
  .NumberPapers{
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
