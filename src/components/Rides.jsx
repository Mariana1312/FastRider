import React, { Component } from 'react';
import Ride from './Ride'

class Rides extends Component {
    render() {
        return (
            <div className="ridesDiv">
                <h6>Rides</h6>
                <Ride />
            </div>
        );
    }
}

export default Rides;