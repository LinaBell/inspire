import React from 'react'

const OfferCard = ({ title, featured, price, details, footerText, onSelect }) => (
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
    <div className="offer-card-body">
      <h2>{price}</h2>
      <h5 className="text-muted">/Month</h5>
      <div className="offer-type">
        Subscription Price
      </div>
      <div className="offer-card-details">
        {details}
        <div onClick={onSelect.bind(this)} className="submit-btn text-center ">
          Select this plan
        </div>
      </div>
    </div>
    <div className="offer-card-footer">{footerText}</div>
  </div>
)

export default OfferCard