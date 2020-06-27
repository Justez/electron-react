import { handleActions } from 'redux-actions';
import { assocPath } from 'ramda';

import { DOMDetails } from 'types';

import { actions } from '.';

export type DefaultState = DOMDetails;

export const defaultState: DefaultState = {
    rootID: '',
};

type Payload = any;

export const initializedState = {};

const reducer = handleActions<DefaultState, Payload>({
    [actions.setRootID.toString()]: (state, { payload }) =>
        assocPath(['rootID'], payload, state),
},
    defaultState,
);

export default reducer;