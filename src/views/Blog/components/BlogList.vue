<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <!-- <img v-lazy="item.thumb" :alt="item.title" :title="item.title" /> -->
            <img v-lazy="item.thumb" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ item.createDate }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论 {{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryid: item.category.id,
                },
              }"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="!data.total && !isLoading" />
    <!-- 分页放到这里 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      :total="data.total"
      @pageChange="handlePageChange"
    />
  </div>
</template>
<script>
import Pager from "@/components/Pager";
import Empty from "@/components/Empty";
import fetchData from "@/mixins/fetchData";
import { getBlogs } from "@/api/Blog/blog";
import mainScroll from "@/mixins/mainScroll";

export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("container")],
  components: {
    Pager,
    Empty,
  },
  computed: {
    // 获取路由信息 categoryid page第几 limit每页多条数据
    routeInfo() {
      const categoryid = +this.$route.params.categoryid || -1; // categoryid
      const page = +this.$route.query.page || 1; // page
      const limit = +this.$route.query.limit || 10; // limit
      return {
        categoryid,
        page,
        limit,
      };
    },
  },
  methods: {
    async fetchData() {
      // 获取远程数据的根据computed 计算出来的值传递给服务器
      return await getBlogs(
        this.routeInfo.page,
        this.limit,
        this.routeInfo.categoryid
      );
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryid === -1) {
        // 没有默认分类跳转 aticle/?page=${newPage}&limit=this.routeInfo.limit
        // 跳转页面 this.$router.push({})
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 有分类 aticle/cate/${this.$route.query.categoryid}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryid: this.routeInfo.categoryid,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
