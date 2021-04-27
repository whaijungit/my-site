<template>
  <div class="site-aside-container">
    <template v-if="data">
    <div class="avatar"><Aavatar :url="data.avatar" /></div>
    <div class="Menu">
      <Menu />
    </div>
    <div class="contact">
      <Contact />
    </div>
    </template>
  </div>
</template>

<script>
import Aavatar from "@/components/Aavatar";
import Contact from "@/components/SiteAside/Contact";
import Menu from "@/components/SiteAside/Menu";
import { mapState } from "vuex";

export default {
  components: {
    Aavatar,
    Contact,
    Menu,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  .avatar {
    margin: 20px auto;
  }
}
</style>