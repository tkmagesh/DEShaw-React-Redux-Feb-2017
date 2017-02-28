import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { bugsReducer } from './reducers/bugsReducer';

import { Provider } from 'react-redux';


const store = createStore(bugsReducer);

function renderApp(){
	ReactDOM.render(
	  <Provider store={store}>
	  	<App/>
	  </Provider>,
	  document.getElementById('root')
	);
}
store.subscribe(renderApp);
renderApp();