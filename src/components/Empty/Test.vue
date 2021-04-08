<template>
  <div class="test-container">
    <Empty :msg="msg" />
  </div>
</template>

<script>
import Empty from './'
export default {
  components: {
    Empty,
  },
  data(){
    return {
      msg: '无数据',
    }
  }
}
</script>

<style>
.test-container {
  position: relative;
  width: 800px;
  height: 500px;
  border: 2px solid;
  margin: 0 auto;
}
</style>