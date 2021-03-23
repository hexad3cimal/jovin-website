<template>
  <Loader v-if="loading" />
  <div v-if="!loading" class="home">
    <Title />

    <IntroCard />
    <PictureCard :src="src" />
    <div class="skills-container">
      <Skill v-for="skill in skills" :key="skill" :skill="skill" />
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
    "vue",
    "node",
    "golang",
    "java",
    "python"
  ];
  private src = require("../assets/jovin.png");
  private loading = true;

  beforeMount() {
    const myImage = new Image();
    myImage.src = this.src;
    myImage.onload = () => {
      this.src = myImage.src;
      this.loading = false;
    };
  }
}
</script>
<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 100%;
  padding: 2rem;
  .skills-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
