<template>
  <section id="header" class="hero is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-start">
            
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container">
        <p class="animate__animated animate__fadeInLeft title">
          自动驾驶中的深度学习与强化学习
        </p>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss">
#header {
  background-image: url("../assets/bj.jpg");
  background-attachment: fixed;
  background-size: cover;
  color: azure !important;
  $header-title-color: azure;
  .navbar-start {
    display: flex !important;;
  }
  .navbar-item {
    max-width: 7em;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    
  }

  a {
    color: white;

    &:hover {
      background-color: #ffffff23;
    }
  }

  & > .hero-body > .container {
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: flex-start;

    & > .title {
      color: $header-title-color;
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 3rem;
    }

    & > .subtitle {
      color: $header-title-color;
    }
  }
}
</style>