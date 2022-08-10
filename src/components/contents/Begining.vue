<template>
  <section id='intro' class="content">
    <div class='B_title'>
      
    </div>
    <!-- <h2>乡村振兴内容</h2> -->
    <div class="card">
      <div class="card-content">
        <div class="intro">
          <p>
           近年来，自动驾驶汽车这一领域逐步成为当下的热点研究方向，因为这一技术能显著减少道路事故和人身伤害。智能交通系统（ITS）和人工智能（AI）的这两方面的最新进展，进一步为自动驾驶汽车（AVS）全面发展铺平了道路，也为智能道路、智能交通安全和旅行者舒适度这三个方面带来了新的机遇。除了以往经典的控制方法，深度学习技术和强化学习技术也被用于这一领域。不同的研究者往往关注于不同方向的技术，而本文总结了最近所有基于人工智能的用于处理AVS的技术。这些技术包括但不限于场景理解、运动规划、决策、车辆控制、社会行为和通信。在这篇文献中，我们仅仅关注基于深度学习和强化学习的方法，至于浅层机器学习（ML）的技术则不在我们的研究范围内，因为这个主题在过去已经被广泛提及。通过这些研究，我们顺利建立了关于DL和RL算法的分类。最后，我们还提出了这些方面仍然存在的诸多挑战。最后，我们基于已有的分析，总结出了未来可能的研究方向。          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Begin",

});
</script>

<style lang="scss">
@import "~bulma/sass/utilities/mixins";

.B_title {
  width: 50%;
  margin: 0 auto 30px;
}

.card {
  width: 80%;
  margin: 0 auto 80px;
}

.pic {
  margin-bottom: 10px;
  margin-top: 0;
  text-align: center;
}

</style>
