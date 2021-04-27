<template>
  <div class="notfontd-container">
    <RouterLink exact-active-class to="/">
      <img :src="NonFont404" alt="" />
    </RouterLink>
  </div>
</template>

<script>
import NonFont404 from "@/assets/image/404.gif";
export default {
  data() {
    return {
      NonFont404,
    };
  },
};
</script>

<style scoped lang="less">
.notfontd-container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>