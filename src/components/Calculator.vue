<template>
  <div class="calculator">
    <h1>{{msg}}</h1>
    <table class="table-auto bg-gray-800 border-8 border-gray-800" cellpadding="5" cellspacing="5">
      <tr>
        <td colspan="4">
          <div class="js-output h-20 text-white font-bold text-4xl flex items-end justify-end">{{output}}</div>
        </td>
      </tr>
      <tr>
        <td><Calc methodTxt="clear" classtxt="clear" calctxt="/" btntxt="C" /></td>
        <td><Calc methodTxt="dele" classtxt="delBtn" calctxt="/" btntxt="&LeftTriangleBar;" /></td>
        <td><Calc calctxt="%" btntxt="&percnt;" /></td>
        <td><Calc calctxt="/" btntxt="&divide;" /></td>
      </tr>
      <tr>
        <td><Digit btntxt="7"/></td>
        <td><Digit btntxt="8"/></td>
        <td><Digit btntxt="9"/></td>
        <td><Calc btntxt="x" /></td>
      </tr>
      <tr>
        <td><Digit btntxt="4"/></td>
        <td><Digit btntxt="5"/></td>
        <td><Digit btntxt="6"/></td>
        <td><Calc calctxt="-" btntxt="&minus;" /></td>
      </tr>
      <tr>
        <td><Digit btntxt="1"/></td>
        <td><Digit btntxt="2"/></td>
        <td><Digit btntxt="3"/></td>
        <td><Calc calctxt="+" btntxt="&plus;" /></td>
      </tr>
      <tr>
        <td colspan="2"><Digit btntxt="0"/></td>
        <td><Digit btntxt="&middot;"/></td>
        <td><Calc methodTxt="result" btntxt="&equals;" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Digit from './Digit.vue';
import Calc from './Calc.vue';
export default {
  name: 'Calculator',
  props: {
    msg: String
  },
  components:{
    Digit,
    Calc
  },
  data(){
    return{
      output:'23980'
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
  // width: 250px;
  // border-radius: 10px;
  // overflow: hidden;
  border-collapse: collapse;
  td{
    // border: 1px solid rgba(0,0,0,0.8);
    // height: 35px;
    /*&:not(.output){
      cursor: pointer;
    }*/
  }
  .title{
    border: 0 none;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 0;
    text-decoration: underline;
  }
  .output{
    min-height: 100px;
    border: 1px solid #f0f;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: end;
    justify-content: end;
    font-size: 40px;
  }
}
</style>
