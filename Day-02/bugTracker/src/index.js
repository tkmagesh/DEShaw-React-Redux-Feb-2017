import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { bugsReducer } from './reducers/bugsReducer';
import { asyncOpsReducer } from './reducers/asyncOpsReducer';


import { Provider } from 'react-redux';


const store = createStore(combineReducers({
	bugsReducer : bugsReducer,
	asyncOpsReducer : asyncOpsReducer
}));

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