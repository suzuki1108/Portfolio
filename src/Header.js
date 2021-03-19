import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import TemporaryDrawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color='default'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <TemporaryDrawer/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Suzuki's Portfolio
          </Typography>
          <a href='https://github.com/suzuki1108'><Button color="inherit">GitHub:<GitHubIcon/></Button></a>
          <a href='#Contact'><Button color="inherit">Contact:<ContactMailIcon/></Button></a>
        </Toolbar>
      </AppBar>
    </div>
  );
}