<template>
    <div class="tiles-container">
        <Tile text="react" />
    </div>
</template>

<script>
import { Tile} from "@/components/Blog";
export default {
  name: "Home",
  components: { Tile },
  data: () => {
    return {
      skills: ["react", "angular", "vue", "node", "golang"],
    };
  },
};
</script>

<style lang="scss" scoped>
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

    .logo {
      width: 20%;
      height: 50vh;
      background-image: url("../assets/images/default.png");
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
        background-image: url("../assets/images/default.png");
      }
      20% {
        background-image: url("../assets/images/redlogo.png");
      }
      40% {
        background-image: url("../assets/images/orangelogo.png");
      }
      60% {
        background-image: url("../assets/images/yellowlogo.png");
      }
      80% {
        background-image: url("../assets/images/greenlogo.png");
      }
      90% {
        background-image: url("../assets/images/greenlogo.png");
      }
      100% {
        background-image: url("../assets/images/default.png");
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
