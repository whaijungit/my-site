import { getSettings } from "@/api/Blog/settings";
import { titleContoller } from "@/utils";

export default {
  namespaced: true,
  state: {
    loading: true,
    data: null
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchSetting(ctx) {
      ctx.commit('setLoading', true);
      const resp = await getSettings();
      ctx.commit('setData', resp)
      ctx.commit('setLoading', false);
      if (resp.favicon) {
        const link = document.createElement('link');
        if (document.querySelector("link[rel='icon']")) {
          return;
        }
        else {
          link.rel = 'icon';
          link.href = resp.favicon
          document.head.appendChild(link)
        }
      }
      if (resp.siteTitle) {
        titleContoller.setSietTitle(resp.siteTitle)
      }
    }
  }
}