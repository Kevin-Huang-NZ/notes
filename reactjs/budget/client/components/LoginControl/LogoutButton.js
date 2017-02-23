import React, { Component } from 'react';

class LogoutButton extends Component {
    render() {
        return (
            <button type="button" onClick={this.props.onClick} className="btn btn-warning">
                Logout
            </button>
        );
    }
}

export default LogoutButton;