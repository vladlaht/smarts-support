import React from "react";
import {Link} from "react-router-dom";

class RegistrationForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="auth-form-body">
                    <div className="auth-form-body__item">
                        <label className="auth-form-body__item-label">First name</label>
                        <input type="text" className="auth-form-body__item-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-form-body__item">
                        <label className="auth-form-body__item-label">Last name</label>
                        <input type="text" className="auth-form-body__item-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-form-body__item">
                        <label className="auth-form-body__item-label">Email</label>
                        <input type="email" className="auth-form-body__item-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                    <div className="auth-form-body__item">
                        <label className="auth-form-body__item-label">Password</label>
                        <input type="password" className="auth-form-body__item-input" required/>
                        <span className="focus-border"> </span>
                    </div>
                </div>
                <div className="auth-form-footer">
                    <Link to="/authorize">
                        <button className="btn smarts-button btn-sign-in">
                            Sign up
                        </button>
                    </Link>
                    <span>Already have an account ? <Link to={"/authorize"}>Sign up</Link></span>
                    <span>Forgot <Link to={"/"}>Password?</Link></span>
                </div>
            </React.Fragment>
        )
    }
}

export default RegistrationForm;