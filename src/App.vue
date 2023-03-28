<template>
  <div id="app">
    <!--    <HelloWorld msg="SeaLand's Tree Hole"/>-->
    <!--    <el-button type="primary" @click="getData">get</el-button>
        <h3 v-for="one in list" :key="one.id">
          {{ one.name }}
        </h3>-->
    <!--  路由  -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "@/components/api/axios";

export default {
  name: 'App',
  components: {},
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
* {
  margin: 0;
  padding: 0;
}

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  overflow-y: hidden;

}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
