import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class AuthorizationLayout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="authorization-layout">
                    <div className="authorization-form">
                        <div className="auth-head">
                            <img className="auth-logo" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo"/>
                        </div>
                        <div className="auth-body">
                            <div className="auth-item">
                                <label className="auth-label">Email</label>
                                <input type="text" className="auth-input" required/>
                                <span className="focus-border"> </span>
                            </div>
                            <div className="auth-item">
                                <label className="auth-label">Password</label>
                                <input type="password" className="auth-input" required/>
                                <span className="focus-border"> </span>
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
                            <div className="sign-up">
                                Don't have Smarts account? <a href="/">Sign up</a>
                            </div>
                            <div className="forgot-pass">
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