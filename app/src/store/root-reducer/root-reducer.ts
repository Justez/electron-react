import { combineReducers } from 'redux';

import domManipulation from 'store/modules/dom-manipulation/reducer';
import polynomSettings from 'store/modules/polynom-settings/reducer';
import polynom from 'store/modules/polynom/reducer';

const appReducer = () =>
  combineReducers({
    dom: domManipulation,
    polynomSettings,
    polynom,
  });

type AppReducer = typeof appReducer;

type RootReducer = () => (...args: Parameters<ReturnType<AppReducer>>) => Parameters<ReturnType<AppReducer>>[0];

const rootReducer: RootReducer = () => (state, action) => appReducer()(state, action);

export default rootReducer;