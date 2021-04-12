<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Aavatar :url="'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2021-2%2F20212262258173129.jpg&refer=http%3A%2F%2Ftupian.qqw21.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620646603&t=f1b383b33fcad7029b7a982bf1005fa6'" />
    </div>
    <div class="Menu">
      <Menu />
    </div>
    <div class="contact">
      <Contact />
    </div>
    <span>备案号: 001423001</span>
  </div>
</template>

<script>
import Aavatar from '@/components/Aavatar'
import Contact from '@/components/SiteAside/Contact'
import Menu from '@/components/SiteAside/Menu'
export default {
  components: {
    Aavatar,
    Contact,
    Menu
  }
};
</script>

<style scoped lang="less">
@import '~@/assets/styles/var.less';
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center; 
  box-sizing: border-box;
  .avatar {
    margin: 20px auto;
  }
  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    white-space: nowrap;
    position: absolute;
    bottom: 36px;
    left: 10%;
  }
}
</style>