<template>
  <div class="intro-card">
    Hi, I am a web developer from Bangalore, India.
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class IntroCard extends Vue {}
</script>

<style scoped lang="scss">
.intro-card {
  width: 70%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 5rem;
  font-weight: 800;
}
</style>
