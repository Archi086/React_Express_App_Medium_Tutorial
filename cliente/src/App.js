import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "",
            dbResponse: "" 
        
        };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }
    callDB(){
        fetch("http:localhost:9000/testDB")
            .then(RES=> RES.text())
            .then(RES => this.setState({DBrESPONSE: RES}))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        this.callDB();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
                <p className="App-intro">;{this.state.dbResponse}</p>
            </div>
        );
    }
}

export default App;
