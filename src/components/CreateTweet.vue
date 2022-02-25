<template>
      <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Tweet</label>
      <input type="text" v-model="text" name="text" placeholder="Create A Tweet" />
    </div>
    <div class="form-control form-control-group">
      <input type="text" v-model="fname" name="fname" placeholder="First Name" />
      <input type="text" v-model="lname" name="lname" placeholder="Last Name" />
    </div>
     <div class="form-control form-control-radio">
      <input type="radio" id="female" value="female" name="gender" v-model="gender">
      <label for="female">female</label>
      <input type="radio" id="male" value="male" name="gender" v-model="gender">
      <label for="male">male</label>
    </div>
    <input type="submit" value="Save Your Tweet" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: 'CreateTweet',
  data(){
    return {
      text: '',
      fname:'',
      lname:'',
      read: false,
      gender: ''
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault()
      if(!this.text) {
        alert('Please add a tweet')
        return
      }

      const newTweet = {
        text: this.text,
        fname: this.fname,
        lname: this.lname,
        gender: this.gender,
      }

      console.log( newTweet);

      this.$emit('add-tweet', newTweet)

      this.text = ''
      this.fname = ''
      this.lname = ''


    }
  }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-group,
.form-control-radio {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.form-control-radio label {
  flex: 1;
}
.form-control-radio input {
  flex: 2;
  height: 20px;
}
</style>