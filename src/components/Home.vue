<template>
  <div class="home-wrapper">
<div class="title-wrapper">
  <div class="title">
    Hello<span class="dots">..</span>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.home-wrapper{
  width: 100%;
  min-height: 100vh;
  background: #131fe9;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.title-wrapper{
  display: flex;
  justify-content: center;
  margin-top: 30vh;
}
.title{
  color: beige;
  font-size: 20rem;
}

.dots{
  font-size: 20rem;
  animation:blinkingText 1.2s infinite;
}
@keyframes blinkingText{
  0%{     color: beige;    }
  49%{    color: beige; }
  60%{    color: transparent; }
  99%{    color:transparent;  }
  100%{   color: beige;    }
}


</style>
