import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:0,
            name:'SangJun'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            value:this.state.value + 1
        });
    }
    render() {
        return(
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClick}>Press Me</button>
            </div>
            
        );
    }
}

export default Counter;