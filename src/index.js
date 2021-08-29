import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/appReducer';
import thunk from 'redux-thunk';

// initialState
let initialState = {};
// Create store
const store = createStore(
	appReducer,
	initialState,
	applyMiddleware(thunk)
);

const appRoot = (
	<Provider store={store}>
		<StrictMode>
			<App />
		</StrictMode>
	</Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'));
