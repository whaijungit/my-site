<template>
  <div class="avatar-container">
    <img
      class="avatar-img"
      :src="url"
      :style="{
        width: size + 'px',
        height: size + 'px',
      }"
    />
    <h1 class="nick" v-if="data">{{ data.siteTitle }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 80,
    },
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style scoped lang="less">
.avatar-container {
  .avatar-img {
    border-radius: 50%;
    object-fit: cover;
  }
  .nick {
    display: block;
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }
}
</style>