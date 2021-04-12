<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import '@/assets/styles/globa.less'
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style scoped lang="less">
.test-container{
  width: 40vw;
  height: 70vh;
  border: 2px solid #008c8c;
  border-radius: 5px;
}
</style>