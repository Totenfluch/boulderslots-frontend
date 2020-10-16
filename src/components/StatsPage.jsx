import React from 'react';
import { Container, Divider, Typography, Tabs, Tab, Hidden } from '@material-ui/core';
import SlotsChart from './SlotsChart';

class StatsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hallValue: 0,
    };

    this.RenderStatsPage = this.RenderStatsPage.bind(this);
  }

  RenderStatsPage() {
    const { statisticsData } = this.props;
    const freimannData = [['Date', 'Boulderslots', 'Climbslots']];
    const thalkirchenData = [['Date', 'Boulderslots', 'Climbslots']];
    const gilchingData = [['Date', 'Boulderslots', 'Climbslots']];
    const toelzData = [['Date', 'Boulderslots', 'Climbslots']];
    statisticsData.forEach((stat) => {
      freimannData.push([new Date(stat.createdAt), stat.boulderFreimann, stat.climbFreimann]);
      thalkirchenData.push([new Date(stat.createdAt), stat.boulderThalkirchen, stat.climbThalkirchen]);
      gilchingData.push([new Date(stat.createdAt), stat.boulderGilching, stat.climbGilching]);
      toelzData.push([new Date(stat.createdAt), stat.boulderToelz, stat.climbToelz]);
    });

    const { hallValue } = this.state;

    const styleColor = (value, hall) => {
      console.log(value);
      if (value !== hall) {
        return '#000000';
      }
      switch (value) {
        case 0:
          return '#cb9a00';
        case 1:
          return '#7ec300';
        case 2:
          return '#c45913';
        case 3:
          return '#aa312b';
        default:
          return '#ffffff';
      }
    }

    const categoryMenu = (
      <div>
        <Hidden smDown>
          <Tabs
            value={hallValue}
            onChange={(event, val) => { this.setState({ hallValue: val }) }}
            TabIndicatorProps={{
              style: { backgroundColor: styleColor(hallValue, hallValue) },
            }}
            centered
          >
            <Tab label="Freimann" style={{ color: styleColor(hallValue, 0) }} />
            <Tab label="Thalkirchen" style={{ color: styleColor(hallValue, 1) }} />
            <Tab label="Gilching" style={{ color: styleColor(hallValue, 2) }} />
            <Tab label="Tölz" style={{ color: styleColor(hallValue, 3) }} />
          </Tabs>
        </Hidden>
        <Hidden mdUp>
          <Tabs
            value={hallValue}
            onChange={(event, val) => { this.setState({ hallValue: val }) }}
            TabIndicatorProps={{
              style: { backgroundColor: styleColor(hallValue, hallValue) },
            }}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Freimann" style={{ color: styleColor(hallValue, 0) }} />
            <Tab label="Thalkirchen" style={{ color: styleColor(hallValue, 1) }} />
            <Tab label="Gilching" style={{ color: styleColor(hallValue, 2) }} />
            <Tab label="Tölz" style={{ color: styleColor(hallValue, 3) }} />
          </Tabs>
        </Hidden>
      </div>
    );

    const chartSelect = () => {
      switch (hallValue) {
        case 0:
          return (<SlotsChart
            chartData={freimannData}
            styleColor={styleColor(hallValue, hallValue)}
          />);
        case 1:
          return (<SlotsChart
            chartData={thalkirchenData}
            styleColor={styleColor(hallValue, hallValue)}
          />);
        case 2:
          return (<SlotsChart
            chartData={gilchingData}
            styleColor={styleColor(hallValue, hallValue)}
          />);
        case 3:
          return (<SlotsChart
            chartData={toelzData}
            styleColor={styleColor(hallValue, hallValue)}
          />);
        default: 
          return (<></>);
      }
    }

    return (
      <Container>
        <Typography variant="h4">
          Boulder- and Climbslots for the recent days
          </Typography>
        <Divider />
        <div style={{ marginTop: '12px' }} />
        {categoryMenu}
        {chartSelect()}
      </Container>
    )
  }

  render() {
    return (
      <this.RenderStatsPage />
    );
  }
}

export default StatsPage;