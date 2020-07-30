import React, {Component} from "react";
import {Link} from "react-router-dom";

class AuthForm extends Component {
    render() {
        return (
            <React.Fragment>
                        <div className="auth-body">
                            <div className="auth-body-item">
                                <label className="auth-body-item__label">Email</label>
                                <input type="text" className="auth-body-item__input" required/>
                                <span className="focus-border"> </span>
                            </div>
                            <div className="auth-body-item">
                                <label className="auth-body-item__label">Password</label>
                                <input type="password" className="auth-body-item__input" required/>
                                <span className="focus-border"> </span>
                            </div>
                            <div className="custom-control custom-checkbox ">
                                <input type="checkbox" className="custom-control-input" id="auth-checkbox"/>
                                <label className="custom-control-label" htmlFor="auth-checkbox">Remember me</label>
                            </div>
                            <div className='auth-button-area'>
                                <Link to="/">
                                    <button className="smarts-button btn-sign-in">
                                        Sign in
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="auth-footer">
                            <div>
                                Don't have an account? <Link to={"/register"}>Sign up</Link>
                            </div>
                            <div>
                                Forgot <a href="/" className="">Password?</a>
                            </div>
                        </div>
            </React.Fragment>
        )
    }
}

export default AuthForm;