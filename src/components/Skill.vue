<template>
  <button class="skill">
    {{ skill }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    skill: String
  }
})
export default class Skill extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  background: white;
  border: 0.125em solid black;
  cursor: pointer;
  font: 600 1.5rem/1.25 "Montserrat", sans-serif;
  letter-spacing: 0.125em;
  margin: 0.5rem;
  padding: 0.5em 0.75em;
  position: relative;
  text-transform: uppercase;
  &:before,
  &:after {
    content: "";
    position: absolute;
    transition: all 0.125s ease-in-out;
  }
  &.skill {
    background: none;
    border-color: transparent;
    &:before,
    &:after {
      transition: all 0.175s ease-in-out;
    }
    &:before {
      background: black;
      border: 0px dashed black;
      left: 0.125em * -1;
      top: 0.125em * -1;
      right: 0.125em * -1;
      bottom: 0.125em * -1;
      z-index: -1;
    }
    &:hover:before,
    &:focus:before {
      background: white;
      border-width: 0.125em;
    }
    &:after {
      background: white;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }
}
</style>
