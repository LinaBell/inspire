import React from 'react'

const OfferCard = ({ title, featured, price, details, onSelect }) => (
  <div className="offer-card text-center">
    {featured ?
      <div className="offer-card-header featured bg-gradient-fuschia text-white">
        <span>Most Popular</span>
        <h2 className="text-white">{title}</h2>
      </div>
    :
      <div className="offer-card-header">
        <div className="bg-gradient-gumbo"></div>
        <h3>{title}</h3>
      </div>
    }
    <div className="offer-card-details">
      <h2>{price}</h2>
      <h5 className="text-muted">/Month</h5>
      <div className="offer-type">
        Subscription Price
      </div>
      {details}
      <div onClick={onSelect} className="submit-btn text-center ">
        Select this plan
      </div>
    </div>
  </div>
)

export default OfferCard