<template>
<header class="header">
  <img class="logo" src="../../assets/images/logo-small.png" />
  <div class="logo-text">jovin thariyath</div>
</header>
</template>

<script>
export default {
name: "TopNav"
}
</script>

<style scoped>
.header{
  height: 3rem;
  position: fixed;
  background-color: #fff;
  padding: .5rem;
  width: 100%;
  z-index: 99;
  top: 0;
  transition: all .4s;
  display: flex;
  flex-direction: row;;
  align-items: flex-start;
}
.logo{
  padding: 1rem;
  width: 4rem;
}
.logo-text{
  color: black ;
  font-size: 1.2rem;
  padding: 1.5rem .5rem;
}
</style>
