<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from './';
import '@/assets/styles/globa.less'
export default {
  components: {
    Contact,
  }
};
</script>

<style>
.test-container{
  width: 400px;
  height: 400px;
  border: 2px solid red;
  position: relative;
  background: #000;
  padding-top: 200px ;
}
</style>