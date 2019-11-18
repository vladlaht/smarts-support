import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import {appStore} from "./global/configurations/app-store";
import {createBrowserHistory} from "history";
import "./css/App.css";
import "./css/Font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Router, Switch} from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import TicketsLayout from "./layouts/TicketsLayout";
import ClientsLayout from "./layouts/ClientsLayout";
import InvoicesLayout from "./layouts/InvoicesLayout";
import TicketDetailsLayout from "./layouts/TicketDetailsLayout";
import AuthorizationLayout from "./layouts/AuthorizationLayout";

export const history = createBrowserHistory();

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Provider store={appStore}>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={AuthorizationLayout}/>
                            <Route exact path="/home" component={HomeLayout}/>
                            <Route exact path="/tickets" component={TicketsLayout}/>
                            <Route exact path="/clients" component={ClientsLayout}/>
                            <Route exact path="/invoices" component={InvoicesLayout}/>
                            <Route exact path="/invoices/details" component={TicketDetailsLayout}/>
                        </Switch>
                    </Router>
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
