<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="hello world"/>
    <!--    <el-button type="primary" @click="getData">get</el-button>-->
    <!--    <h3 v-for="one in list" :key="one.id">-->
    <!--      {{ one.name }}-->
    <!--    </h3>-->
    <!--  路由  -->
    <el-card class="box-card">
      <router-view></router-view>
    </el-card>
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
  margin: 0 auto;
}
</style>
