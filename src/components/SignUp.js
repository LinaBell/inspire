import React from 'react'
import LoadingSpinner from './LoadingSpinner'
import SignupForm from './SignupForm'
import OfferCardsContainer from './OfferCardsContainer'
import SignUpSuccess from './SignUpSuccess'

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
      login: 'asdfasdf',
      password: 'asdfasd'
    }
  }
  
  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption })
    console.log(`Option selected:`, selectedOption)
  }

	handleSubmitSignupForm = () => {
    this.setState({isLoading: true})

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
      .catch((error) => console.log('Oops! There was a problem getting usage.') )
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
      .catch((error) => console.log('Oops! There was a problem registering') )
  }
  
  render() { 
    let { 
      screen,
      selectedOption, 
      isLoading, 
      rate,
      averageBill,
      averageUsage,
      login,
      password
    } = this.state

    let content
    if(screen === 1 && isLoading) {
      content = <LoadingSpinner text="We're finding the best plan options for you!" displayContainer />
    } else if(screen === 1) {
      content = <SignupForm selectedOption={selectedOption} handleChange={this.handleSelectChange.bind(this)} handleSubmit={this.handleSubmitSignupForm.bind(this)} />
    } else if(screen === 2 && isLoading) {
      content = <LoadingSpinner />
    } else if(screen === 2) {
      content = <OfferCardsContainer rate={rate} averageBill={averageBill} averageUsage={averageUsage} handleOnSelelct={this.handleOnSelelct.bind(this)} />
    } else {
      content = <SignUpSuccess login={login} password={password} />
    }

    return (
        <div>
          <div className="steps-container text-center">
            <ol className="d-sm-flex list-unstyled mb-0">
              <li className="mb-1 mb-sm-0">
                <div className="d-flex">
                  <span className="text-center rounded-circle mr-3 bg-primary text-white">
                    1
                  </span>
                  <span className={screen === 1 ? 'text-primary' : 'text-muted'}>
                    Enter your info
                  </span>
                </div>
              </li>
          
              <li className="mb-1 mb-sm-0">
                <div className="d-flex">
                  <span className="text-center rounded-circle text-white">
                    2
                  </span>
                  <span className={screen === 2 ? 'text-primary' : 'text-muted'}>
                    Pick plan
                  </span>
                </div>
              </li>
          
              <li className="mb-1 mb-sm-0">
                <div className="d-flex">
                  <span className="text-center rounded-circle text-white">
                    3
                  </span>
                  <span className={screen === 3 ? 'text-primary' : 'text-muted'}>
                    Save the planet
                  </span>
                </div>
              </li>
            </ol>
          </div>
          <div className="page-container">
            {content}
          </div>
        </div>
      )
    }
}