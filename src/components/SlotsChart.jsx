import React from 'react';
import moment from 'moment';
import {
  Checkbox, FormGroup, FormControlLabel, TextField, Grid,
  Typography, Fab, Divider, Grow, Popper, Paper, ClickAwayListener,
  FormControl, RadioGroup, Radio,
} from '@material-ui/core';
import { Chart } from 'react-google-charts';

import {
  makeStyles,
} from '@material-ui/core/styles';

import { Equalizer } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  sectionDivider: {
    marginBottom: theme.spacing(1),
  },
  filterContainer: {
    padding: '12px',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


class SlotsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayChecked: true,
      nightChecked: false,
      startValue: new Date('2020-10-08T12:00').toISOString().slice(0, 16),
      endValue: new Date(Date.now()).toISOString().slice(0, 16),
      mondayChecked: true,
      tuesdayChecked: true,
      wednesdayChecked: true,
      thursdayChecked: true,
      fridayChecked: true,
      saturdayChecked: true,
      sundayChecked: true,
      climbslotsChecked: true,
      boulderslotsChecked: true,
      daySelect: '0',
      timespanSelect: '0',
    };

    this.RenderSlotsChart = this.RenderSlotsChart.bind(this);
  }

  RenderSlotsChart() {
    const { chartData, styleColor } = this.props;
    const {
      dayChecked, nightChecked, startValue, endValue,
      mondayChecked, tuesdayChecked, wednesdayChecked,
      thursdayChecked, fridayChecked, saturdayChecked, sundayChecked,
      climbslotsChecked, boulderslotsChecked, daySelect, timespanSelect,
    } = this.state;
    const classes = useStyles();

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
    let filteredChartData = chartData;
    if (!dayChecked) {
      filteredChartData = filteredChartData.filter((data, index) => {
        if (index === 0) {
          return true;
        }
        const createdHours = data[0].getHours();
        return (createdHours < 7 || createdHours > 24) && createdHours !== 0;
      });
    }

    if (!nightChecked) {
      filteredChartData = filteredChartData.filter((data, index) => {
        if (index === 0) {
          return true;
        }
        const createdHours = data[0].getHours();
        return createdHours > 7 && createdHours < 24;
      });
    }

    filteredChartData = filteredChartData.filter((data, index) => {
      if (index === 0) {
        return true;
      }
      const createdTime = data[0].getTime();
      return createdTime > new Date(startValue).getTime() && createdTime < new Date(endValue).getTime();
    });

    if (!sundayChecked) {
      filteredChartData = filteredChartData.filter((data, index) => {
        if (index === 0) {
          return true;
        }
        const createdDay = data[0].getDay();
        return createdDay !== 0;
      });
    }

    if (!mondayChecked) {
      filteredChartData = filteredChartData.filter((data, index) => {
        if (index === 0) {
          return true;
        }
        const createdDay = data[0].getDay();
        return createdDay !== 1;
      });
    }

    if (!tuesdayChecked) {
      filteredChartData = filteredChartData.filter((data, index) => {
        if (index === 0) {
          return true;
        }
        const createdDay = data[0].getDay();
        return createdDay !== 2;
      });
    }

    if (!wednesdayChecked) {
      filteredChartData = filteredChartData.filter((data, index) => {
        if (index === 0) {
          return true;
        }
        const createdDay = data[0].getDay();
        return createdDay !== 3;
      });
    }

    if (!thursdayChecked) {
      filteredChartData = filteredChartData.filter((data, index) => {
        if (index === 0) {
          return true;
        }
        const createdDay = data[0].getDay();
        return createdDay !== 4;
      });
    }

    if (!fridayChecked) {
      filteredChartData = filteredChartData.filter((data, index) => {
        if (index === 0) {
          return true;
        }
        const createdDay = data[0].getDay();
        return createdDay !== 5;
      });
    }

    if (!saturdayChecked) {
      filteredChartData = filteredChartData.filter((data, index) => {
        if (index === 0) {
          return true;
        }
        const createdDay = data[0].getDay();
        return createdDay !== 6;
      });
    }

    if (!climbslotsChecked || !boulderslotsChecked) {
      if (!climbslotsChecked && !boulderslotsChecked) {

      } else if (!climbslotsChecked) {
        filteredChartData = filteredChartData.map((data) => data.slice(0, -1))
      } else if (!boulderslotsChecked) {
        filteredChartData = filteredChartData.map((data) => [data[0], data[2]]);
      }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleFilterOpen = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleFilterClose = (event) => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    return (
      <>
        <Fab
          variant="extended"
          size="medium"
          aria-label="add"
          className={classes.margin}
          style={{ backgroundColor: styleColor }}
          onClick={handleFilterOpen}
        >
          <Equalizer className={classes.extendedIcon} />
          Filter and Options
        </Fab>

        <Popper id={id} open={open} anchorEl={anchorEl} transition placement="bottom-start">
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} timeout={250}>
              <ClickAwayListener onClickAway={handleFilterClose}>
                <Paper className={classes.filterContainer}>
                  <Typography variant="h5">
                    Enable Climbslots and Boulderslots
                  </Typography>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={climbslotsChecked}
                          onChange={(event) => this.setState({ climbslotsChecked: event.target.checked })}
                          name="Climbslots"
                          color="primary"
                        />
                      }
                      label="Climbslots"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={boulderslotsChecked}
                          onChange={(event) => this.setState({ boulderslotsChecked: event.target.checked })}
                          name="Boulderslots"
                        />
                      }
                      label="Boulderslots"
                    />
                  </FormGroup>
                  <Divider />
                  <Typography variant="h5">
                    Enable Day or Night
                  </Typography>
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
                  <Divider />
                  <Typography variant="h5" className={classes.sectionDivider}>
                    Set Start- and Endtime of the Timeseries
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="timespan-select" row name="timespan-select" value={timespanSelect} 
                      onChange={(event) => {
                        this.setState({ timespanSelect: event.target.value });
                        if (event.target.value === '1') {
                          this.setState({
                            startValue: moment(Date.now()).startOf('day').toISOString().slice(0, 16),
                          });
                        } else if (event.target.value === '2') {
                          this.setState({
                            startValue: moment(Date.now()).subtract(7, 'days').toISOString().slice(0, 16),
                          });
                        }
                      }
                    }>
                      <FormControlLabel value="0" control={<Radio />} label="Custom" />
                      <FormControlLabel value="1" control={<Radio />} label="Today" />
                      <FormControlLabel value="2" control={<Radio />} label="7 Days" />
                    </RadioGroup>
                  </FormControl>
                  <Grid container>
                    <Grid item>
                      <form className={classes.container} noValidate>
                        <TextField
                          id="datetime_start"
                          label="Start Timespan"
                          type="datetime-local"
                          format="dd/MM/YYYY HH:mm"
                          value={startValue}
                          onChange={(event) => this.setState({ startValue: event.target.value, timespanSelect: '0' })}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </Grid>
                    <Grid item>
                      <form className={classes.container} noValidate>
                        <TextField
                          id="datetime_end"
                          label="End Timespan"
                          type="datetime-local"
                          format="dd/MM/YYYY HH:mm"
                          value={endValue}
                          onChange={(event) => this.setState({ endValue: event.target.value, timespanSelect: '0' })}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </Grid>
                  </Grid>
                  <Divider style={{ marginBottom: '8px', marginTop: '8px' }} />
                  <Typography variant="h5">
                    Disable or Enable Weekdays
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="day-select" row name="day-select" value={daySelect} 
                      onChange={(event) => {
                        this.setState({ daySelect: event.target.value });
                        if (event.target.value === '0') {
                          this.setState({
                            mondayChecked: true,
                            tuesdayChecked: true,
                            wednesdayChecked: true,
                            thursdayChecked: true,
                            fridayChecked: true,
                            saturdayChecked: true,
                            sundayChecked: true,
                          });
                        } else if (event.target.value === '1') {
                          this.setState({
                            mondayChecked: true,
                            tuesdayChecked: true,
                            wednesdayChecked: true,
                            thursdayChecked: true,
                            fridayChecked: true,
                            saturdayChecked: false,
                            sundayChecked: false,
                          });
                        } else if (event.target.value === '2') {
                          this.setState({
                            mondayChecked: false,
                            tuesdayChecked: false,
                            wednesdayChecked: false,
                            thursdayChecked: false,
                            fridayChecked: false,
                            saturdayChecked: true,
                            sundayChecked: true,
                          });
                        }
                      }
                    }>
                      <FormControlLabel value="0" control={<Radio />} label="All" />
                      <FormControlLabel value="1" control={<Radio />} label="Weekday" />
                      <FormControlLabel value="2" control={<Radio />} label="Weekend" />
                    </RadioGroup>
                  </FormControl>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox checked={mondayChecked} onChange={(event) => this.setState({ mondayChecked: event.target.checked })} name="mondayChecked" color="primary" />
                      }
                      label="Monday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={tuesdayChecked} onChange={(event) => this.setState({ tuesdayChecked: event.target.checked })} name="tuesdayChecked" color="primary" />
                      }
                      label="Tuesday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={wednesdayChecked} onChange={(event) => this.setState({ wednesdayChecked: event.target.checked })} name="wednesdayChecked" color="primary" />
                      }
                      label="Wednesday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={thursdayChecked} onChange={(event) => this.setState({ thursdayChecked: event.target.checked })} name="thursdayChecked" color="primary" />
                      }
                      label="Thursday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={fridayChecked} onChange={(event) => this.setState({ fridayChecked: event.target.checked })} name="fridayChecked" color="primary" />
                      }
                      label="Friday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={saturdayChecked} onChange={(event) => this.setState({ saturdayChecked: event.target.checked })} name="saturdayChecked" color="primary" />
                      }
                      label="Saturday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={sundayChecked} onChange={(event) => this.setState({ sundayChecked: event.target.checked })} name="sundayChecked" color="primary" />
                      }
                      label="Sunday"
                    />
                  </FormGroup>
                </Paper>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>

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