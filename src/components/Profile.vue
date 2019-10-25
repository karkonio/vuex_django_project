<template>
  <div id="profile">
      <div id="info">
        <div class="box">
          <div class="card">
            <div class="imgBx">
              <img v-bind:src="profile.avatar" alt="avatar">
            </div>
            <div class="details">
                <h2>
                  {{ profile.first_name }} {{ profile.last_name }}
                  <br><span>{{ profile.direction }}</span>
                </h2>
            </div>
          </div>

          <div class="follow">
            <ul>
              <li>
                {{ profile.followers_count }}
                <span>Followers</span>
              </li>
              <li>
                {{ profile.following_count }}
                <span>Following</span>
              </li>
            </ul>
          </div>

          <ul class="personal-info">
            <li><p><span> Birthday</span>{{ profile.birthday }}</p></li>
            <li><p><span> Age</span>{{ profile.age }}</p></li>
            <li><p><span> City</span>{{ profile.city }}</p></li>
            <li> <p><span> Zodiac</span>{{ profile.zodiac }}</p></li>
            <li><p><span> Phone</span>{{ profile.phone }}</p></li>
            <li><p><span> Website</span><a :href="profile.website">click here</a></p></li>
          </ul>

        </div>  
      </div>
      <ul id="v-for-object">
        <li v-for="post in profile.posts" v-bind:key="post">
          <article id="posts">
            <div class="post">
              <img v-bind:src="post.image" alt="image" style="width:100%;">
              <div class="content">
                <p>{{ post.description }}</p>
                <p>{{ post.created }}</p>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  computed: mapState(['profile']),
  mounted: function () {
    this.$store.dispatch('getProfile', this.$route.params.id)
  }
}
</script>

<style>
  #profile {
    display: grid;
    grid-template-areas:
    "info posts";
    grid-template-columns: 350px 500px;
    grid-gap: 100px;
    height: 100vh;
    margin: 5%;
  }
  .box {
    width: 350px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 15px;
    margin: 0 auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .card {
    position: relative;
    width: 300px;
    height: 350px;
    background: #fff;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow:0 2px 10px rgba(0,0,0,.2);
  }
  .card:before, .card:after {
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #fff;
    transition: 0.5s;
    z-index:-1;
  }
  .card:hover:before {
    transform: rotate(20deg);
    box-shadow: 0 2px 20px rgba(0,0,0,.2);
  }
  .card:hover:after {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0,0,0,.2);
  }
  .card .imgBx {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    background: #222;
    transition: 0.5s;
    z-index: 1;
  }
  .card:hover .imgBx {
    bottom: 80px;
  }
  .card .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card .details {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 60px;
    text-align: center;
  }
  .card .details h2 {
    margin: 0;
    padding: 0;
    font-family: 'Comic Sans MS', sans-serif;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    color: #787878;
  }
  .card .details h2 span {
    font-family: 'Comic Sans MS', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #b192dd;
    display: block;
    margin-top: 5px;
   }
  .personal-info {
    padding: 25px;
    border-bottom: 1px solid #e6e6e6;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #333;
    font-weight: normal;
    font-size: 14px;
    font-family: 'Comic Sans MS', sans-serif;
    line-height: 1;
    box-sizing: border-box;
    list-style: none;
    padding: 35px;
    border-bottom: 1px solid #e6e6e6;
  }
  .personal-info li p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .personal-info li span {
    width: 50%;
    float: left;
    text-transform: uppercase;
    font-weight: bold;
    color: #787878;
  }
  .post {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 5%;
  }
  .post .content {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
  }
  .content p{
    margin-left: 10px;
    margin-right: 10px;
    text-align: justify;
    text-shadow: 2px;
    font-style: italic;
    font-size: 13px;
    font-variant: small-caps;
  }
  .follow {
    width: 350px;
    margin: auto;
  }
  .follow {
    margin-top: .6em;
    color: #81878b; }
    .follow li {
      width: 45%;
      text-align: center;
      display: inline-block;
      font-size: 1.5em;
      font-family: 'Lato';
      border-right: solid 1px #bdc3c7; }
      .follow li:last-child {
        border: none; }
      .follow li span {
        display: block;
        text-transform: uppercase;
        font-family: 'Quicksand';
        font-size: .5em;
        margin-top: .6em;
        font-weight:700;
      }

</style>