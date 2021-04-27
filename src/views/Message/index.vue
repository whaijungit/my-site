<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import * as msApi from "@/api/Blog/message";
export default {
  components: {
    MessageArea,
  },
  mixins: [fetchData({ total: 0, rows: [] }),mainScroll('messageContainer')],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
    window.fetchMore = this.fetchMore;
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async fetchData() {
      return await msApi.getMessages(this.page, this.limit);
    },
    async handleSubmit(msg, callback) {
      const resp = await msApi.postMessage(msg);
      callback("感谢你的留言");
      this.data.rows.unshift(resp)
      this.isloading = false
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100;
      const desc = Math.abs(
        dom.scrollTop + dom.clientHeight - dom.scrollHeight
      );
      if (desc <= range) {
        this.fetchMore();
      }
    },
  },
};
</script>

<style scoped lang="less">
.message-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 25px 0px;
  overflow-y: auto;
  scroll-behavior: smooth;
  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
}
</style>