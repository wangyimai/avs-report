
<template>
  <article class="message is-link">
    <div class="message-body">
    我国自动驾驶行业投资热度较高，整车、自动驾驶解决方案、芯片和雷达等核心硬件、Robotaxi成为热门赛道。行业二八效应明显，头部企业持续获得资本支持。根据鲸准数据库，截至2021年11月30日，共收录1,764个自动驾驶相关项目。其中，种子轮至A轮项目221个，A+轮至C轮项目86个，C+轮至Pre-IPO项目15个，战略投资与并购项目328个，未融资项目1,114个，长尾明显。
      </div>
  </article>
  <div class="DistributionRounds" id="chart-distributionrounds">
    <div class="Chart" :id='id' ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'DistributionRounds',
  data () {
    return {
      id: 'main'
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
          title: [
          {
            text: "中国自动驾驶项目融资轮次分布",
            left: "center",
          },
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "种子轮至A轮",
            "A+轮至C轮",
            "C+轮至Pre—IPO",
            "战略投资与并购",
            "未融资",
          ],
        },
        series: [
          {
            name: "融资轮次",
            type: "pie",
            radius: "55%",
            data: [
              {value: 221, name: "种子轮至A轮"},
              {value: 86, name: "A+轮至C轮"},
              {value: 15, name: "C+轮至Pre—IPO"},
              {value: 328, name: "战略投资与并购"},
              {value: 1114, name: "未融资"},

            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
  .DistributionRounds {
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
