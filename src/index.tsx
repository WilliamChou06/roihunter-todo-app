import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Styles
import 'antd/dist/antd.css'
import 'normalize.css';
import { createGlobalStyle } from 'styled-components';


import TodoApp from './components/TodoApp';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(to right, #a8edea 0%, #fed6e3 100%);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`

const store = configureStore();


ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <TodoApp />
    </Provider></>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({});
