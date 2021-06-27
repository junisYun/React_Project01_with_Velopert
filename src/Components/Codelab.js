import React, {Component} from "react";
import PropTypes from 'prop-types';
class Codelab extends Component {
    render() {
        return(
            <div>
                <h1>Hello {this.props.name}touille</h1>
                <div>{this.props.children}</div>
                <h2>age : {this.props.age}</h2>
            </div>
        )
    }
}

Codelab.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number.isRequired
};

Codelab.defaultProps = {
    name:'unknown',
    age:28
}
export default Codelab;