<template>
  <div id="app">
    <video autoplay muted loop id="myVideo">
      <source src="../public/background.mp4" type="video/mp4">
    </video>
    <Navbar></Navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>


<style>
  #myVideo {
    position:fixed;
    top: 0%;
    left: 0%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translate(-50%, -50%);
     
  }
</style>