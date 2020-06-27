import React from 'react';
import { Typography } from '@material-ui/core';

import Polynom from 'functional-components/polynom-template';

const MainPage = () => (<>
  <Typography variant="subtitle1">
    Electron + React App template for D3 Visualisation
  </Typography>
  <Polynom />
</>);

export default MainPage;