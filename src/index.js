import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './store/store';
import './index.css';
import App from './App';

const {persistor, store} = configureStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);


