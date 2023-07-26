<template>
  <div style="padding:20px;">
    <el-upload
        class="uploadUrl"
        action="#"
        ref="uploadForm"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :http-request="uploadFile"
        :file-list="fileList">
      <el-button size="small" type="primary" :loading="loading">点击上传</el-button>
    </el-upload>
  </div>

</template>

<script>
import axios from "@/api/axios";

export default {
  data() {
    return {
      fileList: [],
      loading: false,
      uploadAction: "/common/oss/upload",
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      console.log(fileList)
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    //http-request 写在该方法中表示覆盖默认文件上传
    uploadFile(sourceFile) {
      console.log(sourceFile.file);
      this.loading = true
      //传逻辑
      const file = new FormData();
      file.append('file', sourceFile.file);
      console.log("上传文件:", file)
      axios.post(this.uploadAction, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(() => {
        // 处理上传成功的回调，更新文件列表等逻辑
        // 注意：这里只是示例，实际操作可能需要根据你的业务进行处理
        this.$message.success("上传成功!")
        this.loading = false
      }).catch(error => {
        // 处理上传失败的回调，这里可以根据你的需要进行处理
        this.$message.error("上传失败" + error)
      });
    },
  }
}
</script>

export default {
}
<style scoped>

</style>
