import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

const App = () =>
  <Main></Main>;

ReactDOM.render(<App />, document.querySelector('#main'));

if (module.hot) {
  module.hot.accept();
}