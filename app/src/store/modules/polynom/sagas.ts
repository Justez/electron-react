import {
    all,
    takeLatest,
    put,
    select,
} from 'redux-saga/effects';

import { actions as polynomSettingsActions } from 'store/modules/polynom-settings';
import { actions as polynomActions } from 'store/modules/polynom';
import { getPolynomSettings } from 'store/modules/polynom-settings/selectors';
import { getPolynomData } from 'store/modules/polynom/selectors';
import { getRootID } from 'store/modules/dom-manipulation/selectors';
import belongToMandelbrotSet from 'helpers/belongsToMandelbrotSet';
/**
 * component styling (z-index to increment)
    polyDiv: {
        position: 'absolute',
        left: 0,
        width: '100%',
        zIndex: -1,
    }
 */

export function* calculate() {
    try {
        const settings = yield select(getPolynomSettings);
        const rootId = yield select(getRootID);

        if (settings.activated) {
            let polynom = yield select(getPolynomData);
            if (!(polynom.calcCount)) {
                var newCanvas = document.createElement("canvas");
                const wrapper = document.getElementById(rootId);
                const width = wrapper.clientWidth;
                const height = Math.floor(document.getElementsByTagName('body')[0].clientHeight / 100 * 80);
                newCanvas.width = width;
                newCanvas.height = height-16;
                wrapper.appendChild(newCanvas)
                const ctx = newCanvas.getContext("2d");
                yield put({ type: polynomActions.setCanvas.toString(), payload: ctx });
            }
            const canvas = document.getElementsByTagName("canvas")[0];
            const { canvas: ctx } = yield select(getPolynomData);
            for (let x = 0; x < canvas.width; x++) {
                for (let y = 0; y < canvas.height; y++) {  
                    const colorIntensity =
                        belongToMandelbrotSet(x/settings.zoom - settings.panX, y/settings.zoom - settings.panY, settings.levels);

                    if (!colorIntensity) {
                        ctx.fillStyle = '#000';
                    } else {
                        ctx.fillStyle = 'hsl(200, 100%, ' + colorIntensity + '%)';
                    }
                    ctx.fillRect(x, y, 1, 1);
                }
            }
            yield put({ type: polynomActions.increaseCalculationCount.toString() });
        } else {
            //stop
        }

    } catch (error) {
        console.error(error)
    }
}

export default function* saga() {
    yield all([
        takeLatest(polynomSettingsActions.updateStatus, calculate),
    ]);
}