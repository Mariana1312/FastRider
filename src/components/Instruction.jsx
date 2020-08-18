import React, { Component } from 'react';
import firstImage from '../images/ico-g-01.png'
import secondImage from '../images/ico-g-02.png'
import thirdImage from '../images/ico-g-03.png'

class Instruction extends Component {

    render() {

        return (
            <div className="instructionDiv">
                <div className="card">
                    <div className="imageDiv">
                        <img className="imageSize" src={firstImage} /></div>
                    <span>Enter your park ticket #PIN number,
                    then select the desired ride while
                    nothing the stated return time
                    </span>
                </div>

                <div className="card">
                    <div className="imageDiv">
                        <img className="imageSize" src={secondImage} />
                    </div>
                    <span>Press 'submit' to confirm and retrieve your access code</span>
                </div>

                <div className="card">
                    <div className="imageDiv">
                        <img className="imageSize" src={thirdImage} />
                    </div>
                    <span>When the time comes, use the special FastRider line
                    to cut out a considerable wait time
                    </span>
                </div>
            </div>
        );
    }
}

export default Instruction;