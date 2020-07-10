import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class AuthorizationLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="auth-layout">
                    <div className="auth-form">
                        <div className="auth-header">
                            <img className="auth-header-logo" src={`${process.env.PUBLIC_URL}/img/full_logo.png`} alt="logo"/>
                        </div>
                        <div className="auth-body">
                            <div className="auth-body-item">
                                <label className="auth-label">Email</label>
                                <input type="text" className="auth-input" required/>
                                <span className="focus-border"> </span>
                            </div>
                            <div className="auth-body-item">
                                <label className="auth-label">Password</label>
                                <input type="password" className="auth-input" required/>
                                <span className="focus-border"> </span>
                            </div>
                            <div className="custom-control custom-checkbox ">
                                <input type="checkbox" className="custom-control-input" id="auth-checkbox"/>
                                <label className="custom-control-label" htmlFor="auth-checkbox">Remember me</label>
                            </div>

                           <div className='auth-button-area'>
                               <Link className="sign-in" to="/home">
                                   <Button className="btn smarts-button btn-sign-in">
                                       Sign in
                                   </Button>
                               </Link>
                           </div>
                        </div>
                        <div className="auth-footer">
                            <div className="auth-footer-sign-up">
                                Don't have an account? <a href="/">Sign up</a>
                            </div>
                            <div className="auth-footer-forgot-pass">
                                Forgot <a href="/" className="">Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AuthorizationLayout;