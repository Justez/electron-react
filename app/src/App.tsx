import React, { useState, useCallback } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blueGrey, common } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';

import MainPage from 'pages/main';
import Navigation from 'functional-components/navigation';
import ContentWrapper from 'functional-components/content-wrapper';
import store from 'store';

const lightNaviBackground = blueGrey['A200'];
const darkNaviBackground = blueGrey['900'];
const lightBodyBackground = blueGrey[50];
const darkBodyBackground = blueGrey['800'];

const App = () => {
  const [themeDark, setThemeDark] = useState(false);

  const handleThemeChange = useCallback(() => {
    setThemeDark(!themeDark);
  }, [themeDark, setThemeDark]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: themeDark ? darkNaviBackground : lightNaviBackground,
        light: themeDark ? darkBodyBackground : lightBodyBackground,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          header: {
            minHeight: '5vh',
          },
          body: {
            overflowX: 'hidden',
            overflowY: 'auto',
          },
          canvas: {
            width: '100%',
            minHeight: '55vh',
            backgroundColor: themeDark ? common.black : darkNaviBackground
          },
        },
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation onChangeTheme={handleThemeChange} />
        <ContentWrapper>
          <MainPage />
        </ContentWrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
