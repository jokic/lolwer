<template>
  <div class="hero">
    <ul>
      <li v-for="hero in data" v-bind:data-hero="hero.id">
       <img v-bind:src="imgsrc(hero.id)" v-bind:alt="hero.id" v-on:mouseover="doin($event)" v-on:mouseout="doout($event)" v-on:mousemove="domove($event)" @click="showData(hero.id)"/>
       </li>
    </ul>
    <div id="heroinfo" v-show="info" v-bind:style="{left:heroDateLeft+'px',top:heroDateTop+'px'}">
      <div class="top">
        <div class="left">
          <p class="name">{{heroData.name}}</p>
          <p class="title">{{heroData.title}}</p>
        </div>
        <div class="right">
          <div class="info">
            <div class="attack"><div v-bind:style="{width:heroData.info.attack+'0%'}"></div></div>
            <div class="defense"><div v-bind:style="{width:heroData.info.defense+'0%'}"></div></div>
            <div class="magic"><div v-bind:style="{width:heroData.info.magic+'0%'}"></div></div>
            <div class="difficulty"><div v-bind:style="{width:heroData.info.difficulty+'0%'}"></div></div>
          </div>
        </div>    
      </div>
      <hr>
      <div class="stats">
        <ul>
          <li v-for="(val, stat) in heroData.stats">{{stat.toUpperCase()}} : <span>{{val}}</span></li>
        </ul>
      </div>
      <hr>
      <p class="blurb" v-html="heroData.blurb"></p>  
    </div>
    <HeroData :isShow="isShowDataBox" v-on:change="changeData" :heroId="slectedHero"></HeroData>
  </div>
</template>

<script>
import HeroData from './HeroData'
export default {
  name: 'hero',
  data () {
    return {
      msg: 'i\'m Hero',
      data:{},
      verson:"7.12.1",
      info:false,
      heroData:{
        info:{
          attack:0,
          defense:0,
          magic:0,
          difficulty:0,
        }
      },
      slectedHero:'',
      isShowDataBox:false,
      heroDateLeft: 0,
      heroDateTop: 0,
      language: this.$root.currentLG
    }
  },
  methods:{
    imgsrc: function (heroName) {
      return "http://ddragon.leagueoflegends.com/cdn/"+this.verson+"/img/champion/"+heroName+".png"
    },
    doin: function (e) {
      this.info = true;
      this.heroData = this.data[e.srcElement.alt];
      this.heroDateLeft = e.clientX;
      this.heroDateTop = e.clientY;
    },
    doout: function (e) {
      this.info = false;
    },
    domove:function (e) {
      this.heroDateLeft = e.clientX+30;
      this.heroDateTop = e.clientY;
    },
    showData: function (id) {
      this.slectedHero = id;
      this.isShowDataBox = true; 
      this.info= false;
    },
    changeData:function (val) {
      this.isShowDataBox = val;
    }
  },
  components: {
    HeroData
  },
  created(){
    this.$http.get("http://ddragon.leagueoflegends.com/cdn/7.12.1/data/zh_CN/champion.json").then((response) => {
      this.data = response.body.data;
      this.verson = response.body.version;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr{
  margin: 6px 0px;
  border: 1px solid #785a28;
}
.hero{
  overflow: hidden;
  min-height: 500px;
  background-color: #eee;
}
.hero>ul>li {
  float: left;
  height: 100px;
  width: 100px;
  transition: all .3s linear;
}
.hero>ul>li:hover {
  background-color: white;
}
.hero>ul>li img {
  margin-top: 20px;
  width: 60px;
}
#heroinfo{
  color: #f0e6d2;
  position: fixed;
  left: 100px;
  top: 10px;
  width: 400px;
  min-height: 100px;
  padding: 6px;
  background-color: #010a13;
  border: 1px solid #785a28;
  text-align:left; 
}
#heroinfo .name{
  font-size: 20px;
  font-weight: 900;
}
#heroinfo .title{
  font-size: 20px;
}
#heroinfo .blurb{
  font-size: 12px;
}
#heroinfo>.top{
  overflow: hidden;
}
#heroinfo>.top>.left{
  float: left;
  width: 50%;
}
#heroinfo>.top>.right{
  height: 54px;
  float: left;
  width: 50%;
}
#heroinfo>.top>.right>.info{
  height: 100%;
}
#heroinfo>.top>.right>.info>div{
  height: 25%;
}
#heroinfo>.top>.right>.info>div>div{
  height: 100%;
  float: right;
}
#heroinfo>.top>.right>.info>.attack>div{
  background-color: #a40035;
}
#heroinfo>.top>.right>.info>.defense>div{
  background-color: #cfa972;
}
#heroinfo>.top>.right>.info>.magic>div{
  background-color: #0068b7;
}
#heroinfo>.top>.right>.info>.difficulty>div{
  background-color: #601986;
}
.stats>ul>li {
  font-size: 12px;
  width: 50%;
}
.stats>ul>li span{
  color: white;
}
</style>
