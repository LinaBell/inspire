import React from 'react'
import ScoreCard from './ScoreCard'

const API = 'https://stg-garcon.herokuapp.com/api/1/accounts/homescore/1/summary'

export default class ScoreSummary extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      score_text: '',
      average_daily_energy_usage: 0,
      average_daily_temp: 0
    }
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          score: data.score,
          score_text: data.score_text,
          average_daily_energy_usage: data.average_daily_energy_usage,
          average_daily_temp: data.average_daily_temp
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }

  render() {
    let {
      score,
      score_text,
      average_daily_energy_usage,
      average_daily_temp
    } = this.state

    return (
      <div>
        <div className="card-group-container">
          <ScoreCard score={score} label="Home Score" color="pink" />
          <ScoreCard score={average_daily_energy_usage} label="Average Daily Energy Usage" />
          <ScoreCard score={average_daily_temp} label="Average Daily Temp" color="orange" />
        </div>
        <p className="text-center">{score_text}</p>
      </div>
    )
  }
}
