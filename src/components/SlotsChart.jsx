import React from 'react';
import { Chart } from 'react-google-charts';

class SlotsChart extends React.Component {
  constructor(props) {
    super(props);

    this.RenderSlotsChart = this.RenderSlotsChart.bind(this);
  }

  RenderSlotsChart() {
    const { chartData } = this.props;

    return (
      <Chart
        chartType="LineChart"
        data={chartData}
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
    )
  }

  render() {
    return (
      <this.RenderSlotsChart />
    );
  }
}

export default SlotsChart;