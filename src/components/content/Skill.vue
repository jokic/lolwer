<template>
  <div class="skill">
    <ul>
      <li v-for="(spell,index) in skills">
        <div class="left">
          <img :src="imgsrc(index)" alt="">
        </div>
        <div class="right">
          <h3>{{spell.name}}</h3>
          <p>{{spell.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'skill',
  data () {
    return {
      msg: 'i\'m Skill',
      skills:[]
    }
  },
  methods:{
    imgsrc: function (spellName) {
      return "http://ddragon.leagueoflegends.com/cdn/7.13.1/img/spell/"+spellName+".png"
    },
  },
  created(){
    this.$http.get("http://ddragon.leagueoflegends.com/cdn/7.13.1/data/zh_CN/summoner.json").then((response) => {
      this.skills = response.body.data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill{
  background-color: #eee;
}
.skill>ul>li{
  overflow: hidden;
  display: block;
}
.skill>ul>li.odd{
  background-color: #fff;
}
.skill>ul>li>.left{
  width: 200px;
  height: 200px;
  float: left;
  line-height: 200px;
  background-color: #fff;
}
.skill>ul>li>.left>img{
  vertical-align: middle;
}
.skill>ul>li>.right{
  float: right;
  width: 800px;
  height: 200px;
}
</style>
