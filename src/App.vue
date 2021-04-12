<template>
  <div class="blog-app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #main>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style scoped lang="less">
.blog-app-container {
  width: 100%;
  height: 100vh;
  .aside {
    width: 200px;
    height: 100%;
    position: relative;
  }
}
</style>