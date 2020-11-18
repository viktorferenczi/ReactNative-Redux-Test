import React from 'react';
import { Provider } from 'react-redux';
import {App} from './App';

import counterReducer from './src/reducers/counter';
import loggedReducer from './src/reducers/isLogged';
import { combineReducers, createStore } from 'redux';

export const AppWrapper = () => {
    
  const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
  });

  const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

    return (
      <Provider store={store}> 
        <App /> 
      </Provider>
    )
  }