<template>
  <div class="home">
    <div class="img" v-for="item in data" :key="item.id">
      <!-- <ImageLoader :src="item."/> -->
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
import { getBanners } from "@/api/Blog/banner";
export default {
  name: "Home",
  components: {
    ImageLoader,
  },

  data() {
    return {
      data: [],
    }
  },
  async created() {
    this.data = await getBanners('/api/banner');
    console.log(this.data);
  },
};
</script>
