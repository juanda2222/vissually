import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';

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
  ParentText: {
    fontWeight: 600,
  }
});

interface MenListProps {
  closeSignal: (event: React.KeyboardEvent | React.MouseEvent) => void
}

function MenuList ({ closeSignal }: MenListProps) {

  const classes = useStyles();
  const [state, setState] = React.useState({
    isGetStartedOpen: false,
    isComponentsOpen: false,
    isStylesOpen: false,
  });

  return (
    <div
      className={classes.menu_list}
      onKeyDown={closeSignal}
      role="presentation"
    >
      <List>
        <ListItem
          onClick={() => {
            setState({ ...state, isGetStartedOpen: !state.isGetStartedOpen })
          }}
          button
        >
          <ListItemText primary={<Typography className={classes.ParentText}>Get Started</Typography>} />
        </ListItem>
        <Collapse in={state.isGetStartedOpen} timeout="auto" unmountOnExit>
          <List onClick={closeSignal} component="div" disablePadding>
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
          <List onClick={closeSignal} component="div" disablePadding>
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
          <List onClick={closeSignal} component="div" disablePadding>
            <ListItem button component={RouterLink} to="/styles/themes">
              <ListItemText primary={"Themes"} />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItem
          color="inherit"
          button
          component={Link} href="https://david.alfagenos.com/#about_banner_pointer"
        >
          <ListItemText primary={<Typography className={classes.ParentText}>About</Typography>} />
        </ListItem>
      </List>
    </div>
  )
}

export default MenuList