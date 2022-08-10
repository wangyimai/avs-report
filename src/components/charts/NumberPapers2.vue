
<template>
  <div class="NumberPapers2" >
    <div class="Chart" :id='id' ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'NumberPapers2',
  data () {
    return {
      id: 'NumberPapers2'
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
            ['年', 'kitti', 'flyingthings3D','semantickitti','nuscenes'],
            [2018, 230, 21,51,2], [2019, 369, 24,9,27], [2020, 456, 35,57,148], [2021, 524, 33,83,194], [2022, 325, 26,68,185]

          ]
        }
      ],
      title: {
        text: '各类自动驾驶数据集相关论文数量',
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
  .NumberPapers2 {
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
