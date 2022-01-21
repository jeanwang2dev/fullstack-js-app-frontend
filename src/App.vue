<template>
  <div class="container">
    <Header @toggle-create-tweet="toggleCreateTweet" 
            title="Tweets Tacker" 
            :showCreateTweet="showCreateTweet" />
    <div v-show="showCreateTweet">
      <CreateTweet @add-tweet="createTweet"/>
    </div>
    <Tweets @toggle-read="toggleRead"
            @delete-tweet="deleteTweet" :tweets="tweets" />
  </div>
</template>

<script>
import Header from './components/Header'
import Tweets from './components/Tweets'
import CreateTweet from './components/CreateTweet.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tweets,
    CreateTweet,
  },
  data() {
    return {
      tweets: [],
      showCreateTweet: false
    };
  },
  methods: {
    toggleCreateTweet() {
      this.showCreateTweet = !this.showCreateTweet
    },
    toggleRead(id) {
      console.log('toggle ', id);
      // const tweetToToggle = await this.fetchTweet(id)
      // const updTweet = { ...tweetToToggle, read: !tweetToToggle.read }
      // const res = await fetch(`api/tweets/${id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify(updTweet),
      // })
      // const data = await res.json()
      this.tweets = this.tweets.map((tweet) =>
        tweet._id === id ? { ...tweet, read: !tweet.read } : tweet
      )
    },
    async getTweets() {
      await fetch('api/tweets')
        .then( res => res.json() )
        .then( data => (this.tweets = data.tweets) );
      console.log("hello...")
      console.log(this.tweets)
      console.log("end...")
    },
    createTweet(tweet) {
      this.tweets = [... this.tweets, tweet]
      // await fetch('api/tweets', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json'},
      //   body: JSON.stringify({ text: tweet.text }),
      // }).then( () => {
      //   this.text = '';
      //   this.getTweets();
      // });
    },
    deleteTweet(id) {
      if (confirm('Are you sure to delete this tweet?')) {
        const res = fetch(`api/tweets/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.tweets = this.tweets.filter((tweet) => tweet._id !== id))
          : alert('Error deleting task')
      }
    },
    fetchTweet(id) {
      const res = fetch(`api/tweets/${id}`)
      const data = res.json()
      return data
    },
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
