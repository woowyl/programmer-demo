<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="/part1"
        >
          PART1 DEMO
        </a>
      </li>
      <li>
        <a
          href="/part2"
        >
          PART2 DEMO
        </a>
      </li>
      <li>
        <a
          href="/part3"
        >
          PART3 DEMO
        </a>
      </li>
      <li>
        <a
          href="/part4"
        >
          PART4 DEMO
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to programmer-demo'
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
