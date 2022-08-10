<template>
  <aside ref="toc" id="toc" class="menu is-hidden-touch is-narrow">
    <br/>
    <p class="menu-label"><a href="#intro">摘要</a></p>
    <p class="menu-label"><a href="#foreword-section">引言</a></p>
    <ul class="menu-list">
      <li><a href="#背景">背景</a></li>
      <li><a href="#国标自动驾驶等级分级">国标自动驾驶等级分级</a></li>
      <li><a href="#自动驾驶中的六大任务">自动驾驶中的六大任务</a></li>
      <li><a href="#现有综述">现有综述的介绍</a></li>
      <li><a href="#现有综述文献间的对比">现有综述文献间的对比</a></li>
      <li><a href="#本次研究的范围">本次研究的范围</a></li>
    </ul>
    <p class="menu-label"><a href="#trade-section">行业现状</a></p>
    <ul class="menu-list">
      <li><a href="#chart-suanli">高等级自动驾驶对芯片的算力要求</a></li>
      <li><a href="#chart-marketsize">中国智慧交通市场规模</a></li>
      <li><a href="#chart-distributionrounds">中国自动驾驶项目融资轮次</a></li>



      
    </ul>
    <p class="menu-label"><a href="#sensor-section">自动驾驶技术概要</a></p>
    <ul class="menu-list">
      <li><a href="#自动驾驶解决方案">自动驾驶解决方案</a></li>
      <li><a href="#自动驾驶汽车的传感器">自动驾驶汽车的传感器</a></li>
      <li><a href="#自动驾驶技术构架图">自动驾驶技术构架图</a></li>
    </ul>
    <p class="menu-label"><a href="#DL-section">自动驾驶与深度学习</a></p>
    <ul class="menu-list">
      <li><a href="#深度场景理解">场景理解</a></li>
      <li><a href="#深度运动规划">运动规划</a></li>
      <li><a href="#深度决策">决策</a></li>
      <li><a href="#深度车辆控制">车辆控制</a></li>
      <li><a href="#深度学习车辆社会行为">车辆社会行为</a></li>
      <li><a href="#深度学习车辆通信">车辆通信</a></li>
    </ul>
    <p class="menu-label"><a href="#RL-section">自动驾驶与强化学习</a></p>
    <ul class="menu-list">
      <li><a href="#状态空间、动作空间和奖励机制">状态空间、动作空间和奖励机制</a></li>
      <li><a href="#模拟器和场景生成工具">模拟器和场景生成工具</a></li>
      <li><a href="#强化决策">决策</a></li>
      <li><a href="#强化运动规划">运动规划</a></li>
      <li><a href="#强化车辆控制">车辆控制</a></li>
      <li><a href="#强化社会行为">车辆社会行为</a></li>
    </ul>

    <p class="menu-label"><a href="#question-section">开放研究问题和未来方向</a></p>
    <ul class="menu-list">
      <li><a href="#问题场景理解">场景理解</a></li>
      <li><a href="#问题运动规划">运动规划</a></li>
      <li><a href="#问题决策">决策</a></li>
      <li><a href="#问题车辆控制">车辆控制</a></li>
      <li><a href="#问题车辆社会行为">车辆社会行为</a></li>
      <li><a href="#问题车辆通信">车辆通信</a></li>
    </ul>
    <p class="menu-label"><a href="#end">结语</a></p>
  </aside>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "TableOfContents",
  props: ['getSections'],
  data() {
    return {
      current: '',
      links: []
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      this.current = []
      this.links = [...this.$refs.toc.querySelectorAll('a')]
      entries.forEach(entry => {
        let href = `#${entry.target.getAttribute('id')}`,
            link = this.links.find(l => l.getAttribute('href') === href)
        if (entry.isIntersecting) {
          link?.classList.add('menu-item-active');
        } else {
          link?.classList.remove('menu-item-active');
        }
      });
    }, {
      threshold: 0,
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('#sections div[id],.chart[id],h2[id],img[id],article[id],.div[id]').forEach((section) => {
      this.observer.observe(section);
    });
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
});

</script>

<style lang="scss">
@import "~bulma/sass/base/generic";

#toc {
  padding-left: 40px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin-top:0;
  padding-top: 0;
  height: min-content;
  max-height: 98vh;
  overflow-y: auto;
  padding-bottom: 5px;

  & > .subtitle {
    position: sticky;
    top: 0;
    left: 0;
    text-align: center;
    margin-bottom: 0;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: black;
    z-index: 1;
  }
}

.menu-label {
  font-size: 0.9rem !important;
  font-weight: bold;
  margin-bottom: 0.4rem !important;
  margin-top: 0.4rem !important;
}

.menu-item-active {
  color: white !important;
  box-shadow: $cyan 0 0 10px;

  &::before {
    background-color: $cyan;
    width: 100% !important;
  }
}


.menu-list a {
  position: relative;
  transition: all 0.7s ease;
  border-radius: 6px;
  overflow: hidden;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  margin-bottom: 0.2rem;
  font-size: 0.8rem;

  &::before {
    transition: all 0.7s ease;
    height: 100%;
    content: '';
    width: 0;
    opacity: 1;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }

  &:hover {
    color: white !important;
    box-shadow: $cyan 0 0 10px;
    background-color: $cyan !important;
  }
}
</style>