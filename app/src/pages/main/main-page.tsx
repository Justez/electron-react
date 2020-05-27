import React from 'react';
import { Typography } from '@material-ui/core';

import type { ElementType } from '../../types';
import SearchForm from '../../functional-components/search-form'

const MainPage = (): ElementType => {
  return (
    <>
      <Typography variant="subtitle1">
        Electron + React App template
      </Typography>
      <SearchForm />
    </>
  )
};

export default MainPage;
