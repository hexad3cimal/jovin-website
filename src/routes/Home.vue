<template>
  <div class="home-wrapper">
    <TopNav></TopNav>

    <div class="title-wrapper">
      <div class="title">
        <img src="../assets/images/logo.png">
      </div>
    </div>
    <div class="tiles-container">
      <Cards v-for="skill in skills" :key="skill"  :title="skill" />
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/Home/TopNav";
import Cards from "@/components/Home/Cards";
export default {
  name: 'Home',
  components: {Cards, TopNav},
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
    width: 100%;
    .title{
      color: beige;
      font-size: 20rem;
      .dots{
        font-size: 20rem;
        animation:blinkingText 1.2s infinite;
      }
    }
  }

  .tiles-container{
    width:50%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-evenly;
    .tiles{
      margin: .5rem;
      background: black;
      color: beige;
      font-size: 1rem;
      padding: 1rem;
    }
  }


  @keyframes blinkingText{
    0%{     color: beige;    }
    49%{    color: beige; }
    60%{    color: transparent; }
    99%{    color:transparent;  }
    100%{   color: beige;    }
  }


}

</style>
