<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <TreeList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlogCategory } from "@/api/Blog/blog";
import TreeList from "./TreeList";
export default {
  mixins: [fetchData([])],
  components: {
    TreeList,
  },
  computed: {
    // 获取route Id categoryid
    categoryid() {
      return +this.$route.params.categoryid || -1;
    },
    // treeList组件需要告诉isSeleted 加载到远程数据需要对数据进行包装
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const result = [
        {
          name: "全部",
          id: -1,
          articleCount: totalArticleCount,
        },
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSeleted: it.id === this.categoryid,
        aside: `${it.articleCount}篇`,
      }));
    },
    limit() {
      return this.$route.query.limit || 10;
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategory();
    },
    async handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        await this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        await this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryid: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  padding: 20px 20px;
  box-sizing: border-box;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    letter-spacing: 2px;
    font-size: 1em;
    font-weight: bold;
    margin: 0;
  }
}
</style>