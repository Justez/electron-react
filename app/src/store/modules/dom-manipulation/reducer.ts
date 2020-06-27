import { handleActions } from 'redux-actions';

import { DOMSettings } from 'types';

export type DefaultState = DOMSettings;

export const defaultState: DefaultState = {
    rootID: 'root-polynom',
};

type Payload = any;

export const initializedState = {};

const reducer = handleActions<DefaultState, Payload>({},
    defaultState,
);

export default reducer;