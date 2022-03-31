import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry.js'

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchFeild: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})});
    }

    onSearchChange = (event) => {
        this.setState({searchFeild: event.target.value})
    }
    render(){
        let filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchFeild.toLowerCase()));
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        return (
            <div className = "tc">
                <h1 className = "f1">ROBOFRIENDS</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <hr/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;