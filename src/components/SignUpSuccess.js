import React from 'react'

const SignUpSuccess = ({ login, password }) => {
  return (
    <div className="success-message text-center">
      <iframe src="https://giphy.com/embed/8OY7KjlgcCnhvu7hY9" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <h3>Congratulations, you've signed up successfully!</h3>
      <br /> Your updated account information is: <br />
      <h6>
        Login: {login} <br />
        Password: {password}
      </h6>
    </div>
  )
}

export default SignUpSuccess
