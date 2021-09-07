<template>
    <button v-on:click="calcBtn(txt)" v-html="txtSymbol" class="rounded-full border border-grey-500 bg-gray-500 w-11 h-11 text-white"></button>
</template>
<script>
export default {
    props:{
        txt:{
            type: String,
            reqired: true
        },
        txtSymbol:{
            type: String,
            reqired: true
        }
    },
    methods:{
        calcBtn: function(dig){
            console.warn('calcBtnPress',dig);
            this.$emit('calcBtnPress',dig);
        },
    }
}
</script>