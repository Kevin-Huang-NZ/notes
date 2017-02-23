import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
// var moment = require('moment');
// var _ = require('lodash');

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

        // This binding is necessary to make `this` work in the callback
        this.tick = this.tick.bind(this);
        this.clickMe = this.clickMe.bind(this);
    }

    componentDidMount() {
        this.timeId = setInterval(
            // () => this.tick(),
            this.tick,
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timeId);
    }

    tick() {
        this.setState(() => ({
            date: new Date()
        }));
        // this.setState((preState, props) => this.newDate(preState, props));
    }

    clickMe(){
        alert(this.state);
    }

    // newDate(preState, props) {
    //     // console.log(preState);
    //     // console.log(props);
    //     return {date: new Date()};
    // }

    render() {
        return(
            <div>
                <h1>Hello World.</h1>
                <h2>It is {moment(this.state.date).format('YYYY-MM-DD HH:mm:ss')}.</h2>
                <button type='button' className="btn btn-primary" onClick={this.clickMe}>Click Me</button>
            </div>
        );
    }
}