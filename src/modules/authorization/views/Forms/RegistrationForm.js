import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class RegistrationForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="auth-body">
                    <div className="auth-body-item">
                        <label className="auth-label">First name</label>
                        <input type="text" className="auth-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-body-item">
                        <label className="auth-label">Last name</label>
                        <input type="text" className="auth-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-body-item">
                        <label className="auth-label">Email</label>
                        <input type="email" className="auth-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-body-item">
                        <label className="auth-label">Password</label>
                        <input type="password" className="auth-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className='auth-button-area'>
                        <Link className="sign-in" to="/authorize">
                            <Button className="btn smarts-button btn-sign-in">
                                Sign up
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="auth-footer">
                    <div className="auth-footer-sign-up">
                        Already have an account ? <Link to={"/authorize"}>Sign up</Link>
                    </div>
                    <div className="auth-footer-forgot-pass">
                        Forgot <a href="/" className="">Password?</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RegistrationForm;