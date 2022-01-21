<template>
    <div @dblclick="$emit('toggle-read', tweet_id)" 
         :class="[ gender == 'female' ? 'female' : 'male', tweet.read ? '' : 'unread', 'tweet' ]">
      <div class="left">
        <h3>{{ tweet.text }}</h3>
        <h6><i>{{ formatDate(tweet.date) }}</i></h6>
        <p>{{ fname }} {{ lname }}</p>
        <p>{{ location }}</p>
      </div>
      <div class="right">
        <i @click="$emit('delete-tweet', tweet_id)"
               class="fas fa-times-circle"></i>
      </div>
    </div>
</template>

<script>
import formatDateMixin from '../mixins/formatDateMixin';

export default {
    name: 'Tweet',
    data(){
        return {
           fname: '',
           lname: '',
           location: '',
           gender: '',
        }
    },
    mixins: [formatDateMixin],
    computed: {
        formattedDate() {
            return this.formatDate(this.date);
        }
    },
    props: {
        tweet: Object
    },
    methods: {
        // onDelete(id){
        //     //console.log("deleting tweet that has the id: " + id);
        //     this.$emit('delete-tweet', id)
        // },
        async getUsers(){
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json(); 
            //console.log( results );
            this.fname = results[0].name.first;   
            this.lname = results[0].name.last;
            this.location = results[0].location.country;
            this.gender = results[0].gender;
        }
    },
    mounted(){
        this.getUsers();
    },
}
</script>

<style scoped>
.fas {
  color: red;
}
.fas:hover {
    cursor: pointer;
}
.tweet {
  margin: 5px;
  padding: 10px 20px;
}
.tweet.unread {
  border-left: 5px solid #092beb;
}
.tweet.male {
  background: rgb(125, 160, 189);
}
.tweet.female {
  background: rgb(219, 188, 193);
}
.tweet {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tweet .left h3:hover {
  cursor: pointer;
}
</style>