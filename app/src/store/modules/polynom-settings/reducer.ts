import { handleActions } from 'redux-actions';
import { assocPath } from 'ramda';

import { PolynomSettings } from 'types';

import { actions } from '.';

export type DefaultState = PolynomSettings;

export const defaultState: DefaultState = {
    calcLimit: 100,
    interval: 3000,
};

type Payload = any;

export const initializedState = {};

const reducer = handleActions<DefaultState, Payload>({
    [actions.updateInterval.toString()]: (state, { payload }) =>
        assocPath(['interval'], payload, state),
    [actions.updateCalculationLimit.toString()]: (state, { payload }) =>
        assocPath(['calcLimit'], payload, state),
},
    defaultState,
);

export default reducer;