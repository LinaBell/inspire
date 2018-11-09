import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../constants/colors'

const ScoreCard = ({ score, label, color }) => (
  <div className="card">
    <div className="card-details">
      <h2>{score}</h2>
    </div>
    <div className={`card-footer ${color}`}>
      <h3>{label}</h3>
    </div>
  </div>
)

ScoreCard.propTypes = {
  score: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(colors))
}

export default ScoreCard