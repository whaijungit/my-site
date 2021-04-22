<template>
  <div class="blog-commont-container">
    <MessageArea
      :title="'评论列表'"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      v-on="{ submit: handleSubmit }"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { postComment, getComments } from "@/api/Blog/blog";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      limit: 10,
      page: 1,
    };
  },
  methods: {
    async fetchData() {
      return await getComments(this.page, this.limit, this.$route.params.id);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment(formData.nickName, formData.content, this.$route.id);
      this.data.rows.unshift(resp)
      this.data.total++
      callback('评论成功')
    },
  },
};
</script>

<style scoped lang="less">
.blog-commont-container {
  margin-top: 40px;
}
</style>