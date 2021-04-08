<template>
  <Aavatar :url="url" :size="150" />
</template>

<script>
import Aavatar from './'
export default {
  components: {
    Aavatar,
  },
  data(){
    return {
      url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4136211390,3668052322&fm=26&gp=0.jpg',
    }
  }
}
</script>

<style>

</style>