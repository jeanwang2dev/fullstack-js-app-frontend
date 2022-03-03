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
const backendUrl = 'https://nodejs-tweets-app.herokuapp.com/tweets/'
//const backendUrl = 'api/tweets/';

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
    async toggleRead(id) {
      // console.log('toggle ', id);
      const tweetToToggle = await this.fetchTweet(id);
      // console.log("before update: " + JSON.stringify(tweetToToggle));
      // console.log("read value: " + tweetToToggle["tweet"].read);
      const updTweet = { ...tweetToToggle["tweet"], read: !tweetToToggle["tweet"].read };
      // console.log("after update: " + JSON.stringify(updTweet));
      // const res = await fetch(`api/tweets/${id}`, {
      await fetch(backendUrl + id, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTweet),
      })
      // const data = await res.json()
      // console.log("updated: " + JSON.stringify(data))
      this.tweets = this.tweets.map((tweet) =>
        tweet._id === id ? { ...tweet, read: !tweet.read } : tweet
      )
    },
    async getTweets() {
      await fetch(backendUrl)
        .then( res => res.json() )
        .then( data => (this.tweets = data.tweets) );
      console.log(this.tweets)
    },
    async fetchTweet(id) {
      const res = await fetch( backendUrl + id)
      const data = await res.json()
      return data
    },
    async createTweet(tweet) {
      //const res = await fetch(backendUrl, {
      await fetch(backendUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tweet),
      })
      // const data = await res.json()
      // const id = console.log(data["tweet"]["insertedId"])
      // const tweetGotAdded = await this.fetchTweet(id);
      // console.log("data: " + JSON.stringify(tweetGotAdded));
      this.tweets = [... this.tweets, tweet]
    },
    async deleteTweet(id) {
      if (confirm('Are you sure to delete this tweet?')) {
        //const res = await fetch(`api/tweets/${id}`, {
        const res = await fetch( backendUrl + id, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.tweets = this.tweets.filter((tweet) => tweet._id !== id))
          : alert('Error deleting task')
      }
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
  background: green;
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
