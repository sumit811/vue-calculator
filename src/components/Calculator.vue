<template>
  <div class="hello">
    <table>
      <tr>
        <td colspan="4" class="title" >{{msg}}</td>
      </tr>
      <tr>
        <td colspan="4" class="js-output">{{output}}</td>
      </tr>
      <tr>
        <td class="clear" v-on:click="clear">C</td>
        <td class="delBtn" v-on:click="dele">&LeftTriangleBar;</td>
        <td  v-on:click="calc('%')">&percnt;</td>
        <td  v-on:click="calc('/')">&divide;</td>
      </tr>
      <tr>
        <td class="js-digitBtn-7" v-on:click="edigit('7')">7</td>
        <td class="js-digitBtn-8" v-on:click="edigit('8')">8</td>
        <td class="js-digitBtn-9" v-on:click="edigit('9')">9</td>
        <td class="js-calcBtn-x" v-on:click="calc('x')">&Cross;</td>
      </tr>
      <tr>
        <td class="js-digitBtn-4" v-on:click="edigit('4')">4</td>
        <td class="js-digitBtn-5" v-on:click="edigit('5')">5</td>
        <td class="js-digitBtn-6" v-on:click="edigit('6')">6</td>
        <td  v-on:click="calc('-')">&minus;</td>
      </tr>
      <tr>
        <td class="js-digitBtn-1" v-on:click="edigit('1')">1</td>
        <td class="js-digitBtn-2" v-on:click="edigit('2')">2</td>
        <td class="js-digitBtn-3" v-on:click="edigit('3')">3</td>
        <td v-on:click="calc('+')">&plus;</td>
      </tr>
      <tr>
        <td class="js-digitBtn-4"  v-on:click="edigit('0')" colspan="2">0</td>
        <td v-on:click="edigit('.')">.</td>
        <td v-on:click="result">&equals;</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    msg: String
  },
  data(){
    return{
      output:'0'
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table{
  margin: auto;
  width: 240px;
  // border-radius: 10px;
  overflow: hidden;
  border-collapse: collapse;
  td{
    border: 1px solid rgba(0,0,0,0.8);
    height: 35px;
    &:not(.output){
      cursor: pointer;
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
