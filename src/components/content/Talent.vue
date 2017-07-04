<template>
  <div class="talent">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'talent',
  data () {
    return {
      msg: 'i\'m Talent'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.talent{
  min-height: 500px;
  background-color: hotpink;
}
</style>
