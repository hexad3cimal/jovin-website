<template>
  <div class="home-wrapper">
    <TopNav></TopNav>

    <div class="title-wrapper">
      <div class="title">
        <img class="logo" src="../assets/images/default.png">
      </div>
    </div>
    <div class="tiles-container">
      <Card v-for="skill in skills" :key="skill"  :title="skill" />
    </div>
  </div>
</template>

<script>
import {TopNav,Card} from "@/components/Home";
export default {
  name: 'Home',
  components: {Card, TopNav},
  data : () => {
    return {
      skills : ['react', 'angular', 'vue', 'node', 'golang']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/css/colors.scss";

.home-wrapper{
  width: 100%;
  min-height: 100vh;
  background-image: radial-gradient($secondary 30%, $background 30%);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .title-wrapper{
    display: flex;
    justify-content: center;
    margin-top: 30vh;
  }

  .tiles-container{
    width:50%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-evenly;
  
}
}

.logo:hover{
  animation: shadow-wave 1.5s ease infinite;

}
@keyframes shadow-wave {
  0% {
    background-image: url('../assets/images/default.png');
    width: 100%;
  }
  20% {
    background-image: url('../assets/images/redlogo.png');
        width: 99%;
  }
  40% {
     background-image: url('../assets/images/orangelogo.png');
         width: 100%;
  }
  60% {
        background-image: url('../assets/images/yellowlogo.png');
         width: 99%;

  }
  80% {
        background-image: url('../assets/images/greenlogo.png');
         width: 100%;

  }
   90% {
        background-image: url('../assets/images/greenlogo.png');
         width: 99%;

  }
  100% {
      background-image: url('../assets/images/default.png');
         width: 100%;
  }

}
</style>
