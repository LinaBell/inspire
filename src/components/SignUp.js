import React from 'react'
import Select from 'react-select'
import OfferCard from './OfferCard'
import LoadingSpinner from './LoadingSpinner'

const options = [
  { value: 'Southern California Edison', label: 'Southern California Edison' },
  { value: 'Los Angeles Department of Water and Power', label: 'Los Angeles Department of Water and Power' },
  { value: 'Pacific Gas and Electric Company', label: 'Pacific Gas and Electric Company' }
]

const details1 = <ul>
  <li>12 month flat supply price</li>
  <li>Amazon Echo Dot</li>
  <li>Clean Energy</li>
  <li>100% National Wind</li>
  <li>Early Cancellation Fee: $10 for each remaining month of your contract</li>
  <li>Energy efficient smart devices available</li>
  <li className="text-bold">By choosing this plan you could provide clean power, light, and internet to a child in need!</li>
</ul>
const details2 = <ul>
  <li>36 month fixed supply rate</li>
  <li>Amazon Echo Dot</li>
  <li>Clean Energy</li>
  <li>100% National Wind</li>
  <li>1% cash back after 12 months</li>
</ul>

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      selectedOption: null,
      screen: 1,
      rate: 0,
      averageBill: 0,
      averageUsage: 0,
      login: '',
      password: ''
    }
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption })
    console.log(`Option selected:`, selectedOption)
  }

	handleSubmit = () => {
    this.setState({
      isLoading: true
    })
    console.log(this.state.isLoading)
		// let username = this.refs.username.value
    // let password = this.refs.password.value
		// this.refs.username.value = '';
    // this.refs.password.value = '';
    
    fetch('http://localhost:3100/utilities/usage')
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          isLoading: false,
          screen: 2,
          rate: data.rate,
          averageBill: data.averageBill,
          averageUsage: data.averageUsage
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }

  handleOnSelelct = () => {
    this.setState({isLoading: true})
    fetch('http://localhost:3100/utilities/register')
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          isLoading: false,
          screen: 3,
          login: data.login,
          password: data.password
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }

  renderSignupForm() {
    return (
      <div className="signup-container">
        <div className="signup-header text-center">
          It looks like you're in California!
        </div>
        <div className="signup-form">
          <span>Select a Provider</span>
          <br />
          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          <div className="login">
            <span>Login</span>
            <input type="text" ref="username" placeholder="Username" />  
            <input type="password" ref="password" placeholder="Password" />  
          </div>
          <div className="text-center">
            <div onClick={this.handleSubmit.bind(this)} className="submit-btn bg-gradient-fuschia text-white">
              Explore plan options →
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderOfferCards() {
    return(
      <div className="offer-card-container text-center">
        <h1>Great News!</h1>
        <br />
        <h3 className="text-normal">You could prevent 58,625 pounds of coal from being burned per year.</h3>
        <br />
        <div className="usage-stat">
          <span className="font-bold">Current Rate:</span> {this.state.rate}¢/kWh
        </div>
        <div className="usage-stat">
          <span className="font-bold">Average Usage:</span> {this.state.averageUsage} kWh/mo
        </div>
        <div className="usage-stat">
          <span className="font-bold">Average Bill:</span> ${this.state.averageBill} /mo
        </div>
        <OfferCard title="Inspire One" featured price="$139.99" details={details1} onSelect={this.handleOnSelelct.bind(this)} />
        <OfferCard title="Clean & Green" price="$99.99" details={details2} onSelect={this.handleOnSelelct.bind(this)} />
      </div>
    )
  }
  
  render() { 
    let { isLoading, screen } = this.state
    let content
    if(screen === 1 && isLoading) {
      content = <LoadingSpinner text="We're finding the best plan options for you!" displayContainer />
    } else if(screen === 1) {
      content = this.renderSignupForm()
    } else if(screen === 2 && isLoading) {
      content = <LoadingSpinner />
    } else if(screen === 2) {
      content = this.renderOfferCards()
    } else {
      content = <div>{this.state.login} and {this.state.password}</div>
    }

    return (
        <div>
          {content}
        </div>
      )
    }
}