import React from 'react';

import {
  AppBar, CssBaseline, Drawer, Hidden, IconButton, Toolbar,
  Container, Typography, Paper,
} from '@material-ui/core';

import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';

import {
  Menu, Timeline
} from '@material-ui/icons';


const drawerWidth = 255;

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      backgroundColor: 'rgba(255,255,255,0)',
      color: '#000000',
      boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.0), 0px 0px 0px 0px rgba(0,0,0,0.0), 0px 0px 0px 0px rgba(0,0,0,0.0)',
    },
  },
  logo: {
    width: '110px',
    margin: '0 auto',
    height: 'auto',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  logoContainer: {
    width: '150px',
    margin: '0 auto',
  },
  statsContainer: {
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
  appbarTitle: {
    flexGrow: 1,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  hallHeader: {
    textAlign: 'center',
  },
  hallContainerToelz: {
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    borderLeft: '3px solid #aa312b',
  },
  hallContainerFreimann: {
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    borderLeft: '3px solid #cb9a00',
  },
  hallContainerThalkirchen: {
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    borderLeft: '3px solid #7ec300',
  },
  hallContainerGilching: {
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    borderLeft: '3px solid #c45913',
  },
}));

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.RenderNavBar = this.RenderNavBar.bind(this);
  }

  RenderNavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const { container, liveData } = this.props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open] = React.useState(false);
    const anchorRef = React.useRef(null);

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
      prevOpen.current = open;
    }, [open]);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    }

    const drawer = (
      <div>
        <Container className={classes.logoContainer} >
          <Timeline fontSize="large" className={classes.logo} />
        </Container>
        <Paper className={classes.hallContainerFreimann}>
          <Typography variant="h4" className={classes.hallHeader}>
            Freimann
          </Typography>
          <Container className={classes.statsContainer}>
            <Typography variant="h5">
              {liveData.climbFreimann}
            </Typography>
            <Typography variant="h6">
              Climb
            </Typography>
            <Typography variant="h5">
              {liveData.boulderFreimann}
            </Typography>
            <Typography variant="h6">
              Boulder
            </Typography>
          </Container>
        </Paper>
        <Paper className={classes.hallContainerThalkirchen}>
          <Typography variant="h4" className={classes.hallHeader}>
            Thalkirchen
          </Typography>
          <Container className={classes.statsContainer}>
            <Typography variant="h5">
              {liveData.climbThalkirchen}
            </Typography>
            <Typography variant="h6">
              Climb
            </Typography>
            <Typography variant="h5">
              {liveData.boulderThalkirchen}
            </Typography>
            <Typography variant="h6">
              Boulder
            </Typography>
          </Container>
        </Paper>
        <Paper className={classes.hallContainerGilching}>
          <Typography variant="h4" className={classes.hallHeader}>
            Gilching
          </Typography>
          <Container className={classes.statsContainer}>
            <Typography variant="h5">
              {liveData.climbGilching}
            </Typography>
            <Typography variant="h6">
              Climb
            </Typography>
            <Typography variant="h5">
              {liveData.boulderGilching}
            </Typography>
            <Typography variant="h6">
              Boulder
            </Typography>
          </Container>
        </Paper>
        <Paper className={classes.hallContainerToelz}>
          <Typography variant="h4" className={classes.hallHeader}>
            T&ouml;ltz
          </Typography>
          <Container className={classes.statsContainer}>
            <Typography variant="h5">
              {liveData.climbToelz}
            </Typography>
            <Typography variant="h6">
              Climb
            </Typography>
            <Typography variant="h5">
              {liveData.boulderToelz}
            </Typography>
            <Typography variant="h6">
              Boulder
            </Typography>
          </Container>
        </Paper>
      </div>
    );

    const appBar = (
      <>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            <Hidden mdUp>
              <Typography variant="h6" className={classes.appbarTitle}>
                Boulderstats
              </Typography>
            </Hidden>
          </Toolbar>
        </AppBar>
        <div style={{ marginBottom: '28px' }} />
      </>
    );

    return (
      <nav className={classes.drawer}>
        <CssBaseline />
        {appBar}
        <Hidden mdUp>
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        <div style={{ height: '30px' }} />
      </nav>
    );
  }


  render() {
    return (
      <this.RenderNavBar />
    );
  }
}

export default NavBar;