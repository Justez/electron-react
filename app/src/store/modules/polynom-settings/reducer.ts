import { handleActions } from 'redux-actions';
import { assocPath } from 'ramda';

import { PolynomSettings } from 'types';

import { actions } from '.';

export type DefaultState = PolynomSettings;

export const defaultState: DefaultState = {
    levels: 80,
    interval: 3000,
    zoom: 1170,
    panX: 1,
    panY: 1,
    activated: false
};

type Payload = any;

export const initializedState = {};

const reducer = handleActions<DefaultState, Payload>({
    [actions.updateStatus.toString()]: (state, { payload }) =>
        assocPath(['activated'], payload ? payload : !state.activated, state),
    [actions.updateSettings.toString()]: (state, { payload }) => ({
        ...state,
        ...payload,
    })
},
    defaultState,
);

export default reducer;