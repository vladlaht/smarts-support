import React from "react";
import {Link} from "react-router-dom";

class AuthForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="auth-form-body">
                    <div className="auth-form-body__item">
                        <label className="auth-form-body__item-label">Email</label>
                        <input type="text" className="auth-form-body__item-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-form-body__item">
                        <label className="auth-form-body__item-label">Password</label>
                        <input type="password" className="auth-form-body__item-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="custom-control custom-checkbox ">
                        <input type="checkbox" className="custom-control-input" id="auth-form-checkbox"/>
                        <label className="custom-control-label" htmlFor="auth-form-checkbox">Remember me</label>
                    </div>
                </div>
                <div className="auth-form-footer">
                    <Link to="/">
                        <button className="smarts-button btn-sign-in">Sign in</button>
                    </Link>
                    <span>Don't have an account? <Link to={"/register"}>Sign up</Link></span>
                    <span>Forgot <Link to={"/"}>Password?</Link></span>
                </div>
            </React.Fragment>
        )
    }
}

export default AuthForm;