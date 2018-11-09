import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const API = 'https://stg-garcon.herokuapp.com/api/1/accounts/homescore/1/energy/usage/daily'

export default class DailyUsage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      monthInt: 1
    }
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          data: data.daily_energy_usage
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem'))
  }

  render() {
    const dates = this.state.data.map(i => (Object.keys(i).toString()))
    const usage = this.state.data.map(i => (Object.values(i).toString()))

    const data = {
      labels: dates,
      datasets: [
        {
          label: 'Daily Energy Usage',
          backgroundColor: 'rgba(239,31,132,0.3)',
          borderColor: 'rgba(239,31,132,0.8)',
          data: usage
        }
      ]
    }

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#555',
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return (
      <div className="chart-container text-center">
        <h3>Daily Energy Usage</h3>
        <h4>{dates[0]} - {dates[dates.length - 1]}</h4>
        <HorizontalBar data={data} options={options} />
      </div>
    )
  }
}
