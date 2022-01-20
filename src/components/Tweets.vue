<template>
    <div :key="tweet._id"  v-for="tweet in tweets">
        <Tweet  @toggle-read="$emit('toggle-read', tweet._id)"
                @delete-tweet="$emit('delete-tweet', tweet._id)" 
               :tweet="tweet"/>
    </div>
</template>

<script>
import Tweet from './Tweet'

export default {
    name: 'Tweets',
    props: {
        tweets: Array
    },
    components: {
        Tweet
    },
    emits: ['delete-tweet', 'toggle-read' ],
}
</script>
