<template>
    <div>
        <img :src="Logo" alt="">
        this is {{ value }}.vue
        <button class="btn btn-primary" @click="btn">btn</button>
    </div>
</template>

<script setup>
import {value, btn} from "./Home";
import Logo from '~/assets/images/logo.svg'
import {onMounted} from "vue";

onMounted(() => {
    value.value = "Home"
    fetch('/list', {method: "post"}).then(r => {
        return r.json()
    }).then(body => {
        console.log(body)
    })
})
</script>

<style scoped>

</style>