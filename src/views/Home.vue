<template>
  <Loader v-if="loading" />
  <div v-if="!loading" class="home">
    <Title />

    <PictureCard :src="src" />
    <IntroCard />

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
    "node"
  ];
  private loading = false;

}
</script>
<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
  .skills-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
  }
}
</style>
