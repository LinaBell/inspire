import React, { Component } from 'react'
import Header from './components/Header'
import SignUp from './components/SignUp'
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
        <SignUp />
      </div>
    );
  }
}

export default App
