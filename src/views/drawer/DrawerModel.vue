<template>
  <el-drawer
      :title=drawerTitle
      :visible.sync=isShowDrawer
      :direction="direction"
      :before-close="handleClose">
    <el-form class="form_class">
      <el-form-item label="相片标签">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      <el-form-item label="相片描述">
        <el-input type="textarea" rows="3"></el-input>
      </el-form-item>
      <!--  图片上传且含缩略图    -->
      <el-upload
          action=""
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-form>

  </el-drawer>
</template>
<script>
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
      form: {},
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
