import { handleActions } from 'redux-actions';

import { PolynomSettings } from 'types';

import { actions } from '.';

export type DefaultState = PolynomSettings;

export const defaultState: DefaultState = {
    interval: 3000,
    colorBase: 214,
    colorDensity: 100,
    contrastFill: false,
    color: '#305990',
    zoom: 1170,
    levels: 80,
    panX: 1,
    panY: 1,
};

type Payload = any;

export const initializedState = {};

const reducer = handleActions<DefaultState, Payload>({
    [actions.updateSettings.toString()]: (state, { payload }) => ({
        ...state,
        ...payload,
    }),
    [actions.updateColor.toString()]: (state, { payload }) => ({
        ...state,
        colorBase: payload.oldHue,
        colorDensity: ~~(payload.hsl.l*100),
        color: payload.hex,
    }),
},
    defaultState,
);

export default reducer;