<template>
  <div id="app">
    <div class="home-wrapper">
      <TopNav></TopNav>

      <div class="title-wrapper">
        <div class="logo-retro" />
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import { TopNav } from "./components/Layout";

export default {
  name: "App",
  components: {
    TopNav,
  },
};
</script>
<style lang="scss">
@import "src/assets/css/colors.scss";
@import "src/assets/css/breakpoints.scss";

.home-wrapper {
  width: 100%;
  min-height: 100vh;
  background-image: radial-gradient($secondary 30%, $background 30%);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .title-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 30vh;
    width: 100%;

    .logo-retro {
      width: 20%;
      height: 50vh;
      background-image: url("./assets/images/retro.png");
      background-repeat: no-repeat;
      background-size: contain;

      &:hover {
        animation: blink 0.5s ease infinite;
      }
      @include respond-to("small") {
        width: 60%;
      }
      @keyframes blink {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    }

    .logo-disco {
      width: 20%;
      height: 50vh;
      background-image: url("./assets/images/default.png");
      background-repeat: no-repeat;
      background-size: contain;

      &:hover {
        animation: shadow-wave 1.5s ease infinite;
      }
      @include respond-to("small") {
        width: 60%;
      }
    }

    @keyframes shadow-wave {
      0% {
        background-image: url("./assets/images/default.png");
      }
      20% {
        background-image: url("./assets/images/redlogo.png");
      }
      40% {
        background-image: url("./assets/images/orangelogo.png");
      }
      60% {
        background-image: url("./assets/images/yellowlogo.png");
      }
      80% {
        background-image: url("./assets/images/greenlogo.png");
      }
      90% {
        background-image: url("./assets/images/greenlogo.png");
      }
      100% {
        background-image: url("./assets/images/default.png");
      }
    }
  }
  .tiles-container {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-evenly;
  }
}
</style>
