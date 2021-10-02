<template>
  <div class="intro-card-container">
    <div class="intro-card">
      Hi, I am a web developer from Bangalore, India.
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class IntroCard extends Vue {}
</script>

<style scoped lang="scss">
.intro-card-container {
  display: flex;
  flex-direction: row;
  .intro-card {
    display: flex;
    font-size: 5rem;
    font-weight: 800;
  }
}

@media only screen and (min-device-width: 400px) {
  .intro-card {
    width: 30%;
  }
}
</style>
