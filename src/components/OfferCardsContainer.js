import React from 'react'
import OfferCard from './OfferCard'

const details1 = <ul>
  <li>12 month flat supply price</li>
  <li>Amazon Echo Dot</li>
  <li>Clean Energy</li>
  <li>100% National Wind</li>
  <li>Early Cancellation Fee: $10 for each remaining month of your contract</li>
  <li>Energy efficient smart devices available</li>
</ul>

const details2 = <ul>
  <li>36 month fixed supply rate</li>
  <li>Amazon Echo Dot</li>
  <li>Clean Energy</li>
  <li>100% National Wind</li>
  <li>1% cash back after 12 months</li>
</ul>

const OfferCardsContainer = ({ rate, averageUsage, averageBill, handleOnSelelct }) => {
  return(
    <div className="offer-card-container text-center">
      <h1>Great News!</h1>
      <br />
      <h3 className="text-normal">You could prevent 58,625 pounds of coal from being burned per year.</h3>
      <br />
      <div className="usage-stat">
        <h6 className="font-bold">Current Rate</h6> {rate}¢/kWh
      </div>
      <div className="usage-stat">
        <h6 className="font-bold">Average Usage</h6> {averageUsage} kWh/mo
      </div>
      <div className="usage-stat">
        <h6 className="font-bold">Average Bill</h6> ${averageBill} /mo
      </div>
      <OfferCard title="Inspire One" featured price="$139.99" details={details1} footerText="By choosing this plan you could provide clean power, light, and internet to a child in need!" onSelect={handleOnSelelct} />
      <OfferCard title="Clean & Green" price="$99.99" details={details2} onSelect={handleOnSelelct} />
    </div>
  )
}

export default OfferCardsContainer
