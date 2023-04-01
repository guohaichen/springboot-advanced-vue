<template>
  <div style="height: auto">
    <h2>读书笔记</h2>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="笔记1" style="font-size: 14px" name="1">
        <div class="markdown-body" style="border:1px solid yellow;text-align: left">
          <vue_notes/>
        </div>
      </el-collapse-item>
      <el-collapse-item title="笔记2" name="2">
        <div class="markdown-body" style="border:1px solid yellow;text-align: left">
          <vue_notes/>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import vue_notes from 'I:\\java\\springboot-advanced\\ReadMe.md'
// import vue_notes from 'F:\\gitHub\\springboot-advanced\\ReadMe.md'
// markdown样式
import 'github-markdown-css'
// 代码高亮
import 'highlight.js/styles/github.css'


export default {
  data() {
    return {
      activeNames: [''],
    };
  },
  components: {vue_notes},
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
.el-collapse-item__header{
  font-size:14px ;
}
</style>
