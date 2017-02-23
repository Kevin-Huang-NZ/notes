import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            "password":"",
            "rememberMe":false
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(value);
        this.setState({
            [name] : value
        });
    }

    handleSubmit(event){
        alert('Welcome : ' + this.state.email);
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.handleInputChange}/>
                </div>
                <div className="checkbox">
                    <label>
                    <input type="checkbox" name="remeberMe" onChange={this.handleInputChange}/> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
}

export default LoginForm;