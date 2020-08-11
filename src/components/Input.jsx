import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }

    show = () => {
        
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className="inputDiv">
                <input type="text" placeholder="#PIN" />
                <button
                    className="buttonSubmit"
                    onClick={this.show}
                    style={this.state.show ? { display: 'none' } : { display: '0' }} >
                    test
                        </button>

            </div>
        );
    }
}

export default Input;