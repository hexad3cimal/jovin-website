<template>
  <div class="card">
    <h2>
  {{title}}
    </h2>
  </div>
</template>

<script>
export default {
name: "Card",
  props:['title']
}
</script>

<style  lang="scss" scoped>
@import "src/assets/css/colors.scss";
.card {
  background-color:$background;
  cursor: pointer;
  padding: 1rem 3rem;
  margin: 1.5rem;
  border: 3px solid $primary;
  font-size: 1rem;
  color: $red;
  box-shadow: 10px -10px 0 -3px $background, 10px -10px $green,
  20px -20px 0 -3px $background, 20px -20px $yellow,
  30px -30px 0 -3px $background, 30px -30px $orange,
  40px -40px 0 -3px $background, 40px -40px $red;
}

.card:hover {
  animation: shadow-wave 1s ease infinite;
}


@keyframes shadow-wave {
  0% {
    border: 3px solid $primary;
    box-shadow: 10px -10px 0 -3px $background, 10px -10px $green,
    20px -20px 0 -3px $background, 20px -20px $yellow,
    30px -30px 0 -3px $background, 30px -30px $orange,
    40px -40px 0 -3px $background, 40px -40px $red;
  }
  20% {
    border: 3px solid $red;
    box-shadow: 10px -10px 0 -3px $background, 10px -10px $primary,
    20px -20px 0 -3px $background, 20px -20px $green,
    30px -30px 0 -3px $background, 30px -30px $yellow,
    40px -40px 0 -3px $background, 40px -40px $orange;
  }
  40% {
    border: 3px solid $orange;
    box-shadow: 10px -10px 0 -3px $background, 10px -10px $red,
    20px -20px 0 -3px $background, 20px -20px $primary,
    30px -30px 0 -3px $background, 30px -30px $green,
    40px -40px 0 -3px $background, 40px -40px $yellow;
  }
  60% {
    border: 3px solid $yellow;
    box-shadow: 10px -10px 0 -3px $background, 10px -10px $orange,
    20px -20px 0 -3px $background, 20px -20px $red,
    30px -30px 0 -3px $background, 30px -30px $primary,
    40px -40px 0 -3px $background, 40px -40px $green;
  }
  80% {
    border: 3px solid $green;
    box-shadow: 10px -10px 0 -3px $background, 10px -10px $yellow,
    20px -20px 0 -3px $background, 20px -20px $orange,
    30px -30px 0 -3px $background, 30px -30px $red,
    40px -40px 0 -3px $background, 40px -40px $primary;
  }
  100% {
    border: 3px solid $primary;
    box-shadow: 10px -10px 0 -3px $background, 10px -10px $green,
    20px -20px 0 -3px $background, 20px -20px $yellow,
    30px -30px 0 -3px $background, 30px -30px $orange,
    40px -40px 0 -3px $background, 40px -40px $red;
  }

}
.card p {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.card h2 {
  font-size: 14px;
  font-family: "Archivo Black", "Archivo", sans-serif;
  font-weight: normal;
}


</style>
