import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid } from '@material-ui/core';

import type { ElementType } from '../../types';
import BackToTop from '../../components/back-to-top-button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    zIndex: 1,
    position: 'relative',
    padding: theme.spacing(2),
  },
}));

const Footer = (): ElementType => {
  const classes = useStyles();

  return (
    <AppBar
      component="footer"
      position="sticky"
      className={classes.root}
      square
    >
      <Grid container justify="center" alignItems="center"></Grid>
      <BackToTop />
    </AppBar>
  );
};

export default Footer;
