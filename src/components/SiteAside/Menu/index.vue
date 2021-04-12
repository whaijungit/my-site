<template>
  <nav class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="item in items"
      :to="{name: item.name}"
      :key="item.name"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
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
          name: "Home",
          icon: "home",
          title: "首页",
          exact: true
        },
        {
          name: "Blog",
          icon: "blog",
          title: "文章",
          exact: false
        },
        {
          name: "Project",
          icon: "project",
          title: "项目&效果",
          exact: true
        },
        {
          name: "About",
          icon: "about",
          title: "关于我",
          exact: true
        },
        {
          name: "Message",
          icon: "chat",
          title: "留言",
          exact: true
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/assets/styles/var.less";

.menu-container {
  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    white-space: nowrap;
    color: @gray;
    padding: 0 50px;
    text-decoration: none;
    height: 45px;
    .icon {
      width: 30px;
      font-size: 20px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 3%);
    }
  }
}
</style>
