import React from 'react';
import { connect } from 'react-redux';
import { Grid, TextField } from '@material-ui/core';

import { DOMDetails } from 'types';
import { State } from 'store';
import { getRootID } from 'store/modules/dom-manipulation/selectors';

// call applyBrotGrid on first render, on provided id
// start calculating brot
// increment calculation count
// parse latest redux store saved limit and interval
// calc layer of dots, set z-index (use calc count)
// set timeout for polynom just in case
// call next calculation after set interval

interface StateProps {
    rootID: DOMDetails['rootID'];
}

const Brot = ({ rootID }: StateProps) => {
    return (
        <>
            <Grid container justify="flex-end" spacing={3}>
                <Grid item>
                    <TextField
                        id="limit"
                        label="Limit of calculations"
                        type="number"
                        defaultValue={1000}
                        onChange={(v) => { }}
                        disabled
                        inputProps={{ max: 1000 }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="interval"
                        label="Recalculate every (ms)"
                        type="number"
                        defaultValue={3000}
                        onChange={(v) => { }}
                        disabled
                        inputProps={{ min: 1000 }}
                    />
                </Grid>
            </Grid>
            <div id={rootID}></div>
        </>
    )
};

const mapStateToProps = (state: State): StateProps => ({
    rootID: getRootID(state),
});

export default connect(mapStateToProps)(Brot);
