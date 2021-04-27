import { getProject } from "@/api/Blog/project";

export default {
  state: {
    loading: false,
    data: []
  },
  namespaced: true,
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchProject(ctx) {
      ctx.commit('setLoading', true);
      const resp = await getProject();
      ctx.commit('setData', resp)
      ctx.commit('setLoading', false);
    }
  }
}