<template>
  <div>
    <h2>读书笔记</h2>
    <div class="markdown-body" style="border:1px solid yellow;padding:20px 0;text-align: left">
      <vue_notes/>
    </div>
  </div>
</template>

<script>
import vue_notes from 'F:\\gitHub\\springboot-advanced\\ReadMe.md'
// markdown样式
import 'github-markdown-css'
// 代码高亮
import 'highlight.js/styles/github.css'


export default {
  data() {
    return {}
  },
  components: {vue_notes}
}
</script>

<style scoped>
</style>
