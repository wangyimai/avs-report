<template>
  <section id="trade-section" class="section is-medium">
    <h1 class="title">自动驾驶的行业现状</h1>
  </section>
  <div class="content">
    <suan-li/>
    <market-size/>
    <distribution-rounds/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import SuanLi from "../charts/SuanLi.vue";
import MarketSize from "../charts/MarketSize.vue";
import DistributionRounds from "../charts/DistributionRounds.vue";



export default defineComponent({
  name: "TradeSection",
  components: {
    SuanLi,
    MarketSize,
    DistributionRounds
  },
});
</script>

<style lang="scss" scoped>
#trade-section {
  background-image: url("../../assets/bj.jpg");
}
</style>