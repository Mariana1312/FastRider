import React, { Component, Fragment } from 'react';
import classnames from "classnames";

class Submit extends Component {

    constructor() {
        super()
        this.state = {
            prevScrollpos: window.pageYOffset,
            showButton: false,
        }
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const showButton = prevScrollpos < currentScrollPos;
        this.setState({
            prevScrollpos: currentScrollPos,
            showButton: true
        })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleInput = (e) => {
        this.props.handleInput(e)
    }

    render() {

        return (
            <Fragment>
                <div className="inputDiv">
                    <input id="inputPin" placeholder="#PIN" onChange={this.handleInput} />
                    <button
                        className={classnames("submitButton", {
                            "submitHidden": !this.state.showButton
                        })}
                        onClick={this.props.postRides}>
                        SUBMIT</button>
                </div>
                {this.props.state.showErrorMsg ?
                    <div className="errorHandling"><p >Please choose a ride</p></div>
                    : ''
                }
            </Fragment>
        )
    }
}


export default Submit;