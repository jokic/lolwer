<template>
  <div class="hero-data-box" v-show="myIsShow">
    <div class="beijing" @click="hide()"></div>
    <div class="hero-data">

    <div class="loading" v-if="loading">
      <img src="../../assets/loading.gif" height="32" width="32" alt="">
    </div>
      <div class="top-data" v-else>
        {{heroData.name}}
        <img :src="'http://ddragon.leagueoflegends.com/cdn/7.12.1/img/champion/'+heroData.id+'.png'" alt="">
        <div class="lore" v-html="heroData.blurb"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
      msg: 'i\'m hero-data',
      myIsShow: this.isShow,
      version: '7.12.1',
      language: 'zh_CN',
      heroData:'',
      loading:true
    }
  },
  methods: {
    hide: function () {
      this.myIsShow = !this.myIsShow;
      this.loading = true;
    }
  },
  props:['isShow','heroId'],
  watch: {
    isShow: function(val){
      this.myIsShow = val;  
      this.$emit("change",val);
    },
    myIsShow: function(val){
      this.$emit("change",val);
    },
    heroId: function (val) {
      var url = "http://ddragon.leagueoflegends.com/cdn/"+this.version+"/data/"+this.language+"/champion/"+val+".json";
      this.$http.get(url).then(function (res) {
        this.loading = false;
        this.heroData = res.body.data[val];
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-data-box{
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.beijing{  
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,.5);
}
.hero-data{
  position: relative;
  padding: 6px;
  width: 1000px;
  min-height: 500px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #000;
  border: 6px solid #785a28;
}
.lore {
  color: #f0e6d2;
  text-align: left;
  font-size: 12px;
  /*line-height: 14px;*/
}
.loading {
  position: absolute;
  height: 100%;
  top: 50%;
  left: 50%;
  margin-top: -16px;
}
</style>
