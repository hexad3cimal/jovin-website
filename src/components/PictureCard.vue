<template>
  <div class="picture-card">
    <img class="picture" :src="src" @load="imageLoaded" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    src: String
  }
})
export default class PictureCard extends Vue {
  imageLoaded() {
    console.log("loaded");
    this.$emit("true");
  }
}
</script>

<style scoped lang="scss">
.picture-card {
  width: 30%;
  height: 100%;
  display: flex;
  .picture {
    height: 35rem;
    width: 25rem;
  }
}
</style>
