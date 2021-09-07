<template>
    <button v-bind:style="{width:wth}" class="rounded-full border border-yellow-500 bg-yellow-500 w-11 h-11 text-white" v-on:click="edigit(digit)">{{ digit }}</button>
</template>
<script>
export default {
    props:{
        digit:{
            type: String,
            reqired: true
        }
    },
    methods:{
        edigit: function(dig){
            this.$emit('digitPress',dig);
        },
    },
    computed:{
        wth:function(){
            if(this.digit==0){
                return '80%';
            }
            return 'inherit';
        }
    }
}
</script>