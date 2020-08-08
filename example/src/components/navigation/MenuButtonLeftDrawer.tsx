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
//import Typography from '@material-ui/core/Typography';
//import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles({
  menu_list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
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
  const [isOpen, setOpen] = React.useState(false);

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
    setOpen( open );
    
  };

  const menu_list = () => (
    <div
      className={classes.menu_list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Get Started', 'Components', 'Styles'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button key={"About"}>
          <ListItemText primary={"About"} />
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
          open={isOpen}
          onClose={toggleDrawer(false)}>
          {menu_list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TemporaryDrawerButton