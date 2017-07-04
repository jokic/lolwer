<template>
  <div class="header">
    <h1>LOLWER</h1>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'i\'m header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 50px;
  background-color: #FFF;
  border-bottom: 3px solid #785a28;
}
h1{
  color: #785a28;
  line-height: 50px;
}
</style>
