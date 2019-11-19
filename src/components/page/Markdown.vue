<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 表单
        </el-breadcrumb-item>
        <el-breadcrumb-item>markdown编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="plugins-tips">
        mavonEditor：基于Vue的markdown编辑器。 访问地址：
        <a
          href="https://github.com/hinesboy/mavonEditor"
          target="_blank"
        >mavonEditor</a>
      </div>
      <mavon-editor
        v-model="content"
        ref="md"
        @imgAdd="$imgAdd"
        @change="change"
        style="min-height: 600px"
      />
      <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "markdown",
  components: {
    mavonEditor
  }
})
export default class extends Vue {
  content = "";
  html = "";
  configs = {};

  // 将图片上传到服务器，返回地址替换到md中
  $imgAdd(pos:string, $file:File) {
    var formdata = new FormData();
    formdata.append("file", $file);
    // 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口,我也并没有定义$axios
    // this.$axios({
    //   url: "/common/upload",
    //   method: "post",
    //   data: formdata,
    //   headers: { "Content-Type": "multipart/form-data" }
    // }).then((url:string) => {
    //   (this.$refs.md as any).$img2Url(pos, url);
    // });
  }
  change(value: any, render: string) {
    // render 为 markdown 解析后的结果
    this.html = render;
  }
  submit() {
    console.log(this.content);
    console.log(this.html);
    this.$message.success("提交成功！");
  }
}
</script>
<style scoped>
.editor-btn {
  margin-top: 20px;
}
</style>
