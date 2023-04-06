import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import '@/assets/styles/index.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('ddd')
let p = fetch('/api/news_latest')
p.then(res => res.json())
    .then(res => console.log(res))
root.render(
    <App />
);

