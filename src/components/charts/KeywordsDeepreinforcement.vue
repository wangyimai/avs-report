<template>
  <div class="KeywordsDeepreinforcement" >
    <div class="Chart" :id='id' ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'KeywordsDeepreinforcement',
  data () {
    return {
      id: 'KeywordsDeepreinforcement'
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
         title: {
        text: "深度强化学习论文数量",
        left: "left",
      },
      tooltip: {
        // trigger: "item",
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: ["2011", "2012", "2013", "2014","2015", "2016", "2017", "2018","2019", "2020"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [5, 9, 10, 8,14,164,355,898,2005,2203],
          type: "line",
        },
      ],
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
  .KeywordsDeepreinforcement{
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
