// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

// import App from 'containers/App';
// import store from 'store';

import ArrayKey from 'components/ArrayKey';
import Calculator from 'components/Calculator';
import Clock from 'components/Clock';
import LoginControl from 'components/LoginControl';
import LoginForm from 'components/LoginForm';

import './style.css';

import 'index.html';

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <div className="main">
    <div className="row">
      <div className="col-md-6">
        <div className="thumbnail">
          <Clock />
        </div>
      </div>
      <div className="col-md-6">
        <div className="thumbnail">
          <LoginControl />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="thumbnail">
          <ArrayKey posts={posts} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="thumbnail">
          <LoginForm />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="thumbnail">
          <Calculator />
        </div>
      </div>
      <div className="col-md-6">
        <div className="thumbnail">
        </div>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);
