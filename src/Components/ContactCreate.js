import React, { Component } from 'react';

class ContactCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleClick() {
        const contact = {
            name:this.state.name,
            phone:this.state.phone
        };
        if(this.state.name == '') {
            alert('You should input name');
            return;
        }
        this.props.onCreate(contact);

        this.setState({
            name:'',
            phone:''
        })
        this.nameInput.focus();
    }
    // 이름, 전화번호 입력 후 enter 키 누르면 추가 되는 기능
    // enter는 phone text안에서만 작동
    handleKeyPress(e) {
        if(e.charCode===13) {
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        ref={(ref) => {this.nameInput = ref}}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </p>
                <button type="button" class="btn btn-outline-secondary" onClick={this.handleClick}>Create</button>
            </div>

        );
    }
}

export default ContactCreate;