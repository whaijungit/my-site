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
      page: 1,
      limit: 10,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
    window.fetchMore = this.fetchMore;
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getComments(this.page, this.limit, this.$route.params.id);
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment(
        formData.nickName,
        formData.content,
        this.$route.id
      );
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100;
      const desc = Math.abs(
        dom.scrollTop + dom.clientHeight - dom.scrollHeight
      );
      if (desc <= range) {
        this.fetchMore();
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-commont-container {
  margin-top: 40px;
}
</style>