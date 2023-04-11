import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import api from '../../api';

const initialState = {
  info: null
}

export const queryUserInfo = createAsyncThunk(
    'base/queryUserInfo',
    async () => {
      let info = null;
      try {
        let {code, data} = await api.queryUserInfo();
        if (+code === 0) {
          info = data;
        }
      } catch (_) {
      }
      return info
    }
)

const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    clearUserInfo(state) {
      state.info = null
    }
  },
  extraReducers: builder => {
    builder.addCase(queryUserInfo.fulfilled, (state, action) => {
      state.info = action.payload
    })
  }
})

export const {
  clearUserInfo
} = baseSlice.actions
export default baseSlice.reducer
