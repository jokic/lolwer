<template>
<div>
  <MyHeader></MyHeader>
  <MyContent></MyContent>
  <MyFooter></MyFooter>
</div> 
</template>

<script>
import MyHeader from "./MyHeader"
import MyContent from "./content/MyContent"
import MyFooter from "./MyFooter"
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      language: 'zh_CN'
    }
  },
  components: {
    MyHeader,
    MyContent,
    MyFooter
  },
  created() {
    this.$http.get("https://ddragon.leagueoflegends.com/cdn/languages.json").then(function (res) {
      this.$root.currentLG = 'zh_CN';
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
