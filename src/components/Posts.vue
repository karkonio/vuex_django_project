<template>

  <div class="flex-container">

    <ul id="v-for-object">
      <li v-for="post in posts" v-bind:key="post">

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img v-bind:src="post.image" alt="post">
            </div>

            <div class="flip-card-back">
              <h1>@{{ post.profile }}</h1>
              <p>{{ post.description }}</p>
              <h6>{{ post.created }}</h6>
            </div>
          </div>
        </div>

      </li>
    </ul>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Posts',
  data: function () {
    return {}
  },
  computed: mapState(['posts']),
  created: function () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style>
  li {
    list-style-type: none;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 3%;
  }
  .flip-card {
    background-color: transparent;
    width: 450px;
    height: 400px;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    display: block;
    margin: 4em 0;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  .flip-card-front img {
    width: 450px;
    height: 400px;
    position: relative;
    overflow: hidden;
  }

  /* Style the back side */
  .flip-card-back {
    background-color: #b192dd;
    color: white;
    transform: rotateY(180deg);
  }
  .flip-card-back h1 {
    font-family: "Comic Sans MS", bold, sans-serif;
    text-align: left;
    text-indent: 16px;
    padding-top: 3%;
  }
  .flip-card-back h6 {
    font-style: italic;
    color: #bbb;
    text-align: left;
    text-indent: 16px;
  }
  .flip-card-back p {
    font-family: "Comic Sans MS", boold, sans-serif;
    color: #32135E;
    text-align: justify;
    text-indent: 16px;
    word-break: break-word;
    font-style: italic;
  }
</style>
