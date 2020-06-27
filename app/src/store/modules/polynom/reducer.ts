import { handleActions } from 'redux-actions';
import { assocPath } from 'ramda';

import { actions } from '.';
import { PolynomData } from 'types';

export type DefaultState = PolynomData;

export const defaultState: DefaultState = {
    calcCount: 0,
    canvas: null,
};

type Payload = any;

export const initializedState = {};

const reducer = handleActions<DefaultState, Payload>({
    [actions.setCanvas.toString()]: (state, { payload }) =>
        assocPath(['canvas'], payload, state),
},
    defaultState,
);

export default reducer;