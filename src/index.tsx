import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import GlobalStyle from './GlobalStyle';

// Styles
import 'antd/dist/antd.css';
import 'normalize.css';

import TodoApp from './components/TodoApp';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({});
