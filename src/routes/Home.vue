<template>
  <div class="home-wrapper">
    <TopNav></TopNav>

    <div class="title-wrapper">
      <div class="title">
        <img src="../assets/images/logo.png">
      </div>
    </div>
    <div class="tiles-container">
      <span class="tiles">react-js</span>
      <span class="tiles">vue-js</span>
      <span class="tiles">node-js</span>
      <span class="tiles">angular</span>
      <span class="tiles">java</span>
      <span class="tiles">golang</span>
      <span class="tiles">bash</span>
      <span class="tiles">scss</span>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/Home/TopNav";
export default {
  name: 'Home',
  components: {TopNav}
}
</script>

<style lang="scss" scoped>
.home-wrapper{
  width: 100%;
  min-height: 100vh;
  background: #fff;
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
