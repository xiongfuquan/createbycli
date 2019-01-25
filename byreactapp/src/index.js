import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(thunk, sagaMiddleware),
  );


  sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
// registerServiceWorker();
