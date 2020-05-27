import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  IconButton,
  Grid,
  Toolbar,
  Typography,
  SvgIcon,
} from '@material-ui/core';

import MenuIcon from './assets/menu-icon';
import ThemeIcon from './assets/theme-icon';
import { ElementType } from '../../types';

interface Props {
  onChangeTheme: () => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
  },
  changeThemeButton: {
    color: theme.palette.primary.contrastText,
    textTransform: 'lowercase',
  },
  themeIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  changeThemeButtonRows: {
    height: theme.spacing(3),
  },
}));

const Navigation = ({ onChangeTheme }: Props): ElementType => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <SvgIcon>
            <MenuIcon />
          </SvgIcon>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          App
        </Typography>
        <Button
          className={classes.changeThemeButton}
          disableFocusRipple
          disableRipple
          disableTouchRipple
        >
          <Grid container direction="column" spacing={0} onClick={onChangeTheme}>
            <Grid item className={classes.changeThemeButtonRows}>
              <SvgIcon className={classes.themeIcon}>
                <ThemeIcon />
              </SvgIcon>
            </Grid>
            <Grid item className={classes.changeThemeButtonRows}>
              <Typography variant="caption">change theme</Typography>
            </Grid>
          </Grid>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
