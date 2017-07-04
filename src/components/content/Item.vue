<template>
  <div class="item">
    <ul>
      <li v-for="(item, index) in items"><img :src="imgsrc(index)" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
      msg: 'i\'m Item',
      items: []
    }
  },
  methods:{
    imgsrc: function (itemName) {
      return "http://ddragon.leagueoflegends.com/cdn/7.13.1/img/item/"+itemName+".png"
    },
  },
  created(){
    this.$http.get("http://ddragon.leagueoflegends.com/cdn/7.13.1/data/zh_CN/item.json").then((response) => {
      this.items = response.body.data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  overflow: hidden;
  min-height: 500px;
  background-color: #eee;
}
.item>ul>li {
  float: left;
  height: 100px;
  width: 100px;
  transition: all .3s linear;
}
.item>ul>li:hover {
  background-color: white;
}
.item>ul>li img {
  margin-top: 20px;
  width: 60px;
  border: 1px solid #000;
  border-radius: 6px;
}
</style>
