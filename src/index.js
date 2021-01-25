import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// React-Router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
