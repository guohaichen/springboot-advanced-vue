<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to seaLand's notes"/>
    <el-button type="primary" @click="getData">get</el-button>
    <h3 v-for="one in list" :key="one.id">
      {{ one.name }}
    </h3>
    <!--  路由  -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "@/components/api/axios";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      list: null
    }
  },
  methods: {
    getData() {
      axios.get('/dynamic/user/list')
          .then(response => {
            console.log(response.data);
            this.list = response.data
          })
          .catch(error => {
            console.log(error);
          })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
