import React, { Component } from 'react';
import firstImage from '../images/ico-g-01.png'
import thirdImage from '../images/ico-g-03.png'

class Ride extends Component {

    getReturnTime = () => {
        let parsedTime = new Date(this.props.ride.return_time)
        let returnTime = parsedTime.getHours() + ":" + parsedTime.getMinutes()
        return returnTime
    }

    setRideId = async () => {
        if (this.props.state.chosenRideID == this.props.ride.id) {
            this.props.clearState()
            this.props.props.clearState()
        }
        else {
            this.props.props.closeMsg()
            await this.props.setRideId(this.props.ride.id)
            this.props.props.setID(this.props.state.chosenRideID)
        }
    }

    render() {

        let ride = this.props.ride

        return (
            <div
                className="rideBox"
                style={{
                    borderTop: `6px solid ${ride.zone.color}`,
                    backgroundColor: (this.props.state.chosenRideID === ride.id ? `${ride.zone.color}` : '#373737')
                }}
                onClick={this.setRideId}>
                <div className="topDiv">{ride.zone.name}</div>
                <div className="middleDiv">{ride.name}</div>
                <div className="bottomDiv">
                    <div className="leftDiv">
                        <img className="rideImage" src={thirdImage} />
                        <p style={{ fontSize: "18px" }}>{this.getReturnTime()}</p>
                    </div>
                    <div className="rightDiv">
                        <img className="rideImage" src={firstImage} />
                        <p style={{ fontSize: "18px" }}>{ride.remaining_tickets}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ride;