import React, { Component } from 'react';

class LoginButton extends Component {
    render() {
        return (
            <button type="button" onClick={this.props.onClick} className="btn btn-primary">
                Login
            </button>
        );
    }
}

export default LoginButton;