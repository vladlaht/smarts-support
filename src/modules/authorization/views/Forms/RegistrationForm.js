import React, {Component} from "react";
import {Link} from "react-router-dom";

class RegistrationForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="auth-body">
                    <div className="auth-body-item">
                        <label className="auth-body-item__label">First name</label>
                        <input type="text" className="auth-body-item__input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-body-item">
                        <label className="auth-body-item__label">Last name</label>
                        <input type="text" className="auth-body-item__input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-body-item">
                        <label className="auth-body-item__label">Email</label>
                        <input type="email" className="auth-body-item__input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-body-item">
                        <label className="auth-body-item__label">Password</label>
                        <input type="password" className="auth-body-item__input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className='auth-button-area'>
                        <Link className="sign-in" to="/authorize">
                            <button className="btn smarts-button btn-sign-in">
                                Sign up
                            </button>
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