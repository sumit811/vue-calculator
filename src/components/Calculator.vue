<template>
  <div class="hello">
    <table class="table-auto">
     <tr>
        <td colspan="4" class="title" >{{msg}}</td>
      </tr>
    </table>
    <table class="table-auto bg-gray-900 border-8 border-gray-900">
      <tr>
        <td colspan="4" class="text-white text-4xl text-left py-5 px-3">{{output}}</td>
      </tr>
      <tr>
        <td>
          <button v-on:click="clear" :class="[cssCls]">C</button>
        </td>
        <td>
          <button v-on:click="dele" :class="[cssCls]">&LeftTriangleBar;</button>
        </td>
        <td>
          <calcbtn txt="%" txtSymbol="&percnt;" @calcBtnPress="calc"/>
        </td>
        <td>
          <calcbtn txt="/" txtSymbol="&divide;" @calcBtnPress="calc"/>
        </td>
      </tr>
      <tr>
        <td>
          <digitbtn digit="7" @digitPress="digit_press"/>
        </td>
        <td>
          <digitbtn digit="8" @digitPress="digit_press"/>
        </td>
        <td>
          <digitbtn digit="9" @digitPress="digit_press"/>
        </td>
        <td>
          <calcbtn txt="x" txtSymbol="&Cross;" @calcBtnPress="calc"/>
        </td>
      </tr>
      <tr>
        <td>
          <digitbtn digit="4" @digitPress="digit_press"/>
        </td>
        <td>
          <digitbtn digit="5" @digitPress="digit_press"/>
        </td>
        <td>
          <digitbtn digit="6" @digitPress="digit_press"/>
        </td>
        <td>
          <calcbtn txt="-" txtSymbol="&minus;" @calcBtnPress="calc"/>
        </td>
      </tr>
      <tr>
        <td>
          <digitbtn digit="1" @digitPress="digit_press"/>
        </td>
        <td>
          <digitbtn digit="2" @digitPress="digit_press"/>
        </td>
        <td>
          <digitbtn digit="3" @digitPress="digit_press"/>
        </td>
        <td>
          <calcbtn txt="+" txtSymbol="&plus;" @calcBtnPress="calc"/>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <digitbtn digit="0" @digitPress="digit_press"/>
        </td>
        <td>
          <digitbtn digit="." @digitPress="digit_press"/>
        </td>
        <td>
          <button v-on:click="result" :class="[cssCls]">&equals;</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import calcbtn from './calcbtn.vue';
import digitbtn from './digit.vue';
export default {
  name: 'Calculator',
  components:{
    digitbtn,
    calcbtn
  },
  props:{
    msg: String
  },
  data(){
    return{
      output:'0000000',
      cssCls:["rounded-full", "border", "border-grey-500", "bg-gray-500", "w-11", "h-10", "text-white"]
    }
  },
  methods:{
    result:function(){
      // console.log(this.output,typeof this.output,this.output.length);
      if(typeof this.output !=='undefined' && (this.output.indexOf('x')!==-1 || this.output.indexOf('%')!==-1)){
        this.output = this.output.replace('x','*').replace('%','/100');
      }
      this.output = eval(this.output).toString();
    },
    calc:function(c){
      // console.log('calculation-',c);
      this.output = this.output==0?this.output:(this.output+c); 
    },
    clear:function(){
      this.output = 0;
    },
    dele:function(){
      // console.log('this.output.length',this.output.length);
      this.output = this.output==0?0:this.output.slice(0,-1);
      if(this.output.length===0){
        this.output=0;
      }
    },
    edigit: function(d){
      // console.log(d,typeof d);
      this.output = this.output==0?d:this.output+d;
    },
    digit_press: function(d){
      console.log('dddddd',d);
      this.output = this.output==0?d:this.output+d;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table{
  margin: auto;
  width: 250px;
  // border-radius: 10px;
  // overflow: hidden;
  border-collapse: collapse;
  td{
    // border: 1px solid rgba(0,0,0,0.8);
    height: 50px;
    width:50px;
    &::not(.output){
      cursor: pointer;
    }
    &.btnbox{
      @apply text-white;
    }
  }
  .title{
    border: 0 none;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 0;
    text-decoration: underline;
  }
  .output{
    background: rgba(0, 0, 0, 0.8);
    // border: 0 none;
    color: #fff;
    height: 50px;
    text-align: right;
    padding: 5px;
    font-weight: bold;
  }
}
</style>
