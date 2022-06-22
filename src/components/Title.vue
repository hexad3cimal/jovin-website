<template>
  <div class="title">
    <div class="title-text">jovin thariyath</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Title extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  display: flex;
  padding-left: 2rem;
  .title-text {
    font-size: 2rem;
    text-align: center;
    color: #09619c;
    font-weight: 800;
  }
}
</style>
