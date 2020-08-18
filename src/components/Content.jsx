import React, { Component } from 'react';
import axios from 'axios';
import Instruction from './Instruction'
import Submit from './Submit'
import Rides from './Rides'
import Access from './Access';

class Content extends Component {

    constructor() {
        super()
        this.state = {
            rides: [],
            selectRide: false,
            isPostData: false,
            data: undefined,
            userPin: '',
            rideID: null,
            showErrorMsg: false
        }
    }

    getRides = async () => {
        const response = await axios.get('http://localhost:3030/rides')
        this.setState({ rides: response.data })
    }

    componentDidMount = () => {
        this.getRides()
    }

    postRides = async () => {
        try {
            if (this.state.rideID == null) {
                this.setState({
                    showErrorMsg: true
                })
            } else {
                this.setState({
                    showErrorMsg: false
                })
                const data = await axios.post('http://localhost:3030/ride', { userPin: this.state.userPin, rideID: this.state.rideID })
                this.changeParnetState(data.data)
            }
        }
        catch (e) {
            console.log('error', e);
        }
    }

    changeParnetState = (data) => {
        this.setState({
            isPostData: true,
            data
        })
    }

    handleInput = (e) => {
        this.setState({
            userPin: e.target.value
        })
    }

    setID = (id) => {
        this.setState({
            rideID: id
        })
    }

    clearState = () => {
        this.setState({
            rideID: null
        })
    }

    closeMsg = () => {
        this.setState({
            showErrorMsg: false
        })
    }


    render() {

        return (
            this.state.isPostData ?
                <div className="accessContent">
                    <Access data={this.state.data} />
                </div>
                :
                <div className="appContent">
                    <Instruction />
                    <Submit postRides={this.postRides} handleInput={this.handleInput} state={this.state} />
                    <Rides clearState={this.clearState} closeMsg={this.closeMsg} rides={this.state.rides} state={this.state} setID={this.setID} />
                </div>
        );
    }
}

export default Content;