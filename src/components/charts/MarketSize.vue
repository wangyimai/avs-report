<template>
  <article class="message is-link" id='chart-marketsize'>
    <div class="message-body">
    在政策、技术、市场需求以及资本等多方因素推动下，我国自动驾驶行业发展快速，场景应用和商业化落地成为自动驾驶供应商关键发力点。未来城市级智慧交通将连接交通参与者、载运工具、基础设施和运行环境，实现基于强计算、全感知、全融合的全链路综合交通服务与决策体系，将拥有比单个落地场景更加广阔的市场空间。
    <br/>
    <br/>
    随着车端、路端、云端智能布局持续完善，以及自动驾驶渗透率提升和市场机制的形成，加之产业链愈发成熟，预计2030年中国智慧交通市场规模将达到10.6万亿元。    </div>
  </article>
  <div class="MarketSize" id='chart-suanli'>
    <div class="Chart" :id='id' ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'MarketSize',
  data () {
    return {
      id: 'MarketSize'
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
        text: "2020-2030年中国智慧交通市场规模预测（单位：亿元）",
        left: "center",
      },
      tooltip: {
        // trigger: "item",
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: ["2021", "2021", "2022e","2023e", "2024e", "2025e","2026e", "2027e", "2028e","2029e","2030e"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [1448, 3098, 5165,8943,16410,23331,34592,47156,62955,83205,105963],
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
  .MarketSize{
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
