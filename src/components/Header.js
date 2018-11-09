import React from 'react'
import PropTypes from 'prop-types'
import { pages } from '../constants/pages'

export default class Header extends React.PureComponent {
  handlePageClick = (page) => {
    this.props.setActivePage(page)
  }

  render() {
    return (
      <div className="header text-right">
        <span 
          className={this.props.activePage === pages.summary ? 'text-bold' : ''} 
          onClick={this.handlePageClick.bind(this, pages.summary)}>
          Score Summary
        </span>
        <span 
          className={this.props.activePage === pages.usage ? 'text-bold' : ''} 
          onClick={this.handlePageClick.bind(this, pages.usage)}>
          Daily Energy Usage
        </span>
      </div>
    )
  }
}

Header.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired
}
