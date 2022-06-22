<template>
  <Loader v-if="loading" />
  <div v-if="!loading" class="home">
    <Title />

    <div class="inner-container">
      <div class="text-container">
        <IntroCard />

        <div class="skills-container">
          <Skill v-for="skill in skills" :key="skill" :skill="skill" />
        </div>
      </div>

      <div id="container">
        <div class="steam" id="steam1">
          <div class="system-earth1">
            <img src="../assets/js.png" class="earth" />
          </div>
        </div>
        <div class="steam" id="steam2">
          <div class="system-earth2">
            <img src="../assets/angular.png" class="jet" />
          </div>
        </div>
        <div class="steam" id="steam3">
          <div class="system-earth3">
            <img src="../assets/node.png" class="jet" />
          </div>
        </div>
        <div class="steam" id="steam4">
          <div class="system-earth4">
            <img src="../assets/react.png" class="jet" />
          </div>
        </div>

        <div id="cup">
          <div id="cup-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IntroCard from "@/components/IntroCard.vue"; // @ is an alias to /src
import Title from "@/components/Title.vue"; // @ is an alias to /src
import PictureCard from "@/components/PictureCard.vue"; // @ is an alias to /src
import Skill from "@/components/Skill.vue"; // @ is an alias to /src
import Loader from "@/components/Loader.vue"; // @ is an alias to /src

@Options({
  components: {
    IntroCard,
    Title,
    PictureCard,
    Skill,
    Loader
  }
})
export default class Home extends Vue {
  private skills: Array<string> = [
    "react",
    "angular",
    "node",
    "java",
    "golang"
  ];
  private loading = false;
}
</script>
<style lang="scss">
#container {
  position: relative;
  top: 25%;
}
.text-container {
  display: flex;
  flex-direction: column;
  width: 30%;
}
.inner-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.steam {
  position: absolute;
  height: 250px;
  width: 150px;
  border-radius: 50%;
  background-color: #fff;
  margin-top: -75px;
  margin-left: 75px;
  z-index: 0;
  opacity: 0;
}

#steam1 {
  -webkit-animation: steam1 4s ease-out infinite;
  animation: steam1 4s ease-out infinite;
}

#steam3 {
  -webkit-animation: steam1 4s ease-out 1s infinite;
  animation: steam1 4s ease-out 1s infinite;
}

@-webkit-keyframes steam1 {
  0% {
    transform: translateY(0) translateX(0) scale(0.25);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-200px) translateX(-20px) scale(1);
    opacity: 0;
  }
}

@keyframes steam1 {
  0% {
    transform: translateY(0) translateX(0) scale(0.25);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-200px) translateX(-20px) scale(1);
    opacity: 0;
  }
}

#steam2 {
  -webkit-animation: steam2 4s ease-out 0.5s infinite;
  animation: steam2 4s ease-out 0.5s infinite;
}

#steam4 {
  -webkit-animation: steam2 4s ease-out 1.5s infinite;
  animation: steam2 4s ease-out 1.5s infinite;
}

@-webkit-keyframes steam2 {
  0% {
    transform: translateY(0) translateX(0) scale(0.25);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-200px) translateX(20px) scale(1);
    opacity: 0;
  }
}

@keyframes steam2 {
  0% {
    transform: translateY(0) translateX(0) scale(0.25);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-200px) translateX(20px) scale(1);
    opacity: 0;
  }
}

#cup {
  z-index: 1;
  position: relative;
  background: rgb(246 247 247);
  opacity: 0.7;
}

#cup-body {
  height: 28rem;
  width: 18rem;
  margin: auto;
  display: inline-block;
  overflow: hidden;
  z-index: 1;
  background: url("../assets/wave.png") repeat-x bottom;
  animation: filling 10s ease-in-out infinite;
  border-left: black solid 10px;
  border-right: black solid 10px;
  border-bottom: black solid 10px;
}

@keyframes filling {
  50% {
    background-position: 6000px 350px;
  }
  75% {
    background-position: 3000px 0;
  }
}
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-items: flex-end;
  .skills-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
  }
}

@media only screen and (max-width: 600px) {
  .text-container {
    width: 100%;
  }
}
</style>
