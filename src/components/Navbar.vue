<template>
  <nav class="navbar">
    <a class="navbar-brand" href="/">
      <a href="#"><img src="../../public/ava_background.jpeg"></a>
      Instach
    </a>
    <div class="form-inline my-2 my-lg-0" v-if="token">
      <ul id="menu">
        <li>
        <span>{{ username }} </span>
          <ul>
            
            <li><a href="#">My Profile</a></li>
            <li><a href="#" @click="logout">Log Out</a></li>

          </ul>
        </li>
      </ul>
    </div>
    <div class="form-inline my-2 my-lg-0" v-else>
      <input class="form-control mr-sm-2" type='text' v-model="username"/>
      <input class="form-control mr-sm-2" type='password' v-model="password"/>
      <button type="button" class="btn btn-success" data-toggle="button" @click="login({username, password})">Log In</button>
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
      ...mapState(['token', 'error'])
    },
    methods: {
      ...mapActions(['login', 'logout'])
    }
  }
</script>


<style>

  .navbar {
    background-color: #b192dd;
    opacity: .80;
    -khtml-opacity: .80;
    -moz-opacity: .80;
    column-width: 300px;
  }
  .navbar a {
    font-size: xx-large;
    color: #ffffff;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  #app > nav > a > a > img {
    border-radius: 50%;
    width: 61px;
    height: 60px;
  }
  #menu, #menu ul{
    list-style: none;
    background-color: #b192dd;
    padding: 0 0 0 0;
    margin: 0;
  }
  #menu li{
    float: left;
    margin-right: 10px;
    position: relative;
  }
  #menu ul{
    position: sticky;
    top: 0px;
    padding: 5px;
    display: none;
  }
  #menu ul li{
    float: none;
    margin: 5;
  }
  #menu a:link, #menu a:visited{
    display: block;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 1.25em;
    color: #ffffff;;
    padding: 1px;
  }
  #menu li:hover{
    background-color: #cab5e8;
  }
  #menu li:hover ul{
    display: block;
  }
  span {
    font-size: 1.25em;
    color: #ffffff;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  
</style>
