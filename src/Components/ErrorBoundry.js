import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(error, info){
        this.setState({hasError:true});
    }
    render(){
        if (this.state.hasError){
            return <h1>There is some error here. we will fix it soon</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;