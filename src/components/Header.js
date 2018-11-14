import React from 'react'
import PropTypes from 'prop-types'
// import { pages } from '../constants/pages'

export default class Header extends React.PureComponent {
  handlePageClick = (page) => {
    this.props.setActivePage(page)
  }

  render() {
    return (
      <div>
        <div className="header text-right">
          <span className="text-muted">Utiltiy Billing Demo</span>
        </div>
        <div className="steps-container text-center">
          <ol className="d-sm-flex list-unstyled mb-0">
            <li className="mb-1 mb-sm-0">
              <div className="d-flex">
                <span className="text-center rounded-circle mr-3 bg-primary text-white">
                  1
                </span>
                <span className="text-primary">
                  Enter your info
                </span>
              </div>
            </li>
        
            <li className="mb-1 mb-sm-0">
              <div className="d-flex">
                <span className="text-center rounded-circle text-white">
                  2
                </span>
                <span className="text-muted">
                  Pick plan
                </span>
              </div>
            </li>
        
            <li className="mb-1 mb-sm-0">
              <div className="d-flex">
                <span className="text-center rounded-circle text-white">
                  3
                </span>
                <span className="text-muted">
                  Check out
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired
}
