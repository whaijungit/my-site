<template>
  <div class="test-container">
    <div class="test" v-for="t in types" :key="t">
      <Icon :type="t" />
      <label for=""> {{ t }}</label>
    </div>
  </div>
</template>
<script>
import Icon, { types } from "@/components/Icon";
export default {
  name: "App",
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style>

.test-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

</style>
