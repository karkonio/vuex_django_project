<template>
  <div>
    <video autoplay muted loop id="myVideo">
      <source src="../../public/background.mp4" type="video/mp4">
    </video>
      <Profile />
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue'

export default {
  name: 'profile',
  components: {
    Profile
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