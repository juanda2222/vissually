import React from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';

import {
  Link as RouterLink,
} from "react-router-dom";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
//import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles({
  menu_list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  ParentText: {
    fontWeight: 600,
  }
});



type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface TemporaryDrawerProps {
  onChange?: (isOpen: boolean) => void,
  className?:string,
}

const TemporaryDrawerButton:React.FunctionComponent<TemporaryDrawerProps>  = ({
  onChange,
  className,
}) => {
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    isDrawerOpen: false,
    isGetStartedOpen: false,
    isComponentsOpen: false,
    isStylesOpen: false,
  });

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    if (typeof onChange == "function") {onChange(open)} 
    setState({ ...state, isDrawerOpen:open});
    
  };

  const menu_list = () => (
    <div
      className={classes.menu_list}
      onKeyDown={toggleDrawer(false)}
      role="presentation"
    >
      <List>
        <ListItem
          onClick={() => { setState({ ...state, isGetStartedOpen: !state.isGetStartedOpen }) }}
          button
        >
          <ListItemText primary={<Typography className={classes.ParentText}>Get Started</Typography>} />
        </ListItem>
        <Collapse in={state.isGetStartedOpen} timeout="auto" unmountOnExit>
          <List onClick={toggleDrawer(false)} component="div" disablePadding>
            <ListItem button component={RouterLink} to="/get-started/installation">
              <ListItemText primary={"Installation"} />
            </ListItem>
            <ListItem button component={RouterLink} to="/get-started/usage">
              <ListItemText primary={"Usage"} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          onClick={() => { setState({ ...state, isComponentsOpen: !state.isComponentsOpen }) }}
          button
        >
          <ListItemText primary={<Typography className={classes.ParentText}>Components</Typography>} />
        </ListItem>
        <Collapse in={state.isComponentsOpen} timeout="auto" unmountOnExit>
          <List onClick={toggleDrawer(false)} component="div" disablePadding>
            <ListItem button component={RouterLink} to="/components/button">
              <ListItemText primary={"Button"} />
            </ListItem>
            <ListItem button component={RouterLink} to="/components/input">
              <ListItemText primary={"Input"} />
            </ListItem>
            <ListItem button component={RouterLink} to="/components/select">
              <ListItemText primary={"Select"} />
            </ListItem>
            <ListItem button component={RouterLink} to="/components/autocomplete">
              <ListItemText primary={"Autocomplete"} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          onClick={() => { setState({ ...state, isStylesOpen: !state.isStylesOpen }) }}
          button
        >
          <ListItemText primary={<Typography className={classes.ParentText}>Styles</Typography>} />
        </ListItem>
        <Collapse in={state.isStylesOpen} timeout="auto" unmountOnExit>
          <List onClick={toggleDrawer(false)}  component="div" disablePadding>
            <ListItem button component={RouterLink} to="/styles/themes">
              <ListItemText primary={"Themes"} />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItem color="inherit" button component={Link} href="https://david.alfagenos.com/#about_banner_pointer">
        <ListItemText primary={<Typography className={classes.ParentText}>About</Typography>} />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <React.Fragment key={"left"}>
        
        <IconButton
          onClick={toggleDrawer(true)}
          edge="start"
          className={className}
          color="inherit">
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"left" as Anchor}
          open={state.isDrawerOpen}
          onClose={toggleDrawer(false)}>
          {menu_list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TemporaryDrawerButton