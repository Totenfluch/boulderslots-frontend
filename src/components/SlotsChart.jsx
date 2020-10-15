import React from 'react';
import { Checkbox, FormGroup, FormControlLabel, } from '@material-ui/core';
import { Chart } from 'react-google-charts';

class SlotsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayChecked: true,
      nightChecked: true,
    };

    this.RenderSlotsChart = this.RenderSlotsChart.bind(this);
  }

  RenderSlotsChart() {
    const { chartData } = this.props;
    const { dayChecked, nightChecked } = this.state;

    /*
    [
      {
        boulderFreimann: 120
        boulderGilching: 30
        boulderThalkirchen: 72
        boulderToelz: 65
        climbFreimann: 120
        climbGilching: 90
        climbThalkirchen: 198
        climbToelz: 66
        createdAt: "2020-10-07T23:00:00.000Z"
        id: 20
        updatedAt: "2020-10-07T23:00:00.000Z"
      }
      ...
    ]
    */
    const filteredChartData = chartData.filter((data, index) => {
      if (index === 0) {
        return true;
      }
      const createdHours = data[0].getHours();
      if (!nightChecked) {
        return createdHours > 7 && createdHours < 24;
      }
      if (!dayChecked) {
        return (createdHours < 7 || createdHours > 24) && createdHours !== 0;
      }
      return true;
    })

    return (
      <>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={dayChecked}
                onChange={(event) => this.setState({ dayChecked: event.target.checked })}
                name="Day"
                color="primary"
              />
            }
            label="Day"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={nightChecked}
                onChange={(event) => this.setState({ nightChecked: event.target.checked })}
                name="Night"
              />
            }
            label="Night"
          />
        </FormGroup>
        <Chart
          chartType="LineChart"
          data={filteredChartData}
          options={{
            isStacked: true,
            backgroundColor: '#fafafa',
            legend: {
              position: 'top',
              maxLines: 3,
            },
            vAxis: {
              viewWindow: {
                min: 0,
              },
            },
            hAxis: {
              title: 'Available Slots',
            },
            lineWidth: 4,
            smoothLine: false,
          }}
          height="60vh"
          width="100%"
        />
      </>
    )
  }

  render() {
    return (
      <this.RenderSlotsChart />
    );
  }
}

export default SlotsChart;