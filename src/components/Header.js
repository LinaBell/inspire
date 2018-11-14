import React from 'react'
import PropTypes from 'prop-types'
// import { pages } from '../constants/pages'

export default class Header extends React.PureComponent {
  handlePageClick = (page) => {
    this.props.setActivePage(page)
  }

  render() {
    return (
      <div className="header text-right">
        <span className="text-muted">Utiltiy Billing Demo</span>
      </div>
    )
  }
}

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired
}
