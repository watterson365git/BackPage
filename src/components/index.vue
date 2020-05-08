<template>
    <div class="index">
        <sidebar></sidebar>
        <addarticle></addarticle>
        <router-view></router-view>
    </div>
</template>

<script>
    import sidebar from '../components/sidebar'
    import addarticle from "../views/addarticle"
    export default {
        components:{
            sidebar,
            addarticle
        }
    }
</script>

<style scoped>

</style>