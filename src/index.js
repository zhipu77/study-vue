import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
// import './antd-mobile.less';
// import 'antd-mobile/dist/antd-mobile.min.css';
import './index.less';
// import './index.css';
// import App from './App';
import Routers from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(Routers(), document.getElementById('root'));
registerServiceWorker();
