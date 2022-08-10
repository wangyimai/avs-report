<template>
  <article class="message is-link">
    <div class="message-body">
    算力通常被用来指代芯片的性能，简单理解即算力越大，性能越好。随着激光雷达上车，自动驾驶计算平台突破1000TOPS，算力成为越来越多汽车厂家主打的汽车卖点之一。但高算力意味着在技术上要实现硬件、软件同步突破，需保留一定的冗余，还要在商业上实现技术和商业的平衡。
    <br/>
    <br/>
    自动驾驶的发展已经来到“上半场的下半段”，算力也已经成为判断汽车智能化程度的重要指标，车企希望通过突出算力值，让终端用户对车企的自动驾驶能力有更多认知。当前的算力理论上已经可以满足L2、L3自动驾驶系统需求，接下来重点是将场景和体验做得更好。  </div>
  </article>
  <div class="SuanLi" id='chart-suanli'>
    <div class="Chart" :id='id' ></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'SuanLi',
  data () {
    return {
      id: 'SuanLi'
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
        text: "高等级自动驾驶对芯片的算力要求(TOPS)",
        left: "center",
      },
      tooltip: {
        // trigger: "item",
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: ["L1_L3", "L4", "L5"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [2.5, 24, 320],
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
  .SuanLi{
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
