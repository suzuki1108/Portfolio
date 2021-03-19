import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import CardMembershipIcon from '@material-ui/icons/CardMembership';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <a href="https://github.com/suzuki1108">
          <ListItem button key="GitHub">
            <ListItemIcon><GitHubIcon /></ListItemIcon>
            <ListItemText primary="GitHub"/>
          </ListItem>
          </a>
          <a href="#Profile">
          <ListItem button key="Profile">
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary="Profile"/>
          </ListItem>
          </a>
          <a href="#Works">
          <ListItem button key="Works">
            <ListItemIcon><WorkIcon /></ListItemIcon>
            <ListItemText primary="Works"/>
          </ListItem>
          </a>
          <a href="#Skills">
          <ListItem button key="Skills">
            <ListItemIcon><PlaylistAddCheckIcon /></ListItemIcon>
            <ListItemText primary="Skills"/>
          </ListItem>
          </a>
          <a href="#Certificate">
          <ListItem button key="Certificate">
            <ListItemIcon><CardMembershipIcon /></ListItemIcon>
            <ListItemText primary="Certificate"/>
          </ListItem>
          </a>
          <a href="#Contact">
          <ListItem button key="Contact">
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary="Contact"/>
          </ListItem>
          </a>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <MenuIcon onClick={toggleDrawer('left', true)}/>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}