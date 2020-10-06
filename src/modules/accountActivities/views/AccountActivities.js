import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class AccountActivities extends React.Component {

    render() {
        const {account} = this.props;
        return (
            <div className="activities">
                <h6 className="activities-header">Latest activities</h6>
                <div className="activities-body">
                    <div className="activities-body-item">
                        <div className="activities-body-item__date">16.08.2019 16:56:42</div>
                        <div className="activities-body-item__text">
                            <span className="activities-body-item__text-username">Vladislav Lahtarin</span>
                            <span className="activities-body-item__text-action">Added a comment to the ticket nr. #581d171e89e81e1</span>
                        </div>
                        <span className="activities-body-item__circle"> </span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        account: state.accountCard,
    }
);

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(AccountActivities);
