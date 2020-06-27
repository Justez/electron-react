import { handleActions } from 'redux-actions';
// import { assocPath } from 'ramda';

import { DOMDetails } from 'types';

// import { actions } from '.';

export type DefaultState = DOMDetails;

export const defaultState: DefaultState = {
    rootID: 'root-polynom',
};

type Payload = any;

export const initializedState = {};

const reducer = handleActions<DefaultState, Payload>({
    // [actions.setRootId.toString()]: (state, { payload }) =>
    //     assocPath(['rootID'], payload, state),
},
    defaultState,
);

export default reducer;