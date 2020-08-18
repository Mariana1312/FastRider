import React, { Component, Fragment } from 'react';
import fourthtImage from '../images/ico-g-04.png'

class Access extends Component {

    constructor() {
        super()
    }

    getReturnTime = () => {
        let parsedTime = new Date(this.props.data.ride.return_time)
        let returnTime = parsedTime.getHours() + ":" + parsedTime.getMinutes()
        return returnTime
    }


    render() {

        return (

            <Fragment>
                <div className="card">
                    <div className="imageDiv">
                        <img className="imageSize" src={fourthtImage} />
                    </div>
                    <span>Thank you for using The Jungle™ FastRider ticket system -
                    your access code is now ready!
                    </span>
                </div>
                <div className="accessDiv" style={{ borderTop: `6px solid ${this.props.data.ride.zone.color}` }}>
                    <div className="acessNames">
                        <div className="leftName">
                            <p> {this.props.data.ride.name} </p>
                        </div>
                        <div className="rightName">
                            <p> {this.props.data.ride.zone.name} </p>
                        </div>
                    </div>
                    <div className="returnTime">
                        <h5>Return At</h5>
                        <p>{this.getReturnTime()}</p>
                    </div>
                    <div className="accessCode">
                        <h5>Use Access Code</h5>
                        <p>{(this.props.data.access_code).toUpperCase()}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Access;