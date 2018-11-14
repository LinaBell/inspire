import React from 'react'
import loading from '../assets/images/loading.gif'

export default class LoadingSpinner extends React.PureComponent {
    render() {
        if(this.props.displayContainer) {
            return (
                <div className="signup-container">
                    <div className="signup-header text-center">
                        {this.props.text}
                    </div>
                    <div className="loading-spinner">
                        <img src={loading} alt="loading..." />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="loading-spinner">
                    <img src={loading} alt="loading..." />
                </div>
            )
        }
    }
}
