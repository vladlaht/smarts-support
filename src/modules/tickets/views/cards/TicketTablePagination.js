import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {TICKET_TABLE_ACTION} from "../../constants/ReducerConstants";
import {changeField} from "../../../../global/actions/StandardActions";
import ReactPaginate from "react-paginate";

class TicketTablePagination extends Component {

    pageChangeHandler = ({selected}) => {
        this.props.changeField(TICKET_TABLE_ACTION, "currentPage", selected);
    };

    render() {
        return (
            <React.Fragment>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.props.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.pageChangeHandler}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    forcePage={this.props.ticketsTableData.currentPage}
                    pageClassName={"smarts-page-item"}
                    pageLinkClassName={"smarts-page-link"}
                    nextClassName={"smarts-page-item"}
                    previousClassName={"smarts-page-item"}
                    nextLinkClassName={"smarts-page-link"}
                    previousLinkClassName={"smarts-page-link"}
                />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField
}, dispatch));

export default connect(null, mapDispatchToProps)(TicketTablePagination);