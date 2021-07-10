<template>
  <button type="button" :class="[`js-digitBtn-${btntxt}`,classtxt]" class="sm rounded-full border-2 bg-gray-300 border-gray-300 text-black font-bold h-12 w-12 flex justify-center items-center hover:bg-gray-500 hover:text-white" v-on:click="btnClicked" v-html="btntxt"></button> 
</template>

<script>
export default {
    name:'calcBtn',
    props:{
        btntxt:String,
        methodTxt:String,
        classtxt:String,
        calctxt:String
    },
    methods:{
        btnClicked:function(){
            if(this.methodTxt === 'clear'){
                return this.$emit('clearClicked');
            }
            if(this.methodTxt === 'dele'){
                return this.$emit('delBtnClicked');
            }
            if(this.methodTxt === 'result'){
                debugger
                return this.$emit('resultBtnClicked');
            }
            return this.$emit('digitBtnClicked',this.calctxt);
        }
    }
}
</script>

<style>

</style>