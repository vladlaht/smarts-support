import React from "react";
import {Container} from "react-bootstrap";
import TopMenu from "../global/navigation/TopMenu";
import {HOME_ROUTE} from "../global/constants/routes";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class HomeLayout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="layout">
                    <div className="layout-header">
                        <Container>
                            <TopMenu active={HOME_ROUTE}/>
                        </Container>
                    </div>
                    <div className="layout-content">
                        <Container>
                            <div className="layout-content__title">
                                <h3>Home layout</h3>
                            </div>
                            <div className="layout-content__body">
                                Ticket Table
                            </div>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(null, mapDispatchToProps)(HomeLayout);