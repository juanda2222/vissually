


import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Button from '@material-ui/core/Button';
import {
  Link as RouterLink,
} from "react-router-dom";

import MenuButtonLeftDrawer from './MenuButtonLeftDrawer';

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: "auto",
      fontWeight: 500,
      fontSize: "1rem"
    },
    icons: {
      margin: "4px",
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
          <MenuButtonLeftDrawer className={classes.menuButton}/>
          <Button color="inherit" className={classes.title} component={RouterLink} to="/">
            Vissually
          </Button>  
          {isNight ?
            <IconButton
              color="inherit" 
              onClick={() => { setNight(false) }}>
              <Brightness4Icon className={classes.icons}/>
            </IconButton> :
            <IconButton
              color="inherit" 
              onClick={() => { setNight(true) }}>
              <NightsStayIcon  className={classes.icons}/>
            </IconButton>
          }
          <IconButton href="https://github.com/juanda2222/vissually" color="inherit" >
            <GitHubIcon className={classes.icons} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
