import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from '../common/components/App'
import configureStore from '../common/store/configureStore';
import { Provider } from 'react-redux';
const rootElement = document.getElementById('app');
const store = configureStore(window.__INITIAL_STATE__);
  render(
    <BrowserRouter>
    	<Provider store={ store }>
  			<App/>
  		</Provider>
	</BrowserRouter>,
    rootElement
  );
