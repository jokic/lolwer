<template>
  <div class="footer">
    <p>本页面由<span class="myName">Jokic Lance</span>开发并维护，欢迎访问<span><a href="https://github.com/jokic" class="mySite">我的Github</a></span></p>
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
.footer{
  margin-top: 50px;
  height: 50px;
  background-color: #eee;
  border-top: 3px solid #785a28;
  overflow: hidden;
}
.myName{
  color: #785a28;
  font-weight: 900;
}
.mySite{
  color: #785a28;
  font-weight: 900;
}
p{
  line-height: 50px;
}
</style>
