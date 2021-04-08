<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  props: {
    msg: {
      type: String,
      default: '无数据'
    }
  },
  components: {
    Icon,
  },
  
};
</script>

<style scoped lang="less">
@import '~@/assets/styles/var.less';
@import '~@/assets/styles/mixins.less';
.empty-container{
  .position-slef(absolute);
  color: @lightWords;
  font-size: 50px;
  text-align: center;
  p{
    margin: 0;
    font-size: 25px;
  }
}

</style>