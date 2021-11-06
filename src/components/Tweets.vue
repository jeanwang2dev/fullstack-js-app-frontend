<template>
    <div :key="tweet"  v-for="tweet in tweets">
        <h3>{{ tweet.text }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Tweets',
    props: {
        tweets: Array
    }
}
</script>
