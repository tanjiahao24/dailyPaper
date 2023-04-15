import api from "../api";
export default function (set, get) {
  return {
    store: {
      list: null
    },
    async queryStoreList() {
      let list = null;
      try {
        let {code, data} = await api.storeList();
        if (+code === 0) {
          list = data;
        }
      } catch (_) {
      }
      set(state => state.store.list = list)
    },
    clearStoreList() {
      set(state => {
        state.store.list = null
      })
    },
    removeStoreListById(id) {
      let list = get().store.list
      if (Array.isArray(list)) {
        list = list.filter(item => {
          return +item.id !== +id;
        });
      }
      set(state => {
        state.store.list = list
      })
    }
  }
}