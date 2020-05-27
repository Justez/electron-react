import React, { useState, useCallback } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';

import MainPage from 'pages/main';
import Navigation from 'functional-components/navigation';
import Footer from 'functional-components/footer';
import ContentWrapper from 'functional-components/content-wrapper';
import { ElementType } from 'types';

const lightNaviBackground = blueGrey['A200'];
const darkNaviBackground = blueGrey['900'];
const lightBodyBackground = blueGrey[50];
const darkBodyBackground = blueGrey['800'];

const App = (): ElementType => {
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
          footer: {
            minHeight: '5vh',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation onChangeTheme={handleThemeChange} />
      <ContentWrapper>
        <MainPage />
      </ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
