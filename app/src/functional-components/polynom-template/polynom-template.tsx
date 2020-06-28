import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SliderPicker } from 'react-color';
import {
    Box,
    Button,
    Checkbox,
    Dialog, DialogTitle,
    FormControlLabel,
    TextField,
} from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { DOMSettings, PolynomSettings, PolynomData } from 'types';
import { State } from 'store';
import { getRootID } from 'store/modules/dom-manipulation/selectors';
import { getPolynomSettings } from 'store/modules/polynom-settings/selectors';
import { getCalculationCount } from 'store/modules/polynom/selectors';
import { actions as polynomSettingsActions } from 'store/modules/polynom-settings';
import { actions as polynomActions } from 'store/modules/polynom';

const useStyles = makeStyles(theme => ({
    contrast: {
        color: theme.palette.primary.contrastText,
    },
    adorment: {
        color: fade(theme.palette.primary.contrastText, 0.7),
    },
    dialog: {
        overflowY: 'unset',
        marginTop: '-20vh',
        padding: theme.spacing(0, 2, 3, 2),
        [theme.breakpoints.up('md')]: {
            width: '40vw',
        },
        [theme.breakpoints.down('sm')]: {
            width: '60vw',
        },
    },
    dialogtitle: {
        width: '100%'
    },
    input: {
        margin: theme.spacing(0, 2),
        maxWidth: '10rem'
    },
    button: {
        color: theme.palette.common.white,
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
        polynom: typeof polynomActions;
    };
}

type Props = StateProps & DispatchProps

const Brot = ({ rootID, polynomSettings, actions, calcCount }: Props) => {
    const classes = useStyles();
    const [dirty, setDirty] = useState(false);
    const [showPicker, setShowPicker] = useState(false);

    const handleDirty = () => !dirty && setDirty(true)
    const togglePicker = () => setShowPicker(!showPicker)
    const paint = () => {
        handleDirty();
        actions.polynom.paint();
    }
    const updateSettings = (v: any) => actions.polynomSettings.updateSettings({ [v.target.id]: +v.target.value });
    const updateColor = (c: any) => {
        setDirty(true);
        actions.polynomSettings.updateColor(c);
    }
    const updateContrastFill = (e: React.ChangeEvent<HTMLInputElement>, val: boolean) => actions.polynomSettings.updateSettings({ [e.target.id]: val });

    return (
        <>
            <Box mr={1} mb={1} display="flex" flexDirection="row" justifyContent="flex-end">
                <FormControlLabel
                    className={classes.input}
                    control={
                        <Checkbox
                            checked={polynomSettings.contrastFill}
                            onChange={updateContrastFill}
                            id="contrastFill"
                        />
                    }
                    label="Contrast fill"
                />
                <Button
                    className={classes.button}
                    variant="outlined"
                    style={{ backgroundColor: polynomSettings.color }}
                    onClick={togglePicker}
                >
                    color
                </Button>
                <TextField
                    id="panX"
                    label="panX"
                    type="number"
                    className={classes.input}
                    value={polynomSettings.panX}
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
                    value={polynomSettings.panY}
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
                    value={polynomSettings.levels}
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
                    value={polynomSettings.zoom}
                    onChange={updateSettings}
                    InputLabelProps={{ className: classes.contrast }}
                    inputProps={{ className: classes.contrast }}
                    onInput={handleDirty}
                />
                <Button className={classes.button} disabled={!dirty && !!calcCount} onClick={paint} variant="contained" color="secondary">
                    {dirty && calcCount ? 'update' : 'show'}
                </Button>
            </Box>
            {showPicker && (
                <Dialog PaperProps={{ className: classes.dialog }} onClose={togglePicker} open={showPicker}>
                    <DialogTitle className={classes.dialogtitle}>Select color</DialogTitle>
                    <SliderPicker
                        color={polynomSettings.color}
                        onChangeComplete={updateColor}
                    />
                </Dialog>
            )}
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
        polynom: bindActionCreators(polynomActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Brot);
