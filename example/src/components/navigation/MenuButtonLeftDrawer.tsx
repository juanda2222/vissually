import React from 'react';
//import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from "./MenuList"

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface TemporaryDrawerProps {
  onChange?: (isOpen: boolean) => void,
  className?:string,
}

const TemporaryDrawerButton:React.FunctionComponent<TemporaryDrawerProps>  = ({
  onChange,
  className,
}) => {
  
  const [state, setState] = React.useState({
    isDrawerOpen: false,
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

    if (typeof onChange == "function") { onChange(open) } 
    setState({ ...state, isDrawerOpen:open});
    
  };

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
          <MenuList closeSignal={toggleDrawer(false)} />
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TemporaryDrawerButton