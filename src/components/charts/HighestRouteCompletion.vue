
<template>
  <div class="home" >
    <div class="Chart" :id='id'></div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import * as echarts from 'echarts' // 注意此处echarts高版本中需要使用此方式才可引入，否则会报错init udefined

export default {
  name: 'Home',
  data () {
    return {
      id: 'HighestRouteCompletion'
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
        text: "Carla模拟器中各时间段最远行驶距离方法排行",
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
            min: '2020-09-01',
            max: '2022-08-01',
        },
        yAxis: {
            type: 'value',
            name: '行驶里程',
            
        },
        series: [
          {
            name: '',
            data:[
                      ['2020-10-01',
                          17.54,
                          "LBC"
                      ],
                      [
                          '2020-12-01',
                          46.97,
                          "MaRLn"
                      ],
                      [
                          '2021-04-01',
                          57.65,
                          "World on Rails"
                      ],
                      [
                          '2021-08-01',
                        61.85,
                          "GRIAD"
                      ],
                      [
                          '2021-09-01',
                          69.84,
                          "Transfuser"
                      ],
                      [
                          '2022-04-01',
                          94.459,
                          "LAV"
                      ],
                ],
            type: "line",
            symbolSize: 10,
          }
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    overflow: auto;
    .Chart {
      height: 400px;
    }
  }
</style>
