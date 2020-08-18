import React, { Component } from 'react';
import Ride from './Ride'

class Rides extends Component {

    constructor() {
        super()
        this.state = {
            chosenRideID: null,
        }
    }

    setRideId = (id) => {
        console.log(id);
        this.setState({
            chosenRideID: id
        })
    }

    clearState = () => {
        this.setState({
            chosenRideID: ''
        })
    }

    render() {

        let rides = this.props.rides

        return (
            <div className="ridesDiv">
                {rides.length ? rides.map((r, i) => <Ride props={this.props} setRideId={this.setRideId}
                    clearState={this.clearState} state={this.state} key={i} ride={r} />) : null}
            </div>
        );
    }
}

export default Rides;