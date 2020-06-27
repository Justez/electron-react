import React from 'react';
import { Typography } from '@material-ui/core';

import Brot from 'functional-components/brot-template';

const MainPage = () => {
  return (
    <>
      <Typography variant="subtitle1">
        Electron + React App template
      </Typography>
      <Brot />
    </>
  )
};

export default MainPage;
