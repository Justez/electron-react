import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import { ElementType } from '../../types';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
}));

const ContentWrapper = ({
  children,
}: {
  children: ElementType;
}): ElementType => {
  const classes = useStyles();

  return (
    <Box minHeight="86vh" className={classes.root} p={2}>
      {children}
    </Box>
  );
};

export default ContentWrapper;
