<template>
  <div class="">
    <img src="../assets/logo.png">
    <dl class="demo-list">
      <dt class="demo-list">
          JS进阶
      </dt>
      <dd>
          <router-link to="/js/scroll">滚动 scroll</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to PART2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
