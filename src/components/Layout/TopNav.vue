<template>
  <header class="header">
    <div class="logo" />
    <div class="logo-text">jovin thariyath</div>
  </header>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/colors.scss";

.header {
  height: 3rem;
  position: fixed;
  background-color: $background;
  padding: 0.5rem;
  width: 100%;
  z-index: 99;
  top: 0;
  transition: all 0.4s;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.logo-text {
  margin-left: 1rem;
  color: white;
  font: bold 2rem Helvetica, Arial, Sans-Serif;
  text-shadow: 1px 1px #fe4902, 2px 2px #fe4902, 3px 3px #fe4902;
  -webkit-transition: all 0.12s ease-out;
  -moz-transition: all 0.12s ease-out;
  -ms-transition: all 0.12s ease-out;
  -o-transition: all 0.12s ease-out;

  &:hover {
    position: relative;
    top: -3px;
    left: -3px;
    text-shadow: 1px 1px #fe4902, 2px 2px #fe4902, 3px 3px #fe4902,
      4px 4px #fe4902, 5px 5px #fe4902, 6px 6px #fe4902;
  }
}

.logo {
  background-image: url("../../assets/images/default.png");
  background-repeat: no-repeat;
  background-size: contain;
  padding: 1.7rem;
  animation: shadow-wave 1.5s ease infinite;

  @keyframes shadow-wave {
    0% {
      background-image: url("../../assets/images/default.png");
    }
    20% {
      background-image: url("../../assets/images/redlogo.png");
    }
    40% {
      background-image: url("../../assets/images/orangelogo.png");
    }
    60% {
      background-image: url("../../assets/images/yellowlogo.png");
    }
    80% {
      background-image: url("../../assets/images/greenlogo.png");
    }
    90% {
      background-image: url("../../assets/images/greenlogo.png");
    }
    100% {
      background-image: url("../../assets/images/default.png");
    }
  }
}
</style>
