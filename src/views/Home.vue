<template>
  <div>
    <video autoplay muted loop id="myVideo">
      <source src="../../public/background.mp4" type="video/mp4">
    </video>
    <Posts></Posts>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  name: 'home',
  components: {
    Posts
  }
}
</script>


<style>
  #myVideo {
    position:fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translate(-50%, -50%);
     
  }
</style>