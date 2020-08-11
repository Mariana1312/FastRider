import React, { Component } from 'react';
import Instruction from './Instruction'
import Input from './Input'
import Rides from './Rides'


class Content extends Component {
    render() {
        return (
            <div className="appContent">
                <Instruction />
                <Input />
                <Rides />
            </div>
        );
    }
}

export default Content;