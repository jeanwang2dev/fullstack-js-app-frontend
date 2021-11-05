<template>
  <div>
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
export default {
  name: 'App',
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
