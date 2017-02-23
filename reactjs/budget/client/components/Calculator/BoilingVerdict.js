import React, { Component } from 'react';

class BoilingVerdict extends Component {
    render() {
        const celsius = this.props.celsius;
        let renderContent = "The water would not boil.";
        if (celsius >= 100) {
           renderContent = "The water would boil."
        }
        return (
            <p>{renderContent}</p>
        );
    }
}

export default BoilingVerdict;