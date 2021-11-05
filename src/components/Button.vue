<template>
    <button @click="onClick()" 
            :style="{ background: color }" 
            class="btn">{{ btnText }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        btnText: String,
        color: String
    },
    methods: {
        onClick(){
            console.log("Btn clicked!")
        }
    }
}
</script>
