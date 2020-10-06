import React from "react";
import AuthForm from "../modules/authorization/views/Forms/AuthForm";
import RegistrationForm from "../modules/authorization/views/Forms/RegistrationForm";

class AuthorizationLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="auth">
                    <div className="auth-form">
                        <div className="auth-form-header">
                            <img className="auth-form-header__logo" src={`${process.env.PUBLIC_URL}/img/full_logo.png`}
                                 alt="logo"/>
                        </div>
                        {this.props.hasOwnProperty("authForm") ? <AuthForm/> : <RegistrationForm/>}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AuthorizationLayout;