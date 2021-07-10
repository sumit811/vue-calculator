<template>
   <button type="button" :class="[`js-digitBtn-${btntxt}`, isClass]" class="sm rounded-full border-2 bg-yellow-500 border-yellow-500 text-white font-bold h-12 w-12 flex justify-center items-center hover:bg-yellow-700" v-on:click="edigit(btntxt)" v-html="btntxt"></button> 
</template>

<script>
export default {
    name: 'DigitBtn',
    props: {
        btntxt: String
    },
    computed:{
        isClass:function(){
            if(this.btntxt==="0")
                return 'w-24';
             else{
                 return 'w-12'
             }   
        }
    }
}
</script>

<style>

</style>