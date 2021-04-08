<template>
  <nav class="menu-container">
    <a
      v-for="item in items"
      :key="item.type"
      :href="item.link"
      :class="{ selected: item.selected }"
    >
      <div class="icon">
        <Icon :type="item.type" />
      </div>
      <span>{{ item.title }}</span>
    </a>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "App",
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/",
          type: "home",
          title: "首页",
          selected: true,
          // component:
        },
        {
          link: "/articl",
          type: "blog",
          title: "文章",
          selected: false,
        },
        {
          link: "/project",
          type: "project",
          title: "项目&效果",
          selected: false,
        },
        {
          link: "/about",
          type: "about",
          title: "关于我",
          selected: false,
        },
        {
          link: "/message",
          type: "chat",
          title: "留言",
          selected: false,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";

.menu-container {
  margin: 24px 0;
  a {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: @gray;
    padding: 0 50px;
    text-decoration: none;
    height: 45px;
    .icon {
      width: 24px;
      font-size: 18px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background: #232323;
    }
  }
}
</style>
