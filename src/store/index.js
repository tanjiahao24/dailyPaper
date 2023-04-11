/**
 * redux 版本
 */
// import { createStore, applyMiddleware } from 'redux';
// import reduxLogger from 'redux-logger';
// import reduxThunk from 'redux-thunk';
// import reduxPromise from 'redux-promise';
// import reducer from './reducer';
//
//
// // 根据不同的环境，使用不同的中间件
// let middleware = [reduxThunk, reduxPromise],
//     env = process.env.NODE_ENV;
// if (env === "development") {
//   middleware.push(reduxLogger);
// }
//
// // 创建store容器
// const store = createStore(
//     reducer,
//     applyMiddleware(...middleware)
// );
// export default store;

import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit";
import baseReducer from './features/baseSlice'
import storeReducer from './features/storeSlice'


const store = configureStore({
  reducer: {
    base: baseReducer,
    store: storeReducer
  },
  middleware: [thunk]
})

export default store


