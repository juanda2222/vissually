


import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import NightsStayIcon from '@material-ui/icons/NightsStay';




const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    icons: {
      margin: "4px"
    }
  }),
);

export default function ButtonAppBar() {
  const [isNight, setNight] = useState(false)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Vissually
          </Typography>
          {isNight ? 
          <Brightness4Icon
            onClick={() => { setNight(false) }}
            className={classes.icons}
          /> : 
          <NightsStayIcon
            onClick={() => { setNight(true) }}
            className={classes.icons}
          />}
          <GitHubIcon className={classes.icons} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
