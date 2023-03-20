<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hello world</h2>
    <el-button @click="testToken" type="primary">测试按钮</el-button>
    <h2>欢迎你，你的token为{{ model.token }}</h2>
  </div>
</template>

<script>


import axios from "@/components/api/axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      model: {
        token:null
      }
    }
  },
  methods: {
    testToken() {
      axios.get("/user/get").then(
          response => {
            this.model.token = response.data
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
