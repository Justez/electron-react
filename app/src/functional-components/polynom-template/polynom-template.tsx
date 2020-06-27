import React from 'react';
import { connect } from 'react-redux';
import { Grid, TextField } from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';

import { DOMSettings, PolynomSettings } from 'types';
import { State } from 'store';
import { getRootID } from 'store/modules/dom-manipulation/selectors';
import { getPolynomSettings } from 'store/modules/polynom-settings/selectors';
import { actions as polynomSettingsActions } from 'store/modules/polynom-settings';

// call applyBrotGrid on first render, on provided id
// start calculating brot
// increment calculation count
// parse latest redux store saved limit and interval
// calc layer of dots, set z-index (use calc count)
// set timeout for polynom just in case
// call next calculation after set interval

interface StateProps {
    rootID: DOMSettings['rootID'];
    polynomSettings: PolynomSettings;
}

interface DispatchProps {
    actions: {
      polynomSettings: typeof polynomSettingsActions;
    };
  }

type Props = StateProps & DispatchProps

const Brot = ({ rootID, polynomSettings, actions }: Props) => {
    const updateCalculationLimit = (v: any) => actions.polynomSettings.updateCalculationLimit(v.target.value)
    const updateInterval = (v: any) => actions.polynomSettings.updateInterval(v.target.value)
    
    return (
        <>
            <Grid container justify="flex-end" spacing={3}>
                <Grid item>
                    <TextField
                        id="limit"
                        label="Limit of calculations"
                        type="number"
                        value={polynomSettings?.calcLimit}
                        onChange={updateCalculationLimit}
                        inputProps={{ max: 1000 }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="interval"
                        label="Recalculate every (ms)"
                        type="number"
                        value={polynomSettings?.interval}
                        onChange={updateInterval}
                        inputProps={{ min: 3000 }}
                    />
                </Grid>
            </Grid>
            <div id={rootID}></div>
        </>
    )
};

const mapStateToProps = (state: State): StateProps => ({
    rootID: getRootID(state),
    polynomSettings: getPolynomSettings(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    actions: {
        polynomSettings: bindActionCreators(polynomSettingsActions, dispatch),
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Brot);
