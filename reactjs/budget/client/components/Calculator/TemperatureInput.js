import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        const scale = this.props.scale;
        const value = this.props.value;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={value}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;