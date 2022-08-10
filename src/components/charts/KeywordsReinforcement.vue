
<template>
    <article class="message is-link">
    <div class="message-body">
      强化学习是机器学习的一个分支，具有以下特点：<br/>
      <br/> a. 无特定数据，只有奖励信号;<br/>
      <br/> b. 奖励信号不一定实时;<br/>
      <br/> c. 主要研究时间序列的数据，而不是独立同分布的数据;<br/>
      <br/> d. 当前行为影响后续数据; <br/>
      <br/>对比其他机器学习方法，监督学习和无监督学习都需要静态的数据，不需要与环境交互，数据输入到相关函数训练就行。而且对于有监督学习和无监督学习来说，有监督学习强调通过学习有标签的数据，预测新数据的标签，无监督学习更多是挖掘数据中隐含的规律。强化学习不需要给出“正确”标签作为监督信息，只需要给出策略的(延时)回报，并通过调整策略来取得最大化的期望回报。
    </div>
  </article>
  <div class="KeywordsReinforcement" >
    <div class="Chart" :id='id' ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'KeywordsReinforcement',
  data () {
    return {
      id: 'KeywordsReinforcement'
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
        text: "强化学习相关论文数量",
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
          data: [811, 821, 852, 833,843,1011,2204,4776,8081,8016],
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
  .KeywordsReinforcement{
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
