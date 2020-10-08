import React from "react";
import {Container} from "react-bootstrap";
import TopMenu from "../global/navigation/TopMenu";
import {PROFILE_ROUTE} from "../global/constants/routes";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ProfileDetails from "../modules/accountDetails/views/ProfileDetails";
import AccountActivities from "../modules/accountDetails/views/AccountActivities";

class ProfileLayout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="layout">
                    <div className="layout-header">
                        <Container>
                            <TopMenu active={PROFILE_ROUTE}/>
                        </Container>
                    </div>
                    <div className="layout-content">
                        <Container>
                            <div className="layout-content__title">
                                <h3>Profile layout</h3>
                            </div>
                            <div className="layout-content__body home">
                                <div className="layout-content__body-item">
                                    <ProfileDetails/>
                                </div>
                                <div className="layout-content__body-item account_activities">
                                    <AccountActivities/>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(null, mapDispatchToProps)(ProfileLayout);