<template>
  <Layout>
    <template #main>
      <div class="main-container" ref="blogContainer" v-loading="isLoading">
        <BlogDetail :blog="data" v-if="data" />
        <BlogCommont v-if="!isLoading" />
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/Blog/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogToc from "./components/BlogToc";
import BlogCommont from "./components/BlogCommont";
export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogCommont,
  },
  data() {
    return {
      scrollTop: 0,
    };
  },
  created() {
    this.$bus.$on("setMainScroll", this.handleSetMainScroll);
  },
  mounted() {
    this.$refs.blogContainer.addEventListener("scroll", this.handleScroll);
  },
  updated(){
    const hash = location.hash;
    location.hash = '';
    setTimeout(() => {
      location.hash = hash;
      console.log('set hash');
    }, 50);
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll");
    this.$refs.blogContainer.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.blogContainer);
    },
    handleSetMainScroll(scrollTop) {
      this.$refs.blogContainer.scrollTop = scrollTop;
    },
  },
};
</script>

<style scoped lang="less">
.main-container {
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  position: relative;
  scroll-behavior: smooth;
  overflow-x: auto;
}
.right-container {
  position: relative;
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  // overflow-x: auto;
  box-sizing: border-box;
}
</style>
