<template>
  <div class="content">
    <div class="welcome">
      <h1>欢迎来到LOLWER.COM</h1>
      <p>当前数据最新版本：{{versions.body[0]}}</p> 
    </div>
    <div class="top">
      <ul>
        <li><router-link to="/">英雄</router-link></li>
        <li><router-link to="item">装备</router-link></li>
        <li><router-link to="skill">技能</router-link></li>
        <li><router-link to="talent">天赋</router-link></li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      msg: 'i\'m content',
      menu:["英雄","技能","天赋","装备"],
      versions:{
        body:[]
      }
    }
  },
  components: {
  },
  beforeCreate(){
    this.$http.get("https://ddragon.leagueoflegends.com/api/versions.json").then((response) => {
      this.versions = response;
      document.cookie = "version="+this.versions.body[0];
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}
.welcome{
  color: #fff;
  margin: 150px 0px;
  text-align: left;
}
.welcome
.top {
  height: 60px;
}
.top ul {
  display: flex;
}
.top ul li {
  line-height: 60px;
  flex:1;
  height: 60px;
  background-color: #010a13; 
}
.top ul li a {
  transition: all .3s linear;
  color: #eee;
}
.top ul li a:hover{
  color: #000;
  background-color: white;
}
.main {
  background-color: #eee;
}
.main>.hero>ul{
  overflow: hidden;
}
.top a {
  display: block;
  height: 60px;
}
</style>
