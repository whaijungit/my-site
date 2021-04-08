<template>
  <div class="test-container">
    <App />
  </div>
</template>

<script>
import App from './'
export default {
  components: {
    App
  }
}
</script>

<style>
.test-container {
  width: 400px;
  height: 600px;
  border: 2px solid #f10;
  background: #000;
}
</style>