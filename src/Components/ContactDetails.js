import React, { Component } from 'react';

class ContactDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(e) {
        if(e.charCode===13) {
            this.handleToggle();
        }
    }
    handleToggle() {
        if(this.state.isEdit === false) {
            this.setState({
                name:this.props.contact.name,
                phone:this.props.contact.phone
            })
        } else {
            this.handleEdit();
        }
        // setState는 비동기 메서드라 setState 함수가 끝나기 전에 console.log 를 먼저 실행하여
        // 처음 값이 false로 프린트 됨.
        this.setState(
            {
                isEdit: !this.state.isEdit
            }
        );
    }
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone);
    }
    render() {
        const edit = (
            <div>
                 <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress = {this.handleKeyPress}
                    />
                </p>
            </div>
        );
        const details = (
            <div>  
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>);

        const view = this.state.isEdit ? edit : details;
        const blank = <div>Not Selected</div>;
        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <p>
                    <button type="button" class="btn btn-outline-danger me-3"
                        onClick={this.handleToggle}>{this.state.isEdit ? 'OK' : 'Edit'}</button>
                    <button type="button" class="btn btn-outline-danger"
                        onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>

        );
    }
}
ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
};
export default ContactDetails;