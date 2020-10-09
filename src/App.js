import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import customTheme from './theme/muiTheme';
import StatsPage from './components/StatsPage';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statisticsData: [],
      liveData: {
        boulderToelz: 'loading...',
        climbToelz: 'loading...',
        boulderThalkirchen: 'loading...',
        climbThalkirchen: 'loading...',
        boulderGilching: 'loading...',
        climbGilching: 'loading...',
        boulderFreimann: 'loading...',
        climbFreimann: 'loading...',
      }
    };

    this.RenderApp = this.RenderApp.bind(this);
  }

  async componentDidMount() {
    let backendRequest;
    try {
      backendRequest = await axios.get('https://boulderslots.ziegler.dev:3005/api/v1/slotsData');
    } catch (e) {
      console.error(e);
      return;
    }
    const backendData = backendRequest.data.data;
    this.setState({ 
      statisticsData: backendData, 
      liveData: {
        boulderToelz: backendData[backendData.length - 1].boulderToelz,
        climbToelz: backendData[backendData.length - 1].climbToelz,
        boulderThalkirchen: backendData[backendData.length - 1].boulderThalkirchen,
        climbThalkirchen: backendData[backendData.length - 1].climbThalkirchen,
        boulderGilching: backendData[backendData.length - 1].boulderGilching,
        climbGilching: backendData[backendData.length - 1].climbGilching,
        boulderFreimann: backendData[backendData.length - 1].boulderFreimann,
        climbFreimann: backendData[backendData.length - 1].climbFreimann,
      },
    });
    console.log(backendData);
  }

  RenderApp() {
    const { statisticsData, liveData } = this.state;

    return (
      <MuiThemeProvider theme={customTheme}>
        <Router>
          <CssBaseline />
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <NavBar 
                  {...props}
                  liveData={liveData}
                />
                <StatsPage
                  {...props}
                  statisticsData={statisticsData}
                />
              </div>)}
          />
        </Router>
      </MuiThemeProvider>
    )
  }

  render() {
    return (
      <this.RenderApp />
    );
  }
}

export default App;