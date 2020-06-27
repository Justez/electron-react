import React from 'react';
import { Grid, TextField } from '@material-ui/core';

// call applyBrotGrid on first render, on provided id
// start calculating brot
// increment calculation count
// parse latest redux store saved limit and interval
// calc layer of dots, set z-index (use calc count)
// set timeout for polynom just in case
// call next calculation after set interval

const Brot = () => {
    return (
        <>
            <Grid container justify="flex-end" spacing={3}>
                <Grid item>
                    <TextField
                        id="limit"
                        label="Limit of calculations"
                        type="number"
                        defaultValue={1000}
                        onChange={(v) => {}}
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
                        onChange={(v) => {}}
                        disabled
                        inputProps={{ min: 1000 }}
                    />
                </Grid>
            </Grid>
            <div id='brot'></div>
        </>
    )
};

export default Brot;
