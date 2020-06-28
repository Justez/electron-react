import React from 'react';
import { Typography } from '@material-ui/core';

import Polynom from 'functional-components/polynom-template';

const MainPage = () => (<>
  <Typography variant="subtitle1" paragraph>
    Electron + React App template for polynome visualisation. Customize zoom, levels and more below:
  </Typography>
  <Polynom />
</>);

export default MainPage;