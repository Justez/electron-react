import { combineReducers } from 'redux';

import domManipulation from 'store/modules/dom-manipulation/reducer';

const appReducer = () =>
  combineReducers({
    dom: domManipulation,
  });

type AppReducer = typeof appReducer;

type RootReducer = () => (...args: Parameters<ReturnType<AppReducer>>) => Parameters<ReturnType<AppReducer>>[0];

const rootReducer: RootReducer = () => (state, action) => appReducer()(state, action);

export default rootReducer;