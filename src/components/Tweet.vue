<template>
    <div :class="[ gender == 'female' ? 'female' : 'male', 'tweet' ]">
        <h3>{{ tweet.text }}
            <i class="fas fa-times-circle"></i>
        </h3>
        <p>{{ fname }} {{ lname }}</p>
        <p>{{ location }}</p>
    </div>
    
</template>

<script>
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
    props: {
        tweet: Object
    },
    methods: {
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
.tweet {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.tweet.male {
  border-left: 5px solid steelblue;
}
.tweet.female {
  border-left: 5px solid pink;
}
.tweet h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>