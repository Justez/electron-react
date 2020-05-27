import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, SvgIcon } from '@material-ui/core';

import type { ElementType } from '../../types';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    zIndex: 2,
    margin: theme.spacing(4),
  },
  toTopIcon: {
    boxShadow: '0px 1px 5px grey',
    height: theme.spacing(5),
    width: theme.spacing(5),
    minWidth: 0,
    borderRadius: theme.spacing(2.5),
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
}));

const BackToTop = (): ElementType => {
  const classes = useStyles();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () =>
      setShowButton(window.pageYOffset > 20)
    );
  }, []);

  return showButton ? (
    <Grid item className={classes.root}>
      <Button
        className={classes.toTopIcon}
        disableFocusRipple
        disableRipple
        disableTouchRipple
      >
        <SvgIcon>
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
        </SvgIcon>
      </Button>
    </Grid>
  ) : (
    <></>
  );
};

export default BackToTop;
