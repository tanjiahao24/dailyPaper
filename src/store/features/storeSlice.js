import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  list: null
}

export const queryStoreList = createAsyncThunk(
    'store/queryList',
    async () => {
      let list = null;
      try {
        let {code, data} = await api.storeList();
        if (+code === 0) {
          list = data;
        }
      } catch (_) {
      }
      return list
    }
)

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    // 清空收藏列表
    clearStoreList(state) {
      state.list = null
    },
    // 移除某一项收藏
    removeStoreListById(state, action) {
      if (Array.isArray(state.list)) {
        state.list = state.list.filter(item => {
          return +item.id !== +action.payload;
        });
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(queryStoreList.fulfilled, (state, action) => {
      state.list = action.payload
    })
  }
})

export const {
  clearStoreList,
  removeStoreListById
} = storeSlice.actions

export default storeSlice.reducer
