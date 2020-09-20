import React from "react";
import {Container} from "react-bootstrap";
import Navigation from "../global/navigation/Navigation";
import {INVOICES_ROUTE} from "../global/constants/routes";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class InvoicesLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="layout">
                    <div className="layout-header">
                        <Container>
                            <Navigation activeRoute={INVOICES_ROUTE}/>
                        </Container>
                    </div>
                    <div className="layout-content">
                        <Container>
                            <div className="layout-content__title">
                                <h3>Invoices layout</h3>
                            </div>
                            <div className="layout-content__body">
                                Table of invoices
                            </div>
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(null, mapDispatchToProps)(InvoicesLayout);