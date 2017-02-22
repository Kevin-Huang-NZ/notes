import React, { Component } from 'react';

import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

class Greeting extends Component {

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return (
                <UserGreeting />
            );
        }
        return (
            <GuestGreeting />
        );
    }
}

export default Greeting;