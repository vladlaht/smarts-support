import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {SORT_TICKET_ACTION} from "../../constants/ReducerConstants";
import {changeField} from "../../../../global/actions/StandardActions";
import ReactPaginate from "react-paginate";

class TicketTablePagination extends Component {

    pageChangeHandler = ({selected}) => {
        this.props.changeField(SORT_TICKET_ACTION, "currentPage", selected);
    };

    render() {
        const {ticketsData} = this.props;
        const pageSize = 10;
        const pageCount = ticketsData.data.length / pageSize;
        return (
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.pageChangeHandler}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage={ticketsData.currentPage}
                pageClassName={"smarts-page-item"}
                pageLinkClassName={"smarts-page-link"}
                nextClassName={"smarts-page-item"}
                previousClassName={"smarts-page-item"}
                nextLinkClassName={"smarts-page-link"}
                previousLinkClassName={"smarts-page-link"}
            />
        )
    }
}

const mapStateToProps = state => ({
        ticketsData: state.ticketsData
    }
)

const mapDispatchToProps = dispatch => (bindActionCreators({
    changeField
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TicketTablePagination);