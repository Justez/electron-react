import React from 'react';
import { connect } from 'react-redux';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { DOMSettings, PolynomSettings } from 'types';
import { State } from 'store';
import { getRootID } from 'store/modules/dom-manipulation/selectors';
import { getPolynomSettings } from 'store/modules/polynom-settings/selectors';
import { actions as polynomSettingsActions } from 'store/modules/polynom-settings';

const useStyles = makeStyles(theme => ({
    contrast: {
        color: theme.palette.primary.contrastText,
    },
    adorment: {
        color: fade(theme.palette.primary.contrastText, 0.7),
    },
    input: {
        marginRight: theme.spacing(4),
        width: '10rem'
    },
    button: {
        margin: theme.spacing(1, 0),
        width: '5rem'
    }
}));

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
    const classes = useStyles();
    const updateCalculationLimit = (v: any) => actions.polynomSettings.updateCalculationLimit(v.target.value)
    const updateInterval = (v: any) => actions.polynomSettings.updateInterval(v.target.value)
    const updateStatus = () => actions.polynomSettings.updateStatus()

    return (
        <>
            <Box mr={1} display="flex" flexDirection="row" justifyContent="end">
                <TextField
                    id="limit"
                    label="Calculation limit"
                    type="number"
                    className={classes.input}
                    value={polynomSettings?.calcLimit}
                    onChange={updateCalculationLimit}
                    InputLabelProps={{ className: classes.contrast }}
                    inputProps={{ max: 1000, className: classes.contrast }}
                />
                <TextField
                    id="interval"
                    label="Calculation interval"
                    type="number"
                    className={classes.input}
                    onChange={updateInterval}
                    value={polynomSettings?.interval}
                    InputLabelProps={{ className: classes.contrast, style: { display: 'ruby' } }}
                    InputProps={{ endAdornment: <Typography className={classes.adorment}>ms</Typography> }}
                    inputProps={{ min: 3000, className: classes.contrast }}
                />
                <Button className={classes.button} onClick={updateStatus} variant="contained" color="secondary">
                    {polynomSettings.activated ? 'stop' : 'start'}
                </Button>
            </Box>
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
