<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-zhuye",
  success: "icon-success",
  error: "icon-icon-test",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-info",
  blog: "icon-wendang",
  code: "iconcode",
  about: "icon-guanyu",
  weixin: "icon-weixin2",
  mail: "icon-youxiang",
  github: "icon-github",
  qq: "icon-QQlianxiqie",
  arrowUp: "icon-shangjiantou",
  arrowDown: "icon-xiajiantou",
  empty: "icon-kong",
  chat: "icon-caozuoxitong",
  phone: "icon-shouji",
  upLink: "icon-shangyiye",
  dowLink: "icon-xiayiye",
  project: "icon-projects"
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2427685_76b2psqvkjc.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>