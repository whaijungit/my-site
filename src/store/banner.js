import { getBanners } from "@/api/Blog/banner";

export default {
  state: {
    loading: true,
    data: []
  },
  namespaced: true,
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    async fetchBanners(ctx) {
      if (ctx.state.data.length) {
        return;
      }
      ctx.commit('setLoading', true);
      const resp = await getBanners();
      ctx.commit('setData', resp);
      ctx.commit('setLoading', false)
    }
  }
}