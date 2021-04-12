<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">siteAsited</div>
      </template>
      <template #main>
        <div class="main">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          dignissimos repellat corrupti illo at! Harum alias voluptatum fugit.
          Dicta, consectetur.
        </div>
      </template>
      <template #right>
        <div class="right">12382109830921830921803921893021</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 60%;
  height: 700px;
  border: 2px solid;
  white-space: nowrap;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.main {
  width: 100%;
  height: 100%;
  background: #008c8c;
}
.right {
  width: 150px;
  height: 100%;
  background: lightblue;
}
</style>