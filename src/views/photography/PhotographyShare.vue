<template>
  <el-drawer
      :title=drawerTitle
      :visible.sync=isShowDrawer
      :direction="direction"
      :before-close="handleClose">
    <el-form class="form_class">
      <el-form-item label="相片标签">
        <el-input v-model="form.tag"></el-input>
      </el-form-item>
      <el-form-item label="相片描述">
        <el-input type="textarea" rows="3" v-model="form.description"></el-input>
      </el-form-item>
      <!--  图片上传且含缩略图    -->
      <el-upload
          :action="url"
          :headers="headers"
          :data="data"
          list-type="picture-card"
          :on-success="handleUploadSuccess"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <el-button style="margin-top: 20px" type="primary" @click="handleSubmit">确定</el-button>
    </el-form>

  </el-drawer>
</template>
<script>
import axios from "@/components/api/axios";

export default {
  props: {
    drawerVisible: {
      default: false,
      type: Boolean
    },
    drawerTitle: {
      default: "Drawer",
      type: String
    }
  },
  watch: {
    drawerVisible(val) {
      this.isShowDrawer = val
    }
  },
  data() {
    return {
      //上传参数
      data: {
        path: "人像摄影"
      },
      headers: {
        Authorization: localStorage.getItem("token")
      },
      form: {
        tag: '',
        description: '',
        imgUrl: '',
      },
      url: 'http://localhost:9090/common/uploadFile',
      isShowDrawer: this.drawerVisible,
      direction: 'rtl',
      //图片上传相关
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(() => {
            //触发父组件事件,并传值
            this.$emit('updateDrawer', false);
            done()
          })
          .catch(() => {
            console.log("cancel")
          })
    },
    //图片上传相关
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //图片上传成功回调
    handleUploadSuccess(res) {
      this.form.imgUrl = res.data
      console.log(this.form.imgUrl)
    },
    //提交数据
    handleSubmit() {
      if (this.form.imgUrl) {
        axios.post("/share/photography", this.form)
            .then(() => {
              this.$message.success("分享成功!")
              //清空form
              this.form = {}
              //关闭窗口
              this.$emit('updateDrawer', false);
            })
            .catch(error => {
              console.error(error)
              this.$message.error("分享失败!")
            })
      }else{
        this.$message.warning("请先上传照片!")
      }
    }
  }
}
</script>

<style scoped>
.form_class {
  /*border: 2px solid yellowgreen;*/
  margin: 0 20px;
  padding: 20px;
}
</style>
