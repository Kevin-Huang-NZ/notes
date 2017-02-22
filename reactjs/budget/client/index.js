// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

// import App from 'containers/App';
// import store from 'store';

import Clock from 'containers/Clock';
import LoginControl from 'containers/LoginControl';

import 'index.html';

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <div>
    <Clock />
    <LoginControl />
  </div>,
  document.getElementById('root')
);
