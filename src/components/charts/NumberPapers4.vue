
<template>
  <div class="NumberPapers4">
    <div class="Chart" :id='id' ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'NumberPapers4',
  data () {
    return {
      id: 'NumberPapers4'
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
            ['年', 'DL', 'RL','AVS'],
            [2013, 37300, 34000,20000], [2014, 41700, 37100,21200], [2015,47900, 41200,21700], [2016, 57900, 46500,21600], [2017, 79000, 59200,23600],[2018,118000,84100,28400],[2019,163000,114000,33300],[2020,193000,133000,33000],[2021,232000,160000,34700],[2022,128000,87300,16200]

          ]
        }
      ],
      title: {
        text: ' DL、RL论文发表数量对比图',
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
  .NumberPapers4{
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
