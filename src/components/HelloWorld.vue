<template>
  <div class="hello">
    <table>
      <tr>
        <td colspan="4" class="output"> Output</td>
      </tr>
      <tr>
        <td>C</td>
        <td>&LeftTriangleBar;</td>
        <td>&percnt;</td>
        <td>&divide;</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>&Cross;</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>&minus;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>&plus;</td>
      </tr>
      <tr>
        <td colspan="2">0</td>
        <td>.</td>
        <td>&equals;</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
