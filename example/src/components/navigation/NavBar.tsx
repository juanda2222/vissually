


import React, { } from 'react';
import { connect } from 'react-redux';
import { change_theme } from '../../redux/actions/ThemeActions'
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

interface ButtonAppBarProps {
  change_theme():void,
  is_dark: boolean,
}

const ButtonAppBar = (props:ButtonAppBarProps) => {

  const { change_theme, is_dark } = props
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuButtonLeftDrawer className={classes.menuButton}/>
          <Button variant="text" color="inherit" className={classes.title} component={RouterLink} to="/">
            Vissually
          </Button>  
          {is_dark ?
            <IconButton
              color="inherit" 
              onClick={() => { change_theme() }}>
              <Brightness4Icon className={classes.icons}/>
            </IconButton> :
            <IconButton
              color="inherit" 
              onClick={() => { change_theme() }}>
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


const mapStateToProps = (state:ThemeStateType /*, ownProps*/) => {
  return {
    is_dark: state.is_dark
  }
}

const mapDispatchToProps = { change_theme }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonAppBar)