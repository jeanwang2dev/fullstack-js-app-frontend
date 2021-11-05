<template>
  <div class="container">
    <Header title="Tweets Tacker" />
    <!-- create a tweet -->
    <form @submit.prevent="createTweet">
      <input type="text" v-model="text"/>
      <button type="submit">Create</button>
    </form>
    <!-- show off all tweets -->
    <div v-for="tweet in tweets" :key = "tweet">
        {{ tweet.text }}
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      text: '',
      tweets: []
    };
  },
  methods: {
    getTweets() {
      fetch('api/tweets')
        .then( res => res.json() )
        .then( data => (this.tweets = data.tweets) );
    },
    createTweet() {
      fetch('api/tweets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ text: this.text }),
      }).then( () => {
        this.text = '';
        this.getTweets();
      });
    }
  },
  mounted(){
    this.getTweets();
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
