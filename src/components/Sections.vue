<template>
  <div id="sections">
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from "vue";


export default defineComponent({
  name: "Sections",
  setup() {
    
  }
});
</script>

<style lang="scss" scoped>
#sections {
  padding: 0;
}
</style>