<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hello world</h2>
    <el-button @click="testToken" type="primary">token测试</el-button>
    <el-button @click="testException" type="primary">全局异常处理</el-button>
    <el-button @click="verifyToken" type="primary">token解析</el-button>
    <el-button @click="testBcrypt('cm129911')" type="primary">加密测试</el-button>
    <h2>欢迎你，你的token为{{ model.token }}</h2>
  </div>
</template>

<script>


import axios from "@/api/axios";
import bcrypt from 'bcryptjs'
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
      axios.get("/user/get/token").then(
          response => {
            this.model.token = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    async testException(){
      const response =  await axios.get("/user/exception");
      return response.data.data;
    },
    verifyToken(){
      axios.get("/user/token/verify").then(
          response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error)
          })
    },
    testBcrypt(pwd){
      console.log(pwd,"加密后");
      const salt = "$2a$10$bsNHD51BJgCuW0nFOo.6de"
      let password =  bcrypt.hash(pwd,salt)
      console.log(password)
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
