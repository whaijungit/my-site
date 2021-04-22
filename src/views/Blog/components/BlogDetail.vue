<template>
  <div class="blog-detail-container">
    <h2>{{ blog.title }}</h2>
    <div class="aside">
      <span>日期: {{ blog.createDate }}</span>
      <span>浏览量: {{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论: {{ blog.commentNumber }}</a>
      <a href="">{{ blog.category.name }}</a>
    </div>
    <div class="content-html" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  mounted(){
    const container = document.querySelector('.markdown-image');
  }
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";
.aside {
  font-size: 1px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
pre {
  background: #008c8c;
}

</style>