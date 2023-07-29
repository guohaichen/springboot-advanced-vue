<template>
  <div style="padding:20px;">
    <el-row :gutter="24">
      <el-col :span="6">
        <el-upload
            class="uploadUrl"
            action="#"
            ref="uploadForm"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :http-request="uploadBigFile"
            :file-list="fileList">
          <el-progress type="circle" :percentage=percentage></el-progress>
          <el-button size="small" type="primary" :loading="loading">点击上传</el-button>
        </el-upload>
      </el-col>
      <el-col :span="6">

      </el-col>
    </el-row>


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
      percentage: 0,
      file: null,
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
    }
    ,
    //分片上传至后端
    async uploadBigFile(sourceFile) {
      this.file = sourceFile.file
      //1 MB
      let chunkSize = 1024 * 1024;
      let totalFileSize = this.file.size
      let startByte = 0;
      // 生成唯一的文件名，用于在后端保存上传的分片
      const filename = `${Date.now()}-${this.file.name}`;

      //分片上传
      while (startByte < totalFileSize) {
        let chunk;
        if (startByte + chunkSize < totalFileSize) {
          // 中间分片
          chunk = this.file.slice(startByte, startByte + chunkSize);
        } else {
          // 最后一个分片
          const lastChunkSize = totalFileSize - startByte;
          chunk = this.file.slice(startByte, startByte + lastChunkSize);
        }

        const formData = new FormData();
        formData.append("file", chunk);
        formData.append("filename", filename);

        try {
          await axios.post("/common/bigFile", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Range": `bytes ${startByte}-${startByte + chunk.size - 1}/${totalFileSize}`,
            },
          });
          startByte += chunk.size;
        } catch (error) {
          this.$message.error("网络错误，请重试!")
          return;
        }

        //进度条
        this.percentage = Math.round((startByte / totalFileSize) * 100)
      }
      //合并分片文件
      let fileFormData = new FormData();
      fileFormData.append("filename", filename)
      await axios.post("/common/bigFile/merge", fileFormData, {
        headers: {"Content-Type": "multipart/form-data",},
      })
          .then(() => {
            this.$message.success("上传成功！")
          })
          .catch(error => {
            console.log(error)
            this.$message.error("网络错误，请重试!")
          })
    }
    ,
  }
}
</script>

export default {
}
<style scoped>

</style>
