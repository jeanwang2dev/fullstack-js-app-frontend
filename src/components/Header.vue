<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @btn-click="$emit('toggle-create-tweet')" 
                :btnText="showCreateTweet ? 'Close Form' : 'Create Tweet' "
                :color="showCreateTweet ? 'red' : 'green' " />
    </header>
</template>

<script>
import Button from './Button'

export default {
   name: 'Header',
   props: {
       title: {
           type: String,
           default: 'App Name'
       },
       showCreateTweet: Boolean
   },
   components: {
       Button,
   },
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>