<template>
  <button type="button" :class="[`js-digitBtn-${btntxt}`]" class="sm rounded-full border-2 bg-gray-300 border-gray-300 text-black font-bold h-12 w-12 flex justify-center items-center hover:bg-gray-500" v-on:click="calc(btntxt)" v-html="btntxt"></button> 
</template>

<script>
export default {
    name:'calcBtn',
    props:{
        btntxt:String
    },
}
</script>

<style>

</style>