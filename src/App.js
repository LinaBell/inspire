import React, { Component } from 'react'
import Header from './components/Header'
import ScoreSummary from './components/ScoreSummary'
import DailyUsage from './components/DailyUsage'
import { pages } from './constants/pages';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: pages.summary
    }
  }

  setActivePage = (page) => {
    this.setState({
      activePage: page
    })
  }

  render() {
    return (
      <div>
        <Header activePage={this.state.activePage} setActivePage={this.setActivePage} />
        <div className="page-container">
          {this.state.activePage === pages.summary ?
            <ScoreSummary />
            : 
            <DailyUsage />
          }
        </div>
      </div>
    );
  }
}

export default App
