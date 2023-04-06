import React from 'react';
import ReactDOM from 'react-dom/client';
import 'lib-flexible'
import {ConfigProvider} from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import App from './App'
import '@/assets/styles/index.less'
import '@/assets/js/controllWidth'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ConfigProvider locale={zhCN}>
      <App/>
    </ConfigProvider>
);

