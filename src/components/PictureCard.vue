<template>
  <div class="picture-card">
    <div class="system-earth1">
      <img src="../assets/js.png" class="earth" />
    </div>
    <div class="system-earth2">
      <img src="../assets/angular.png" class="jet" />
    </div>
    <div class="system-earth3">
      <img src="../assets/node.png" class="jet" />
    </div>
    <div class="system-earth4">
      <img src="../assets/react.png" class="jet" />
    </div>
    <div class="picture2" @load="imageLoaded" />
    <div class="picture1" @load="imageLoaded" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    src1: String,
    src2: String
  }
})
export default class PictureCard extends Vue {
  imageLoaded() {
    this.$emit("true");
  }
}
</script>

<style lang="scss">
.earth {
  z-index: 2;
  position: relative;
}

.jet {
  z-index: 2;
  position: relative;
  animation: jet 10s ease-in-out infinite;

}
.system-earth1 {
  z-index: 3;
  position: absolute;
  top: 60%;
  height: 1em;
  width: 90%;
  animation: earth-orbit1 10s ease-in-out infinite;
}

.system-earth2 {
  z-index: 3;
  position: absolute;
  top: 20%;
  height: 1em;
  width: 90%;
  animation: earth-orbit2 5s ease-in-out infinite;
}

.system-earth3 {
  z-index: 3;
  position: absolute;
  top: 40%;
  height: 1em;
  width: 90%;
  animation: earth-orbit3 8s ease-in-out infinite;
}

.system-earth4 {
  z-index: 3;
  position: absolute;
  top: 80%;
  height: 1em;
  width: 90%;
  animation: earth-orbit4 10s ease-in-out infinite;
}
@keyframes earth-orbit1 {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(100%) rotate(20deg);
    z-index: 3;
  }
  100% {
    transform: translateX(0);
    z-index: 1;
  }
}
@keyframes earth-orbit2 {
  0% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(100%) rotate(-40deg);
    z-index: 3;
  }
  100% {
    transform: translateX(0);
    z-index: 1;
  }
}

@keyframes earth-orbit3 {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%) rotate(-40deg);
    z-index: 3;
  }
  100% {
    transform: translateX(0);
    z-index: 1;
  }
}

@keyframes earth-orbit4 {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%) rotate(80deg);
    z-index: 3;
  }
  100% {
    transform: translateX(0);
    z-index: 1;
  }
}

@keyframes jet {
  0% {
    transform: rotate(50deg)
  }
  50% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(360deg);
  }
}
.picture-card {
  overflow: hidden;
  height: 100%;
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  .picture2 {
    width: 50%;
    background: url("../assets/iamjovin1.png") no-repeat right;
    background-size: contain;
    height: 100%;
    z-index: 2;
  }
  .picture1 {
    width: 50%;
    background: url("../assets/jovi2.png") no-repeat left;
    background-size: contain;
    height: 100%;
    z-index: 2;
  }

  &:hover {
    justify-content: space-between;
    .picture1 {
      background-position: left;
    }
    .picture2 {
      background-position: right;
    }
  }
}
</style>
