import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Southern California Edison', label: 'Southern California Edison' },
  { value: 'Los Angeles Department of Water and Power', label: 'Los Angeles Department of Water and Power' },
  { value: 'Pacific Gas and Electric Company', label: 'Pacific Gas and Electric Company' }
]

const SignupForm = ({ selectedOption, handleChange, handleSubmit}) => {
  return(
    <div className="signup-container">
      <div className="signup-header text-center">
        It looks like you're in California!
      </div>
      <div className="signup-form">
        <span>Select a Provider</span>
        <br />
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
        <div className="login">
          <span>Login</span>
          <input type="text" placeholder="Username" />  
          <input type="password" placeholder="Password" />  
        </div>
        <div className="text-center">
          <div onClick={handleSubmit.bind(this)} className="submit-btn bg-gradient-fuschia text-white">
            Explore plan options →
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm