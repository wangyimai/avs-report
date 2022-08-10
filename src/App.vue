<template>
  <Header/>
  <div class="container">
    <div id="columns" class="columns is-desktop">
      <sections class="column is-9-desktop">
        <begining/>
        <foreword-section/>
        <trade-section/>
        <sensor-section/>
        <DL-section/>
        <RL-section/>
        <question-section/>
        <end/>
      </sections>
      <table-of-contents class="column is-3"/>
    </div>
  </div>
  <Footer/>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer";
import Sections from '@/components/Sections.vue';
import TableOfContents from "@/components/TableOfContents";
import ForewordSection from "@/components/contents/ForewordSection";
import TradeSection from "@/components/contents/TradeSection";
import Begining from '@/components/contents/Begining.vue';
import SensorSection from "@/components/contents/SensorSection";
import End from '@/components/contents/End.vue';
import RLSection from '@/components/contents/RLSection.vue';
import DLSection from '@/components/contents/DLSection.vue';
import QuestionSection from '@/components/contents/QuestionSection.vue';



export default {
  name: 'App',
  components: {
    SensorSection,
    TradeSection,
    ForewordSection,
    Header,
    Footer,
    Sections,
    TableOfContents,
    Begining,
    End,
    RLSection,
    DLSection,
    QuestionSection
  },
}
</script>

<style>
#columns {
  margin-top: 10px;
  margin-left: 0;
  margin-right: 0;
}
</style>
