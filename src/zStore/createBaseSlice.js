import api from '../api';
export default function (set, get) {
  return {
    base: {
      info: null
    },
    async queryUserInfo() {
      let info = null;
      try {
        let {code, data} = await api.queryUserInfo();
        if (+code === 0) {
          info = data;
        }
      } catch (_) {
      }
      set((state) => {
        state.base.info = info
      })
    },
    clearUserInfo() {
      set(state => {
        state.base.info = null
      })
    }
  }
}