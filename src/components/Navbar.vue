<template>
  <nav class="navbar">
    <a class="navbar-brand" href="/">
      <img src="images/img.png" width="50" height="50" alt="">
      Instach
    </a>
    <div class="form-inline my-2 my-lg-0" v-if="token">
      <button class="btn btn-success" data-toggle="button" @click="logout">Log Out</button>
    </div>
    <div class="form-inline my-2 my-lg-0" v-else>
      <input class="form-control mr-sm-2" v-model="username"/>
      <input class="form-control mr-sm-2" v-model="password"/>
      <button type="button" class="btn btn-success" data-toggle="button" @click="login({username, password})">
        Log In
      </button>
    </div>
  </nav>
</template>


<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    data () {
      return {
        username: 'username',
        password: 'password'
      }
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      ...mapActions(['login', 'logout'])
    }
  }
</script>


<style>
  .navbar {
    background-color: #b192dd;
    column-width: 300px;
  }
  .navbar a {
    font-size: xx-large;
    color: #ffffff;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
</style>