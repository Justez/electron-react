import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { DOMSettings, PolynomSettings, PolynomData } from 'types';
import { State } from 'store';
import { getRootID } from 'store/modules/dom-manipulation/selectors';
import { getPolynomSettings } from 'store/modules/polynom-settings/selectors';
import { getCalculationCount } from 'store/modules/polynom/selectors';
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
    },
}));

interface StateProps {
    rootID: DOMSettings['rootID'];
    polynomSettings: PolynomSettings;
    calcCount: PolynomData['calcCount'];
}

interface DispatchProps {
    actions: {
        polynomSettings: typeof polynomSettingsActions;
    };
}

type Props = StateProps & DispatchProps

const Brot = ({ rootID, polynomSettings, actions, calcCount }: Props) => {
    const classes = useStyles();
    const [dirty, setDirty] = useState(false);

    const handleDirty = () => !dirty && setDirty(true)
    const updateStatus = () => {
        setDirty(false); 
        actions.polynomSettings.updateStatus()
    }
    const updateSettings = (v: any) => actions.polynomSettings.updateSettings({ [v.target.id]: +v.target.value });

    return (
        <>
            {/* todo: base color select, zoom input, 'refresh' button label if form changed */}
            {/* bonus: apply calc interval for every calculation level */}
            {/* 'freeze, download as png, continue' bottom panel */}
            <Box mr={1} mb={1} display="flex" flexDirection="row" justifyContent="flex-end">
                <TextField
                    id="panX"
                    label="panX"
                    type="number"
                    className={classes.input}
                    value={polynomSettings?.panX}
                    onChange={updateSettings}
                    InputLabelProps={{ className: classes.contrast }}
                    inputProps={{ className: classes.contrast }}
                    onInput={handleDirty}
                />
                <TextField
                    id="panY"
                    label="panY"
                    type="number"
                    className={classes.input}
                    value={polynomSettings?.panY}
                    onChange={updateSettings}
                    InputLabelProps={{ className: classes.contrast }}
                    inputProps={{ className: classes.contrast }}
                    onInput={handleDirty}
                />
                <TextField
                    id="levels"
                    label="Depth"
                    type="number"
                    className={classes.input}
                    value={polynomSettings?.levels}
                    onChange={updateSettings}
                    InputLabelProps={{ className: classes.contrast }}
                    inputProps={{ className: classes.contrast }}
                    onInput={handleDirty}
                />
                <TextField
                    id="zoom"
                    label="Zoom"
                    type="number"
                    className={classes.input}
                    value={polynomSettings?.zoom}
                    onChange={updateSettings}
                    InputLabelProps={{ className: classes.contrast }}
                    inputProps={{ className: classes.contrast }}
                    onInput={handleDirty}
                />
                <TextField
                    id="interval"
                    label="Calculation interval"
                    type="number"
                    className={classes.input}
                    onChange={updateSettings}
                    value={polynomSettings?.interval}
                    InputLabelProps={{ className: classes.contrast, style: { display: 'ruby' } }}
                    InputProps={{ endAdornment: <Typography className={classes.adorment}>ms</Typography> }}
                    inputProps={{ className: classes.contrast }}
                />
                <Button className={classes.button} disabled={!dirty && !!calcCount} onClick={updateStatus} variant="contained" color="secondary">
                    {dirty && calcCount ? 'update' : 'show'}
                </Button>
            </Box>
            <Box p={0} mr={1} id={rootID}></Box>
        </>
    )
};

const mapStateToProps = (state: State): StateProps => ({
    rootID: getRootID(state),
    polynomSettings: getPolynomSettings(state),
    calcCount: getCalculationCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    actions: {
        polynomSettings: bindActionCreators(polynomSettingsActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Brot);
